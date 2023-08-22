import React from 'react'
import Home from './components/Home'
import About from './components/About'


const routes =  [

   

   {
        name: 'Resume Builder',
        route: '/resumebuilder',
        component: Home,
    
   },
   {
    name: 'Resume Writing',
    route: '/resumewriting',
    component: Home,

},
   {
    name: 'About us',
    route: '/about',
    component: About,

}
   

]



export default routes