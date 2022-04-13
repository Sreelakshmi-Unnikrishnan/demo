import React from 'react'
import './videos.css'
function videos() {
  return (
    <div>
       
        <div
          id="wrapper_1"
          style={{
            backgroundcolor: "pink",
            height: "100px",
            float: "left",
            marginLeft: "80px",
            width: "180px",
            marginTop: "20px",
          }}
        >
          <h3 style={{fontWeight:"bold",fontSize:"24px"}}>Suggestions</h3>
          <div style={{ borderRight:"6px solid black",
            height:"400px"}}> 
            <p style={{ marginbotton: "10px" }}>
              MG &gt; BBA &gt; Sem1 &gt; Computer Application
            </p>
            <p>MG &gt; BBA &gt; Sem1 &gt; Computer Application</p>
            <p>MG &gt; BBA &gt; Sem1 &gt; Computer Application</p>
            <p>MG &gt; BBA &gt; Sem1 &gt; Computer Application</p>
            <p>MG &gt; BBA &gt; Sem1 &gt; Computer Application</p>
            {/* <div style={{ borderLeft:"6px solid blue",
            height:"500px", marginLeft:"200px"}}></div> */}
          </div>
        </div>
        <div className="filter-divs">
            <div className="filter-university"style={{ marginLeft: "25%", marginTop:"5%" ,fontWeight:"bold",fontSize:"24px",color:" #B2BEB5"}}>MG University</div>
          </div>
          <h3 style={{ marginLeft: "20%",color:"green" }}>MG &gt; BBA &gt; Sem1 &gt; Computer Application</h3>
        <section className='container'>
            {/* <div className='card'>
                <div className='card-image car-1'></div>
                <h3>What is Business Law and its importance?</h3>
                <h5>Subject: CS</h5>
                <h5>Module: 1</h5>
                <h5>Part: 1</h5>
            </div> */}
            {/* <div className='card'>
                <div className='card-image car-1'></div>
                <h3>What is Business Law and its importance?</h3>
                <h5>Subject: CS</h5>
                <h5>Module: 1</h5>
                <h5>Part: 1</h5>
            </div> */}
            <div className='card'>
                <div className='card-image car-1'></div>
                <h3>What is Business Law and its importance?</h3>
                <h5>Subject: CS</h5>
                <h5>Module: 1</h5>
                <h5>Part: 1</h5>
            </div>
            <div className='card'>
                <div className='card-image car-1'></div>
                <h3>What is Business Law and its importance?</h3>
                <h5>Subject: CS</h5>
                <h5>Module: 1</h5>
                <h5>Part: 1</h5>
            </div>
            <div className='card'>
                <div className='card-image car-1'></div>
                <h3>What is Business Law and its importance?</h3>
                <h5>Subject: CS</h5>
                <h5>Module: 1</h5>
                <h5>Part: 1</h5>
            </div>
            {/* <div className='card'>
                <div className='card-image car-1'></div>
                <h3>What is Business Law and its importance?</h3>
                <h5>Subject: CS</h5>
                <h5>Module: 1</h5>
                <h5>Part: 1</h5>
            </div> */}
            {/* <div className='card'>
                <div className='card-image car-1'></div>
                <h3>What is Business Law and its importance?</h3>
                <h5>Subject: CS</h5>
                <h5>Module: 1</h5>
                <h5>Part: 1</h5>
            </div>
            <div className='card'>
                <div className='card-image car-1'></div>
                <h3>What is Business Law and its importance?</h3>
                <h5>Subject: CS</h5>
                <h5>Module: 1</h5>
                <h5>Part: 1</h5>
            </div> */}
        </section>
    </div>
  )
}

export default videos