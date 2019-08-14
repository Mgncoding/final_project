import React from "react";
import  "./style.css";

function Card() {
    return (
        <div>
            <div
                className="card">
                <img src={require("../images/profilepic.png.jpeg")} alt={"Profile Pic"} className="profilePic" width="250" height="250" />
                {/* {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />} */}
            </div>
        </div>
    );
};

export default Card;
