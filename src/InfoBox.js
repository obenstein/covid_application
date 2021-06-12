import React from 'react'
import "./InfoBox.css"
import { Card,CardContent,Typography} from "@material-ui/core"

function  InfoBox({title,cases,total ,active,isRed, ...props}) {
    return (
        <Card
        onClick={props.onClick}
        className={`infoBox ${active && "infoBox--selected "} ${isRed && "infoBox--red"} style={{marginRight:"10px"}`}> 
            <CardContent>
            {/* Title : CoronaVirus Cases */}
            <Typography className="infoBox__title" color="textSecondary" >
                {title}
            </Typography>

            {/* Number of cases */}
            <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
                {cases}
            </h2>
            {/* Total cases */}
            <Typography colour="textSecondary" className="infoBox__total">
            {total} Total
            </Typography>
            </CardContent>
        </Card>
    )
}   

export default InfoBox
