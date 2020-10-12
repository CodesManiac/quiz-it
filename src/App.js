import React from "react";
import Header from "./components/Header";
import QuizDisplay from './components/QuizDisplay'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import DisplayPage from "./components/DisplayPage";

function App() {
  return (
    <>
       <Router>
        <Header />
      <Switch>
      <Route exact path='/' component={DisplayPage}></Route>
        <Route path='/sign-in' component={SignUp}/>
        <Route path='/sign-up' component={SignUp}/>
        <Route path="/quiz" component={QuizDisplay} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}



export default App;
