import React, { Component } from 'react';
import Comment from './Comment';

export default class CommentsList extends Component {
    
    state = {
        isOpen: false
    }
    
    render() {
        
        const { comments } = this.props;
        const { isOpen } = this.state;
        
        const commentsComponents = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>);
        const commentsList = isOpen ? <ul className="comments-list">{commentsComponents}</ul> : null;
        
        const commentLink = <a href="#" onClick={this.toggleOpen}>{isOpen ? 'Hide comments' : 'Show comments'}</a>;
        const commentsWrap = comments.length ? <div>{commentLink}{commentsList}</div> : <p className="text-warning">There are no comments</p>
        
        return (commentsWrap)
    }

    toggleOpen = event => {
        event.preventDefault();
        
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

}