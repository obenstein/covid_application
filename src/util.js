import React from "react";
import { Circle, Popup } from "react-leaflet";
import numeral from "numeral";



const casesTypeColors = {
    cases: {
      hex: "#CC1034",
      multiplier: 150 ,
    },
    recovered: {
      hex: "#7dd71d",
      multiplier: 200,
    },
    deaths: {
      hex: "#fb4443",
      multiplier: 1000,
    },
  };

export const sortData= (data)=>{
    const sortedData=[...data];

    return sortedData.sort((a,b) => (a.cases>b.cases ? -1 : 1)  )};

    export const showDataOnMap =(data, casesType = "cases") => (
    data.map(country => (
      <Circle
        center={[country.countryInfo.lat, country.countryInfo.long]}
        color={casesTypeColors[casesType].hex}
        fillColor={casesTypeColors[casesType].hex}
        fillOpacity={0.4}
        radius={
          Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
        }
      >

                    <Popup>

                      <div>
                                        <div
                              className="info-flag"
                              style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
                            ></div>
                            <div className="info-name"><h3>{country.country}</h3></div>
                            <div className="info-confirmed">
                            <strong>Cases:</strong> {numeral(country.cases).format("0,0")}
                            </div>
                            <div className="info-recovered">
                            <strong>Recovered:</strong> {numeral(country.recovered).format("0,0")}
                            </div>
                            <div className="info-deaths">
                            <strong>Deaths:</strong> {numeral(country.deaths).format("0,0")}
          </div>
                      </div>

                    </Popup>

                </Circle>
    )

     // console.log("THis FUCNTION IS RUNNINGGGGG")
        ));

export const prettyPrintStats =(stat) => 
stat ? `+${numeral(stat).format("0.0a")}` : "+0";