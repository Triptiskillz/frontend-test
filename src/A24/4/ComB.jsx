import { Component } from "react";
import { Routes, Route } from "react-router-dom";
// import {useParams} from 'react-router-dom';

class ComB extends Component {
    state = { counter: 0 }
    increment = () => {
        this.setState({ counter: this.state.counter + 1 });
    };
    componentDidMount() {
        const { counter } = this.state
        const {name} = this.props.match.params

        console.log(`BBBB:componentDidMount:Counter=${counter} name=${name}`)
    }
    componentDidUpdate(prevProps, prevState) {
        const { counter } = this.state
        const {name} = this.props.match.params

        console.log(`BBBB:componentDidUpdate:counter = ${counter}  name=${name}`)
    if(prevProps !=this.props){
        console.log("Reseting counter using setState")
        this.setState({counter:0});
    }
    }
    componentWillUnmount() {
        const { counter } = this.state
        const {name} = this.props.match.params
        console.log(`BBBB:componentWillUnMount:Counter=${counter}  name=${name}`)
    }
    shouldComponentUpdate(prevProps, prevState) {
        const { counter } = this.state
        const {name} = this.props.match.params
        console.log(`BBBB:shouldComponentUpdate:Counter=${counter}  name=${name}`)
    return false
    }
    render() {
        const { counter } = this.state
        const {name} = this.props.match.params
        console.log(`BBBB:render:counter = ${counter}  name=${name}`)




        return (
            <div className="container bg-primary text-white">
                Component AAA <br />
                Counter :{counter}
                <button className="btn btn-danger btn-sm ml-3"
                    onClick={() => this.increment()}
                >Increment</button>
                <br />
                Name:George
            </div>
        )
    }

}
export default ComB