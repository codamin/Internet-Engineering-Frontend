import React from 'react';
import './timer.css';
import {eng2fa} from 'utils/utils'
import API from 'apis/api'
import PropTypes from 'prop-types'

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            remainingTime: undefined,
            period: undefined,
        }
        this.format = this.format.bind(this)
        this.tick = this.tick.bind(this)
        this.getTimerInfo = this.getTimerInfo.bind(this)
    }

    getTimerInfo() {
        const token = localStorage.getItem("token");
        API.get('party/time', { headers: {Authorization: token} }).then(
            jsonData => {
                this.setState({
                    remainingTime: jsonData.data.remainingTime,
                    period: jsonData.data.period}
                );
                this.props.updateFunction();
            }
        )
    }

    componentDidMount() {
        // console.log('timer mounted')
        this.getTimerInfo()
        this.timerID = setInterval(
        () => this.tick(),1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        if(this.state.remainingTime == 0) {
            this.getTimerInfo()
            this.setState({remainingTime: this.state.period});
        }
        this.setState({
          remainingTime: this.state.remainingTime - 1
        });
    }

    format() {
        return(
            (eng2fa(Math.floor(this.state.remainingTime/60))).toString() + ":" + (eng2fa(this.state.remainingTime%60)));
    }

    render() {
        if(this.state.period == undefined || this.state.remainingTime == undefined) {
            return(
                <div className="text-center ml-3">
                    <div className="spinner-border" role="status"></div>
                </div>
            );
        }
        return(
            <div className="row justify-content-center">
                <span className="label label-default rem-timer">
                    {"زمان باقی مانده:   " + this.format()}
                </span>
            </div>
        )
    }
}

Timer.propTypes = {
    updateFunction: PropTypes.func.isRequired
}

export default Timer