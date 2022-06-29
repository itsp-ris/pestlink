import React from 'react';

function MenuToggle() {
    return (
        <>  
            <input id="toggle" type="checkbox" />
            <label htmlFor="toggle"><div className="hexagon" id="menu" /></label>
        </>
    );
}

export default MenuToggle;