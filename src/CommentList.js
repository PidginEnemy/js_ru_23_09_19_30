import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from './decorators/toggleOpen'

class CommentList extends Component {

    static propTypes = {
        comments: PropTypes.array,                  // comments array
        isOpen: PropTypes.bool.isRequired,          // open/close comments on current article
        toggleOpen: PropTypes.func.isRequired       // open/close comments list function (from decorator)
    }

    componentWillMount() {
        console.log('---', 'mounting')
    }

    componentDidMount() {
        console.log('---', 'mounted')
    }

    componentWillUnmount() {
        console.log('---', 'unmounting')
    }

    getRef = (ref) => {
        this.containerNode = ref
    }

    render() {
        const { comments, isOpen, toggleOpen } = this.props
        if (!comments || !comments.length) return <p className="text-warning">No comments yet</p>

        const commentItems = comments.map(comment => <li key={comment.id}><Comment comment = {comment}/></li>)
        const text = isOpen ? 'hide comments' : `show ${comments.length} comments`
        const body = isOpen && <ul className="comments-list">{commentItems}</ul>

        return (
            <div ref = {this.getRef}>
                <a href="#" onClick={toggleOpen}>{text}</a>
                {body}
            </div>
        )
    }
}

export default toggleOpen(CommentList)