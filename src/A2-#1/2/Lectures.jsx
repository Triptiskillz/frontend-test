import React, { Component } from "react";
import { Link, useParams } from 'react-router-dom';
function Lectures({ lectures }) {
    // let { courseName } = useParams()
    // let prod = lectures.filter((pr) => pr.course === courseName);
    return (
        <div className="container">
            <h4>List of lectures</h4>
            <ul>
                {lectures.map((l) => (
                    <li>
                        <Link to={`/lecture/${l.course}/${l.id}`}>
                            Lecture id:{l.id} - {l.topic}
                        </Link>
                    </li>
                ))}
            </ul>

        </div>
    )

}
export default Lectures