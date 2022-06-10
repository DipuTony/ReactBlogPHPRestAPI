// const BlogList = ({ blog,title, handleDelete}) => {
import React from 'react'

export default function BlogList (props) {
const blog = props.blog; // Get Data from Home.js through props
const title = props.title;

  return (
    <div className='blog-list'>
        <h2 align="center">{ title }</h2><br/>
          {blog.items.map((e) => (
               <div className="blog-preview" key={e.id}>
                 <div className="blogposts">
                   <div className='blogpost-title'>{e.name}</div>
                   <div className='blogppost-post'>{e.description}</div>
                   <div className='blogpost-author'>Written By : { e.price }</div>
                   </div>
                   <p className='border-below'></p>
               </div>
           ))}
    </div>
  )
}

// export default BlogList;
