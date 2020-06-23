import React, { Component } from 'react';

class Timer extends Component {
    state = { 
        seconds: 0,
        interval: null
     }
    
    incrementSeconds = () => {
        this.setState({
            seconds: this.state.seconds+1
        })
    }

    componentDidMount = () => {
        let interval = setInterval(this.incrementSeconds,1000);
        this.setState({
            interval: interval
        })
    }

    componentWillUnmount = () => {
        clearInterval(this.state.interval);
        this.setState({
            interval: null
        })
    }

    render() { 
        return ( 
        <div className="timer">
            {this.state.seconds}
        </div>
        );
    }
}
 
export default Timer;