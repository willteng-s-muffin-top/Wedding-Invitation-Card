import React, { Component } from 'react';
import './Comment.css';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visitors: 1
        }
    }

    updateVisitors() {
        this.setState({
            visitors: this.state.visitors + 1
        });
    }

    render(){
        const items = [];

        for (let i = 0; i < this.state.visitors; i++) {
            items.push(<div className="txtbox"></div>);
        }

        return(
            <div className="comment-container">
                <button className="txtbox" onClick={this.updateVisitors.bind(this)}>글 남기기</button>
                {/* <input text className="txtbox"></input> */}
                {items}
            </div>
        );
    }
}

export default Comment;