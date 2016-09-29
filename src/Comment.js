import React from 'react';

export default (props) => {
    
    const { comment } = props;
    const userImageUrl = `https://randomuser.me/api/portraits/thumb/men/${comment.id}.jpg`;
    
    return (
        <div>
            <div className="clearfix">
                <img src={userImageUrl} className="img-circle comment-avatar"/>
                <strong>{comment.user}</strong>
            </div>
            <section>{comment.text}</section>
        </div>
    )
}