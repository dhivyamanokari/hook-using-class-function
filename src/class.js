import React from 'react';
class click extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count:0, data:false};
  }
   
  //onSubmit(){
   // this.setState({count : this.state.count+1});
  //}
  componentDidMount(){
    //setTimeout(() => {
     // this.setState({count: 0})
   // }, 1000)
    console.log("hlllloooo")
}
//shouldComponentUpdate(){
  //console.log("null")
//}


componentDidUpdate(){
  //this.setState({data: true})


  console.log("update")
}


componenetWillUnmount(){
  console.log("del")
}



  render() {
    console.log("hi")
    return (
      <div>
        <h1>Welcome your score {this.state.count}</h1>
        <h2>If you know your score !</h2>
        <button onClick={() => this.setState({ count: this.state.count +1})}>Press me</button>
        </div>
    );
  }
}
export default click;

        
        
