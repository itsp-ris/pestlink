import React, { useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import './InfoPage.scss';
import Home from './Home';
import AntInfo from './AntInfo';
import BedBugInfo from './BedBugInfo'
import FlyInfo from './FlyInfo'
import MosquitoInfo from './MosquitoInfo'
import RodentInfo from './RodentInfo'
import CockroachInfo from './CockroachInfo'
import StoragePestInfo from './StoragePestInfo'
import TermiteInfo from './TermiteInfo';
import PestNav from './PestNav';
import MenuToggle from './MenuToggle';
import hideMenu from './HideMenu';

function PestPage() {
    const match = useRouteMatch("/pest");

    useEffect(() => {
        if (window.innerWidth < 1300) {
            let pages = document.getElementsByClassName("NavLink");
            for (let i = 0; i < pages.length; i++) {
                pages[i].addEventListener("click", (e) => {
                    // e.preventDefault();
                    // e.stopPropagation();
                    hideMenu();
                });
            };
        };
    }, []);
    return (
        <>
            <MenuToggle />
            <div className="info-wrapper">
                <Switch>
                    <Route path="/home" component={Home} exact={true} />
                    <Route path={`${match.url}/ant`} render={() => <AntInfo />} />
                    <Route path={`${match.url}/bedbug`} render={() => <BedBugInfo />} />
                    <Route path={`${match.url}/fly`} render={() => <FlyInfo />} />
                    <Route path={`${match.url}/mosquito`} render={() => <MosquitoInfo />} />
                    <Route path={`${match.url}/rodent`} render={() => <RodentInfo />} />
                    <Route path={`${match.url}/cockroach`} render={() => <CockroachInfo />} />
                    <Route path={`${match.url}/storagepest`} render={() => <StoragePestInfo />} />
                    <Route path={`${match.url}/termite`} render={() => <TermiteInfo />} />
                </Switch>
            </div>
            <PestNav />
        </>
    )
}

export default PestPage;
