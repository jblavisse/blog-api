import React, { Component } from 'react';
import "./Post.css";

class Post extends Component {
    state = { 
    }

    render() { 
        return ( 
            <article className="post">
                <h2 className="post__title">{this.props.post.title}</h2>
                <p className="post__content">{this.props.post.body}</p>
            </article>
         );
    }
}
 
export default Post;