"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map() {
    const position = [21.1565, 79.1025];

    return (
        <MapContainer
            center={position}
            zoom={16}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            <Marker position={position}>
                <Popup>
                    Mangalam Plastics <br />
                    Plot No. 481, Chitra Talkies Road, Nagpur
                </Popup>
            </Marker>
        </MapContainer>
    );
}