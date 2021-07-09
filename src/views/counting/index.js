import React, { useContext, useState, useEffect } from 'react';
import {Grid} from '@material-ui/core';

import {gridSpacing} from '../../store/constant';
import PedsCard from '../../ui-component/cards/PedsCard';
import BikeCard from '../../ui-component/cards/BikeCard';
import CarsCard from '../../ui-component/cards/CarsCard';
import CamerasCard from '../../ui-component/cards/CamerasCard';
import MicrophoneCard from '../../ui-component/cards/MicrophoneCard';
import ChartCard from '../../ui-component/cards/ChartCard';
import AlertsCard from '../../ui-component/cards/AlertsCard';
import Map from './map.js';

import { SocketContext} from '../../context/socket';


const Counting = () => {
    const socket = useContext(SocketContext);
    const [peds,setPeds] = useState(0);
    const [bikes,setBikes] = useState(0);
    const [cars,setCars] = useState(0);
    useEffect(() => {
        socket.on('dashboard', data => {
            setPeds(data.message.peds);
            setBikes(data.message.bikes);
            setCars(data.message.cars);
        })
    })
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <PedsCard peds={peds} />
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <BikeCard bikes={bikes} />
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <CarsCard cars={cars} />
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

export default Counting;
