import React from 'react';
import './timer.css';

import API from 'apis/api'

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            remainingTime: 0,
            period: 0,
        }
        this.format = this.format.bind(this)
        this.tick = this.tick.bind(this)
        this.getTimerInfo = this.getTimerInfo.bind(this)
    }

    getTimerInfo() {
        console.log('timer mounted')
        API.get('party/time').then(
            jsonData => {
                // console.log(jsonData.data)
                this.setState({
                    remainingTime: jsonData.data.remainingTime,
                    period: jsonData.data.updatePeriod});
        })
    }

    componentDidMount() {
        this.getTimerInfo()
        this.timerID = setInterval(
        () => this.tick(),1000);
    }

    tick() {
        // console.log(this.state)
        this.setState({
          remainingTime: this.state.remainingTime - 1
        });
        if(this.state.remainingTime == 0) {
            // this.
            this.props.updateFunction();
            this.setState({remainingTime: this.state.period});
        }
    }

    format() {
        return(
            (Math.floor(this.state.remainingTime/60)).toString() + ":" + (this.state.remainingTime%60));
    }

    render() {
        return(
            <div className="row justify-content-center">
                <span class="label label-default">
                    {"زمان باقیمانده: " + this.format()}
                </span>
            </div>
        )
    }
}

export default Timer