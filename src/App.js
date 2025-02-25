import './App.css';
import { Authent } from './Authentication';
import Signup from './Signup';
import Login from './Login';
import Webpage from './Webpage';
import Web from './Web';
import PricingPlanPage from "./PricingPlanPage"; 
import PaymentPage from "./PaymentPage"; 
import PostFeature from "./PostFeature";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Router>
        <Authent>
          <Routes>
            <Route path="/" element={<Webpage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/web" element={<Web />} />
            <Route path="/pricing" element={<PricingPlanPage />} />
            <Route path="/payment" element={<PaymentPage />} /> 
            <Route path="/post" element={<PostFeature />} /> 
           
          </Routes>
        </Authent>
      </Router>
    </div>
  );
}

export default App;
