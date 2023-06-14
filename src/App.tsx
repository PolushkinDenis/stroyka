import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main';
import Header from './components/header/Header';
import CarWash from './pages/disign/carWash/CarWash';
import Veranda from './pages/disign/veranda/Veranda';
import Garage from './pages/disign/garage/Garage';
import Roof from './pages/disign/roof/Roof';
import Mansardy from './pages/disign/mansardy/Mansardy';
import Structure from './pages/disign/structure/Structure';
import Fasad from './pages/disign/fasad/Fasad';
import Fundament from './pages/disign/fundament/Fundament';
import Footer from './components/footer/Footer';
import Contacts from './pages/contacts/Contacts';
import ExtensionToTheHouse from './pages/service/extensionToTheHouse/ExtensionToTheHouse';
import GarageExtension from './pages/service/garageExtension/GarageExtension';
import ServicesPage from './pages/service/servicesPage/ServicesPage';
import Foundation from './pages/service/foundation/Foundation';

const App = () => {
  return (
    <>
    <Header />
      <Routes>
          <>
            <Route path="/stroyka" element={<Main />} />
            <Route path="/stroyka/carwash" element={<CarWash />} />
            <Route path="/stroyka/veranda" element={<Veranda />} />
            <Route path="/stroyka/garage" element={<Garage />} />
            <Route path="/stroyka/roof" element={<Roof />} />
            <Route path="/stroyka/mansardy" element={<Mansardy />} />
            <Route path="/stroyka/sooruzhenie" element={<Structure />} />
            <Route path="/stroyka/fasad" element={<Fasad />} />
            <Route path="/stroyka/fundament" element={<Fundament />} />
            <Route path="/stroyka/contacts" element={<Contacts />} />
            <Route path="/stroyka/services" element={<ServicesPage />} />
            <Route path="/stroyka/services/extension-to-the-house" element={<ExtensionToTheHouse />} />
            <Route path="/stroyka/services/garage_extension" element={<GarageExtension />} />
            <Route path="/stroyka/services/foundation" element={<Foundation />} />

            
          </>
      </Routes>
      <Footer />
    </>
  )


}

export default App;
