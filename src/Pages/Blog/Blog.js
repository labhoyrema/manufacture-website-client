import React from "react";

const Blog = () => {
  return (
    <>
      <div>
        <img
          className="w-full h-96"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6KQQQtnCi09Ja_Ic4sQ-dVkhH7dn3odFBQ&usqp=CAU"
          alt="blog"
        />
      </div>
      <div className=" max-w-7xl py-16 mx-auto px-2 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-2xl font-bold py-6">
            1. How will you improve the performance of a React Application ?
          </h2>
          <p className="text-xl py-2">
            Many way to improve performance of a React Applicatoin are like
            Using React Suspense and React Lazy for Lazy loading components and
            using React memo for component memozization and Virtualize Large
            list using react-window .
          </p>
          <h2 className="text-2xl font-bold py-6">
            2. What are the different ways to manage a state in a React
            application?
          </h2>
          <p className="text-xl py-2">
            There is libery call Redux which made for state management . With
            Redux can be managed large amount of state other way is using React
            Hooks . With React Hook can only us in Functional components not in
            class based component .
          </p>
          <h2 className="text-2xl py-6 font-bold">
            3. Why you do not set the state directly in React?
          </h2>
          <p className="text-xl py-2">
            f you update it directly, calling the setState() afterward may just
            replace the update you made. When you directly update the state, it
            does not change this.state immediately. Instead, it creates a
            pending state transition, and accessing it after calling this method
            will only return the present value. You will lose control of the
            state across all components.
          </p>
          <h2 className="text-2xl font-bold py-6">
            4. what is a unit test? Why should write unit tests?
          </h2>
          <p className="text-xl py-2">
            The main objective of unit testing is to ensure that each individual
            part is working well and as it’s supposed to work. The entire system
            will only be able to work well if the individual parts are working
            well. Unit testing is performed by the software developers
            themselves. Sometimes, independent software testers also perform
            these tests.
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;
