import React from "react";
import NavBar from "../Components/NavBar";
import Left_Nav from "../Components/Left_Nav";
import Right_Nav from "../Components/Right_Nav";
import { Outlet } from "react-router";
import LatestNews from "../Components/LatestNews";
import MainNavBar from "../Components/MainNavBar";

const HomeLayOut = () => {

  // const {state} = navigator

  return (
    <div>
      <header>


        {/* not use navbar using header */}
        <NavBar></NavBar>
        <section className="w-11/12 mx-auto">
          <LatestNews />
        </section>
        <nav>
          <MainNavBar/>
        </nav>
      </header>
      <main className="grid grid-cols-12 w-11/12 mx-auto gap-5">
        <section className="nav-Left col-span-3 sticky top-0 h-fit">
          <Left_Nav />
        </section>
        <section className="main col-span-6">
          <Outlet />
        </section>
        <section className="nav-Right col-span-3 sticky top-0 h-fit ">
          <Right_Nav />
        </section>
      </main>
    </div>
  );
};

export default HomeLayOut;
