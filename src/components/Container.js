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
        
        const { articles, filters } = this.props

        function filterArticles(articles,filteredArticles) {
            let f_articles = []
            for(let art of articles) {
                for(let f_art of filteredArticles) {
                    if(art.id == f_art.value)
                        f_articles.push(art)
                }
            }
            return f_articles
        }

        const filteredArticles = (filters && filters.articles.length) ? filterArticles(articles, filters.articles) : articles

        return (
            <div>
                <Counter/>
                <Filter articles = { articles }/>
                <ArticleList articles = { filteredArticles }/>
                <Chart />
                <NewArticleForm />
            </div>
        )
    }
}

export default connect(state => ({
    articles: state.articles,
    filters: state.filters
}))(Container)