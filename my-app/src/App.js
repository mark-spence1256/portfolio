import logo from './logo.svg';
import './App.css';

import file from './file.png';
import Welcome from './component/Welcome.js'
import SideNav from './component/SideNav.js'
import Resume from './component/Resume.js'
import Skills from './component/Skills.js'
import Headline from './component/Headline.js'


function App() {
  return (

    <div className="App">
     
<div className="container">

    <h2 className="firstname">Mark</h2>
    <h2 className="lastname">Spence</h2>


< Welcome />
<Skills/>
<Headline/>
<Resume />

</div>
<SideNav />
    </div>
  );
}

export default App;
