import { React } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./MapShow.scss";

import RoutingMachine from "./RoutingMachine";

export default function MapShow({ locationData }) {
    console.log(
        "mapData",
        locationData.data.map((elem) => elem.location)
    );
    const locationArray = locationData.data.map((elem) => [
        elem.location,
        elem.name,
    ]);
    console.log("mapDAta", locationArray);
    return (
        <div>
            <MapContainer
                center={locationArray[1][0]}
                zoom={13}
                scrollWheelZoom={false}
                className="map"
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <RoutingMachine locations={locationArray} />
            </MapContainer>
        </div>
    );
}
