import React from 'react';

const d = new Date('2020-03-28T23:59:59')
const n = new Date()

function time(){
    const jour = d.getDate() -n.getDate()
    const heure = d.getHours() -n.getHours()
    const minute = d.getMinutes() -n.getMinutes()
    const second = d.getSeconds() -n.getSeconds()
    const time = jour + " Jours - " + heure + "h " + minute + "m " + second + "s"
    return time
}

const Countdown = props => {
    return (
        <>
        {time()}
        </>
    )
}

export default Countdown