import React, { Component } from "react";
import { Link, useParams } from 'react-router-dom';


function Lecture( { lectures } ){
        const {courseName,lecId} = useParams()
        let lect =lectures.find((l)=> l.id == lecId)
        console.log(lect)
        return (
            <div className="container">
               <h4>Lecture</h4>
               <h6>ID : {lect.id}</h6>
               <h6>Course : {lect.course}</h6>
               <h6>Topic : {lect.topic}</h6>

            </div>
        )

}
export default Lecture