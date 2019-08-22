import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
// import { MDBContainer } from "mdbreact";
import FixedExpenses from "../fixed.expenses"
import "../card/style.css";

export default class PieChart extends Component {
  state = {
    dataPie: {
      labels: ["Fixed Expenses", "Variable Expenses", "Debt", "Income", "Savings"],
      datasets: [
        {
          data: [40, 50, 100, 40, 120],
          backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "#4D5360",
            "#AC64AD"
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FFC870",
            "#A8B3C5",
            "#616774",
            "#DA92DB"
          ]
        }
      ]
    }
  }

  render() {
    return (
      <div className="something">
        {/* <MDBContainer> */}
          <h3 className="chartTitle">Budget  Chart</h3>
          <Pie data={this.state.dataPie} options={{ responsive: true }} />
        {/* </MDBContainer> */}
      </div>
    );
  }
}