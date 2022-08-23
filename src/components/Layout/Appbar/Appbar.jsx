import React from 'react'
import { Link } from 'react-router-dom';
import { Avatar, Badge, Button, IconButton, TextField } from '@mui/material';
import { ReactComponent as Logo } from '../../../assets/iqvia-logo-color.svg';
import { colors } from '../../shared/constants/colors';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './appbar.scss';
import BasicMenu from '../../shared/Menu/Menu';

const Appbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <header className='header flex-div'>
            <span className='header__item logo-container flex-div'>
                <Link to="/" className="discussion__link"><Logo className='header__logo' /></Link>
            </span>
            <span className='header__item flex-div search-div'>
                <TextField
                    id="search-input"
                    variant="outlined"
                    fullWidth
                    placeholder='Search'
                    InputProps={{
                        disableUnderline: true,
                        startAdornment: <SearchOutlinedIcon />,
                    }}
                />
                <IconButton>
                    <Badge variant="dot" sx={{
                        margin: '0 8px', "& .MuiBadge-badge": {
                            backgroundColor: colors.orange,
                        }
                    }}>
                        <NotificationsOutlinedIcon />
                    </Badge>
                </IconButton>
                <Button
                    id="profile-button"
                    className="flex-div search-div"
                    aria-controls={open ? 'menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <Avatar alt="Remy Sharp" src="https://cdn3.vectorstock.com/i/1000x1000/20/67/woman-avatar-profile-vector-21372067.jpg" />
                    <KeyboardArrowDownOutlinedIcon />
                </Button>
                <BasicMenu
                    anchor={anchorEl}
                    open={open}
                    handleClose={handleClose}
                    ariaLabelledBy='profile-menu'
                    data={
                        [
                            { action: handleClose, icon: null, text: 'Logout', link: true, path: "/login" },
                        ]
                    } />
            </span>
        </header >
    )
}

export default Appbar