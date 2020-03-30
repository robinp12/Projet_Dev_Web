import React, { Component } from 'react';


class Countdown extends Component {

    constructor(){
        super()
        this.state = {
                jour : "",
                heure : "",
                minute : "",
                second : ""
            }
    }
    currentTime(){
        let time = new Date(this.props.day).getTime() - new Date().getTime()
        
        this.setState({
            jour : Math.floor(time / (1000 * 60 * 60 * 24))+"j",
            heure : Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))+"h",
            minute : Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))+"m",
            second : Math.floor((time % (1000 * 60)) / 1000)+"s"
        })
    }
    componentWillMount() {
        setInterval(() => this.currentTime(this.state),1000)
    }
    render() {

        return (
            <>
            {this.state.jour} {this.state.heure} {this.state.minute} {this.state.second}
            </>
        )
    }
}

export default Countdown