import { Button, Stack, Typography } from "@mui/material";
import Header from "./Header";
import Nav from "./Nav";
import StaticMapWithMarkers from "./StaticMapWithMarkers";
import { Link } from "react-router-dom";

const Mattress = () => {
    return (
        <div className="page">
            <Link to="/" className="breadcrumb">
                {"<"} Back
            </Link>
            <Header />
            <div className="category-buttons">
                <div className="category-card">
                    <div className="category-label">Mattress</div>
                    <div className="category-icon">🚫</div>
                    <div className="category-label">Non-hazardous Item: Do not dispose in bin</div>
                </div>
            </div>
            <Stack flexDirection="col" justifyContent="center" alignItems="center">
                <Typography>Nearby Disposal Areas</Typography>
                <StaticMapWithMarkers />
            </Stack>

            <Stack
                flexDirection="col"
                justifyContent="center"
                alignItems="center"
                style={{ marginTop: "30px" }}
            >
                <Typography>Sell/Disposal Share for Large Items</Typography>
                <Stack flexDirection="col" gap={1}>
                    <Button
                        onClick={() => {
                            window.location.href = "https://www.facebook.com/marketplace/";
                        }}
                        variant="contained"
                        sx={{
                            backgroundColor: "white",
                            color: "#555",
                            borderRadius: "16px",
                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                            textTransform: "none",
                            fontWeight: 500,
                            width: 300,
                            height: 60,
                            "&:hover": {
                                backgroundColor: "#f5f5f5",
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                            },
                        }}
                    >
                        Facebook Marketplace
                    </Button>
                    <Button
                        onClick={() => {
                            window.location.href = "https://vancouver.craigslist.org/";
                        }}
                        variant="contained"
                        sx={{
                            backgroundColor: "white",
                            color: "#555",
                            borderRadius: "16px",
                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                            textTransform: "none",
                            fontWeight: 500,
                            width: 300,
                            height: 60,
                            marginBottom: 10,
                            "&:hover": {
                                backgroundColor: "#f5f5f5",
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                            },
                        }}
                    >
                        Craigslist
                    </Button>
                </Stack>
            </Stack>

            <Nav />
        </div>
    );
};

export default Mattress;
