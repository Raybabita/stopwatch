// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    timeElapsedInSecond: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timerIntervalId)
  }

  onResetTimer = () => {
    clearInterval(this.timerIntervalId)
    this.setState({isTimerRunning: false, timeElapsedInSecond: 0})
  }

  onStopTimer = () => {
    clearInterval(this.timerIntervalId)
    this.setState({isTimerRunning: false})
    console.log(clearInterval)
  }

  onUpdateTime = () => {
    this.setState(preState => ({
      timeElapsedInSecond: preState.timeElapsedInSecond + 1,
    }))
  }

  onStartTimer = () => {
    this.timerIntervalId = setInterval(this.onUpdateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  renderSecond = () => {
    const {timeElapsedInSecond} = this.state

    const seconds = Math.floor(timeElapsedInSecond % 60)
    console.log(seconds)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinute = () => {
    const {timeElapsedInSecond} = this.state

    const minutes = Math.floor(timeElapsedInSecond / 60)
    console.log(minutes)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const time = `${this.renderMinute()}:${this.renderSecond()}`
    const {isTimerRunning} = this.state
    return (
      <div className="app-container">
        <div className="watch-container">
          <h1 className="stopwatch-heading">Stopwatch</h1>
          <div className="watch-counting-container">
            <div className="stopwatch">
              <img
                className="timer-icon"
                alt="stopwatch"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              />
              <p className="heading">Timer</p>
            </div>
            <h1 className="stopwatch-timer">{time}</h1>

            <div className="button-container">
              <button
                onClick={this.onStartTimer}
                disabled={isTimerRunning}
                className="btn btn1"
                type="button"
              >
                Start
              </button>
              <button
                onClick={this.onStopTimer}
                className="btn btn2"
                type="button"
              >
                Stop
              </button>
              <button
                onClick={this.onResetTimer}
                className="btn btn3"
                type="button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
