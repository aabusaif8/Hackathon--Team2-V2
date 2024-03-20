import React, { useState } from "react";
import Dashboard from "./Dashboard";
import ListManga from "./ListManga";
import "../assets/Search.css"
import { useHistory } from "react-router-dom/cjs/react-router-dom";
export default function Search() {
  const [entries, setEntries] = useState([]);
  const [display, setDisplay] = useState(false);
  const [mangaName, setMangaName] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory()
  function changeHandler(e) {
    setMangaName(e.target.value);
  }

  async function searchHandler(e) {
    e.preventDefault();
    const ac = new AbortController();
    try {
      const mangaSearch = await ListManga(
        { manga_name: mangaName },
        ac.signal
      );
      setEntries(mangaSearch);
      setDisplay(true);
    } catch (error) {
      setError(error);
    }
    return () => ac.abort();
  }

  return (
    <>
      <div className="search-title">
        <h3>Search</h3>
      </div>
      
      <div className="pt-3 pb-3">
        <form className="form-group" onSubmit={searchHandler}>
          <input
          type = 'text'
            name="manga_name"
            id="manga_name"
            onChange={changeHandler}
            placeholder="Enter Manga Name"
            value={mangaName}
            className="form-control"
            required
          />
          <div className="pt-2">
            <button type="submit" className="btn btn-primary">
              Find
            </button>
            <button className="btn btn-secondary" onClick={() => history.push("/dashboard")}>
            Home
          </button>
          </div>
        </form>
      </div>
      {display && (
  <div>
    {entries.length ? (
      <Dashboard />
    ) : (
      <div className="no-manga">
        <h3>No Manga Found</h3>
      </div>
    )}
  </div>
)}
    </>
  );
}