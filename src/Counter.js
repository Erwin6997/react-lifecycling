import React from 'react'

export default class Counter extends React.Component {
    constructor (props) {
        console.log(" Constructor ");
        super(props)
        this.state = {
            counter: 0 
        }
        this.increment = () => this.setState({counter: this.state.counter + 1})
        this.decrement = () => this.setState({counter: this.state.counter - 1})
    }

    componentDidMount() {
        console.log('component DiD mount')
        console.log('----------------------------')
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.ignoreProp && 
            this.state.ignoreProp !== nextProps.ignoreProp){
                return false
            }
        return true
    }
    render () {
        console.log('Render')

        return (
            <div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <div className="counter">
                    counter: {this.state.counter}
                </div>
            </div>
            )
    }
    componentDidUpdate( prevProps, preState, snapshot) {
        console.log('component Did Update');
        console.log('--------------------------');
    }
    componentWillUnmount() {
        console.log('component Will Unmount');
        console.log('--------------------------');
    }
}