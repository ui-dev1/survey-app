import React from 'react'
import { Card, CardContent, Typography, Link, Grid } from '@mui/material'

const Discussion = () => {
    const a = [1, 2, 3, 4, 5];
    return (
        <div>
            <Typography
                variant="h5"
                gutterBottom
            >
                Create a Discussion Guide
            </Typography>
            <Grid container spacing={1}>
                {
                    a.map((card) => {
                        return(
                            <Grid item xs={3}>
                                <Card className='card__container'>
                                    <CardContent>
                                        <Typography
                                            variant="h6"
                                            gutterBottom
                                        >
                                            Competitive landscape
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            gutterBottom
                                        >
                                            Understand perceived image of client vs competitor products. Undisclose physicians' motivations and triggers to use different products.
                                        </Typography>
                                        <Link href="#" underline="none">
                                            Select
                                        </Link>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}

export default Discussion