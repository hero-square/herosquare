import React, { Component } from 'react';
import '../style/calendar.css';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      hours: ["8:00am", "", "9:00am", "", "10:00am", "", "11:00am", "", "12:00pm", "", "1:00pm", "", "2:00pm", "", "3:00pm", "", "4:00pm", "", "5:00pm", "", "6:00pm", "", "7:00pm", "", "8:00pm", "", "9:00pm",""]
    }
  }
  render() {
    let days = [];
    let columns = [];
    for (let i = 0; i < this.state.days.length; i += 1) {
      days.push(
        // <div className="dayColumn">
          <div className="headerDay" >
            {this.state.days[i]}
          </div>
        // </div>
      )
      columns.push(
        <div className="dayColumn" ></div>
      )
    }
    let schedule = [];
    for (let i = 0; i < this.state.hours.length; i += 1) {
      schedule.push(
        <div className="halfHour">
          <div className="hoursDisplay">
            {this.state.hours[i]}
          </div>
        </div>
      )
    }
    return (
      <div className="calendar">
        <div className="header">
          <div style={{width: "50px"}}></div>
          {days}
        </div>
        <div className="scheduleContainer">
          <div className="classContainer">
            {columns}
          </div>
          <div className="timeContainer">
            {schedule}
          </div>
        </div>
      </div>
    )
  }
}

export default Calendar;