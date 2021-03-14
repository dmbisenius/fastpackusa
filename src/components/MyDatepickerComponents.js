import React, { Component } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class MyDatepickerComponent extends Component {

    state = {
        startDate: new Date()
    };

    handleSelect = (date, event) => {
        console.log('onSelect', date, event);
    };
    handleChange = (date, event) => {
        console.log('onChange', date, event);
        this.setState({
            startDate: date
        });
    };
    handleBlur = (event) => {
        console.log('onBlur', event);
    };
    handleFocus = (event) => {
        console.log('onFocus', event);
    };
    handleCalendarClose = () => {
        console.log('CalendarClose');
    };
    handleCalendarOpen = () => {
        console.log('CalendarOpen');
    };
    handleWeekSelect = (firstDayOfWeek, weekNumber, event) => {
        console.log('on', firstDayOfWeek, weekNumber, event);
    };
    handleMonthChange = (date) => {
        console.log('onMonthChange', date);
    };
    handleYearChange = (date) => {
        console.log('onYearChange', date);
    };
    handleDayMouseEnter = (date) => {
        console.log('onDayMouseEnter', date);
    };

    render() {

        return (
            <div>
                <DatePicker
                    onSelect={() => this.handleSelect}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    onCalendarClose={this.handleCalendarClose}
                    onCalendarOpen={this.handleCalendarOpen}
                    onWeekSelect={this.handleWeekSelect}
                    onMonthChange={this.handleMonthChange}
                    onYearChange={this.handleYearChange}
                    onDayMouseEnter={this.handleDayMouseEnter}
                    selected={this.state.startDate}
                />
            </div>
        )
    };
}

export default MyDatepickerComponent;