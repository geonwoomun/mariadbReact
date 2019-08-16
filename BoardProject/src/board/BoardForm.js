import React, { Component } from 'react';

class BoardForm extends Component {
    state = {}

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.InsertBoard(this.state);
        this.setState({});
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="title" name="boardTitle" onChange={this.handleChange}/>
                <input placeholder="name" name="boardWriter" onChange = {this.handleChange}/>
                <button type="submit">Save</button>
            </form>
        );
    }
}

export default BoardForm;
