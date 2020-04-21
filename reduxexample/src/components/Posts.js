import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/postActions'

class Posts extends Component {

    componentDidMount(){
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }
    }
    
    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1> Posts </h1>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

//map state to props to get state from redux and use in this component
const mapStateToProps = state => ({
    posts: state.posts.items,     //posts in state.posts comes from reducer where we set posts: postReducers
    newPost: state.posts.item      //only added because we are not adding to database and re fetching like we should
})

export default connect(mapStateToProps, {fetchPosts})(Posts);