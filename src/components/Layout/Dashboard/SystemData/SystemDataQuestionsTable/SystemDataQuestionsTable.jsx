import React, { useState } from 'react';
import { Avatar, Badge, IconButton } from '@mui/material';
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
        { id: 'lastEditedBy', label: 'Last Update By', numeric: false, width: '180px' },
        { id: 'actions', label: 'Favourites', numeric: false, width: '100px' },
    ]
    const formatTable = (sortedData) => {
        const formattedData = sortedData?.map((row, index) => ({
            icon: <Badge
                variant="dot"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                sx={{
                    "& .MuiBadge-badge": {
                        backgroundColor: dotColors[index % 3],
                    },
                    margin: '0 16px'
                }}>
                <DescriptionOutlinedIcon />
            </Badge>,
            topic: row?.topic,
            reusedGuides: <div className='content-div'>
                <p>{row?.reusedGuides}</p>
            </div>,
            questions: <div className='content-div'>
                <p>{row?.questions}</p>
            </div>,
            avatar: <div className="avatar-div">
                <Avatar alt={row?.lastEditedBy} src={row?.lastEditedByPhoto} sx={{
                    margin: '0 8px',
                }} />
                <div className='content-div'>
                    <p>{row?.lastEditedBy}</p>
                    <span>{row?.lastEditedDate}</span>
                </div>
            </div>,
            actions:
                <IconButton>
                    {
                        (row?.active) ?
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