import React from 'react'

export default class ClassComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.increment = () => this.setState({count: this.state.count + 1})
        this.decrement = () => this.setState({count: this.state.count - 1})
    }
    render()
        {
            return(
                <div>
                    {
                    console.log(this.state.count)
                    }
                    <button onClick={this.increment}>Add</button>
                    <button onClick={this.decrement}>Delete</button>
                    <div className="counter">
                    Number of test:{this.state.count}
                </div>
                </div>
            )
        }
        
}
