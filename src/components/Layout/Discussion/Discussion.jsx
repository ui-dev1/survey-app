import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import {
    Card,
    CardContent,
    Typography,
    Link,
    Grid,
    Box,
    IconButton,
    Paper,
    InputBase
} from '@mui/material'
import "./discussion.scss"
import { guideActions } from '../../../redux/action';
import { useDispatch, useSelector } from 'react-redux'
import SearchIcon from '@mui/icons-material/Search';
import {
    uniq
} from "lodash";
import PrescribingBehaviour from './PrescribingBehaviour/PrescribingBehaviour';

const Discussion = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        dispatch(guideActions.getDiscussionGuideData());

    }, [dispatch]);
    const { discussionGuideSearchData } = useSelector((state) => state.discussionGuide)

    const [discussionData, setDiscussionData] = useState([]);
    const [searchValue, setSerachValue] = useState('');
    const handleSearch = (e) => {
        setSerachValue(e.target.value);
    }

    const handleLink = (id) => {
        history(`/discussion?businessId=${id}`);
    }

    useEffect(() => {
        setDiscussionData(discussionGuideSearchData);
    }, [discussionGuideSearchData])

    useEffect(() => {
        let filteredData = [];
        if (searchValue) {
            const keys = Object.keys(discussionGuideSearchData[0]);
            keys.forEach((key) => {
                discussionGuideSearchData.forEach(element => {
                    if (key !== "id") {
                        if (element[key]?.toLowerCase().includes(searchValue.toLowerCase())) {
                            filteredData.push(element);
                        }
                    }
                });
            })
            setDiscussionData(uniq(filteredData));
        } else {
            setDiscussionData(discussionGuideSearchData);
        }
    }, [searchValue])

    return (
        <div>
            <Typography
                variant="h5"
                gutterBottom
            >
                Create a Discussion Guide
            </Typography>
            {
                searchParams.get("businessId") ?
                    <PrescribingBehaviour />
                :
                <>
                    <Box className='box__container'>
                        <Paper
                            component="form"
                            className="search__container"
                        >
                            <IconButton type="button" aria-label="search" className='icon__button'>
                                <SearchIcon />
                            </IconButton>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search Business Objectives"
                                inputProps={{ 'aria-label': 'search' }}
                                value={searchValue}
                                onChange={handleSearch}
                                className="search"
                            />
                        </Paper>
                    </Box>
                    <Grid container spacing={1}>
                        {
                            discussionData.map((data) => {
                                return (
                                    <Grid item xs={3}>
                                        <Card sx={{ borderRadius: '16px' }} variant='outlined' className='card__container'>
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
                                                <Link
                                                    underline="none"
                                                    className='content__pos txt__link'
                                                    onClick={() => handleLink(data.id)}
                                                >
                                                    Select
                                                </Link>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </>
            }
        </div>
    )
}

export default Discussion