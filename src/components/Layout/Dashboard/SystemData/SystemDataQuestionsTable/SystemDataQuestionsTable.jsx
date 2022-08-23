import React from 'react';
import { Avatar, Badge, IconButton } from '@mui/material';
import { colors } from '../../../../shared/constants/colors';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Table from '../../../../shared/Table/Table';
import './systemDataQuestions.scss';

const SystemDataQuestionsTable = (props) => {
    const dotColors = [colors.darkGray, colors.lightBlue, colors.green];
    const formatTable = () => {
        const formattedData = props?.data?.map((row, index) => ({
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
                <span>Reused Guides</span>
            </div>,
            questions: <div className='content-div'>
                <p>{row?.questions}</p>
                <span>Questions</span>
            </div>,
            avatar: <div className="avatar-div">
                <Avatar alt={row?.lastEditedBy} src={row?.lastEditedByPhoto} sx={{
                    margin: '0 8px',
                }} />
                <div className='content-div'>
                    <p>{row?.lastEditedBy}</p>
                    <span>Last edited by</span>
                </div>
            </div>,
            actions:
                <IconButton>
                    <MoreHorizOutlinedIcon />
                </IconButton>
        }));
        return formattedData;
    }
    return (
        <Table data={formatTable()} />
    )
}

export default SystemDataQuestionsTable