import React, { Component } from 'react';
import { db } from '../firebase';
import './Comment.css';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [{name: '', comment: ''}],
            newComment: {name: '', comment: ''},
            hideForm: false
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

        this.setState({hideForm: true})
        this.listenForData();
    }

    render(){
        return(
            <div className="comment-container">
                <h3 className="color-violet">축하 메세지</h3>
                {!this.state.hideForm ? (
                    <form className="inputbox" onSubmit={this.addComment}>
                        <input type="text" placeholder="이름을 적어주세요" value={this.state.newComment.name} onChange={(e) => {this.setState({newComment: {name:e.target.value, comment:this.state.newComment.comment}})}}/>
                        <textarea type="textarea" placeholder="메세지를 적어주세요" rows="15" value={this.state.newComment.comment} onChange={(e) => {this.setState({newComment: {name:this.state.newComment.name,comment:e.target.value}})}} />
                        <button type="submit">확인</button>
                    </form>
                ) : (
                    <div className="comment-successful">감사합니다 ^^ <br/> 소중한 메세지가 전달되었습니다 📬</div>
                )} 
            </div>
        );
    }
}

export default Comment;