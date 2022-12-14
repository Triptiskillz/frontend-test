import React,{Component} from "react";
import { Link, useParams } from 'react-router-dom';

class Welcome extends Component{
    render(){
        return(
            <div className="container">
                <h4>Welcome : Choose your course</h4>
                <Link to="/courses/React">React</Link><br/>
                <Link to="/courses/Angular">Angular</Link><br/>
                <Link to="/courses/Javascript">Javascript</Link>

            </div>
        )
    }
}
export default Welcome