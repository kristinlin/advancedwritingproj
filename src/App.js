import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from "./Components/Home";
import { withRouter, HashRouter, Route  } from 'react-router-dom';
import SectionA from './Components/sectionA';
import SectionB from './Components/sectionB';
import SectionC from './Components/sectionC';
import SectionD from './Components/sectionD';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  return props.children
}

const ScrollToTop = withRouter(_ScrollToTop)

function App() {
  return (
    <HashRouter>
      <ScrollToTop>
      <div className="App">
        <Header></Header>
          <Route exact path="/">
            <Home></Home>
          </Route>  
          <Route exact path="/1">
            <SectionA></SectionA>
          </Route>   
          <Route exact path="/2">
            <SectionB></SectionB>
          </Route>   
          <Route exact path="/3">
            <SectionC></SectionC>
          </Route>   
          <Route exact path="/4">
            <SectionD></SectionD>
          </Route>   
      </div>
      </ScrollToTop>
    </HashRouter>
  );
}

export default App;
