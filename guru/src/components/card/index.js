import React from "react";
import "./style.css";
import {Link} from "react-router-dom";

function Card() {
    return (
        <div className="something">

            <div className="card">
                <img src={require("../images/profilepic.png.jpeg")} alt={"Profile Pic"} classNameName="profilePic" width="250" height="250" />
                <div className="card-body">
                    <h2 className="card-title">Monica Mantilla</h2>
                    <h3 className="card-text">Your Budget Status: <span className="budgetStat">GOOD</span></h3>
                    <h3 className="card-text"></h3>
                    <button type="submit" className="profileBtn"><Link to="/salary" className="nav-link"> My Budget !</Link>  </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
