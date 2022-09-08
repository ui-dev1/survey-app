import React, { useEffect, useState } from "react";
import {
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Checkbox
} from "@mui/material";
import Popover from "../../../shared/Popover/Popover";
const Filter = ({
    openFilter,
    setOpenFilter,
    checked,
    setChecked
}) => {
    const columns = [
        { id: 'topic', label: 'Name of Discussion Guide' },
        { id: 'reusedGuides', label: 'Business Objectives' },
        { id: 'questions', label: 'No. of Questions' },
        { id: 'avatar', label: 'Last Update By' },
        { id: 'actions', label: 'Favourites' },
    ];

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
        setOpenFilter(null)
    };
    return (
        <Popover
            open={!!openFilter}
            anchorEl={openFilter}
            onClose={() => setOpenFilter(null)}
            origin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            style={{ position: 'absolute', marginTop: '5.5rem' }}
        >
            <div>
                {
                    columns.map((col) => {
                        return (
                            <ListItemButton role={undefined} onClick={handleToggle(col.id)} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={checked.indexOf(col.id) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': col.id }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={col.id} primary={col.label} />
                            </ListItemButton>
                        )
                    })
                }
            </div>
        </Popover>
    )
}

export default Filter;