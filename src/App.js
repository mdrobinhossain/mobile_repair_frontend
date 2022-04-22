import React,{useState,createContext} from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Dashboard from './Pages/Dashboard/Dashboard';
import AddServices from "./Pages/AddServices/AddServices";
import ManageServices from "./Pages/ManageServices/ManageServices";
import AddMechanics from "./Pages/AddMechanics/AddMechanics";
import ManageMechanics from "./Pages/ManageMechanics/ManageMechanics";
import ServicesPage from './Pages/ServicesPage/ServicesPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignUpPage from './Pages/LoginPage/SignUpPage';
import AuthRequired from './Components/AuthRequired/AuthRequired';

export const userContext = createContext();
function App() {

  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/dashboard" element={<AuthRequired>
          <Dashboard />
        </AuthRequired>} />
        <Route path="/dashboard/addservice" element={<AuthRequired>
          <AddServices />
        </AuthRequired>}/>
        <Route path="/dashboard/manageservice" element={<AuthRequired>
          <ManageServices/>
        </AuthRequired>}/>
        <Route path="/dashboard/addmechanic" element={<AuthRequired>
          <AddMechanics />
        </AuthRequired>}/>
        <Route path="/dashboard/managemechanic" element={<AuthRequired>
          <ManageMechanics />
        </AuthRequired>}/>
        <Route path="/servicespage" element={<ServicesPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/signup' element={<SignUpPage />}/>
      </Routes>
    </userContext.Provider>
  );
}

export default App;
