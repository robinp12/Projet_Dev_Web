import React, { Component } from 'react';


class Countdown extends Component {

    constructor(){
        super()
        this.state = {
                mois : 0,
                jour : 0,
                heure : 0,
                minute : 0,
                second : 0
            }
    }
    currentTime(){
        this.setState({
            mois : new Date('May 16, 2020 16:30:59').getMonth() - new Date().getMonth(),
            jour : new Date('May 16, 2020 16:30:59').getDate() - new Date().getDate(),
            heure : new Date('May 16, 2020 16:30:59').getHours() - new Date().getHours(),
            minute : new Date('May 16, 2020 16:30:59').getMinutes() - new Date().getMinutes(),
            second : new Date('May 16, 2020 16:30:59').getSeconds() - new Date().getSeconds(),
        })
    }
    componentWillMount() {
        setInterval(() => this.currentTime(this.state),1000)
    }
    render() {

        return (
            <>
            {this.state.mois} mois
            <br />
            {this.state.jour<0?30+this.state.jour:0} jour(s)
            <br />
            {this.state.heure<0?24+this.state.heure:0} heure(s)
            <br />
            {this.state.minute<0?59+this.state.minute:0} minute(s)
            <br />
            {this.state.second} secondes

            </>
        )
    }
}

export default Countdown