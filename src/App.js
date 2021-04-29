import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Navbar from "./components/nav";
import GlobalStyles, { Footer } from "./GlobalStyles";
//import TweetFeed from "./components/TweetFeed"
import Feed from "./components/Feed"
import { MenuProvider } from "./state";


class App extends React.Component {
  render() {
    return (
      <>
      <GlobalStyles/>   
      <BrowserRouter>
        <MenuProvider>
          <Navbar />
        </MenuProvider>
        
        <Route exact path="/" component={() => <Feed id='783214' />} />
        <Route exact path="/elon" component={() => <Feed id="44196397" />} />
        <Route exact path="/POTUS" component={() => <Feed id="1349149096909668363" />} />
        <Footer />
      </BrowserRouter>     
      </>
    );
  }
}

export default App;