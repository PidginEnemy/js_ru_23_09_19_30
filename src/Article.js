import React, { Component } from 'react';
import CommentsList from './CommentsList';
import Panel from 'react-bootstrap/lib/Panel';

export default class Article extends Component {

    state = {
        isOpen: false
    }

    render() {
        const {article, isComments, ...other} = this.props;

        const comments = article.comments || [];
        //не понятно зачем isComments, а в остальном все хорошо
        const commentsList = isComments ? <CommentsList comments={comments}/> : null;
        const body = <div>
            <section>{article.text}</section>
            {commentsList}</div>;

        return (
            <div>
                <h3 onClick={this.toggleOpen}>{article.title}</h3>
                <Panel {...other} collapsible expanded={this.state.isOpen}>
                    {body}
                </Panel>
            </div>
        )
    }

    toggleOpen = event => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}
