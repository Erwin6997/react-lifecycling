import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './Counter'
import ClassComponent from './ClassComponent'
import Functioncomponent from './Functioncomponent'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      mount:true ,
      ignoreProp: 0 
    }
    this.mountCounter = () => this.setState({mount: true})
    this.UnmountCounter = () => this.setState({mount: false})

    this.ignoreProp = () => this.setState({ignoreProp: Math.render()})
  }
  render(){
    return(
      <div className="main">
        <p>------------- LifeCycling ------------</p>
        <button onClick={this.mountCounter} disabled={this.state.mount}>Mount counter</button>
        <button onClick={this.UnmountCounter} disabled={!this.state.mount}>UnMount counter</button>
        <button onClick={this.ignoreProp}>Ignore prop</button>
        {this.state.mount ? <Counter 
        ignoreProp={this.state.ignoreProp}/> : null}
        <p>----------- Class Component -----------</p>
      <ClassComponent />
      <p>-------- Function Component ----------</p>
      <Functioncomponent />
      </div>
    )
  }
}
ReactDOM.render(<App/> ,  document.getElementById('root'))

