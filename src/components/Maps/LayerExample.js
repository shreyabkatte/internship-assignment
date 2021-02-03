import React from "react";
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import "./index.css";




const multiPolygon = [
    [[45.293062, -0.548343],
    [45.254466, -0.551089],
    [45.253258, -0.482425],
    [45.280562, -0.433501],
    [45.294209, -0.474185],
    [45.285997, -0.514011]
    ]

]

// Cordinates of Marcillac
const center = [45.269169177925754, -0.5231516014256281]


const purpleOptions = { color: 'white' }

class MapWrapper extends React.Component {
    render() {
        return (
            <div id="mapid">
            <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
                    url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
                />
              
                <Polygon pathOptions={purpleOptions} positions={multiPolygon} />
            </MapContainer>
            </div>
        )
    }
}

export default MapWrapper;





