import React, { Component } from "react";
import { Link, useParams } from 'react-router-dom';
function Store({store}) {
    // render() {
         let { id } = useParams()
        //let { id } = this.props.match.params;
        console.log(id)
        // let { product } = this.props;
        let prod = store.find((pr) => pr.id == id);
        return (
            <div className="container">
                Store Id: {prod.id}
                <br />
                Location : 
                <Link to ={`/location/${prod.location}/1`}> {prod.location} </Link>

                <br />
                Email: {prod.email}
                <br />
                Mobile: {prod.mobile}
                <br />
            </div>
        )
    // }
}
export default Store