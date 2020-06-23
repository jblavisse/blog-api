import React, { Component } from 'react';
import "./Post.css";
import axios from 'axios';

class Post extends Component {
    state = { 
        post: {}
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/3')
        .then(res => {
            this.setState({
                post: res.data
            })
        })

        
    }

    render() { 
        return ( 
            <article className="post">
                <h2 className="post__title">{this.state.post.title}</h2>
                <p className="post__content">{this.state.post.body}</p>
            </article>
         );
    }
}
 
export default Post;