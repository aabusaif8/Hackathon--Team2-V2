import React, { useState } from "react";
import { listReservations } from "../utils/api";
import ReservationOrganizer from "../dashboard/reservationDisplay/ReservationOrganizer";
import ErrorAlert from "../layout/ErrorAlert";

export default function SearchByMobileNumber() {
  const [reservations, setReservations] = useState([]);
  const [display, setDisplay] = useState(false);
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState(null);

  function changeHandler(e) {
    setMobile(e.target.value);
  }

  async function searchHandler(e) {
    e.preventDefault();
    const ac = new AbortController();
    try {
      const reservations = await listReservations(
        { mobile_number: mobile },
        ac.signal
      );
      setReservations(reservations);
      setDisplay(true);
    } catch (error) {
      setError(error);
    }
    return () => ac.abort();
  }

  return (
    <>
      <div className="d-flex justify-content-center pt-3">
        <h3>Search</h3>
      </div>
      <ErrorAlert error={error} />
      <div className="pt-3 pb-3">
        <form className="form-group" onSubmit={searchHandler}>
          <input
            name="mobile_number"
            id="mobile_number"
            onChange={changeHandler}
            placeholder="Enter a customer's phone number"
            value={mobile}
            className="form-control"
            required
          />
          <div className="pt-2">
            <button type="submit" className="btn btn-primary">
              Find
            </button>
          </div>
        </form>
      </div>
      {display && (
        <div>
          {reservations.length ? (
            <ReservationOrganizer
              reservations={reservations}
              setReservations={setReservations}
              setError={setError}
            />
          ) : (
            <h3>No reservations found</h3>
          )}
        </div>
      )}
    </>
  );
}
