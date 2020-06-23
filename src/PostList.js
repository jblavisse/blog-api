import React, { Component } from 'react';
import Post from "./Post";
import axios from 'axios';
import "./PostList.css";


class PostList extends Component {
    state = {
        posts: []
      }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            this.setState({
                posts: res.data
            })
        })
    }

    render() { 

        let postsListEl = this.state.posts.map(post => {
                return <Post post={post} />
        })

        return ( 
        <div className="posts">
            {postsListEl}
        </div> 
        );
    }
}
 
export default PostList;