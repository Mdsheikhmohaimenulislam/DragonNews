import React, { Suspense } from "react";
import Categories from "./Categories";



const Left_Nav = () => {


  return (
    <div>
      <Suspense
        fallback={
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
        }
      >
        <Categories />
      </Suspense>
    </div>
  );
};

export default Left_Nav;
