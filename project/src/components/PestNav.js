import React from 'react';
import { NavLink } from 'react-router-dom'

function PestNav() {
    return(
        <>
            <div className="side-nav">
                <ul>
                    <li><NavLink to="/" exact={true} className="NavLink">Back</NavLink></li>
                    <li><NavLink to="/pest/ant" exact={true} activeClassName="current" className="NavLink">Ant</NavLink></li>
                    <li><NavLink to="/pest/bedbug" exact={true} activeClassName="current" className="NavLink">Bed Bug</NavLink></li>
                    <li><NavLink to="/pest/fly" exact={true} activeClassName="current" className="NavLink">Fly</NavLink></li>
                    <li><NavLink to="/pest/mosquito" exact={true} activeClassName="current" className="NavLink">Mosquito</NavLink></li>
                    <li><NavLink to="/pest/rodent" exact={true} activeClassName="current" className="NavLink">Rodent</NavLink></li>
                    <li><NavLink to="/pest/cockroach" exact={true} activeClassName="current" className="NavLink">Cockroach</NavLink></li>
                    <li><NavLink to="/pest/storagepest" exact={true} activeClassName="current" className="NavLink">Storage Pest</NavLink></li>
                    <li><NavLink to="/pest/termite" exact={true} activeClassName="current" className="NavLink">Termite</NavLink></li>
                </ul>
            </div>
        </>
    );
}

export default PestNav;