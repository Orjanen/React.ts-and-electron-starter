import React from 'react';
import {Menu} from "semantic-ui-react";
import {history} from "../../index";

const Navbar = () => {
    return (
        <Menu>
            <Menu.Item
                name='Home'
                onClick={() => history.push('/')}
            >
                Home
            </Menu.Item>

            <Menu.Item
                name='Test'
                onClick={() => history.push('/test')}
            >
                Test
            </Menu.Item>
        </Menu>
    );
}

export default Navbar;