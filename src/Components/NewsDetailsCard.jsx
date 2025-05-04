import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  // const {img} = news

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img
          className="w-full h-[350px] object-cover"
          src={news.image_url}
          alt="newsPhoto"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{news.title}</h2>
        <p>{news.details}</p>
        <div className="card-actions ">
          <Link to={`/category/${news.category_id}`} className="btn btn-primary px-15">
            <FaArrowLeftLong />
            All news in this category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
