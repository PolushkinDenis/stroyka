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
import DisignPage from './pages/disign/disignPage/DisignPage';
import AboutUs from './pages/uboutUs/AboutUs';
import RepairBalcony from './pages/repair/repairBalcony/RepairBalcony';
import RepairPage from './pages/repair/repairPage/RepairPage';
import RepairZdaniy from './pages/repair/repairZdaniy/RepairZdaniy';
import RepairHome from './pages/repair/repairHome/RepairHome';
import RepairKrovli from './pages/repair/repairKrovli/RepairKrovli';
import ReapirFasad from './pages/repair/reapirFasad/ReapirFasad';

const App = () => {
  return (
    <>
    <Header />
      <Routes>
          <>
            <Route path="/stroyka" element={<Main />} />
            <Route path="/stroyka/designing" element={<DisignPage />} />
            <Route path="/stroyka/designing/carwash" element={<CarWash />} />
            <Route path="/stroyka/designing/veranda" element={<Veranda />} />
            <Route path="/stroyka/designing/garage" element={<Garage />} />
            <Route path="/stroyka/designing/roof" element={<Roof />} />
            <Route path="/stroyka/designing/mansardy" element={<Mansardy />} />
            <Route path="/stroyka/designing/sooruzhenie" element={<Structure />} />
            <Route path="/stroyka/designing/fasad" element={<Fasad />} />
            <Route path="/stroyka/designing/fundament" element={<Fundament />} />

            <Route path="/stroyka/contacts" element={<Contacts />} />
            
            <Route path="/stroyka/about" element={<AboutUs />} />

            <Route path="/stroyka/services" element={<ServicesPage />} />
            <Route path="/stroyka/services/extension-to-the-house" element={<ExtensionToTheHouse />} />
            <Route path="/stroyka/services/garage_extension" element={<GarageExtension />} />
            <Route path="/stroyka/services/foundation" element={<Foundation />} />

            <Route path="/stroyka/repair" element={<RepairPage />} />
            <Route path="/stroyka/repair/remont_balcony" element={<RepairBalcony />} />
            <Route path="/stroyka/repair/remont_zdaniy" element={<RepairZdaniy />} />
            <Route path="/stroyka/repair/remont_home" element={<RepairHome />} />
            <Route path="/stroyka/repair/remont_krovel" element={<RepairKrovli />} />
            <Route path="/stroyka/repair/remont_fasada" element={<ReapirFasad />} />
          </>
      </Routes>
      <Footer />
    </>
  )


}

export default App;
