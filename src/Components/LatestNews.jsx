import React, { use } from "react";
import Marquee from "react-fast-marquee";

const categoriesPromise = fetch("/categories.json").then(res => res.json());

const LatestNews = () => {

  const categories = use(categoriesPromise);

  return (
    <div className="flex gap-5 items-center bg-base-300 p-3 mb-5">
      <p className="text-base-100 bg-primary p-2">Latest</p>
      <Marquee pauseOnHover={true} speed={120}>
        <div className="flex space-x-5">
        {
          categories.map(news => <p key={news.id}>{news.name}</p>)
        }
        </div>
      {/* <p className='font-bold'>Breaking News in Dhaka !</p> */}
      </Marquee>
    </div>
  );
};

export default LatestNews;
