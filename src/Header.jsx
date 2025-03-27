import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [searchedItem, setSearchedItem] = useState("");
    const navigate = useNavigate();

    const navigateToWIPPage = () => {
        navigate("/work-in-progress");
    };

    const navigateBasedOnSearchedItem = () => {
        if (searchedItem === "Mattress") {
            navigate(`/mattress`);
        } else if (searchedItem === "Tea bags") {
            navigate(`/tea-bags`);
        } else if (searchedItem === "Batteries") {
            navigate(`/batteries`);
        } else if (searchedItem === "Car oil") {
            navigate(`/car-oil`);
        } else {
            navigateToWIPPage();
        }
    };
    return (
        <div className="header">
            <Stack justifyContent="center" flexDirection="row">
                <Autocomplete
                    className="location-input"
                    disablePortal
                    defaultValue={"6830 Walter Gage Rd, Vancouver"}
                    options={["6830 Walter Gage Rd, Vancouver"]}
                    renderInput={(params) => (
                        <>
                            <span role="img" aria-label="location">
                                📍
                            </span>
                            <TextField {...params} label="" variant="standard" />
                        </>
                    )}
                />
            </Stack>

            <Stack justifyContent="center" flexDirection="row">
                <Autocomplete
                    className="search-bar"
                    disablePortal
                    onChange={(e, newValue) => {
                        setSearchedItem(newValue ?? "");
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            navigateBasedOnSearchedItem();
                        }
                    }}
                    options={[
                        "Aluminum can",
                        "Batteries",
                        "Broken glass",
                        "Cardboard boxes",
                        "Car oil",
                        "Cooking oil",
                        "Electronics (e-waste)",
                        "Expired medications",
                        "Food scraps",
                        "Garden waste (leaves, branches)",
                        "Light bulbs",
                        "Mattress",
                        "Old clothes",
                        "Old newspapers",
                        "Old shoes",
                        "Paint cans",
                        "Plastic water bottle",
                        "Styrofoam packaging",
                        "Tea bags",
                        "Used tissues",
                    ]}
                    renderInput={(params) => (
                        <>
                            <TextField {...params} label="" variant="standard" />
                            <button
                                onClick={() => {
                                    navigateBasedOnSearchedItem();
                                }}
                                className="search-button"
                            >
                                🔍
                            </button>
                        </>
                    )}
                />
            </Stack>
            <div className="or-divider">OR</div>
        </div>
    );
};

export default Header;
