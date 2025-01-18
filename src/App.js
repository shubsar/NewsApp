
import './App.css';

import React, { Component } from 'react'
import Navbar from './Navbar';
import News from './News';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router= createBrowserRouter([
  {
    path:"/",
    element:(
      <>
       
       <News key="general" pageSize={5} country={'us'} category={"general"}/>
      </>
    )
    
  },
  {
    path:"/business",
    element:(
      <>
      
       <News key="business" pageSize={5} country={'us'} category={"business"}/>
      </>
    )
    

  },
  {
    path:"/entertainment",
    element:(
      <>
    
       <News key="entertainment"  pageSize={5} country={'us'} category={"entertainment"}/>
      </>
    )
    

  },
  {
    path:"/general",
    element:(
      <>
     
       <News key="general" pageSize={5} country={'us'} category={"general"}/>
      </>
    )
    

  },
  {
    path:"/health",
    element:(
      <>
       
       <News key="health" pageSize={5} country={'us'} category={"health"}/>
      </>
    )
    

  },
  {
    path:"/science",
    element:(
      <>
      
       <News key="science" pageSize={5} country={'us'} category={"science"}/>
      </>
    )
    

  },
  {
    path:"/sports",
    element:(
      <>
      
       <News key="sports" pageSize={5} country={'us'} category={"sports"}/>
      </>
    )
    

  },
  {
    path:"/technology",
    element:(
      <>
      
       <News key="technology"  pageSize={5} country={'us'} category={"technology"}/>
      </>
    )
    

  }
])


export default class App extends Component {
  
  render() {
   
    return (
      <div>
        <Navbar/>
        
        <RouterProvider  router={router}>
       

        </RouterProvider>
        

      </div>
    )
  }
}




