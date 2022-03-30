import React from "react";

function exp() {
    return (
        <div>
          <div className="filter-divs">
            <div className="filter-university"style={{ marginLeft: "18%", marginTop:"5%" ,fontWeight:"bold",fontSize:"24px"}}>MG University</div>
          </div>
          <h3 style={{ marginLeft: "18%" }}>Select Department :</h3>
          <div
            className="dept"
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
            margin: "40px 40px 0 180px",
        
            }}
          >
            <div
              className="bba"
              style={{
                textDecoration: "none",
                color: "black",
                marginLeft: "10%",
                marginRight: "50px",
                width: "100px",
                height: "30px",
                borderRadius: "8px",
                textAlign: "center",
                backgroundColor: "lightGreen",
                fontWeight: "500",
              }}
            >
              BBA
            </div>
            <div
              className="Ba"
             
              style={{
                textDecoration: "none",
                color: "black",
                marginRight: "50px",
                width: "100px",
                height: "30px",
                borderRadius: "8px",
                textAlign: "center",
                backgroundColor: "lightGreen",
                fontWeight: "500",
              }}
            >
              BA
            </div>
            <div
              className="Bsc"
        
              style={{
                textDecoration: "none",
                color: "black",
                marginRight: "50px",
                width: "100px",
                height: "30px",
                borderRadius: "8px",
                textAlign: "center",
                backgroundColor: "lightGreen",
                fontWeight: "500",
              }}
            >
              BSC
            </div>
            <div
              className="Bca"
              style={{
                textDecoration: "none",
                color: "black",
                marginRight: "50px",
                width: "100px",
                height: "30px",
                borderRadius: "8px",
                textAlign: "center",
                backgroundColor: "lightGreen",
                fontWeight: "500",
              }}
            >
              BCA
            </div>
            <div
              className="Bcom"
            
              style={{
                textDecoration: "none",
                color: "black",
                backgroundColor: "lightGreen",
                width: "100px",
                height: "30px",
                textAlign: "center",
                borderRadius: "8px",
                fontWeight: "500",
              }}
            >
              BCOM
            </div>
          </div>
            <div
          id="wrapper_1"
          style={{
            backgroundcolor: "pink",
            height: "100px",
            float: "left",
            marginLeft: "80px",
            width: "180px",
            marginTop: "-170px",
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
        </div>
      );   
} 
export default exp;