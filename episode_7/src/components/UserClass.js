import React from "react";

// class UserClass extends React.Component{
//     // Constructor for initializing state and props
//     constructor(props) {
//         super(props) // Calls the parent class's constructor (React.Component)

//         this.state = {   // state variable
//             count: 0,
//         };

//         // console.log("child constructor")
//     }

//     componentDidMount(){
//         // console.log("child component mount")
//     }
//     render() {
//         // console.log("child render ")
//         const {name, location } = this.props;
//         // const {count} = this.state;
//         return (

//             <div className="user-card">
//                 {/* <h1>count: {count}</h1>
//                 <button onClick={()=>{
//                     this.setState({
//                         count: this.state.count + 1,
//                     });
//                 }}>Increment</button> */}

//                 {/* this.props.name or destructure it  */}
//                 <h2>Name : {name}</h2>
//                 <p>Location: {location}</p>
//                 <p>Contact: @ankitkumar</p>
//             </div>
//         )
//     }
// }

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        userInfo: {
            name: "Dummy",
            location: "Default",
        }
    };
  }

  async componentDidMount() {
    //API call

    const data = await fetch("https://api.github.com/users/ankitkumarhub")
    const json = await data.json();

    
    //updating the state variable 
    this.setState({
        userInfo: json,
    })

    // console.log(json)
    // console.log("component did mount!!")
  }


  componentDidUpdate(){
    // console.log("component did update!!!")
  }

  componentWillUnmount(){
    // console.log("component will unamount!!")
  }

  render() {
    // const {name, location} = this.props;

    const {name, login, avatar_url
    } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name : {name}</h2>
        <p>UserName: {login}</p>
        <p>Contact: @ankitkumar</p>
      </div>
    );
  }
}

export default UserClass;
