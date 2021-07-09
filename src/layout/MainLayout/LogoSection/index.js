import React from 'react';
import {Link} from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom';

import config from './../../../config';

import logo from './../../../assets/images/logo.png';

const LogoSection = () => {

    return (
        <React.Fragment>
            <Link component={RouterLink} to={config.defaultPath}>
                <img src={logo} alt="Allas" width="180" />
            </Link>
        </React.Fragment>
    );
};

export default LogoSection;
