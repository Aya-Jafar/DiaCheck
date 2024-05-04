import React, { useState, useEffect } from "react";
import BlogCard from "./components/BlogCard";
import ArticleHeader from "./components/ArticleHeader";
import PredictionHeader from "../CheckRisk/component/PredictionHeader";
import { useParams } from "react-router-dom";
import { articlesData } from "../../store";

const Blogs = () => {
  const { prediction } = useParams();

  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(10);

  useEffect(() => {
    // Filter articles based on the prediction
    let filteredArticles = [];
    if (prediction === 0) {
      // No diabetes
      filteredArticles = articlesData.filter(
        (article) => article.category === "no-diabetes"
      );
    } else if (prediction === 1) {
      // Low risk of diabetes
      filteredArticles = articlesData.filter(
        (article) => article.category === "have-a-risk-of-diabetes"
      );
    } else if (prediction === 2) {
      // High risk of diabetes
      filteredArticles = articlesData.filter(
        (article) => article.category === "have-diabetes"
      );
    } else {
      // Default: No prediction or invalid prediction
      filteredArticles = articlesData;
    }

    setArticles(filteredArticles);
  }, [prediction]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const displayedArticles = articles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  return (
    <div className="py-16 px-4  ml-8 flex flex-col items-center justify-center text-center lg:text-left">
      {/* Conditional rendering for header */}
      {prediction !== null ? (
        <PredictionHeader prediction={prediction} />
      ) : (
        <ArticleHeader />
      )}

      {/* Pagination section */}
      <div className="w-full flex flex-col text-start items-start justify-start  ">
        {articles.length > articlesPerPage && (
          <div className="pagination flex justify-center mb-8">
            {Array.from(
              { length: Math.ceil(articles.length / articlesPerPage) },
              (_, i) => (
                <button
                  key={i + 1}
                  className={`px-4 py-2 mr-2 rounded-md text-primary shadow-md hover:bg-white hover:text-primary border hover:border-primary focus:outline-none ${
                    currentPage === i + 1
                      ? "bg-primary text-white hover:text-primary border hover:border-primary hover:bg-white"
                      : ""
                  }`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        )}
      </div>

      {/* Displayed articles section */}
      {displayedArticles.length > 0 ? (
        <div className="container mx-auto">
          <div className="flex flex-col w-full">
            {displayedArticles.map((article) => (
              <div key={article.id} className="flex flex-col">
                <BlogCard article={article} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-white">No articles found.</p>
      )}
    </div>
  );
};

export default Blogs;
