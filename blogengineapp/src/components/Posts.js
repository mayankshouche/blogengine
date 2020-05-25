import React from 'react';

const parsePost = (postDate) => {
    let parsedDate = postDate.toString().split("T");
    return ('Published: ' + parsedDate[0]);
}

const Posts = ({ posts }) => {
    return (
        <div>
            <center><h1>Mayank's Blog</h1></center> 
            {posts.map((post) => (
                //need to identify each element with _id to avoid React mutation errors
                <div className="card" key={post._id}> 
                    <div className="card-body">
                    <h5 className="card-title">{post.author}</h5>
                    <h6 className="card-subtitle mb-2 text-muted"> {parsePost(post.publishedDate)} </h6>
                    <p className="card-text">{post.content}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Posts;