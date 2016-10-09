import React, { Component, PropTypes } from 'react'
import Article from './Article'
import accordion from './../decorators/accordion'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        filters: PropTypes.object.isRequired,
        //from accordion decorator
        toggleItem: PropTypes.func.isRequired,
        isItemOpen: PropTypes.func.isRequired
    };
    
    _filterArticles(articles,filteredArticles) {
        let f_articles = []
        for(let art of articles) {
            for(let f_art of filteredArticles) {
                if(art.id == f_art.value)
                    f_articles.push(art)
            }
        }
        return f_articles
    }

    render() {
        const { articles, filters, toggleItem, isItemOpen } = this.props

        const f_articles = filters.articles

        const filteredArticles = (f_articles && f_articles.length) ? this._filterArticles(articles, f_articles) : articles
        
        const articleComponents = filteredArticles.map(article => (
            <li key={article.id} >
                <Article article = {article} isOpen = {isItemOpen(article.id)} openArticle = {toggleItem(article.id)} />
            </li>))

        return (
            <ul>
                {articleComponents}
            </ul>
        )
    }
}

export default accordion(ArticleList)