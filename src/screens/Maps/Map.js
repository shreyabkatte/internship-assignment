import React,{useEffect} from "react";
import { MapContainer, TileLayer, Polygon, Marker, Popup , useMap } from 'react-leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import icon from "./constants";
// import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import "./index.css";


/***  Author: Shreya BALACHANDRA ***/
/***  Map Container ***/
/***  route : /results  ***/

/*** Input components :  MapContainer, TileLayer, Polygon, Marker, Popup , useMap from 'react-leaflet' package
 *                       GeoSearchControl, OpenStreetMapProvider from leaflet-geosearch package ***/
/*** Output : Map section of results page ***/




// Coordinates to the poligon tile of Marcillac
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

// Color given to the tile
const tileColor = { color: 'white' }

/***  Search feature on the map 
      - Create a GeoSearchControl object from leaflet-geosearch with provider object as OpenStreetMapProvider
      - map is imported from useMap() hook of react-leaflet
      - addControl function embeds the searchControl object created above which is used to display the result for searched city
      - style - style of search bar ***/
      function LeafletgeoSearch() {
    const map = useMap();
    useEffect(() => {
      const provider = new OpenStreetMapProvider();
  
      const searchControl = new GeoSearchControl({
        provider,
        style: 'bar',
        autoComplete: true,
        marker: {
          icon
        }
      });
  
      map.addControl(searchControl);
  
      return () => map.removeControl(searchControl);
    }, []);
  
    return null;
  }



class MapWrapper extends React.Component {
    render() {
        return (
            <div id="mapid">
                {/* Parent map container with following props: 
                    - center - coordinates to the city to be displayed
                    - zoom - zoom level
                    - scrollWheelZoom - boolean (true if scrollzoom feature is required) 
                */}
                <MapContainer center={center} zoom={13} scrollWheelZoom={true}>
                    {/* TileLayer component - Imports OpenStreetMap API and the 'url' props imports the DarkMatter utility.*/}
                    <TileLayer
                        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
                        url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
                    />
                    <LeafletgeoSearch />
                    {/* Draw polygon with the given city coordinates . pathOptions takes the color value and 
                    positions takes the array of coordinates for the polygon*/}
                    <Polygon pathOptions={tileColor} positions={multiPolygon} />
                    {/* Marker Component - Pins the location of specified coordinates */}
                    <Marker position={[45.269169177925754, -0.5231516014256281]}>
                        <Popup>
                            <div>
                                <svg x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve"><path d="M93,41.693v-9.941L36.767,19.717L7,32.371v10.22l3.869,1.393v38.088l-2.704-0.015v6.226h83.225v-5.756l-2.16-0.012V42.575  L93,41.693z M77.715,57.207V44.748l6.165,1.128v12.03L77.715,57.207z M83.88,64.129V76.16l-6.165-0.048V63.652L83.88,64.129z   M67.991,56.105V42.969l6.84,1.251V56.88L67.991,56.105z M74.831,63.429v12.661l-6.84-0.053V62.9L74.831,63.429z M57.15,54.876  v-13.89l7.633,1.396v13.359L57.15,54.876z M64.782,62.652v13.361l-7.633-0.059V62.062L64.782,62.652z M44.987,53.498V38.761  l8.569,1.568v14.14L44.987,53.498z M53.556,61.784v14.142l-8.569-0.066V61.121L53.556,61.784z" /></svg>

                            </div>
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        )
    }
}

export default MapWrapper;





