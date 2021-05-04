import { useEffect, useState } from 'react';
import { list } from '../services/apiService';

const Courses = () => {

const [courses, setCourses] = useState([]);

useEffect(() => {
  list('courses', data => {
    setCourses(data);
  })
}, []);

  return (
    <div className="container">
      <h1>Courses</h1>
      <table>
        <thead>
          <tr>
            <th>Course name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(c => (
            <tr>
            <td>{c.name}</td>
            <td>{c.points}</td>
        </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Courses;
