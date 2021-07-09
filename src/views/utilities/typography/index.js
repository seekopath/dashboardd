import React from 'react';
import {Card, CardContent, CardHeader, Divider, Grid} from '@material-ui/core';
import MuiTypography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import {gridSpacing} from '../../../store/constant';
import SubCard from '../../../ui-component/cards/SubCard';

const Typography = (props) => {
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Card>
                    <CardHeader title="Basic Typography" />
                    <Divider />
                    <CardContent>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12} sm={6}>
                                <SubCard title="Heading">
                                    <Grid container direction="column" spacing={1}>
                                        <Grid item>
                                            <MuiTypography variant="h1" gutterBottom>
                                                h1. Heading
                                            </MuiTypography>
                                        </Grid>
                                        <Grid item>
                                            <MuiTypography variant="h2" gutterBottom>
                                                h2. Heading
                                            </MuiTypography>
                                        </Grid>
                                        <Grid item>
                                            <MuiTypography variant="h3" gutterBottom>
                                                h3. Heading
                                            </MuiTypography>
                                        </Grid>
                                        <Grid item>
                                            <MuiTypography variant="h4" gutterBottom>
                                                h4. Heading
                                            </MuiTypography>
                                        </Grid>
                                        <Grid item>
                                            <MuiTypography variant="h5" gutterBottom>
                                                h5. Heading
                                            </MuiTypography>
                                        </Grid>
                                        <Grid item>
                                            <MuiTypography variant="h6" gutterBottom>
                                                h6. Heading
                                            </MuiTypography>
                                        </Grid>
                                    </Grid>
                                </SubCard>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <SubCard title="Sub title">
                                    <Grid container direction="column" spacing={1}>
                                        <Grid item>
                                            <MuiTypography variant="subtitle1" gutterBottom>
                                                subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                            </MuiTypography>
                                        </Grid>
                                        <Grid item>
                                            <MuiTypography variant="subtitle2" gutterBottom>
                                                subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                            </MuiTypography>
                                        </Grid>
                                    </Grid>
                                </SubCard>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <SubCard title="Body">
                                    <Grid container direction="column" spacing={1}>
                                        <Grid item>
                                            <MuiTypography variant="body1" gutterBottom>
                                                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                                unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                                                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                                            </MuiTypography>
                                        </Grid>
                                        <Grid item>
                                            <MuiTypography variant="body2" gutterBottom>
                                                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                                unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                                                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                                            </MuiTypography>
                                        </Grid>
                                    </Grid>
                                </SubCard>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <SubCard title="Extra">
                                    <Grid container direction="column" spacing={1}>
                                        <Grid item>
                                            <MuiTypography variant="button" display="block" gutterBottom>
                                                button text
                                            </MuiTypography>
                                        </Grid>
                                        <Grid item>
                                            <MuiTypography variant="caption" display="block" gutterBottom>
                                                caption text
                                            </MuiTypography>
                                        </Grid>
                                        <Grid item>
                                            <MuiTypography variant="overline" display="block" gutterBottom>
                                                overline text
                                            </MuiTypography>
                                        </Grid>
                                        <Grid item>
                                            <MuiTypography
                                                variant="body2"
                                                color="primary"
                                                component={Link}
                                                href="https://allas.network"
                                                target="_blank"
                                                display="block"
                                                gutterBottom
                                            >
                                                https://allas.network
                                            </MuiTypography>
                                        </Grid>
                                    </Grid>
                                </SubCard>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Typography;
