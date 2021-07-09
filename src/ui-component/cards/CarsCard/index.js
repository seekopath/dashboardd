import React from 'react';
import {Avatar, Card, CardContent, Grid, makeStyles, Menu, MenuItem, Typography} from '@material-ui/core';

import IconCar from './../../../assets/images/icons/car.svg';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import Map from './map'

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: theme.palette.purple.main,
        color: '#fff',
        overflow: 'hidden',
        position: 'relative',
        '&:after': {
            content: '""',
            position: 'absolute',
            width: '210px',
            height: '210px',
            backgroundColor: theme.palette.purple.dark,
            borderRadius: '50%',
            top: '-85px',
            right: '-95px',
            [theme.breakpoints.down('xs')]: {
                top: '-105px',
                right: '-140px'
            }
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            width: '210px',
            height: '210px',
            backgroundColor: theme.palette.purple.dark,
            borderRadius: '50%',
            top: '-125px',
            right: '-15px',
            opacity: 0.7,
            [theme.breakpoints.down('xs')]: {
                top: '-155px',
                right: '-70px'
            }
        }
    },
    content: anchorEl => anchorEl ? {
        padding: '20px!important',
        display: 'flex',
        flexDirection: 'row'
    } : {
        padding: '20px!important',
    },
    avatar: {
        ...theme.typography.commonAvatar,
        ...theme.typography.largeAvatar,
        backgroundColor: theme.palette.purple.dark,
        color: '#fff',
        marginTop: '8px'
    },
    avatarRight: {
        ...theme.typography.commonAvatar,
        ...theme.typography.mediumAvatar,
        backgroundColor: theme.palette.purple.main,
        color: theme.palette.purple[200],
        zIndex: 1
    },
    cardHeading: anchorEl => anchorEl ? {
        fontSize: '1.675rem',
        fontWeight: 500,
        marginRight: '8px',
        marginTop: '18px',
        marginBottom: '8px'
    } : {
        fontSize: '2.125rem',
        fontWeight: 500,
        marginRight: '8px',
        marginTop: '18px',
        marginBottom: '8px'
    },
    subHeading: anchorEl => anchorEl ? {
        fontSize: '1rem',
        fontWeight: 500,
        color: theme.palette.purple[200]
    } : {
        fontSize: '1.5rem',
        fontWeight: 500,
        color: theme.palette.purple[200] 
    },
    avatarCricle: {
        ...theme.typography.smallAvatar,
        cursor: 'pointer',
        backgroundColor: theme.palette.purple[200],
        color: theme.palette.purple.dark
    },
    circleIcon: {
        transform: 'rotate3d(1, 1, 1, 45deg)'
    },
    menuItem: {
        marginRight: '14px',
        fontSize: '1.25rem'
    }
}));

const CarsCard = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(false);
    const classes = useStyles(anchorEl);


    const handleClick = (event) => {
        setAnchorEl(!anchorEl);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <Grid container direction="column">
                    <Grid item>
                        <Grid container justifyContent="space-between">
                            {anchorEl ? null :                             <Grid item>
                                <Avatar variant="rounded" className={classes.avatar}>
                                <img src={IconCar} alt="Car" />
                                </Avatar>
                            </Grid> }

                            <Grid item>
                                <Avatar
                                    variant="rounded"
                                    className={classes.avatarRight}
                                    aria-controls="menu-total-chart-card"
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                >
                                    {anchorEl ? <ArrowForwardIcon fontSize="inherit" /> : <ArrowBackIcon fontSize="inherit" />}
                                </Avatar>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container alignItems="center">
                            <Grid item>
                                <Typography className={classes.cardHeading}>{props.cars}/Hour</Typography>
                            </Grid>
                            <Grid item>
                                <Avatar className={classes.avatarCricle}>
                                    <ArrowDownwardIcon fontSize="inherit" className={classes.circleIcon} />
                                </Avatar>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.subHeading}>Cars</Typography>
                    </Grid>
                </Grid>
                <Grid container xs={8} direction='row'>
                {anchorEl ? <Grid item>
                        <Map></Map>
                    </Grid> : null } 
                </Grid>
            </CardContent>
        </Card>
    );
};

export default CarsCard;
