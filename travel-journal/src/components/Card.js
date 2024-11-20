import React from "react"

function Card(props) {   
    return (
        <div className="card-container">
            <img className="card--img" src={`./images/${props.img}`}/>
            <div className="card--content">
                <div className="card--location">
                    <img className="gps" src="./images/gps.png"/>
                <h3>{props.location}</h3>
                <a href={props.googleMapsUrl}>View on google maps</a>

                </div>
                
                <h1>{props.heading}</h1>
                <h4>{props.start} - {props.end}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card