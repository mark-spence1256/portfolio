import logo from './logo.svg';
import './App.css';

import file from './file.png';
import Welcome from './component/Welcome.js'
import SideNav from './component/SideNav.js'

function App() {
  return (
    <div className="App">
<div className="container">
<div className="header-content">
<div class="header-image">
    <h2 className="firstname">Mark</h2>
    <h2 className="lastname">Spence</h2>
</div>
</div>

< Welcome />

</div>
<SideNav />
    </div>
  );
}

export default App;
