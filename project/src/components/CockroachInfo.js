import React, { useEffect } from 'react';
import ContactForm from './ContactForm';
import addInfoPageListener from './AddInfoPageListener';

function CockroachInfo() {
    useEffect(() => {
        addInfoPageListener();
    }, []);

    return (
        <>
            <img className="bg" src="../%PUBLIC_URL%/../cockroach.png" />

            <div className="details">
                <div className="desc-wrapper active">
                    <h1>Cockroach</h1>
                    <p>Cockroaches are insects of the Order Blattodea. There are about 4000 species of cockroaches but only a handful are considered as pest. In Malaysia, there are two species of cockroaches considered to be a home-dwelling commercial pest, American cockroach (Periplaneta americana) and German cockroach (Blattella germanica).</p>
                </div>
                
                <div className="grid-wrapper">
                    <div className="g1">
                        <h2>Treatment</h2>
                        <ul>
                            <li>Sanitation - Reduce water and food sources by cleaning food and waste debris and repair leak water pipes.</li>
                            <li>Residual insecticides - Cockroaches will be exposed to residual insecticides when they travel on treated surfaces.</li>
                            <li>Gel traps - Placing insecticides in limited quantities in areas where cockroaches will go out to find food.</li>
                            <li>Dust insecticides - Used in places that cannot be in contact with water because it can cause toxic effects and which may cause damage to electrical appliances.</li>
                            <li>Biological control - Using fungal and round worm agents.</li>
                        </ul>
                        <div className="action-button">
                            <span>Free Inspection</span>
                            <span>Close</span>
                        </div>
                        <ContactForm />
                    </div>

                    <div className="g2">
                        <h2>Detection and Monitoring</h2>
                        <ul>
                            <li>Visual count.</li>
                            <li>Search and calculate: with the help of non-residual milled agents, cockroaches are forced to run from their hiding place.</li>
                            <li>Trap: Provide useful information about the number of cockroaches and levels based on the trap. Also shows the direction of the usual cockroach movement.</li>
                        </ul>
                    </div>
                    <div className="g3">
                        <h2>Find Them At</h2>
                        <ul>
                            <li>Sewers and drains.</li>
                            <li>Food storage and waste disposal site.</li>
                            <li>Hidden areas (furniture, wardrobe, drawer, and cabinet).</li>
                            <li>Basements.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="show" />
        </>
    );
}

export default CockroachInfo;