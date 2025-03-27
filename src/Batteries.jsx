import { Stack, Typography } from "@mui/material";
import Header from "./Header";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import StaticMapWithMarkers from "./StaticMapWithMarkers";

const Batteries = () => {
    return (
        <div className="page">
            <Link to="/" className="breadcrumb">
                {"<"} Back
            </Link>
            <Header />
            <div className="category-buttons">
                <div className="category-card">
                    <div className="category-label">Batteries</div>
                    <div className="category-icon">☠️</div>
                    <div>
                        Dispose in compost
                        <div />
                        <div className="category-label">Hazardous Item: Do not dispose in bin</div>
                    </div>
                </div>
            </div>
            <Stack
                flexDirection="col"
                justifyContent="center"
                alignItems="center"
                style={{ marginBottom: "50px" }}
            >
                <Typography>Nearby Disposal Areas</Typography>
                <StaticMapWithMarkers />
            </Stack>
            <Nav />
        </div>
    );
};

export default Batteries;
