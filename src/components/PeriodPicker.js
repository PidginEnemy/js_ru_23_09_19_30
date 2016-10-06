import React, {Component} from 'react'
// moment
import moment from 'moment'
// DayPicker
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class PeriodPicker extends Component {
    
    state = {
        from: null,
        to: null
    }

    handleDayChange = (e,day) => {
        const range = DateUtils.addDayToRange(day, this.state)
        this.setState(range)
    }

    resetPeriod = e => {
        e.preventDefault()
        this.setState({
            from: null,
            to: null
        })
    }
    
    render() {
        
        const { from, to } = this.state
        
        const period = `from 
            ${(from) ? moment(from).format('DD.MM.YYYY') : '---'} 
            to ${(to) ? moment(to).format('DD.MM.YYYY') : '---'}`
        
        return (
            <div>
                <DayPicker
                    ref="daypicker"
                    numberOfMonths={ 2 }
                    onDayClick = { this.handleDayChange }
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                />
                <div className="text-center">
                    <p>Period: {period}</p>
                    { from && to &&
                    <a href="#" onClick={ this.resetPeriod }>Reset</a>
                    }
                </div>
            </div>
        )
    }
    
}

export default PeriodPicker
