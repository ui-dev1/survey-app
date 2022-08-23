import { ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const BasicMenu = (props) => {
    return (
        <Menu
            id="menu"
            anchorEl={props?.anchor}
            open={props?.open}
            onClose={props?.handleClose}
            MenuListProps={{
                "aria-labelledby": props?.ariaLabelledBy,
            }}
        >
            {props?.data?.map((item, index) => {
                const menuItem = (
                    <MenuItem key={`menu-${index}`} onClick={item?.action}>
                        {item?.icon && (
                            <ListItemIcon>
                                {item?.icon}
                            </ListItemIcon>
                        )}
                        <ListItemText>{item?.text}</ListItemText>
                    </MenuItem>
                );
                if (item?.link) {
                    return (
                        <Link to={item?.path} key={`link-${index}`} className="discussion__link">
                            {menuItem}
                        </Link>
                    );
                }
                return menuItem;
            })}
        </Menu>
    );
};

export default BasicMenu;
