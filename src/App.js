import './App.css';
import LogHistory from './components/LogHistory';
import SubmissionForm from './components/SubmissionForm';
import TopPanel from './components/TopPanel';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <TopPanel />
        <Routes>
          <Route path="/logs" element={<LogHistory/>} />
          <Route path="/" element={<SubmissionForm/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
