import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import News from "./components/News";

const countryToCode = {
  India: "in",
  UnitedStates: "us",
  UnitedKingdom: "gb",
  Russia: "ru",
  UAE: "ae",
  China: "cn",
};
// const apiKey = "117f123c1b5b41c29a56da9a67668af1" "3d426759aa6540d9b58e74b6fd9e1dd2"
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      country: "in",
    };
  }
  changeCountry = (cntry)=>{
    this.setState({
      country : countryToCode[cntry]
    });
  }
  // componentDidUpdate(prevState){
  //   if(this.state!==prevState){
  //     this.forceUpdate();
  //   }
  // }
  pagesize = 15 ;
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar handleSelect={this.changeCountry}/>
          <div className="container my-3">
            <Routes>
              <Route exact path="/" element={<News key="home" pageSize={this.pagesize} country={this.state.country} category="general" />} />
              <Route exact path="/general" element={<News key="general" pageSize={this.pagesize} country={this.state.country} category="general" />} />
              <Route exact path="/business" element={<News key="business" pageSize={this.pagesize} country={this.state.country} category="business" />} />
              <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pagesize} country={this.state.country} category="entertainment" />} />
              <Route exact path="/health" element={<News key="health" pageSize={this.pagesize} country={this.state.country} category="health" />} />
              <Route exact path="/science" element={<News key="science" pageSize={this.pagesize} country={this.state.country} category="science" />} />
              <Route exact path="/sports" element={<News key="sports" pageSize={this.pagesize} country={this.state.country} category="sports" />} />
              <Route exact path="/technology" element={<News key="technology" pageSize={this.pagesize} country={this.state.country} category="technology" />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
