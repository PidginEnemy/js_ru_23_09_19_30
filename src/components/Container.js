// react
import React, { Component, PropTypes } from 'react'
// react redux
import { connect } from 'react-redux'
// components
import ArticleList from './ArticleList'
import Chart from './Chart'
import NewArticleForm from './NewArticleForm'
import Filter from './Filters'
import Counter from './Counter'

class Container extends Component {
    static propTypes = {
    };
    
    render() {
        
        const { articles } = this.props
        
        return (
            <div>
                <Counter/>
                <Filter articles = { articles }/>
                <ArticleList articles = { articles }/>
                <Chart />
                <NewArticleForm />
            </div>
        )
    }
}

export default connect(state => ({
    articles: state.articles
}))(Container)