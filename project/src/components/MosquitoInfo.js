import React, { useEffect } from 'react';
import ContactForm from './ContactForm';
import addInfoPageListener from './AddInfoPageListener';

function MosquitoInfo() {
    useEffect(() => {
        addInfoPageListener();
    }, []);

    return (
        <>
            <img className="bg" src="../%PUBLIC_URL%/../mosquito.png" />

            <div className="details">
                `<div className="desc-wrapper active">
                    <h1>Mosquito</h1>
                    <p>Mosquitoes are pests that feed on human blood and act as vectors for transmitting diseases. Mosquitoes are insects that can be found anywhere in the forest, city, indoors, livestock farms etc. There are about 3450 species and subspecies of mosquitoes that all belong to 38 genus. All of which belong to the Culicidae family, divided into subfamilies: Anophelinae and Culcinae are among the commonly known. Anopheles contains the mosquitoes that transmit malarial parasites to humans and other animals. Some species of Anopheles also transmit microfilariae and arboviruses. Culcinae include the Aedes sp. that can transmit dengue virus. Only female mosquitoes feed on blood. Male mosquitoes feed on plant nectars. They can develop from egg to adult in 10 to 14 days. They are mostly active from dusk to dawn and will fly up to 14 miles in search for a food source.</p>
                </div>
                
                <div className="grid-wrapper">
                    <div className="g1">
                        <h2>Treatment</h2>
                        <ul>
                            <li>Reducing resources of habitat and environmental management.</li>
                            <li>Biological control - Using Bacillus thuringiensis and Bacillus sphaericus which contains spores that produce toxins that specifically target and only affect the larvae of the mosquito. Introduce mosquito-eating fish such as gambusia, green sunfish, bluegills and minnows to standing water.</li>
                            <li>Chemical Control - The use of insecticides and Insect Growth Regulators (IGR which can be divided into juvenile hormones and chitin synthetic inhibitors).</li>
                            <li>Physical attachment and self-protection - mosquito nets treated with insecticides, insecticides (aerosols, electric mats, and liquid evaporators), mosquito repellents and body insect repellents.</li>
                            <li>Integrated Pest Management.</li>
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
                            <li>In the reservoir areas that become the breeding ground.</li>
                            <li>Brackish coastal water to freshwater inland areas, especially mangroves, paddy fields, trenches, puddles, and ponds.</li>
                            <li>Stagnant water.</li>
                        </ul>
                    </div>
                    <div className="g3"></div>
                </div>
            </div>

            <div id="show" />
        </>
    );
}

export default MosquitoInfo;