import React from 'react';

export default function Courses(){
  const [courses, setCourses] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(()=>{
    setLoading(true);
    fetch('http://localhost:5000/api/courses')
      .then(res => res.json())
      .then(data => {
        setCourses(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load courses');
        setLoading(false);
      });
  },[]);

  if(loading) return <p>Loading courses...</p>;
  if(error) return <p>{error}</p>;

  return (
    <section className="courses">
      <h2>Our Courses</h2>
      <div className="grid">
        {courses.map(c => (
          <div className="card" key={c._id}>
            <h3>{c.title}</h3>
            <p>{c.description}</p>
            <p><strong>Duration:</strong> {c.duration}</p>
            <p><strong>Price:</strong> ₹{c.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}