import React, { PropTypes } from 'react'

function Comment(props) {

    const { id, text, user } = props.comment
    const userImageUrl = `https://randomuser.me/api/portraits/thumb/men/${id}.jpg`

    return (
        <div>
            <div className="clearfix">
                <img src={userImageUrl} className="img-circle comment-avatar"/>
                <strong>{user}</strong>
            </div>
            <section>{text}</section>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string
    }).isRequired
}

export default Comment