import React, { useState } from "react";
import Nav from "./Nav";
import Header from "./Header";
import { Link } from "react-router-dom";
import ExpandableCategoryCard from "./ExpandableCategoryCard";

const compostItems = [
    "Fruit and vegetable scraps",
    "Coffee grounds and filters",
    "Grass clippings/yard waste",
    "Hair and pet fur",
    "Natural wine corks",
    "Pencil shavings",
];

const recyclingItems = [
    "Plastic bottles",
    "Aluminum cans",
    "Paper and cardboard",
    "Glass jars",
    "Magazines",
    "Milk cartons",
];

const garbageItems = [
    "Chip bags",
    "Styrofoam",
    "Ceramics",
    "Broken toys",
    "Diapers",
    "Waxy cardboard",
];

const SearchPage = () => {
    const [expandedCards, setExpandedCards] = useState({
        Compost: false,
        Recycling: false,
        Garbage: false,
    });

    const toggleCard = (label) => {
        setExpandedCards((prev) => ({
            ...prev,
            [label]: !prev[label],
        }));
    };
    return (
        <div className="page">
            <div>
                <Link to="/work-in-progress" className="breadcrumb">
                    Home
                </Link>
                {">"}
                <Link to="/" className="breadcrumb">
                    Search
                </Link>
                <Header />
            </div>

            <div className="category-buttons">
                <ExpandableCategoryCard
                    icon="🐟"
                    label="Compost"
                    items={compostItems}
                    color="#0077cc"
                    expanded={expandedCards["Compost"]}
                    onClick={() => toggleCard("Compost")}
                />
                <ExpandableCategoryCard
                    icon="♻️"
                    label="Recycling"
                    items={recyclingItems}
                    color="green"
                    expanded={expandedCards["Recycling"]}
                    onClick={() => toggleCard("Recycling")}
                />
                <ExpandableCategoryCard
                    icon="🗑️"
                    label="Garbage"
                    items={garbageItems}
                    color="gray"
                    expanded={expandedCards["Garbage"]}
                    onClick={() => toggleCard("Garbage")}
                />
            </div>

            <Nav />
        </div>
    );
};

export default SearchPage;
