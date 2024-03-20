import ListManga from "./ListManga";
import { Link } from "react-router-dom";
import mangaData from "../assets/mangaData"
import "../assets/AllManga.css"
function AllManga() {
    return (
        <div className="all-manga-container">
          <div className="all-manga-header">
            <h1 className="all-manga-title">All Manga</h1>
            <nav className="all-manga-nav">
              <Link to="/createReview" className="dashboard-button">Write Reviews</Link>
              <Link to="/allManga" className="dashboard-button">All Manga</Link>
              <Link to="/search" className="dashboard-button">Search</Link>
            </nav>
          </div>
          <div className="popular-manga-container">
            <h2>All Manga</h2>
            <main className="all-manga-content">
              <ListManga manga={mangaData} />
            </main>
          </div>
        </div>
      );
}

export default AllManga;
