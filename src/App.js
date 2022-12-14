import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import GetAllPatients from "./components/GetAllPatients";
import ViewPatientDetails from "./components/ViewPatientDetails";
import CreatePatient from "./components/CreatePatient";
import RecordObservation from "./components/RecordObservation";
import Observations from "./components/Observations";
import EditPatientDetails from "./components/EditPatientDetails";
import EditObservations from "./components/EditObservations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/CreatePatient" element={<CreatePatient />} />
        <Route path="/" element={<GetAllPatients />} />
        <Route path="/patientDetails/:id" element={<ViewPatientDetails />} />
        <Route path="/RecordObservation/:id" element={<RecordObservation />} />
        <Route path="/patientDetails/ViewObservation/:id" element={<Observations />} />
        <Route path="/patientDetails/editObservations/:id" element={<EditObservations />} />
        <Route path="/patientDetails/edit/:id" element={<EditPatientDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
