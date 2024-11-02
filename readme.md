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