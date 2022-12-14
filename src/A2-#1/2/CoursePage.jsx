import React, { Component } from "react";
import { Link, useParams } from 'react-router-dom';
function CoursePage({ lectures }) {
    let { courseName } = useParams()
    let prod = lectures.filter((pr) => pr.course === courseName);
    return (
        <div className="container">
            <h4>Course Name: {courseName}</h4>
            <h4>List of lectures</h4>
            <ul>
                {prod.map((l) => (
                    <li>
                        <Link to={`/lecture/${courseName}/${l.id}`}>
                            Lecture id:{l.id} - {l.topic}
                        </Link>
                    </li>
                ))}
            </ul>

        </div>
    )

}
export default CoursePage