import React, { Component } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
class Variable extends Component {
  sum(){
    var data1 = parseInt(document.getElementById("in1").value);
    var data2 = parseInt(document.getElementById("in2").value);
    var data3 = parseInt(document.getElementById("in3").value);
    var data4 = parseInt(document.getElementById("in4").value);
    var data5 = parseInt(document.getElementById("in5").value);
    var total = data1 +  data2 + data3 + data4 + data5;
    if (isNaN(total)){
        if(isNaN(data1) && Number.isInteger(data2)){console.log("First Empty"); total = data2;}
        if(isNaN(data2) && Number.isInteger(data1)){console.log("Second Empty"); total = data1;}
        if(isNaN(data1) && isNaN(data2)){console.log("Both Empty"); total = 0;}
        console.log(" ");
    }
    document.getElementById("in6").innerHTML = total;
}
render(){
    return(
        <div className="m-cont">
            <div className="app-cont">
                <h1>Add Two Numbers</h1>
           
                <div className="data-cont">
                    <div className="indata">
                        <label>Number 1:</label>
                        <input type="number" name="perc" id="in1" className="in1" />
                    </div><br/>
                    <div className="indata">
                        <label>Number 2:</label>
                        <input type="number" name="perc" id="in2" className="in1" />
                    </div><br/>
                    <div className="indata">
                        <label>Number 3:</label>
                        <input type="number" name="perc" id="in3" className="in1" />
                    </div><br/>
                    <div className="indata">
                        <label>Number 4:</label>
                        <input type="number" name="perc" id="in4" className="in1" />
                    </div><br/>
                    <div className="indata">
                        <label>Number 5:</label>
                        <input type="number" name="perc" id="in5" className="in1" />
                    </div><br/>
                    <input className="button1" type="submit" onClick={() => this.sum()} value="Sum Numbers"></input><br/><br/>
                    <div className="indata">
                        <label>-- Total --</label>
                        <div id="in6" className="answ1"></div>
                    </div><br/>
                </div>
           
        </div>
        </div>
    )
}
}

export default Variable;