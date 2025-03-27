import React from "react";
import "./expandableCategoryCards.css";

const ExpandableCategoryCard = ({ icon, label, items, color, expanded, onClick }) => {
    return (
        <div
            className={`category-card ${expanded ? "expanded" : ""}`}
            onClick={onClick}
            style={{ borderColor: expanded ? color : "transparent" }}
        >
            <div className="card-header">
                <div className="category-icon" style={{ color }}>
                    {icon}
                </div>
                <div className="category-label">{label}</div>
            </div>

            {expanded && items && (
                <div className="card-content">
                    <p>Here’s examples of what can go in the {label.toLowerCase()}:</p>
                    <ul>
                        {items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                    <small>Still unsure? Try searching your item!</small>
                </div>
            )}
        </div>
    );
};

export default ExpandableCategoryCard;
