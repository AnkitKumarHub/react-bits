# ep-07 Finding the Path (Routing)

react-router-dom (library) .v7

whenever you have to develop routes => build routing configuration 

step-1 : import createBrowserRouter from react-router-dom
step-2 : createBrowserRouter takes some configuration which is a list(array) of objects and each object defines a different path and what should happen on that path
step-3 : now i need to provide the configuration to render it so i need to import "RouterProvider" component from react-router-dom 


now if you go on any random route the react-router will throw an error page 

so now we will another hook =>

**useRouteError** => it will give more information about the error and we can use to display our custom build pages 


***Children Routes***
1. importing Outlet from react-router
2. Outlet will take replace of children route acc to path and want to reuse Header 


* Now i want to create the link when the button is clicked it should take to the respective page 

1st way - using anchor tag and linking to the page =>   but in react you should never use the anchor tag because => it reloads the whole page like header also => in react you can navigate to the new page without reloading of the whole page 


2nd way - using **link** component from react-router => it only changes the component it doesnot reloads the whole page but Link on basic level uses the anchor tag which you can see in html 

* React are called **Single Page Application** because the only component keeps getting changes via a client side routing 




# There are 2 types of routing you can have in web application  =>
 - Client Side Routing => here it is the client side routing we are not making any network calls while we are moving towards any page because all the components are already loaded in to app
 - Server Side Routing => it reloads the whole page and  sends the network call to the "About.html" fetches that html and render it on the web page 


 ***Building restaurant pages functionality***  => Dynamic routing 




 # ep-08 Let's get Classy 

 * functional based Component => this is a normal function component => which return piece of JSX 

 * Class based Component => this is the older way of creating component => class based component is a class extendes from react.Component which has a render method which return some piece of JSX 

 eg: 
 class UserClass extends React.Component{
    render() {
        return (
            
        )
    }
}


* now we will learn how to pass props 

functional props 
- passing in functional component 
<User name={"Ankit Kumar (functional props)"}/>

- recieving props
const User = ({name}) =>{
    return (
        <div className="user-card">
            <h2>Name :{name}</h2>
        </div>
    )
};


class component 
- passing in class component 
 <UserClass name = {"Ankit (class)"}/>

- recieving props 
class UserClass extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="user-card">
                <h2>Name : {this.props.name}</h2>
            </div>
        )
    }
}


* now we will learn about the state variable and local variable in the class component 
- functional component => we use hook which is known as useState to create state variable => invoking/mounting  that function component on the web page 

- class component => loading the class component on te web page => creating the instance of the class => so constructor is created it is the best place to recieve props and to create state variable 

how to create 2 state variable in both ???

in functional component =>
 eg:-    const [count, setCount] = useState(0);
        const [count2] = useState(2);

in class component => this.state  is a object which will contains all the state variables
eg:- this.state = {   // state variable 
            count: 0,
            count2: 2,
        };

* How to update state class variable in class based component 
- in functional component => use "set<VariableName>" to update the value  

- in class component => 
    1. never update the state variable directly it will create inconsistencies   eg: this.state.count = this.state.count + 1;
    2. <button onClick={()=>{
                    this.setState({
                        count: this.state.count + 1,
                    });
                }}>Increment</button>

***lifeCycle of class based component ***

life cycle b/w parent and child in class component 
parent class constructor
parent render
child constructor
child render 
child component mount
parent class mount


* why we use **componentDidMount** ??  => used to make API calls but why inside compoentDidMount?? => 
first we will load the component with the basic detail => then we make the API call and fill the detail (diagram in notebook) => so that react components load very fast

in fucntional component => we use API call in useEffect(()=>{//API Calls },[])


when there are two child then how the life cycle works??
-parent constructor
-parent render

    - first child constructor
    - first child render
    
    -second child constructor
    -second child render

    <DOM updates - in Single BATCH>
    -first child componentDidMount
    -second child componentDidMount

-parent componentDidMount

* There are two phase in component lifeCycle(refer the react cycle Diagram)
1. "Render Phase" => (react badge the render phase of all childs because render phase is very fast)
    - constructor
    - render
2. "Commit Phase" => (react tries to badge the commit phase because once the commit phase starts DOM manipulation is very expensive and it takes time)
    - React updates the DOM
    - componentDidMount

=> in this way the react is optimizing the performance 


**API calls inside the class based component 


**life cycle with Api call**
 ----MOUNTING-----

 constructor(dummy)
 Render(dummy)
     <HTML Dummy>
 componentDidMount
    <APi Call>
    <this.setState> => state variable is updated

-----Update------

    render (Api data)
    <HTML(new API data)>
    componentDidUpdate


* ComponentWillUnmount => the component umamount will be called when the component is gone from the page and when will the component go from the page => when you move to the new page => componentWillUnmount will be called

- you want to clean after you change to the another compoonent/ page (btw remember React is SINGLE PAGE APPLICATION) 

**Drawbacks** of single page application =>
 when you are using the SetInterval to print/console something after 1 sec even if you move to the new page it will keep getting printed because its not reloading the page  

 so to avoid this we will clear the interval clearInterval() in componentWillUnmount()

same problem in functional component sooo
* How to clear in functional component 
useffect(()=>{
    const timer = setInterval(()=>{
        console.log("Namaste react Op!!)
    }, 1000);


    //by the help of return => basically this is unMounting phase
    return ()=>{
        clearInterval(timer);
    }
}, []);


# ep-09 "Optimising our App"


* Single Responsibility priciple => if you have a class/ that should have a single responsibility 
    - Modularity => to break the code into small modules makes our codes more testable and maintainable
    - Reusability => your code becomes more reusable 

Hooks covered till now => hook is just a utility function 
+ useState
+ useEffect
+ useParams (by react-router)

* custom Hooks => useRestaurantMenu (start with use)
Restaurant menu => to display the Menu data of the restaurant but we were calling the api inside it only so for modular approach we build our custom Hook i.e. useRestaurantMenu() which will deal with the fetching the data through API 



**Large Application** => parcel bundles the code and it produces all js files into one js file which can be of bigger size for the larger application which will make you website slow ultimately 
- chunking 
- code splitting
- dynamic bundling
- **lazy loading** 
- ondemand loading 
- dynamic import

=> you have to make your application into smaller logical  chunks

so for eg for our grocery buisness we will not directly import the grocery component **I will import grocery using lazy loading**
=> which means it will not load the code for the grocery initially until i move to the grocery page => onDemand loading 

Syntax=> import {lazy} from "react and it takes a call back funct. which takes import function and path as the parameter 

const Grocery = lazy(() => import ("path of the component"))

here we are expecting an error that as soon as we click on grocery it gives error as it takes the time to load the grocery code so to solve this 
=> we have import {suspense} from react

Now that your component’s code loads on demand, you also need to specify what should be displayed while it is loading. You can do this by wrapping the lazy component or any of its parents into a <Suspense> boundary:

it takes the fallback with JSX which means while the code is loading what you want to show on the screen i.e loader




# ep -10 "jo dikhta hai vo bikta hai"



# ep-11 "Data is the new oil"

* Higher order Components => is a function that takes a component as input and adds some extra feature to it and then returns a component 

**Feature**  => some RestaurantCards which are promoted 





