import React, {Component} from 'react'

class NewCommentForm extends Component {

    state = {
        name: '',
        comment: ''
    }

    handleNameChange = e => {
        this.setState({ name: e.target.value })
    }

    handleCommentChange = e => {
        this.setState({ comment: e.target.value })
    }

    onSendComment = () => {
        console.log('---', this.state);
    }

    render() {
        const { name, comment } = this.state
        return (
            <div className="row">
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" value={ name } onChange={this.handleNameChange}/>
                    </div>
                    <div className="form-group">
                        <label>Comment</label>
                        <textarea className="form-control" rows="3" value={ comment } onChange={this.handleCommentChange}></textarea>
                    </div>
                    <button className="btn btn-primary" onClick={this.onSendComment}>Send</button>
                </div>
            </div>
        )
    }

}

export default NewCommentForm