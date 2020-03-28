import React, { Component } from 'react';


class Countdown extends Component {

    constructor(){
        super()
        this.state = {
                jour : 0,
                heure : 0,
                minute : 0,
                second : 0
            }
    }
    currentTime(){
        this.setState({
            jour : Math.floor((new Date(this.props.day).getTime() - new Date().getTime())
                / (1000 * 60 * 60 * 24)),
            heure : Math.floor(((new Date(this.props.day).getTime() - new Date().getTime())
                % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minute : Math.floor(((new Date(this.props.day).getTime() - new Date().getTime())
                % (1000 * 60 * 60)) / (1000 * 60)),
            second : Math.floor(((new Date(this.props.day).getTime() - new Date().getTime())
                % (1000 * 60)) / 1000)
        })
    }
    componentWillMount() {
        setInterval(() => this.currentTime(this.state),1000)
    }
    render() {

        return (
            <>
            {this.state.jour}j {this.state.heure}h {this.state.minute}m {this.state.second}s
            </>
        )
    }
}

export default Countdown