import React, { useEffect } from 'react'
import { Card, CardContent, Typography, Link, Grid } from '@mui/material'
import "./discussion.scss"
import { guideActions } from '../../../redux/action';
import { useDispatch, useSelector } from 'react-redux'
import Search from '../../shared/Search/Search';

const Discussion = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(guideActions.getDiscussionGuideData());

    }, [dispatch]);
    const { discussionGuideSearchData } = useSelector((state) => state.discussionGuide)
    return (
        <div>
            <Typography
                variant="h5"
                gutterBottom
            >
                Create a Discussion Guide
            </Typography>
            <Search />
            <Grid container spacing={1}>
                {
                    discussionGuideSearchData.map((data) => {
                        return(
                            <Grid item xs={3}>
                                <Card sx={{ borderRadius: '16px'}} variant='outlined' className='card__container'>
                                    <CardContent>
                                        <Typography
                                            variant="caption"
                                            gutterBottom
                                            className='content__pos period__color'
                                        >
                                            {data.modifiedOn} ago
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            gutterBottom
                                        >
                                            {data.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            gutterBottom
                                            className='desc__color'
                                        >
                                            {data.description}
                                        </Typography>
                                        <Link href="#" underline="none" className='content__pos txt__link'>
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