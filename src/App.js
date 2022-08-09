import {Routes,Route} from 'react-router-dom';
import HomepageComponent from "./pages/homepage/homepage.component";
import Navigation from './pages/navigation/navitgation-component'
import Authentication from "./pages/authentication/authentication.component";
import Shop from "./pages/shop/shop.component";

const App = () => {
  
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
