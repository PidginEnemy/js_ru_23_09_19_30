import React from 'react';

export default (props) => {
    
    const { comment } = props;
    const userImageUrl = `https://randomuser.me/api/portraits/thumb/men/${comment.id}.jpg`;
    
    return (
        <div>
            <div className="clearfix">
                <img src={userImageUrl} className="img-circle pull-left"/>
                <h3 className="pull-left">{comment.user}</h3>
            </div>
            <section>{comment.text}</section>
        </div>
    )
}
