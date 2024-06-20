import logo from './logo.svg';
import './App.css';
import GetAllYSER from './components/GetAllYSER';
import SearchYser from './components/SearchYSER';
import CreateOpportunity from './components/CreateOpportunity';
import GetAllOpportunities from './components/GetAllOpportunity';
import GetOpportunitiesByUserId from './components/GetAllOpportunitiesByUser';
import GetOpportunitiesByCategory from './components/GetOpportunitiesByCategory';
import DeleteOpportunity from './components/DeleteOpportunity';
import EditOpportunity from './components/EditOpportunity';
import CreateReport from './components/CreateReport';
import GetAllReports from './components/GetAllReports';
import ResolveReport from './components/ResolveReport';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <GetAllYSER/> */}
      {/* <SearchYser/> */}
      {/* <CreateOpportunity/> */}
      {/* <GetAllOpportunities/> */} 
      {/* <GetOpportunitiesByUserId/> */}
      {/* <GetOpportunitiesByCategory/> */}
      {/* <DeleteOpportunity/> */}
      {/* <EditOpportunity/> */}
      {/* <CreateReport/> */}
      {/* <GetAllReports/> */}
      <ResolveReport/>
    </div>
  );
}

export default App;
