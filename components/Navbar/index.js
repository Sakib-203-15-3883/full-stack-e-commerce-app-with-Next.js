"use client";
import { Fragment, useContext, useEffect } from "react";
import { adminNavOptions, navOptions } from "@/utils";

const isAdminView = false;
const isAuthUser = true;

const user = {
  role: "admin",
};

function NavItems() {
  return (
    <div
      className="items-center justify-between w-full md:flex md:w-auto "
      id="nav-items"
    >
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white">


        {isAdminView
          ? adminNavOptions.map((item) => (
              <li
                className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0"
                key={item.id}
              >
                {item.label}
              </li>
            ))
          : navOptions.map((item) => (
              <li
                className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0"
                key={item.id}
              >
                {item.label}
              </li>
            ))}
      </ul>
    </div>
  );
}

//////////////           Navbar        /////////////

export default function Navbar() {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* For page logo in left side of navbar */}

        <div className="flex items-center cursor-pointer">
          <span className=" self-center text-2xl font-semibold whitespace-nowrap">
            E-commerce
          </span>
        </div>

        {/* displayed  all the navigation buttons on the middle and right part of the navbar  */}

        {/* Here we use ,  the ternary operator to conditionally render JSX content based on the value  */}

        <div className="flex md:order-2 gap-2">
          {/* Fragment is a way to group multiple elements in React without introducing an additional DOM element. */}
          {!isAdminView && isAuthUser ? (
            <Fragment>
              <button >
                Account
              </button>
              <button >
                Cart
              </button>
            </Fragment>
          ) : null}

          {
            // user?.role === 'admin' ; here,  The ?. is an optional chaining operator, which ensures that the code doesn't throw an error if user is null or undefined

            user?.role === "admin" ? (
              isAdminView ? (
                <button>Client View</button>
              ) : (
                <button> Admin View</button>
              )
            ) : null
          }

          {isAuthUser ? <button>Logout</button> : <button>Login</button>}


          {/* For Mobile device Navigation */}

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => setShowNavModal(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        {/* End of Mobile Screen navigation */}

        <NavItems />
      </div>
    </nav>
  );
}
