import * as React from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function ProfileMenu(props) {
    const { setProfileIndex, setProfileIndexCloser } = props;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const profileHandler = () => {
        setProfileIndex(true);
        setProfileIndexCloser(false);
    };


    return (
        <>
            <Button
                id="basic-button"
                className='profile'
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Avatar sx={{ bgcolor: "#fff", color: "#000" }}>A</Avatar>
            </Button><Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={profileHandler}>My Profile</MenuItem>
                <MenuItem component={Link} to={'/'}>Logout</MenuItem>
            </Menu>
        </>
    );
}