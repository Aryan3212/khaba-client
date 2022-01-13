import { React, useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./MapShow.scss";

import RoutingMachine from "./RoutingMachine";

import icon from "./assets/leaf-green.png";

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: "",
    iconSize: [10, 20], // point of the icon which will correspond to marker's location // the same for the shadow
    popupAnchor: [-3, -76],
});

export default function MapShow({ locationData }) {
    const [locations, setlocations] = useState(null);

    console.log(
        "mapDAta",
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
                {/* {locationArray.map((i) => (
                    <Marker position={i[0]} icon={DefaultIcon}>
                        <Popup>{i[1]}</Popup>
                    </Marker>
                ))} */}
                <RoutingMachine locations={locationArray} />
            </MapContainer>
        </div>
    );
}
