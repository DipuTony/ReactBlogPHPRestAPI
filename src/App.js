import Navbar from './component/Navbar';
import Home from './component/Home';

function App() {
  // const title = "Welome to Our Class";
  // const like = 20;
  // const link = "http://quantainfotech.com/";

  return (
    <div className="App">
      <Navbar />
     <div className="content">
       <Home />
     </div>
    </div>
  );
}

export default App;
