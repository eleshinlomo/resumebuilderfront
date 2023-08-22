import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import {Link} from 'react-router-dom'


const routes =  [

   

   {
        name: 'Resume Builder',
        route: '/resumebuilder',
        component: null,
    
   },
   {
    name: 'Resume Writing',
    route: '/resumewriting',
    component: null,

},
   {
    name: 'About us',
    route: '/about',
    component: About,

}
   

]



export default routes