import React, { useState } from "react";
import mapImage from "./assets/map.png"; // Adjust path if necessary

const locations = [
    {
        id: 1,
        name: "Zero Waste Center",
        hours: "Fri 8:00am to 6:00pm",
        address: "8588 Yukon St, Vancouver, BC V5H 0A9",
        style: { top: "55%", left: "52%" }, // % relative to image container
    },
    {
        id: 2,
        name: "Zero Waste Center",
        hours: "Mon–Fri 9:00am to 5:00pm",
        address: "1236 W Broadway, Vancouver, BC V6H 0A9",
        style: { top: "40%", left: "70%" },
    },
    // Add more locations here
];

const StaticMapWithMarkers = () => {
    const [selected, setSelected] = useState(null);

    return (
        <div style={{ position: "relative", width: "100%", maxWidth: "600px" }}>
            <img
                src={mapImage}
                alt="Map"
                style={{ width: "100%", display: "block" }}
                onClick={() => setSelected(null)}
            />

            {locations.map((loc) => (
                <button
                    key={loc.id}
                    onClick={() => setSelected(loc)}
                    style={{
                        position: "absolute",
                        ...loc.style,
                        transform: "translate(-50%, -100%)",
                        background: "red",
                        borderRadius: "50%",
                        width: "20px",
                        height: "20px",
                        border: "2px solid white",
                        cursor: "pointer",
                    }}
                />
            ))}

            {selected && (
                <div
                    style={{
                        position: "absolute",
                        top: selected.style.top,
                        left: selected.style.left,
                        transform: "translate(-50%, -120%)",
                        backgroundColor: "white",
                        padding: "12px",
                        borderRadius: "10px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                        width: "200px",
                        zIndex: 10,
                    }}
                >
                    <h4 style={{ margin: 0, fontSize: "16px" }}>{selected.name}</h4>
                    <p style={{ margin: "6px 0", fontSize: "14px" }}>🕒 {selected.hours}</p>
                    <p style={{ margin: 0, fontSize: "14px" }}>📍 {selected.address}</p>
                </div>
            )}
        </div>
    );
};

export default StaticMapWithMarkers;
