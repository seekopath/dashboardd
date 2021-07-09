import React from 'react';
import {Grid} from '@material-ui/core';

import {gridSpacing} from '../../store/constant';
import SubCard from '../../ui-component/cards/SubCard';


const Safety = () => {
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <SubCard />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Safety;
