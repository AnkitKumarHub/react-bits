********code slowww************
- the people who code slow doesnot need to debug their code or very less and people who code fast have to debug alot



# 4

* how to give inline styles in react (you cant give directly with the help of style tag as in css)

-  in javascript file you give the inline css as js objects

const styleCard = {
    backgroundColor: light grey
}

this styleCard will be the javascript object in which we write the css properties

const RestaurantCard=() =>{
    return (
        <div className ="res-card  style = {styleCard}>
        <h3> Meghana food </>
        </div>
    );
}


*****************   OR   *************

const RestaurantCard=() =>{
    return (
        <div className ="res-card  style = {{backgroundColor: light grey}}>  
        <h3> Meghana food </>
        </div>
    );
}

- in style first piece of bracket tells you that there is some piece of javascript in it and 2nd is for js object 


*** props ***

props is known as the properties which is passed to the component 
suppose i want to pass dynamically data to the component so we can pass it as prop

function component => normal javscript fun => props are nothing but "normal arguments" to the function


- when you want to dynamically pass some data to a component you pass it as props 

react will wraps all of them as the object and pass it 


* ConfigDrivenUI  (all th UI is driven by the config)

some data can be different for delhi mumbai or kolkata for eg in SWIGGY offers will be different for each places 




*** option chaining (?.)***

This ?. ensures that if resData or resData.info is undefined or null, the code won’t throw an error. Instead, each variable will get the value undefined safely.

Optional chaining (?.) is a feature in JavaScript that allows you to safely access deeply nested properties of an object without worrying about whether a property along the chain exists or is null or undefined. If any part of the chain is null or undefined, the evaluation stops and returns undefined instead of throwing an error.


* Map

wherever you use map you also have to pass key which will be the  unique for the code optimaization otherwise it will render the all card component because map does not which card come with the help of unique key it will render that particular card

* Rect itself says never use indexes as the key  (its NOT RECOMMENDED )


Not using keys (not acceptable ) <<<<<<< index as the key <<<<<<<<<<<<<< Unique key as the id (best practice )



# ep-05 let get's hooked



*** File Strucutre ***
- All the source code are written in src (source code) folder 
- and all the components in the "components" folder 



* APP UI(Namaste Food)
/**
 * Header
 *  - logo
 *  - nav items
 * Body
 *  - search bar
 *  - Restaurant Container
 *      - restaurantCard
 * Footer
 *  - copyright
 *  - links
 *  - address
 *  - contact
 */



There are two types of Export/Import
 - Default export/Import
 
    when you have to export only one module => export default component

    Import => import <Componet name> from <path>


 - Named export/Import
    when you want to export multiple things we use named export 
        export const component

    Import => import {component} from "path";
        

Ques => can we use default along with named export???

*** -----------------------------------------------------------------------------------------------------------  *** 

* feature => building a button(filter like functionality) which will show us top rated restaurant on the click 


* when we say react is fast => react is fast, efficient in DOM Manipulation , Virtual DOM, diff algorithm, reconcilation Algo(React Fibre => react-16) (suppose you want to keep data layer and UI layer consistent with each other that is wher React comes to the picture => if my data chnages the UI layer changes )


*** React Hooks ***

- react Hook => Normal js utility function given by react with some additional feature prebuilt 

1. useState() - Superpowerful state variable in react 
2. useEffect()

state variable => super powerful variable 

whenever a state variable updates react will re-renders the component 



# ep-06 exploring the world 

Hook => it is normal javascript function which react gives to us which has its own specific use case where we use this function 

* useEffect hook => it will take two argument 1st is Arrow function (callback fun) and 2nd is dependency array
syntax => useEffect(()=>{"callBack function"}, []) 

now the question is when will the callback function will be called ??
ans- this call back function will be called after the component is rendered

fetch() is a func provided by the browser superpower shich JS engine has which returns the promise which you will be resolve by async and await 

**ERROR** Access to fetch at from origin 'http://localhost:1234' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource (our browser block us to call one api from one origin to different origin)


what is CORS Policy ??? => solved by cors extension 
CORS (Cross-Origin Resource Sharing) is a security mechanism implemented by web browsers to regulate how resources hosted on one domain can be requested by a web application hosted on a different domain. It prevents unauthorized access and ensures that only permitted cross-origin requests are allowed.




**Shimmer UI**
- just rendering fake cards (pages) for better UI experience untill the data comes from the api


* Loogin functionality => when we click on Login button it should change to the logout and then again on click to login 

// why do we even need state variable can't we use normal javascript variable 


=> with simple local JS variable the value gets updated but the " UI doesn't get updated or rendered " 

- react will not track the updated value of the variable but with the useState hook the react will track the value of the "state variable" and when ever it changes using the setbtnname() react will re-render the whole component(header)  

how it is changing or modifying  the value of const variable ?? Is it not defeating the javascript variable 

That on the initial time state variable was login but as soon as i do setBtnName("Logout") it will call header function once again it will create a new instance, this btnName in react is different from the older which was getting printed and when the newBtnName is created it is not created with the default value but with the updated value from the setBtnName()


**Search-Functionality**


