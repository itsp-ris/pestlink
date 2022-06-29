import React, { useEffect } from 'react';
import ContactForm from './ContactForm';
import addInfoPageListener from './AddInfoPageListener';

function StoragePestInfo() {
    useEffect(() => {
        addInfoPageListener();
    }, []);

    return (
        <>
            <img className="bg" src="../%PUBLIC_URL%/../sp.png" />

            <div className="details">
                <div className="desc-wrapper active">
                    <h1>Storage Pest</h1>
                    <p>Common storage pest are commonl found in warehouses, processing plants, mills, etc. Most stored products insects originate from tropical and subtropical areas. As a result, they live and reproduce under the warm and humid condition.</p>
                </div>
                
                <div className="grid-wrapper">
                    <div className="g1">
                        <h2>Treatment</h2>
                        <ul>
                            <li>Residual spraying and fogging.</li>
                            <li>Fumigation.</li>
                        </ul>
                        <div className="action-button">
                            <span>Free Inspection</span>
                            <span>Close</span>
                        </div>
                        <ContactForm />
                    </div>

                    <div className="g2">
                        <h2>Detection and Surveillance</h2>
                        <ul>
                            <li>Using pheromone traps to monitor population.</li>
                            <li>Installing insect light trap.</li>
                        </ul>
                    </div>
                    <div className="g3">
                        <h2>Find Them At</h2>
                        <p>
                            These insects are mostly found in dried product such as grains, milled cereal products, spices, dried fruits, herbs, etc.
                        </p>
                    </div>
                </div>
            </div>

            <div id="show" />
        </>
    );
}

export default StoragePestInfo;