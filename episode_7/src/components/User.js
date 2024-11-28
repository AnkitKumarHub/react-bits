import {useState} from "react";

// const User = (props) =>{

//  you can write the props and then use like props.name  or you can destructure in parameter also and use it directly  

const User = ({name}) =>{
    const [count, setCount] = useState(0);
    const [count2] = useState(2);
    return (
        <div className="user-card">
            <h1>count: {count}</h1>
            <h1>2nd count: {count2}</h1>
            <h2>Name :{name}</h2>
            <p>Location: Delhi</p>
            <p>Contact: @ankitkumar</p>
        </div>
    )
};

export default User;