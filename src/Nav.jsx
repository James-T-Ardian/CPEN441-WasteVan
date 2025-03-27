import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();
    const navigateToWIPPage = () => {
        navigate("/work-in-progress");
    };
    return (
        <div className="bottom-nav">
            <Stack className="nav-icon" flexDirection="row" justifyContent="center">
                <Button
                    onClick={() => {
                        navigateToWIPPage();
                    }}
                    fullWidth
                >
                    📅
                </Button>
            </Stack>
            <Stack
                className="nav-icon"
                flexDirection="row"
                justifyContent="center"
                style={{ backgroundColor: "gray" }}
            >
                <Button fullWidth>🔍</Button>
            </Stack>
            <Stack className="nav-icon" flexDirection="row" justifyContent="center">
                <Button
                    fullWidth
                    onClick={() => {
                        navigateToWIPPage();
                    }}
                >
                    🗑️
                </Button>
            </Stack>
            <Stack className="nav-icon" flexDirection="row" justifyContent="center">
                <Button
                    fullWidth
                    onClick={() => {
                        navigateToWIPPage();
                    }}
                    style={{ fontSize: "20px" }}
                >
                    ⋯
                </Button>
            </Stack>
        </div>
    );
};

export default Nav;
