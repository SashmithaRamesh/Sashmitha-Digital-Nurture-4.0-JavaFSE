import React from 'react';
const blogs = [
  {
    id: 1,
    title: 'React Learning',
    author: 'Stephen Biz',
    content: 'Welcome to learning React!'
  },
  {
    id: 2,
    title: 'Installation',
    author: 'Schwezdenier',
    content: 'You can install React from npm.'
  }
];
function BlogDetails() {
  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <h5><b>{blog.author}</b></h5>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}
export default BlogDetails;