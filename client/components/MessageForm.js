import React, { Component } from 'react';

const DEFAULT_MESSAGE = {
    title: '',
    body: ''
};

export default class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {...DEFAULT_MESSAGE}
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit({...this.state});
        this.setState({...DEFAULT_MESSAGE});
    };

    onChange(key, value) {
        this.setState({
            [key]: value
        })
    };

    render() {
        const {title, body} = this.state;
        return <form onSubmit={e => this.onSubmit(e)} className="form" name="message">
            <input onChange={e => this.onChange('title', e.target.value)} type="text" name="title" value={title} className="form__input" placeholder="Title" />
            <textarea onChange={e => this.onChange('body', e.target.value)} name="body" value={body} className="form__text" placeholder="Body of the message" />
            <button type="submit" className="form__btn">Submit</button>
        </form>
    }
}