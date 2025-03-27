import Header from "./Header";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const TeaBags = () => {
    return (
        <div className="page">
            <Link to="/" className="breadcrumb">
                {"<"} Back
            </Link>
            <Header />
            <div className="category-buttons">
                <div className="category-card">
                    <div className="category-label">Tea Bags</div>
                    <div className="category-icon">🐟</div>
                    <div>
                        Dispose in compost
                        <div />
                        <div className="category-label">Next: September 3, 8 AM</div>
                    </div>
                </div>

                <Nav />
            </div>
        </div>
    );
};

export default TeaBags;
