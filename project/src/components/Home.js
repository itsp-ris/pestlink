import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Home.scss';
import MenuToggle from './MenuToggle';
import HeaderMenu from './HeaderMenu';
import ContactForm from './ContactForm';
import hideMenu from './HideMenu';

gsap.registerPlugin(ScrollTrigger);

function Home() {
    let contentRefs = useRef();
    contentRefs.current = [];

    let addContentRefs = el => {
        if (el && !contentRefs.current.includes(el)) {
            contentRefs.current.push(el);
        }
    };

    let scrollAnimation = () => {
        let animation = {
            duration: 0.8,
            x: 0
        }

        contentRefs.current.forEach((el, i) => {
            gsap.to(el, {
                ...animation,
                scrollTrigger: {
                id: `${i+1}`,
                trigger: el,
                start: 'top center+=100',
                end: 'bottom center',
                toggleActions: 'restart none none reset'
            }});
        });
    };

    let animateCounters = () => {
        let content = document.getElementsByClassName('content')[0];
        let counter = document.getElementById('expCount');
        gsap.to(counter, {
            trigger: content,
            snap: "innerText",
            innerText: 30,
            duration: 1,
            delay: 0.8
        });
    };

    let animateText = () => {
        let t1 = gsap.timeline({duration: 2, repeat: -1, repeatDelay: 2});
        t1.to(".hseSummary-1", {className: "highlight"});
        t1.to(".hseSummary-2", {className: "highlight"});
        t1.to(".hseSummary-3", {className: "highlight"});
        t1.to(".hseSummary-4", {className: "highlight"});
        t1.to(".hseSummary-5", {className: "highlight"});
        t1.to(".hseSummary-6", {className: "highlight"});
    };

    useEffect(() => {
        scrollAnimation();
        animateCounters();
        animateText();

        if (window.innerWidth < 1300) {
            let pages = document.getElementsByClassName("page");
            for (let i = 0; i < pages.length; i++) {
                pages[i].addEventListener("click", (e) => {
                    // e.preventDefault();
                    // e.stopPropagation();
                    hideMenu();
                });
            };
        };
    }, []);

    return(
        <>
            <MenuToggle />

            <div className="container">
                <div className="section" id="About">
                    <img src="../../%PUBLIC_URL%/../slide1.jpg" ref={addContentRefs}/>
                    <div className="content" ref={addContentRefs}>
                        {/* <div className="hexagon" /> */}
                        <h1><span id="expCount" data-target="30">0</span>+ years</h1>
                        <h2>of combined experience</h2>
                        <p>
                            Trust us to rid your pest.
                            <br /><br />
                            Trust us to clean your space.
                        </p>
                    </div>
                </div>

                <div className="section" id="Services">
                <ul className="honeycomb" ref={addContentRefs}>
                        <li className="honeycomb-cell">
                            <img src="./ds.png" />
                            <div className="honeycomb-cell-label">Disinfection Spraying</div>    
                        </li>
                        <li className="honeycomb-cell">
                            <img src="./gp-backup.png" />
                            <div className="honeycomb-cell-label">General Pest Control</div>
                        </li>
                        <li className="honeycomb-cell">
                            <img src="./newlogo.png" />
                            <div className="honeycomb-cell-label">Proven Termite Baiting</div>
                        </li>
                        <li className="honeycomb-cell">
                            <img src="./ppc.png" />
                            <div className="honeycomb-cell-label">Pre-/Post-Construction Anti Termite</div>
                        </li>
                        <li className="honeycomb-cell">
                            <img src="./fum.png" />
                            <div className="honeycomb-cell-label">Fumigation</div>
                        </li>
                        <li className="honeycomb-cell">
                            <img src="./offshore.png" />
                            <div className="honeycomb-cell-label">Offshore Pest Control</div>
                        </li>
                        <li className="honeycomb-cell">
                            <img src="./gc.png" />
                            <div className="honeycomb-cell-label">General Cleaning</div>
                        </li>
                        <li className="honeycomb-cell">
                            <img src="./outdoor.png" />
                            <div className="honeycomb-cell-label">Outdoor Trees/Flower Trimming</div>
                        </li>
                        <li className="honeycomb-cell placeholder">
                        </li>
                    </ul>
                </div>
                
                <div className="section" id="Policy">
                    <img src="./%PUBLIC_URL%/../policy.jpg" ref={addContentRefs}/>
                    <div className="content" ref={addContentRefs}>
                        {/* <div className="hexagon" /> */}
                        <h2>Health, Safety & Environment (HSE) Policy</h2>
                        <p>
                            <span className="hseSummary-1">| Health and safety of those involved and impact on the environment are taken into consideration.</span>
                            <br /><br />
                            <span className="hseSummary-2">| Appropriate risk control measures are in place.</span>
                            <br /><br />
                            <span className="hseSummary-3">| Trained employees on work hazards and control measures.</span>
                            <br /><br />
                            <span className="hseSummary-4">| Application of the latest technology in the prevention of accidents and preservation of the environment.</span>
                            <br /><br />
                            <span className="hseSummary-5">| Proactive implementation in identifying, eliminating or minimizing accidents and environment exposures while taking into account technical, practical, social, economic and public-policy considerations.</span>
                            <br /><br />
                            <span className="hseSummary-6">| Independent audits and management review for verification of HSE status and the level of compliance.</span>
                        </p>
                    </div>
                </div>
                
                <div className="section" id="Pest">
                    <ul className="honeycomb" ref={addContentRefs}>
                        <li className="honeycomb-cell">
                            <NavLink to="/pest/ant">
                                <img src="./ant.png" />
                                <div className="honeycomb-cell-label">Ant</div>
                            </NavLink>
                            </li>
                        <li className="honeycomb-cell">
                            <NavLink to="/pest/bedbug">
                                <img src="./bb.png" />
                                <div className="honeycomb-cell-label">Bed Bug</div>
                            </NavLink>
                        </li>
                        <li className="honeycomb-cell">
                            <NavLink to="/pest/cockroach">
                                <img src="./cockroach.png" />
                                <div className="honeycomb-cell-label">Cockroach</div>
                            </NavLink>
                        </li>
                        <li className="honeycomb-cell">
                            <NavLink to="/pest/mosquito">
                                <img src="./mosquito.png" />
                                <div className="honeycomb-cell-label">Mosquito</div>
                            </NavLink>
                        </li>
                        <li className="honeycomb-cell">
                            <NavLink to="/pest/rodent">
                                <img src="./rat.png" />
                                <div className="honeycomb-cell-label">Rodent</div>
                            </NavLink>
                        </li>
                        <li className="honeycomb-cell">
                            <NavLink to="/pest/storagepest">
                                <img src="./sp.png" />
                                <div className="honeycomb-cell-label">Storage Pest</div>
                            </NavLink>
                        </li>
                        <li className="honeycomb-cell">
                            <NavLink to="/pest/termite">
                                <img src="./termite.png" />
                                <div className="honeycomb-cell-label">Termite</div>
                            </NavLink>
                        </li>
                        <li className="honeycomb-cell placeholder">
                        </li>
                        <li className="honeycomb-cell placeholder">
                        </li>
                    </ul>
                </div>
                
                <div className="section" id="Contact">
                    <ContactForm />
                    <div className="table" ref={addContentRefs}>
                        <div>
                            <h2>Main</h2>
                            <p>
                                Lot SH-2-5, 2nd floor, Block A, Padimas Point,
                                <br /> 
                                Jalan Pintas Penampang, 
                                <br />
                                88300 Kota Kinabalu, Sabah.
                                <br />
                                <b>Tel:</b> 088 - 714 895 / 738 878
                                <br />
                                <b>Tel:</b> 012 - 828 2182 (Ms Liew)
                                <br />
                                <b>Fax:</b> 088 - 714 914
                            </p>
                        </div>
                        <div>
                            <h2>Tawau</h2>
                            <p>
                                TB 12874 Taman Sejati, 
                                <br /> 
                                Jalan Kuhara, 
                                <br />
                                91000 Tawau, Sabah.
                                <br />
                                <b>Tel:</b> 017 - 804 7277 (Mr Johamka)
                            </p>
                        </div>
                        <div>
                            <h2>Sandakan</h2>
                            <p>
                                Lot 21, 1st floor, Bandar Sibuga Jaya 2, 
                                <br />
                                Batu 8 Jalan Labuk Sandakan, 
                                <br />
                                9000 Sandakan, Sabah.
                                <br />
                                <b>Tel:</b> 012 - 802 8899 (Mr Gary)
                            </p>
                        </div>
                    </div>
                </div> 
            </div>

            <HeaderMenu />
        </>
    );
}

export default Home;