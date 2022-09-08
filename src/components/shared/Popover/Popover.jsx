import React from "react";
import {
    Popover
} from "@mui/material";

const PopOver = ({
    open,
    onClose,
    children,
    origin,
    style
}) => {
    return (
    <Popover
            open={!!open}
            anchorEl={open}
            onClose={() => onClose(null)}
            anchorOrigin={origin}
            sx={style}
        >
            {children}
        </Popover>
    )
}

export default PopOver;