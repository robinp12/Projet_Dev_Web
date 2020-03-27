import React, { Component } from 'react';


class Countdown extends Component {

    constructor(){
        super()
        this.state = {
                now : new Date(),
                // next : new Date('2020-03-28T23:59:59')
            }
    }
    currentTime(){
        this.setState({
            now: new Date()
        })
    }
    componentWillMount() {
        setInterval(() => this.currentTime(this.state),1000)
    }
    render() {
        // function time(state){
        //     const jour = state.next.getDate() - state.now.getDate()
        //     const heure = state.next.getHours() - state.now.getHours()
        //     const minute = state.next.getMinutes() - state.now.getMinutes()
        //     const second = state.next.getSeconds() - state.now.getSeconds()
        //     const time = jour>0 && heure>0 && minute>0 && second>0 ?(jour + "J - " + heure + "h " + minute + "m " + second + "s"):(<i> Evenement passé </i>)
        //     return time
        // }

        return (
            <>
            {this.state.now.toLocaleTimeString()}
            </>
        )
    }
}

export default Countdown