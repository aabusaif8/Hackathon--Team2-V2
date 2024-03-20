import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import mangaData from "../assets/mangaData";
import "../assets/ListManga.css"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function MangaInfo() {
  const { manga_id } = useParams();
  const [selectedManga, setSelectedManga] = useState(null);
  const history = useHistory()
  useEffect(() => {
    const foundManga = mangaData.find((manga) => manga.manga_id === Number(manga_id));
    setSelectedManga(foundManga);
  }, [manga_id]);

  if (!selectedManga) {
    return <div>Loading...</div>;
  }
  const goHome = () => {
    history.push('/dashboard')
  }

  return (
    <div className="manga-item">
      <p className="field-name">Manga Name : {selectedManga.manga_name}</p>
      <p className="field-name">Author Name : {selectedManga.author_name}</p>
      <p className="field-name">Rating : {selectedManga.rating}</p>
      <p className="field-name">Description:</p>
      <p className="field-value">{selectedManga.description}</p>
      <button className="home-button" onClick={goHome}> Home
      </button>
    </div>
  );
}

export default MangaInfo;

