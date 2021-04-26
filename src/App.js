import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/nav";
import GlobalStyles, { Footer } from "./GlobalStyles";
import TweetFeed from "./components/TweetFeed"
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
        <Route exact path="/elon" component={() => <TweetFeed userIdNum="44196397" />} />
        <Route exact path="/POTUS" component={() => <TweetFeed userIdNum="1349149096909668363" />} />
        <Footer />
       
      </BrowserRouter>     
      </>
    );
  }
}

export default App;