import { useHistory } from "react-router-dom";
import { useState } from "react";
import "../assets/CreateReview.css"
function CreateReview() {
  const history = useHistory();
  const [mangaReview, setMangaReview] = useState({
    rating: "",
    review: "",
    reviewer_name: ""
  });

  const handleCancel = () => {
    history.push("/dashboard");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    history.push("/dashboard");
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setMangaReview({
      ...mangaReview,
      [name]: value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-group">
      <fieldset>
        <legend className="d-flex justify-content-center">Review Information</legend>
        <div className="pb-1">
          <input
            type="text"
            name="manga_name"
            className="form-control"
            id="manga_name"
            placeholder="Manga Name"
            value={mangaReview.manga_name}
            onChange={handleFormChange}
            required
          />
        </div>
        <div className="pb-1">
          <input
            type="number"
            name="manga_id"
            className="form-control"
            id="manga_id"
            placeholder="Manga ID"
            value={mangaReview.manga_id}
            onChange={handleFormChange}
            required
          />
        </div>
        <div className="pb-1">
          <input
            type="number"
            name="rating"
            className="form-control"
            id="rating"
            placeholder="Rating"
            value={mangaReview.rating}
            onChange={handleFormChange}
            required
          />
        </div>
        <div className="pb-1">
          <textarea
            name="review"
            className="form-control mb-1"
            id="review"
            placeholder="Review"
            value={mangaReview.review}
            onChange={handleFormChange}
            required
          />
        </div>
        <div className="pb-1">
          <input
            type="text"
            name="reviewer_name"
            className="form-control"
            id="reviewer_name"
            placeholder="Reviewer Name"
            value={mangaReview.reviewer_name}
            onChange={handleFormChange}
            required
          />
        </div>
      </fieldset>

      <div className="d-flex justify-content-center pt-2">
        <button type="submit" className="btn btn-primary mr-1">
          Submit
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );

}

export default CreateReview;
