import React, { Component } from "react";

export default class FixedExpenses extends Component {
    constructor(props) {
        super(props)

        this.onSubmit = this.onSubmit.bind(this);

    }
    componentDidMount(){
        this.setState({

        })
    }
    onSubmit(e) {
        e.preventDefault()
    }
    render() {
        return (
            <div>
                <div>
                    <p>the description goes here</p>
                </div>
            </div>
        )
    }
}
