import React, { Component } from 'react';
import Countdown from './Countdown';

class Cards extends Component{

    render(){
        const {image, title, content, date} = this.props
    return (
            <>
            <div className="card">
                <img className="card-img-top" src={image} alt=""/>
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    {content}
                </div>
                <div className="card-footer text-muted text-center">
                <b><Countdown day={date}/></b>
                </div>
            </div>
            </>
        )
    }
}

export default Cards;