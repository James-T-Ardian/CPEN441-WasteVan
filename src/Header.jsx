import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const options = [
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
];

const Header = () => {
    const [searchedItem, setSearchedItem] = useState("");
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    const navigateToWIPPage = () => {
        navigate("/work-in-progress");
    };

    const navigateBasedOnSearchedItem = (searchedItem) => {
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
                    inputValue={inputValue}
                    onChange={(e, newValue) => {
                        setSearchedItem(newValue ?? "");
                    }}
                    onInputChange={(e, newInputValue) => setInputValue(newInputValue)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault(); // prevent default form submit
                            const matchedOption = options.find(
                                (opt) => opt.toLowerCase() === inputValue.toLowerCase()
                            );

                            if (matchedOption && inputValue)
                                navigateBasedOnSearchedItem(matchedOption);
                        }
                    }}
                    options={options}
                    renderInput={(params) => (
                        <>
                            <TextField {...params} label="" variant="standard" />
                            <button
                                onClick={() => {
                                    navigateBasedOnSearchedItem(searchedItem);
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
