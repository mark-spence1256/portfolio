import logo from './logo.svg';
import './App.css';

import file from './file.png';
import Welcome from './component/Welcome.js'
import SideNav from './component/SideNav.js'
import Resume from './component/Resume.js'
import Skills from './component/Skills.js'
import Headline from './component/Headline.js'
import {Helmet} from "./react-helmet";

function App() {
  return (

    <div className="App">
      <Helmet />
      <meta name="description" content="_" />
<meta name="title" property="og:title" content="_" />
<meta property="og:type" content="_" />
<meta name="image" property="og:image" content="_" />
<meta name="description" property="og:description" content="_" /><meta name="author" content="_" />
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
