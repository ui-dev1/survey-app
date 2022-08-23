import { Button } from '@mui/material';
import React from 'react';
import { colors } from '../constants/colors';

export const OutlinedButton = (props) => {
    return <Button variant="outlined" sx={{
        border: `2px solid ${colors.darkBlue}`,
        borderRadius: '6px',
        background: colors.white,
        color: colors.darkBlue,
        textTransform: 'capitalize',
        fontWeight: 600,
        '&:hover': {
            border: `2px solid ${colors.white}`,
            background: colors.darkBlue,
            color: colors.white,
        }
    }} {...props}>{props?.children}</Button>
};

const FilledButton = (props) => {
    return (
        <Button variant="contained" sx={props?.buttonStyle} {...props}>{props?.children}</Button>
    )
}

export default FilledButton;