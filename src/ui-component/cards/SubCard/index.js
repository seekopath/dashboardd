import React from 'react';
import {Card, CardContent, CardHeader, Divider, Typography, useTheme} from '@material-ui/core';

const SubCard = ({title, children, darkTitle, contentClass, secondary}) => {
    const theme = useTheme();

    return (
        <Card
            sx={{
                border: '1px solid',
                borderColor: theme.palette.primary.light,
                ':hover': {
                    boxShadow: '0 4px 24px 0 rgb(34 41 47 / 10%)'
                }
            }}
        >
            {!darkTitle && title && <CardHeader title={<Typography variant="h5">{title}</Typography>} action={secondary} />}
            {darkTitle && title && <CardHeader title={<Typography variant="h4">{title}</Typography>} />}
            {title && <Divider sx={{borderColor: 'primary.light'}} />}
            <CardContent className={contentClass}>{children}
                <Typography variant="H2" className={contentClass}>
                    Custom Feature Page
                </Typography>
                <br/>
                <Typography variant="H4" className={contentClass}>
                    This page is reserved for custom features requested by the clients
                </Typography>
            </CardContent>
        </Card>
    );
};

export default SubCard;
