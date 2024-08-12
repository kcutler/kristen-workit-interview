import "./dashboardStyles.css";
import { clinicData } from "./clinicData.js";
import calendarIcon from './assets/calendar-booked-dark-blue.svg';
import availabilityIcon from './assets/calendar-dark-blue.svg';
import detailIcon from './assets/right-round-dark-blue.svg';
import manageIcon from './assets/settings-dark-blue.svg';

function ClinicDashboard() {
  return (
    <div className="Clinic-Dashboard">
      <div className="dashboard-header">
        <h1>Clinic Dashboard</h1>
      </div>

      <div className="dashboard-content">
        <div className="tile-container">
          {clinicData.map((clinic, index) => (
            <div className="tile" key={index} style={{borderBottom: `30px solid ${clinic.color}`}}>
              <div className="tile-header">
                <div className="tile-header-left">Workit @ {clinic.name}</div>
                <div className="tile-header-right"> {clinic.members} Members | {clinic.providers} Providers </div>
              </div>
              <div className="tile-header-border"/>
              <a href="#" className="tile-row">
                <img src={detailIcon}/>
                <span>Details</span>
              </a>              
              <a href="#" className="tile-row">
                <img src={manageIcon}/>
                <span>Manage</span>
              </a>
              <a href="#" className="tile-row">
                <img src={availabilityIcon}/>
                <span>Availabilities</span>
              </a>
              <a href="#" className="tile-row">
                <img src={calendarIcon}/>
                <span>Calendar</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClinicDashboard;
