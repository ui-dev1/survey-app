import React, { useState } from 'react';
import { Avatar, IconButton, Typography } from '@mui/material';
import { colors } from '../../../../shared/constants/colors';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import Table from '../../../../shared/Table/Table';
import './systemDataQuestions.scss';

const SystemDataQuestionsTable = (props) => {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('topic');
    const dotColors = [colors.darkGray, colors.lightBlue, colors.green];
    const columns = [
        { id: 'icon', label: 'S.No.', numeric: false },
        { id: 'topic', label: 'Name of Discussion Guide', numeric: false, width: '375px' },
        { id: 'reusedGuides', label: 'Business Objectives', numeric: true },
        { id: 'questions', label: 'No. of Questions', numeric: true },
        { id: 'lastEditedDate', label: 'Date & Time', numeric: false },
        { id: 'lastEditedBy', label: 'Name', numeric: false, width: '120px' },
        { id: 'actions', label: 'Favourites', numeric: false, width: '100px' },
    ]
    const formatTable = (sortedData) => {
        const formattedData = sortedData?.map((row, index) => ({
            icon: <Typography variant="h6" gutterBottom>{row?.id}</Typography>,
            topic: row?.topic,
            reusedGuides: <div className='content-div'>
                <p>{row?.reusedGuides}</p>
            </div>,
            questions: <div className='content-div'>
                <p>{row?.questions}</p>
            </div>,
            lastEditedDate: <div>
                <Typography variant="body2" gutterBottom>{row?.lastEditedDate}</Typography>
                <Typography variant="body2" gutterBottom>{row?.time}</Typography>
            </div>,
            name: <Typography variant="body2" gutterBottom>{row?.lastEditedBy}</Typography>,
            actions:
                <IconButton>
                    {
                        (row?.isMarked) ?
                            <StarIcon />
                            : <StarOutlineIcon onClick={() => props.handleClick(row?.id)} />
                    }
                </IconButton>
        }));
        return formattedData;
    }

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
    console.log(props?.data)
    return (
        <Table
            headCells={columns}
            data={props?.data || []}
            formatTable={formatTable}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
        />
    )
}

export default SystemDataQuestionsTable