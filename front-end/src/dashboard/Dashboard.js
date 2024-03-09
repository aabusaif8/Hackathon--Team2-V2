import React, { useEffect, useState } from "react";
import ReservationOrganizer from "./reservationDisplay/ReservationOrganizer"
import { listReservations, listTables } from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";
import { useHistory } from "react-router-dom";
import { previous, next } from "../utils/date-time";
import ListTables from "./TableList/ListTables";

/**
 * Defines the dashboard page.
 * @param date
 *  the date for which the user wants to view reservations.
 * @returns {JSX.Element}
 */
function Dashboard({ date }) {
  const [reservations, setReservations] = useState([]);
  const [tables, setTables] = useState([]);
  const [reservationsError, setReservationsError] = useState(null);
  const history = useHistory();

  useEffect(loadDashboard, [date]);

  function loadDashboard() {
    const abortController = new AbortController();
    setReservationsError(null);
    listReservations({ date }, abortController.signal)
      .then(setReservations)
      .then(listTables)
      .then(setTables)
      .catch(setReservationsError);
    return () => abortController.abort();
  }

  function handleDay() {
    history.push(`/dashboard`);
  }

  function handleYesterday() {
    const newDate = previous(date);
    history.push(`/dashboard?date=${newDate}`);
  }

  function handleTommorow() {
    history.push(`/dashboard?date=${next(date)}`);
  }

  return (
    <main>
      <h1 className="d-md-flex justify-content-center">Dashboard</h1>
      <div className="d-md-flex mb-3 justify-content-center">
        <h4 className="mb-0">Reservations for {date}</h4>
      </div>
      <div className="pb-2 d-flex justify-content-center">
        <button className="btn btn-primary mr-1" onClick={handleDay}>
          today
        </button>
        <button className="btn btn-primary mr-1" onClick={handleYesterday}>
          previous
        </button>
        <button className="btn btn-primary" onClick={handleTommorow}>
          next
        </button>
      </div>
      <ErrorAlert error={reservationsError} />
      <ReservationOrganizer
        reservations={reservations}
        setReservations={setReservations}
        setError={setReservationsError}
      />
      <div>
        <ListTables tables={tables} loadDashboard={loadDashboard} />
      </div>
    </main>
  );
}

export default Dashboard;
