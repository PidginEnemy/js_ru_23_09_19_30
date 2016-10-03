import React, { Component, PropTypes } from 'react'
import Article from './Article'
import Chart from './Chart'
import Accordion from './decorators/accordion';

class ArticleList extends Component {

    static propTypes = {
        articles: PropTypes.array   // articles array
    };

    render() {
        const { articles, toggleOpenArticle, openArticleId } = this.props

        const articleComponents = articles.map(article => (
            <li key={article.id} >
                <Article article = {article} isOpen = {article.id == openArticleId} openArticle = {toggleOpenArticle(article.id)} />
            </li>))

        return (
            <div>
                <ul>
                    {articleComponents}
                </ul>
                <Chart />
            </div>
        )
    }
}

export default Accordion(ArticleList)