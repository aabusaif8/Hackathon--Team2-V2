// MangaList.js
import React from "react";
import FormatManga from "./FormatManga";
import mangaData from "../assets/mangaData";

function ListManga() {
  return (
    <div className="manga-list-container">
      {mangaData.map((manga) => (
        <div key={manga.manga_id}>
          <FormatManga manga={manga} />
        </div>
      ))}
    </div>
  );
}

export default ListManga;



