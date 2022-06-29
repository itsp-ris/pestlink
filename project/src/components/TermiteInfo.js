import React, { useEffect } from 'react';
import ContactForm from './ContactForm';
import addInfoPageListener from './AddInfoPageListener';

function TermiteInfo() {
    useEffect(() => {
        addInfoPageListener();
    }, []);

    return (
        <>
            <img className="bg" src="../%PUBLIC_URL%/../termite.png" />

            <div className="details">
                <div className="desc-wrapper active">
                    <h1>Termite</h1>
                    <p>Termites are insects from the Order Isoptera that have a high social life. Termites work in groups known as colonies. In a colony, there are queen, king, workers, soldiers, and termite swarmers. There are several types of termites such as dry wood termite, wet wood termite, mounds termite and termites bearing soil. In Malaysia, species of destructive termite that are commonly found are Captotermes species and other species found are from Macrotermes, Globitermes, Odontotermes, and Schedorhinotermes. Subterranean termites need contact with the soil to survive and live underground. They can build tunnels through cracks in concrete. Subterranean termites are by far the most destructive species. They can collapse a building entirely, meaning possible financial ruin for a homeowner. The hard, saw-toothed jaws of termites work like shears and are able to bite off extremely small fragments of wood, one piece at a time.</p>
                </div>
                
                <div className="grid-wrapper">
                    <div className="g1">
                        <h2>Treatment</h2>
                        <ul>
                            <li>Baiting Treatment: Feeding with slow-acting toxicity; Propagate toxins to the whole colony through the process of eating together that exist in the termite society.</li>
                            <li>Pesticides - Used to protect buildings, wooden pillars and trees.</li>
                            <li>Durable materials - Used to treat wood so that the wood is no longer taste good to be eaten by the termites.</li>
                            <li>Fumigation - which is usually used to eliminate termite attacks in timber to be exported or for local attack of wood-based termites.</li>
                            <li>Mechanical & Physical Approach - In Australia and America, restrictions such as stainless steel and gravel networks have been tested and commercialized (environmentally friendly).</li>
                            <li>Biological control using pathogenic fungi.</li>
                            <li>Avoid water accumulation near your home's foundation - Reduce humidity in crawl spaces with proper ventilation.</li>
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
                            <li>The damage done by the termites.</li>
                            <li>Side effects of their activities such as soil and shingles.</li>
                            <li>The woods have hollow sound when tapped with an object.</li>
                            <li>Termites create distinct 'clicking' sounds as a warning when its area is disturbed.</li>
                        </ul>
                    </div>
                    <div className="g3">
                        <h2>Find Them At</h2>
                        <ul>
                            <li>House made of wood and leakage inside the building.</li>
                            <li>Wooden furniture; likely the older/water-damaged furniture.</li>
                            <li>Areas with high humidity.</li>
                            <li>Areas constructed in former forestry.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="show" />
        </>
    );
}

export default TermiteInfo;