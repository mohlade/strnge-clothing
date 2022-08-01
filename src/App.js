import {Routes,Route} from 'react-router-dom';
import HomepageComponent from "./pages/homepage/homepage.component";
import Navigation from './pages/navigation/navitgation-component'
import Authentication from "./pages/authentication/authentication.component";

const App = () => {

 
  const Shop = () =>{
     return <h1>I am the Shop page</h1>
  }
  
  return(
    <Routes>
    <Route path='/' element={<Navigation />} >
      <Route index element={<HomepageComponent /> } />
      <Route path ='shop' element={<Shop />} />
      <Route path ='auth' element={<Authentication />} />
    </Route> 
   </Routes>
  );
  };
export default App;
