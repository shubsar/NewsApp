
import './App.css';

import React, { Component } from 'react'
import Navbar from './Navbar';
import News from './News';
import { createBrowserRouter, RouterProvider } from "react-router-dom";






const pageSize=10;
 const apiKey=  "3d50d30d79e4415da89f6245a8e08429";

  

const router= createBrowserRouter([
  {
    path:"/",
    element:(
      <>
       <Navbar/>
       
       
       
    
       
       <News apiKey={apiKey}  key="general" pageSize={pageSize} country={'us'} category={"general"}/>
      </>
    )
    
  },
  {
    path:"/business",
    element:(
      <>
       <Navbar/>
      
       <News apiKey={apiKey}  key="business" pageSize={pageSize} country={'us'} category={"business"}/>
      </>
    )
    

  },
  {
    path:"/entertainment",
    element:(
      <>
       <Navbar/>
    
       <News apiKey={apiKey} key="entertainment"  pageSize={pageSize} country={'us'} category={"entertainment"}/>
      </>
    )
    

  },
  {
    path:"/general",
    element:(
      <>
       <Navbar/>
     
       <News apiKey={apiKey} key="general" pageSize={pageSize} country={'us'} category={"general"}/>
      </>
    )
    

  },
  {
    path:"/health",
    element:(
      <>
       <Navbar/>
       
       <News apiKey={apiKey} key="health" pageSize={pageSize} country={'us'} category={"health"}/>
      </>
    )
    

  },
  {
    path:"/science",
    element:(
      <>
       <Navbar/>
      
       <News apiKey={apiKey} key="science" pageSize={pageSize} country={'us'} category={"science"}/>
      </>
    )
    

  },
  {
    path:"/sports",
    element:(
      <>
       <Navbar/>
      
       <News apiKey={apiKey} key="sports" pageSize={pageSize} country={'us'} category={"sports"}/>
      </>
    )
    

  },
  {
    path:"/technology",
    element:(
      <>
       <Navbar/>
       <News apiKey={apiKey} key="technology"  pageSize={pageSize} country={'us'} category={"technology"}/>
      </>
    )
    

  }
])


 const App=()=> {
  

  
 
   
    return (
      <div>
       
        
        <RouterProvider  router={router}>
        
       

        </RouterProvider>
        

      </div>
    )
  }
  export default App;





