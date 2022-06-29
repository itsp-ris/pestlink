import React, { useEffect } from 'react';
import ContactForm from './ContactForm';
import addInfoPageListener from './AddInfoPageListener';

function FlyInfo() {
    useEffect(() => {
        addInfoPageListener();
    }, []);

    return (
        <>
            <img className="bg" src="../%PUBLIC_URL%/../fly.png" />

            <div className="details">
                <div className="desc-wrapper active">
                    <h1>Fly</h1>
                    <p>Flies are a common pests everywhere that can adapt to the humans environment even in modern and rapidly industrialized areas. The flies are classified in the Diptera order and belong to the Muscidea family. In Malaysia, species of flies commonly found are home flies (Musca domestica L.) which carry serious problems up to now. In addition, there are species of small house flies (Musca sorbens), green bottle flies (Chrysomya megacephala), black junk flies (Ophyra sp.), Brick flies (Lucilia cuprina), etc. that can be found either on high ground or on lower land especially in livestock farms, agricultural areas and garbage dumps. Adult house flies can grow to one-quarter of an inch long and usually live between 15 and 25 days.</p>
                </div>
                
                <div className="grid-wrapper">
                    <div className="g1">
                        <h2>Treatment</h2>
                        <ul>
                            <li>Sanitation - Maintain cleanliness.</li>
                            <li>Breakout - Prevents the flies from entering the house by installing screen windows and doors, as well as beaded curtain.</li>
                            <li>Non-chemical steps - Use ultraviolet light traps, sticky paper traps, fly swaters, and fly swirling traps.</li>
                            <li>Chemical Control - Larvacides, chemical residue, introduction of toxic substances in place of flies, baiting, Spraying insecticides directly towards the flies and fumigation.</li>
                        </ul>
                        <div className="action-button">
                            <span>Free Inspection</span>
                            <span>Close</span>
                        </div>
                        <ContactForm />
                    </div>

                    <div className="g2">
                        <h2>Detection & Monitoring</h2>
                        <ul>
                            <li>Pre-control review; determines where, when and how to control the flies.</li>
                            <li>Post-control review; assess the effectiveness of regulatory measures.
                            </li>
                            <li>Assess the density of fly population: calculation of flies on existing surfaces; catching flies using traps; trap using sticky paper.</li>
                        </ul>
                    </div>
                    <div className="g3">
                        <h2>Find Them At</h2>
                        <p>
                            Around humans and animal waste, garbage dumps, organic fertilizer, sewage, decaying plant material, and food area.
                        </p>
                    </div>
                </div>
            </div>

            <div id="show" />
        </>
    );
}

export default FlyInfo;