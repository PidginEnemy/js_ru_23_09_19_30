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
        const commentsList = isOpen ? <ul>{commentsComponents}</ul> : null;
        
        const commentsWrap = comments.length ? <div><a href="#" onClick={this.toggleOpen}>{isOpen ? 'Hide comments' : 'Show comments'}</a>{commentsList}</div> : <p>There are no comments</p>
        
        return (commentsWrap)
    }

    toggleOpen = event => {
        event.preventDefault();
        
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

}