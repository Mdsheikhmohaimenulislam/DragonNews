import React, { useEffect, useState } from "react";

import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const datas = useLoaderData();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (id == 0) {
      setCategories(datas);
      return;
    } else if (id == "1") {
      const filterNews = datas.filter(
        (data) => data.others.is_today_pick == true
      );
      setCategories(filterNews);
    } else {
      const filterNews = datas.filter((data) => data.category_id == id);
      setCategories(filterNews);
    }
  }, [datas, id]);


  if (categories.length === 0) {

    return <div>No data found</div>;
  }

  
  return(
    <div className="space-y-5">
      <h1 className="font-semibold">Dragon News Home</h1>
      {
        categories.map(categorie => <NewsCard key={categorie.id} categorie={categorie}></NewsCard>)
      }
    </div>
  );
};

export default CategoryNews;
