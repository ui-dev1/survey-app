import React from "react";
import { CircularProgress } from "@mui/material";
import './spinner.scss';

const Spinner = ({ open }) => {
    if (open) {
        return (
            <div className="overlay-styles">
                <div className="loader-wrap">
                    <div className="progress">
                        <CircularProgress
                            color="inherit"
                            size={`${1.5}rem`}
                            tabIndex={-1}
                            aria-label={"loading"}
                            aria-live="polite"
                        />
                        &nbsp; Loading
                    </div>
                </div>
            </div>
        );
    }
    return <></>;
};

export default Spinner;
