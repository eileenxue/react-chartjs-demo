import React, { useState } from "react";
import './App.css';
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import MapChart from "./components/MapChart";
import PieChart from "./components/PieChart";
import { UserData } from "./Data"

function App() {

  const [userGainData, setUserGainData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "Users Gained", 
      data: UserData.map((data) => data.userGain),
      backgroundColor: ["#21897E", "#3BA99C", "#69D1C5", "#7EBCE6", "#8980F5"]
    }]
  });

  const [userLostData, setUserLostData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "Users Lost", 
      data: UserData.map((data) => data.userLost),
    }]
  });

  return (
    <div className="App">
      <MapChart/>
      <div style={{width: 500}}>
        <BarChart chartData={userGainData}/>
        <LineChart chartData={userLostData}/>
        <PieChart chartData={userGainData}/>
      </div>
    </div>
  );
}

export default App;
