import React from 'react'
import Article from './Article'

export default (props) => {
    const { articles } = props;

    const articleComponents = articles.map(article => <Article article = {article} key={article.id} eventKey={article.id} isComments = { true } />);

    return (
        <div>
            {articleComponents}
        </div>
    )
}