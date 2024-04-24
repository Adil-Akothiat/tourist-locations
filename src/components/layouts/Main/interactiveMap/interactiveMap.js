import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from "leaflet";
import "leaflet/dist/leaflet.css";
// import { useSearchParams } from "react-router-dom";


const ResetCenterView = ({ coordinates })=> {
    const map = useMap();

    useEffect(()=> {
        if(coordinates) {
            map.setView(
                [coordinates[0], coordinates[1]],
                map.getZoom()
            );
        }
    }, [coordinates, map])
    return null;
} 

const icon = new L.Icon({
    iconUrl: require("./location.png"),
    iconSize: new L.point(38, 38)
})

var NOMINAL_BASE_URL = "https://nominatim.openstreetmap.org/search?";

const InteractiveMap = () => {
    const [location, setLocation] = useState(null);
    // const [searchP, setsearchP] = useSearchParams();
    const [coordinates, setCordinates] = useState([35.1700832, -5.2766582971063976]);
    const [zoom, setZoom] = useState(7);

    const searchLocation = (e)=> {
        e.preventDefault();
        search();
    }
    async function search() {
        const params = {
            q: location,
            format: "json",
            adressdetails: 1,
            polygon_geojson: 0
        }
        const queryStr = new URLSearchParams(params).toString();
        const options = {
            method: "GET",
            redirect: "follow"
        }
        const response = await fetch(NOMINAL_BASE_URL+queryStr, options).then(res=> res.json()).catch(err=> console.log(err.message));
        if(response.length>0) {
            const { lat, lon } = response[0]
            setCordinates([lat, lon]);
            setZoom(25);
        }
    }

    // check url params
    // useEffect(()=> {
    //     // get url params
    //     const lc= searchP.get("search");
    //     if(lc !== "" && lc) {
    //         setLocation(lc);
    //         search();
    //         setsearchP("");
    //     }
    // },[])

    return (
        <div className="container">
            <div className="map-search">
                <form onSubmit={searchLocation}>
                    <input type="search" name="search_location" id="search-lc" placeholder="Trouvez votre Medina..." onChange={({target})=> setLocation(target.value)}/>
                    <button type="submit">Chercher</button>
                </form>
            </div>
            <MapContainer center={[51.505, -0.09]} zoom={zoom} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://api.maptiler.com/maps/jp-mierune-streets/256/{z}/{x}/{y}.png?key=1RrHIz6kPYhJrchtGQVV"
                />
                <Marker 
                    position={coordinates}
                    icon={icon}
                >
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <ResetCenterView coordinates={coordinates}/>
            </MapContainer>
        </div>
    );
}

export default InteractiveMap;