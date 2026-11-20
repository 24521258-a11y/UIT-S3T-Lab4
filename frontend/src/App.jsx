
import React, { Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Outlet
} from "react-router-dom";

import Home from "./pages/Home.jsx";
import PeopleLayout from "./exercises/Exercise1.2/PeopleLayout.jsx";
import FormPage from "./exercises/Exercise1.3/FormPage.jsx";
import Skeleton from "./exercises/Exercise1.1/Skeleton.jsx";

import "./App.css";

const PersonDetail = React.lazy(
  () => import("./exercises/Exercise1.2/PersonDetail.jsx")
);

function Layout() {
  return (
    <>
      <header className="site-header">
        <h2>UIT-S3T Lab 4</h2>

        <nav aria-label="Main navigation">
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/people">
            People
          </NavLink>

          <NavLink to="/form">
            Form Validation
          </NavLink>
        </nav>
      </header>

      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

function PeopleWelcome() {
  return (
    <div className="person-details">
      <h2>Select a Person</h2>
      <p>Choose someone from the list.</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="people"
            element={<PeopleLayout />}
          >
            <Route
              index
              element={<PeopleWelcome />}
            />

            <Route
              path=":id"
              element={
                <Suspense fallback={<Skeleton />}>
                  <PersonDetail />
                </Suspense>
              }
            />
          </Route>

          <Route
            path="form"
            element={<FormPage />}
          />

          <Route
            path="*"
            element={<h1>404 - Page Not Found</h1>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
