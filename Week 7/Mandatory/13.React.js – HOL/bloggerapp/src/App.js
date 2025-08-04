import React from 'react';
import './App.css';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';
function App() {
  return (
    <div className="container">
      <div className="section">
        <h1>Course Details</h1>
        <CourseDetails />
      </div>
      <div className="divider" />
      <div className="section">
        <h1>Book Details</h1>
        <BookDetails />
      </div>
      <div className="divider" />
      <div className="section">
        <h1>Blog Details</h1>
        <BlogDetails />
      </div>
    </div>
  );
}
export default App;