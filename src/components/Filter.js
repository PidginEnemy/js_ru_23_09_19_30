import React, { Component, PropTypes } from 'react'
// Select
import Select from 'react-select'
import 'react-select/dist/react-select.css'
// DayPicker
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'


class Filter extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        selectedOptions: null,
        from: null,
        to: null
    }

    handleSelectChange = selectedOptions => this.setState({ selectedOptions })

    handleDayChange = (e,day) => {
        const range = DateUtils.addDayToRange(day, this.state)
        this.setState(range)
    }

    render() {
        const { articles } = this.props
        const { selectedOptions, from, to } = this.state
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div className="row">
                <div className="col-lg-8">
                    <DayPicker
                        ref="daypicker"
                        numberOfMonths={ 2 }
                        onDayClick = {this.handleDayChange}
                        selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    />
                </div>
                <div className="col-lg-4">
                    <Select
                        options = {options}
                        value = {selectedOptions}
                        multi = {true}
                        onChange = {this.handleSelectChange}
                    />
                </div>
            </div>
        )
    }
}

export default Filter