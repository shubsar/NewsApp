import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector, useDispatch } from "react-redux";
import { addArticles, setArticles } from "./Redux/slice/articlesSlice";
import { incrementPage, setPage } from "./Redux/slice/pageSlice";
import { fetchNews } from "./Redux/slice/articlesSlice";

const News = (props) => {
  const page = useSelector((state) => state.page.pageNum);
  console.log(page);
  
  const { articles, loading,totalResults } = useSelector((state) => state.articles);
  console.log(articles,loading)
  const dispatch = useDispatch();

  

  const capitalizeFirstLetter = (val) => {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  };

  const updateNews = async () => {
    dispatch(
      fetchNews({
        country: props.country,
        category: props.category,
        apiKey: props.apiKey,
        pageSize: props.pageSize,
        page,
      })
    ); // Fetch more articles using Redux action

    
    // Update articles in Redux store
   

    dispatch(setPage(1)); // Reset page to 1 when fetching new data
  };
  const fetchMoreData = async () => {
   

    dispatch(incrementPage()); // Increment page when fetching more data

    dispatch(
      fetchNews({
        country: props.country,
        category: props.category,
        apiKey: props.apiKey,
        pageSize: props.pageSize,
        page,
      })
    ); // Fetch more articles using Redux action

     // Add more articles to Redux store
    // setTotalResults(parsedData.totalResults);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)}-NewsMonkey`;
    updateNews();
  }, []);

  return (
    <>
      <h2
        className="text-center"
        style={{ margin: "35px", marginTop: "100px" }}
      >
        NewsMonkey-Top Headlines {capitalizeFirstLetter(props.category)}
      </h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 88) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 45)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};
export default News;
