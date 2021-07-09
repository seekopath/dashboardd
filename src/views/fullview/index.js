import React from 'react';
import {Grid} from '@material-ui/core';

import {gridSpacing} from '../../store/constant';
import PedsCard from '../../ui-component/cards/PedsCard';
import BikeCard from '../../ui-component/cards/BikeCard';
import CarsCard from '../../ui-component/cards/CarsCard';
import CamerasCard from '../../ui-component/cards/CamerasCard';
import MicrophoneCard from '../../ui-component/cards/MicrophoneCard';
import ChartCard from '../../ui-component/cards/ChartCard';
import AlertsCard from '../../ui-component/cards/AlertsCard';
import PM2Card from '../../ui-component/cards/PM2Card';
import CO2Card from '../../ui-component/cards/CO2Card';
import TempCard from '../../ui-component/cards/TempCard';
import BandwidthUsageCard from '../../ui-component/cards/BandwidthUsageCard';
import ConnectedUsersCard from '../../ui-component/cards/ConnectedUsersCard';
import PacketLossCard from '../../ui-component/cards/PacketLossCard';
import Map from './map';


const Fullview = () => {
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Map />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Fullview;
