import React from 'react';
import Right_Nav from '../Components/Right_Nav';
import NavBar from '../Components/NavBar';
import NewsDetailsCard from '../Components/NewsDetailsCard';
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";


const NewsDetails = () => {

    const data = useLoaderData()
    const {id} = useParams()

    const [news , setNews] = useState({});



    useEffect(() => {

        const newsDetails = data.find(singleNews => singleNews.id == id);
        setNews(newsDetails);

    },[data, id]);

    if (!news || Object.keys(news).length === 0) {
        // console.log("no data found");
        return <div>No data found</div>;
      }

    return (
        <div>
            <header className='py-4'>
                <NavBar/>
            </header>
            <main className='grid grid-cols-12 w-11/12 mx-auto gap-5'>
                <section className='col-span-9'>
                    <h2 className='font-bold mb-5'>News Details</h2>
                    <NewsDetailsCard news={news}/>
                </section>
                <aside className='col-span-3'>
                    <Right_Nav/>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;