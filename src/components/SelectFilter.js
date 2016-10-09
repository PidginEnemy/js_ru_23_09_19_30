import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import {connect} from 'react-redux'
import { saveFilters } from '../AC/filters'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        filters: PropTypes.object.isRequired
    };

    handleChange = selected => {
        this.props.saveFilters({
            articles: selected
        })
    }

    render() {
        const { articles, filters } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={filters.articles}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect(state => ({
    filters: state.filters
}), {
    saveFilters
})(SelectFilter)