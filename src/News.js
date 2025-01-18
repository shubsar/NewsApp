import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';



export default class News extends Component {
 



    constructor(){
        super();
        this.state={
            articles:[],
            loading:false,
            page:1
        }

    }
   
    async componentDidMount(){
      console.log("cdm");
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3d50d30d79e4415da89f6245a8e08429&page=1&pageSize=${this.props.pageSize}`
      this.setState({loading:true})
      let data=await fetch(url);
      let parsedData= await data.json();
      console.log(parsedData);
      this.setState({articles:parsedData.articles,
        totalResults:parsedData.totalResults,
        loading:false

      })



    }
    handleNextButton=async()=>{
      if(!(this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize))){

      
      


      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3d50d30d79e4415da89f6245a8e08429&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
      this.setState({loading:true})
      let data=await fetch(url);
      let parsedData= await data.json();
      console.log(parsedData);
      this.setState({
        page:this.state.page+1,
        articles:parsedData.articles,
        loading:false
      })
    }
    


    }
    handlePrevButton=async()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3d50d30d79e4415da89f6245a8e08429&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
      this.setState({loading:true})
      let data=await fetch(url);
      let parsedData= await data.json();
      console.log(parsedData);
      this.setState({
        page:this.state.page-1,
        articles:parsedData.articles,
        loading:false
      })


    }
  render() {
    
    return (
        
      <div className='container my-3' >
        <h2 className='text-center'style={{margin:"35px"}}>NewsMonkey-Top Headlines</h2>
        {this.state.loading&&<Spinner/>}
        
        <div className='row'>
        {!this.state.loading&&this.state.articles.map((element)=>{
          return <div className='col-md-4'key={element.url}>
          <NewsItem title={element.title?element.title.slice(0,88):""} description={element.description?element.description.slice(0,45):""}
          imageUrl={element.urlToImage}
          newsUrl={element.url}/>
          </div>
          
        })}
            
     
      
      </div>
      <div className='container  d-flex justify-content-between'>
    
      <button disabled={this.state.page<=1}type="button"onClick={this.handlePrevButton} className="btn btn-dark my-3 ">&laquo;Previous</button>
      <button disabled={this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize)} type="button"onClick={this.handleNextButton} className="btn btn-dark my-3 "> Next &raquo; </button>
      </div>


      </div>
     
      
      

      
    )
  }
}
