import React from "react";
import "./Map.css"
import {Map, TileLayer} from "react-leaflet";
import {showDataOnMap } from "./util";

function CovidMap({ countries, casesType, center, zoom }) {
  console.log("These are the countires: " , countries)
  return (
    <div className="map">
      <Map center={center} zoom={zoom}> 
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
        
      </Map>
    </div>
  );
}

export default CovidMap;