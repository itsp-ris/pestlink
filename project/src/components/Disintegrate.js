import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import html2canvas from 'html2canvas';
import './Disintegrate.scss';
import Chance from 'chance';

const chance = Chance();
const canvasCount = 20;
const detail = 20;
const period = 2;
const milli = 1000;

function Disintegrate() {
    useEffect(() => {
        let target = document.getElementById("img");
        snap(target);
    }, []);

    let history = useHistory();
    let timeout = (65*canvasCount)+period+(period*milli*2);
    setTimeout(() => {history.push('home')}, timeout);
    return (
        <div className="disintegrate-wrapper" id="img">
            <img src="./%PUBLIC_URL%/../pest-vector.png" />
        </div>
    );
};

const animateTransform = (elem, sx, sy, angle, duration) => {
    elem.animate([
        {transform: "rotate(0) translate(0, 0)"},
        {transform: "rotate(" + angle + "deg) translate(" + sx + "px," + sy + "px)"}
    ], {
        duration: duration,
        easing: "ease-in"
    });
}

const newCanvasFromImageData = (canvasPixelArr, w, h) => {
    let canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    let  tempCtx = canvas.getContext("2d");
    tempCtx.putImageData(new ImageData(canvasPixelArr, w, h), 0, 0);
    return canvas;
}

const weightedRandomDistrib = (peak, count) => {
    let prob = [], seq = [];
    for (let i = 0; i < count; i++) {
        prob.push(Math.pow(count - Math.abs(peak - i), detail/2));
        seq.push(i);
    };
    return chance.weighted(seq, prob);
}


function snap(target) {
    html2canvas(target, {
        allowTaint: false,
        useCORS: true,
        backgroundColor: "transparent",
        scale: 1
    }).then(canvas => {
        /* returns a drawing context on the canvas to allow rendering */
        let ctx = canvas.getContext("2d");
        /* returns copies of pixel data from the canvas of size [canvas.width] x [canvas.height] */
        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        /* represent the pixel data in an array in rgba order */
        let pixelArr = imageData.data;
        let pixelArrLen = pixelArr.length
        
        /* create an array of with length size data array duplicates */
        let canvasPixelArr = Array.from({length: canvasCount}, _ => pixelArr.slice(0).fill(0));

        /** 
         * arrange pixels in canvasPixelArr according to priority 
         * priority decreases from pixels at the top of the image to the bottom of the image
         * priority calculated by weighted random distribution
        */
        for (let i = 0; i < pixelArrLen; i+=4) {
            let p = Math.floor((i/pixelArrLen) * canvasCount);
            let a = canvasPixelArr[weightedRandomDistrib(p, canvasCount)];

            a[i] = pixelArr[i];
            a[i + 1] = pixelArr[i + 1];
            a[i + 2] = pixelArr[i + 2];
            a[i + 3] = pixelArr[i + 3];
        }

        /*  divide pixels to [canvasCount] canvas and animate */
        for (let i = 0; i < canvasCount; i++) {
            let newCanvas = newCanvasFromImageData(canvasPixelArr[i], canvas.width, canvas.height);

            newCanvas.classList.add("dust");
            let d = period * milli;

            setTimeout(() => {
                animateTransform(newCanvas, 200, -100, chance.integer({
                    min: -10, max: 10
                }), d);

                newCanvas.classList.add("blur");
                
                setTimeout(() => {newCanvas.remove();}, d);
            }, 65*i+period);
            
            target.appendChild(newCanvas);
        }

        Array.from(target.querySelectorAll(":not(.dust)")).map(el => {
            el.classList.add("quick-fade");
        });
    }).catch(function(error) {console.log(error);});
};

// function triggerAnimation(e) {
//     let target = document.querySelector(e.target.dataset.target);
//     snap(target);
// };
    
export default Disintegrate;