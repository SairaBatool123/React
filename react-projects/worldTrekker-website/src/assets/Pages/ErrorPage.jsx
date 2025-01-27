import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom';
// import "./ErrorModule.css"


function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  
  return (
    <div>
      <main>
        <h1>
          4
          <span>
            <i class="fas fa-ghost"></i>
          </span>
          4
        </h1>
        <h2>Error: 404 page not found</h2>
        <p>Sorry, the page you're looking for cannot be accessed</p>
        <NavLink to="/">
          <button>Go Home</button>
        </NavLink>
      </main>
    </div>
  );
}

export default ErrorPage