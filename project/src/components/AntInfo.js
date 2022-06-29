import React, { useEffect } from 'react';
import ContactForm from './ContactForm';
import addInfoPageListener from './AddInfoPageListener';

function AntInfo() {
    useEffect(() => {
        addInfoPageListener();
    }, []);
    return (
        <>
            <img className="bg" src="../%PUBLIC_URL%/../ant.png" />
            
            <div className="details">
                <div className="desc-wrapper active">
                    <h1>Ant</h1>
                    <p>Ants are a social insects that live together. There are about 10,000 species of ants but only 40 species are considered as pests. Some of the species that considered as pest are Black house ant (Ochetellus), Fire ant (Solenopsis spp), Ghost ant (Tapinoma melanocephalum), Crazy ants (Paratrechina longicornis), Pharaoh’s ant (Monomorium pharaonsis) etc. In Malaysia, ants are among the most common pests in the home environment.</p>
                </div>
                
                <div className="grid-wrapper">
                    <div className="g1">
                        <h2>Treatment</h2>
                        <ul>
                            <li>Direct treatment / Insecticide residuals.</li>
                            <li>Gelling.</li>
                            <li>Sanitation and eliminating standing water.</li>
                            <li>Keep tree branches and other plants cut back from the house. Sometimes pests use these branches to get into your home.</li>
                            <li>Make sure that there are no cracks or little openings around the bottom of your house. Sometimes pests use these to get into your home.</li>
                            <li>Make sure that firewood and building materials are not stored next to your home - pests like to build nests in stacks of wood.</li>
                        </ul>
                        <div className="action-button">
                            <span>Free Inspection</span>
                            <span>Close</span>
                        </div>
                        <ContactForm />
                    </div>

                    <div className="g2">
                        <h2>Find Them At</h2>
                        <ul>
                            <li>Residential structures and buildings.</li>
                            <li>Back wall, in furniture and outside area (garden).</li>
                            <li>Under the rocks, the boards surfaces, and under the cracks of the building.</li>
                            <li>Around the sink and a damp kitchen.</li>
                        </ul>
                    </div>
                    <div className="g3"></div>
                </div>
            </div>

            <div id="show" />
        </>
    );
}

export default AntInfo;