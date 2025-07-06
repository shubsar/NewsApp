import React from 'react'

   const NewsItem=(props)=>{

    
        let { title, description,imageUrl,newsUrl, author, date,source} = props;
        return (
            <div>
                <div className="card" style={{margin:20}}>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"style={{left:'50%', zIndex:'1'}} >
                {source}</span> 
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                   
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark btn-primary">Read more</a>
                        <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                    </div>
                    
                </div>
                


            </div>
            
        )
    }
    
    export default NewsItem;

