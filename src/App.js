import './App.css';
import Profil from './Component/Profile/ProfilPhoto';
import NameProfil from './Component/Profile/FullName';
import AdressProfil from './Component/Profile/Address';
function App() {
  return (
    <div className="App">
      <Profil/>
      <NameProfil/>
      <AdressProfil/>
    </div>
  );
}

export default App;
