import React, { Component } from 'react';
import './Comment.css';

class Comment extends Component {
    render(){
        return(
            <div>
                <button class="txtbox" onClick="">글 남기기</button>
                <input text class="txtbox"></input>
            </div>
        );
    }
}

export default Comment;