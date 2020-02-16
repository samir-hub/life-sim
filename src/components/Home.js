import React from "react";
import guy_crossing_arms from '../guy_crossing_arms.png';

function Home() {
  return (
    <div style={{display: 'flex', justifyContent:'flex-end'}} className="home">
      <img style={{height: '90vh'}} alt='Guy crossing arms' src={guy_crossing_arms}></img>
    </div>
  );
}

export default Home;
