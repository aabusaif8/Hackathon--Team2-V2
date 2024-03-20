import React from "react";
import "../assets/mangaData"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function FormatManga({ manga }) {
  return (
    <div className="manga-item">
      <p className="field-name">Manga Name : {manga.manga_name}</p>
      <p className="field-name">Manga ID : {manga.manga_id}</p>
      <p className="field-name">Author Name : {manga.author_name}</p>
      <p className="field-name">Rating : {manga.rating}</p>
      <p className="field-name">Description:</p>
      <p className="field-value">{manga.description}</p>
      <Link to={`/${manga.manga_id}/info`} className="read-more-button">
            Read More
        </Link>
    </div>
  );
}

export default FormatManga;

