
import React, { Component } from "react";
// import NumberFormat from 'react-number-format';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

class Test extends Component {
  sum(){
    var data1 = parseInt(document.getElementById("in1").value);
    var data2 = parseInt(document.getElementById("in2").value);
    var total = data1 * data2;

    if (isNaN(total)){
        if(isNaN(data1) && Number.isInteger(data2)){console.log("First Empty"); total = data2;}
        if(isNaN(data2) && Number.isInteger(data1)){console.log("Second Empty"); total = data1;}
        if(isNaN(data1) && isNaN(data2)){console.log("Both Empty"); total = 0;}
        console.log(" ");
    }

    document.getElementById("in3").innerHTML = total;
}

render(){
    return(
        <div className="m-cont">

        </div>
    )
}
}
export default Test;
