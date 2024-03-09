import React, { useState } from "react";
import { listReservations } from "../utils/api";
import ReservationOrganizer from "../../dashboard/reservationDisplay/ReservationOrganizer";
import ErrorAlert from "../ErrorAlert";

export default function SearchByMobileNumber() {
  const [bookingList, setBookingList] = useState([]);
  const [isDisplaying, setIsDisplaying] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  function handlePhoneNumberChange(event) {
    setPhoneNumber(event.target.value);
  }

  async function handleSearch(event) {
    event.preventDefault();
    const abortController = new AbortController();
    try {
      const reservations = await listReservations(
        { mobile_number: phoneNumber },
        abortController.signal
      );
      setBookingList(reservations);
      setIsDisplaying(true);
    } catch (error) {
      setErrorMessage(error);
    }
    return () => abortController.abort();
  }

  return (
    <>
      <div className="d-flex justify-content-center pt-3">
        <h3>Search Reservations</h3>
      </div>
      <ErrorAlert error={errorMessage} />
      <div className="pt-3 pb-3">
        <form className="form-group" onSubmit={handleSearch}>
          <input
            name="mobile_number"
            id="mobile_number"
            onChange={handlePhoneNumberChange}
            placeholder="Enter customer's phone number"
            value={phoneNumber}
            className="form-control"
            required
          />
          <div className="pt-2">
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </form>
      </div>
      {isDisplaying && (
        <div>
          {bookingList.length ? (
            <ReservationOrganizer
              reservations={bookingList}
              setReservations={setBookingList}
              setError={setErrorMessage}
            />
          ) : (
            <h3>No reservations found</h3>
          )}
        </div>
      )}
    </>
  );
}
