import React, { Component } from 'react'
import CommentsList from './CommentsList';

export default class Article extends Component {

    state = {
        isOpen: false,
        opened: {
            a: true
        }
    }

    render() {
        const { article, isComments } = this.props
        const { isOpen } = this.state

        const comments = article.comments || [];
        const commentsList = isComments ? <CommentsList comments = {comments}/> : null
        const body = isOpen ? <div><section>{article.text}</section>{commentsList}</div> : null
        
        return (
            <div>
                <h3 onClick = {this.toggleOpen}>{article.title}</h3>
                {body}
            </div>
        )
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
/*

        this.setState({
            opened: {...this.state.opened, a: false}
        })
*/
    }
}



/*
export default (props) => {
    const { article } = props

    return (
        <div>
            <h3>{article.title}</h3>
            <section>{article.text}</section>
        </div>
    )
}*/
