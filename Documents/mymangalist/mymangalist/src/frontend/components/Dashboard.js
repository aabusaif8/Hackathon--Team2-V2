// Dashboard.js

import React from "react";
import { Link } from "react-router-dom";
import ListManga from "./ListManga";
import mangaData from "../assets/mangaData";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <nav className="dashboard-nav">
          <Link to="/createReview" className="dashboard-button">Write Reviews</Link>
          <Link to="/allManga" className="dashboard-button">All Manga</Link>
          <Link to="/search" className="dashboard-button">Search</Link>
        </nav>
      </div>
      <div className="popular-manga-container">
        <h2>Most Popular Manga</h2>
        <main className="dashboard-content">
          <ListManga manga={mangaData} />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;






