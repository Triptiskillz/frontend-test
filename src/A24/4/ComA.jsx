import { Component } from "react";
class ComA extends Component {
    state = { counter: 0 }
    increment = () => {
        this.setState({ counter: this.state.counter + 1 });
    };

    componentDidMount() {
        console.log(`AAA:componentDidMount:Counter=${this.state.counter}`)
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(`AAAA:componentDidUpdate:counter = ${this.state.counter}`)
    }
    componentWillUnmount() {
        console.log(`AAA:componentWillUnMount:Counter=${this.state.counter}`)
    }
    // shouldComponentUpdate(prevProps, prevState) {
    //     console.log(`AAA:shouldComponentUpdate:Counter=${this.state.counter}`)
    // // return false
    // }
    render() {
        const { counter } = this.state
        console.log(`AAAA:render:counter = ${this.state.counter}`)

        return (
            <div className="container bg-warning text-dark">
                Component AAA <br />
                Counter :{counter}
                <button className="btn btn-danger btn-sm ml-3"
                    onClick={() => this.increment()}
                >Increment</button>
                <br />
            </div>
        )
    }
}
export default ComA