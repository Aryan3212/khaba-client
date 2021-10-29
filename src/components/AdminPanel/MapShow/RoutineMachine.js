import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

import icon from "./assets/leaf-green.png";

const createRoutineMachineLayer = ({ locations }) => {
    console.log(locations);
    const latitude = locations.map((elem) => {
        console.log(elem[0][0], elem[0][0]);
        return L.latLng(elem[0][0], elem[0][1]);
    });
    console.dir(latitude);
    const instance = L.Routing.control({
        waypoints: latitude,
        lineOptions: {
            styles: [{ color: "#6FA1EC", weight: 4 }],
        },
        createMarker: function () {
            return null;
        },
        show: true,
        addWaypoints: false,
        routeWhileDragging: true,
        draggableWaypoints: true,
        fitSelectedRoutes: true,
        showAlternatives: true,
        createMarker: function (i, waypoint, n) {
            const marker = L.marker(waypoint.latLng, {
                draggable: true,
                icon: L.icon({
                    iconUrl: icon,
                    iconSize: [30, 30],
                    popupAnchor: [-3, -76],
                }),
                markerColor: "transparent",
            });
            return marker;
        },
    });

    return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
