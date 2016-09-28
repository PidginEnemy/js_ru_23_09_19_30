import React from 'react';

export default (props) => {
    
    const { comment } = props;
    
    return (
        <div>
            <h3>{comment.user}</h3>
            <section>{comment.text}</section>
        </div>
    )
}
