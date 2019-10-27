import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
    return (
        <Menu>
            <a className="menu-item" href="/">
                Home
            </a>
            <a className="menu-item" href="/favorite">
                Favorites Houses
            </a>
            <a className="menu-item" href="/income">
                Change Settings
            </a>
        </Menu>
    );
};