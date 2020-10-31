import React, { Component } from 'react';
import { db } from '../firebase';
import './Comment.css';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [{name: '', comment: ''}],
            newComment: {name: '', comment: ''}
        }
        this.addComment = this.addComment.bind(this);
    }

    componentDidMount() {
        this.listenForData();
    }

    listenForData() {
        db.collection("comments").orderBy('timestamp', 'desc').onSnapshot((querySnapshot) => {
            let commentsData = [];
            querySnapshot.forEach((doc) => {
                commentsData.push(doc.data());
            });
            this.setState({comments: commentsData});
        });
    }

    addComment(e) {
        e.preventDefault();
        this.setState({comments: [{name: '', comment: ''}], newComment: {name: '', comment: ''}});

        db.collection("comments").add({
            name: this.state.newComment.name,
            comment: this.state.newComment.comment,
            timestamp: new Date()
        }).then(function() {
            console.log("Comment was successfully added!");
        }).catch(function(error) {
            console.error("Error writing error: ", error)
        });

        this.listenForData();
    }

    render(){
        const comments = [];

        for (let i = 0; i < this.state.comments.length; i++) {
        comments.push(<div className="txtbox">
                <h4>{this.state.comments[i].name}</h4>
                <p>{this.state.comments[i].comment}</p>
            </div>);
        };

        console.log('RENDER', this.state.comments);

        return(
            <div className="">
                <h3 className="color-pink">축하 메세지</h3>
                <div className="comment-container">
                    <div className="card-container">
                        <form className="txtbox inputbox" onSubmit={this.addComment}>
                            <input type="text" placeholder="이름을 적어주세요" value={this.state.newComment.name} onChange={(e) => {this.setState({newComment: {name:e.target.value, comment:this.state.newComment.comment}})}}/>
                            <textarea type="textarea" placeholder="메세지를 적어주세요" rows="15" value={this.state.newComment.comment} onChange={(e) => {this.setState({newComment: {name:this.state.newComment.name,comment:e.target.value}})}} />
                            <button type="submit">확인</button>
                        </form>
                        {comments}
                    </div>
                </div>
            </div>
        );
    }
}

export default Comment;