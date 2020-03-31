import React, { Component } from 'react';
import Countdown from './Countdown';

class Cards extends Component{

    render(){
        const {image, title, content, date} = this.props
    return (
            <>
            <div className="card">
                <img class="card-img-top" src={image} alt=""/>
                <div class="card-body">
                    <h4 class="card-title">{title}</h4>
                    {content}
                </div>
                <div class="card-footer text-muted text-center">
                <Countdown day={date}/>
                </div>
            </div>
            </>
        )
    }
}

export default Cards;