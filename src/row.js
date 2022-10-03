import React from "react";
import './row.css';


export default function Row(){
    return(
        <div className="row">
            <div>
                <p className="fs-3 text-white">Netflix trending</p>
                <div className="row-movies d-flex flex-column">
                    <div className="">
                        <img className="img-thumbnail"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}