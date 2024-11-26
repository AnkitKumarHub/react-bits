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

