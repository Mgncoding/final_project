import React from "react";
// import "./style.css";

function Card() {
    return (
        <div>
            <div
                className="card">
                <img src={require("../images/profilepic.png")} alt={"Profile Pic"} width="100" height="50" />
                {/* {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />} */}
            </div>
        </div>
    );
};

export default Card;
