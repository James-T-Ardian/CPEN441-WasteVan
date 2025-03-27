import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const WorkInProgress = () => {
    return (
        <div
            className="page"
            style={{
                marginLeft: 0,
            }}
        >
            <Link to="/" className="breadcrumb">
                {"<"} Back
            </Link>
            <Stack
                style={{
                    height: "100vh",
                    fontSize: "3.5vw",
                }}
                direction="column"
                justifyContent="center"
            >
                <Stack justifyContent="center" alignItems="center">
                    🚧 Work in Progress Page 🚧
                </Stack>
            </Stack>
        </div>
    );
};

export default WorkInProgress;
