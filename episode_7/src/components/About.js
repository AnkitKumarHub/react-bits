import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

//class component 
class About extends Component{
    constructor(props){
        super(props)
        // console.log("parent class constructor")
    }

    componentDidMount(){
        // console.log("parent class mount") 

        //API Call
    }

    render(){
        // console.log("parent render")
        return (
            <div>
                <h1>About</h1>
                <h2>This is about page of namste react web series </h2>
                {/* <User name={"Ankit Kumar (functional props)"}/> */}
    
                <UserClass name = {"Ankit (class)"} location = {"Delhi class"}/>
            </div>
        );
    }
}


//functional component

// const About =() =>{
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is about page of namste react web series </h2>
//             {/* <User name={"Ankit Kumar (functional props)"}/> */}

//             <UserClass name = {"Ankit (class)"} location = {"Delhi class"}/>
//         </div>
//     );
// };

export default About;