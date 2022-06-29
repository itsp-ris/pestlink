import React, { useEffect } from 'react';
import ContactForm from './ContactForm';
import addInfoPageListener from './AddInfoPageListener';

function BedBugInfo() {
    useEffect(() => {
        addInfoPageListener();
    }, []);
    
    return (
        <>
            <img className="bg" src="../%PUBLIC_URL%/../bb.png" />

            <div className="details">
                <div className="desc-wrapper active">
                    <h1>Bed Bug</h1>
                    <p>Bed bugs is an annoying insect that disturb humans because of their bites and their habit of defecate while sucking blood. There are two species of bed bugs that bite humans - tropical bugs (Cimex hemipterus) in tropical climates and common bugs (Cimex lectularius) in temperate climates.</p>
                </div>
                
                <div className="grid-wrapper">
                    <div className="g1">
                        <h2>Treatment</h2>
                        <ul>
                            <li>Cleaning and reducing the cause</li>
                            <li>Protection: Use of repellent materials; Mosquito-netting insect</li>
                            <li>Chemical: Insecticides debris; Fumigation</li>
                        </ul>
                        <div className="action-button">
                            <span>Free Inspection</span>
                            <span>Close</span>
                        </div>
                        <ContactForm />
                    </div>

                    <div className="g2">
                        <h2>Detection & Surveillance</h2>
                        <ul>
                            <li>Check places that may be the place for bed bugs breeding and see the existence of nymphs, eggs, and stools. The defecate look like tiny black dots on the walls, sheets, mattresses and so on.</li>
                            <li>By spraying insecticides containing piretoids from aerosol cans, mature bed bugs will feel irritated and come out from their hiding place.
                            </li>
                            <li>Bug-filled houses bring out a distinctive bed bugs smell.</li>
                        </ul>
                    </div>
                    <div className="g3">
                        <h2>Find Them At</h2>
                        <p>
                            In a dark and dry areas such as beds, mattresses, pillows, cracking on walls and floors, furniture, behind picture frame, wallpaper, etc.
                        </p>
                    </div>
                </div>
            </div>

            <div id="show" />
        </>
    );
}

export default BedBugInfo;