import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        axios.get('http://25.48.35.14:8080/agrozapchast/categories')
            .then(response => {
                console.log(response)
                this.setState({ posts: response.data.categories })
            })
            .catch(error => { console.log(error) })
    }
    render() {
        const { posts } = this.state
        return (
            <div>List of posts
                {posts.length ?
                    posts.map(post => <div key={post.id}>{post.name}{<img style={{ width: 175, height: 175 }} src={post.categoryImgURL}/>}</div>) :
                    null
                }
            </div>
        )
    }
}

export default PostList