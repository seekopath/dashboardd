import React, { useContext, useState, useEffect } from 'react';
import {Grid} from '@material-ui/core';

import {gridSpacing} from '../../store/constant';

import CamerasCard from '../../ui-component/cards/CamerasCard';
import MicrophoneCard from '../../ui-component/cards/MicrophoneCard';
import ChartCard from '../../ui-component/cards/ChartCard';
import AlertsCard from '../../ui-component/cards/AlertsCard';
import PM2Card from '../../ui-component/cards/PM2Card';
import CO2Card from '../../ui-component/cards/CO2Card';
import TempCard from '../../ui-component/cards/TempCard';
import Map from './map';

import { SocketContext} from '../../context/socket';

const Environment = () => {
    const socket = useContext(SocketContext);

    const [pm,setPm] = useState(0);
    const [cotwo,setCotwo] = useState(0);
    const [temp,setTemp] = useState(0);
    useEffect(() => {
        socket.on('dashboard', data => {

            setPm(data.message.pm);
            setCotwo(data.message.cotwo);
            setTemp(data.message.temp);
        })
    })
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <PM2Card pm={pm} />
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <CO2Card cotwo={cotwo} />
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <TempCard temp={temp} />
                    </Grid>
                    <Grid item lg={4} md={12} sm={12} xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <CamerasCard />
                            </Grid>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <MicrophoneCard />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} sm={12} md={8}>
                        <Map />
                    </Grid>
                    <Grid item xs={12} sm={12} md={8}>
                        <ChartCard />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <AlertsCard />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Environment;
