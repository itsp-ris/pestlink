import React, { useEffect } from 'react';
import ContactForm from './ContactForm';
import addInfoPageListener from './AddInfoPageListener';

function RodentInfo() {
    useEffect(() => {
        addInfoPageListener();
    }, []);
    
    return (
        <>
            <img className="bg" src="../%PUBLIC_URL%/../rat.png" />

            <div className="details">
                <div className="desc-wrapper active">
                    <h1>Rodent</h1>
                    <p>Rodents often cause great problems to humans and are known as the most dangerous bringers of contagions. This is due to rodents bringing various germs and diseases. The most common species found in Malaysia are Norwegian rats (Rattus norvegicus), roof rats (Rattus rattus), and home mice (Mus musculus).</p>
                </div>
                
                <div className="grid-wrapper">
                    <div className="g1">
                        <h2>Treatment</h2>
                        <ul>
                            <li>Sanitation - Environmental management by cleaning up food waste and disposing of garbage.</li>
                            <li>Catching and trapping.</li>
                            <li>Physical and prevention control - seal up any holes or cracks larger than a quarter. Remove sources of moisture and harborage.</li>
                            <li>Chemical - bait form, granules, candles, liquids, touch powder, and toxic gases (fumigation).</li>
                        </ul>
                        <div className="action-button">
                            <span>Free Inspection</span>
                            <span>Close</span>
                        </div>
                        <ContactForm />
                    </div>

                    <div className="g2">
                        <h2>Detection and Supervision</h2>
                        <ul>
                            <li>Feces.</li>
                            <li>Greasy and dark marking trails.</li>
                            <li>Footsteps and trails.</li>
                            <li>Signs of damage.</li>
                            <li>Holes and nests.</li>
                        </ul>
                    </div>
                    <div className="g3">
                        <h2>Find Them At</h2>
                        <ul>
                            <li>Norwegian rats live in the beaches, moving along the river from one settlement to another. Rodents can breed at garbage dumps and sewers, as well as the basement and attic.</li>
                            <li>Malaysian house mice can be found in buildings especially in roof areas.</li>
                            <li>The habitat of a house rats such as Polynesian rats (Rattus exulans) is commonly found in villages and in farms.</li>
                            <li>House Shrew in Malaysia (Suncus murinus) can be found in trenches, home gardens, and outdoors.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="show" />
        </>
    );
}

export default RodentInfo;