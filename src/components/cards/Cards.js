import React, { useState } from 'react';
import "./cards.css"
function Card(props) {

          
    return (

        <div className="mainDiv">
            <div className="images">
                <img className="thummbnail" src={props.Thumbnail} onClick={()=>props.showThumbnail(props.id)} alt="" />
            </div>
            <div className="information">
                <div className="name">
                    <h3 className="username">{props.Name.title} {props.Name.first} {props.Name.last}</h3>
                </div>
                <div className="information">
                    <div className="left">
                        <div className="email">
                            <p className="otherFields">{props.Email}</p>
                        </div>
                        <div className="phone">
                            <p className="username">Contact No: {props.Phone}</p>
                        </div>
                    </div>
                    <div className="right">

                        <div className="gender">
                       
                            <p className="username">Gender: {props.Gender}</p>
                        </div>
                        <div className="nationality">
                            <p className="username">Country: {props.Country}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card