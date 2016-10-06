import React, { Component, PropTypes } from 'react'
// Select
import Select from 'react-select'
import 'react-select/dist/react-select.css'
// PeriodPicker
import PeriodPicker from './PeriodPicker'


class Filter extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        selectedOptions: null
    }

    handleSelectChange = selectedOptions => this.setState({ selectedOptions })

    render() {
        const { articles } = this.props
        const { selectedOptions } = this.state
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        
        return (
            <div className="row">
                <div className="col-lg-8">
                    <PeriodPicker/>
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