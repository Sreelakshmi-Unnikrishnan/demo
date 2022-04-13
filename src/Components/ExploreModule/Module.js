import React,{useEffect,useState} from 'react'
import NavBar from "../NavBar/NavBar";
import Footer from '../Footer/Footer';
import {FaArrowLeft } from 'react-icons/fa';
import "./Module.css"
import axios from 'axios';
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";

function Module() {
  const [university, setUniversity] = useState("Mahatma Gandhi University");
  const [department, setDepartment] = useState("B.com");
  const [specialization, setSpecialization] = useState("Finance and Taxation");
  const [semester, setSemester] = useState("6");
  const [subject, setSubject] = useState("Advertisement and sales management");
  const [module, setModule] = useState([]);

var sub= localStorage.getItem("subject", ["subjects"]);
  var uni = localStorage.getItem(["University"]);
  var dep = localStorage.getItem(["Department"]);
  var spec = localStorage.getItem(["Specialization"]);
  var sem = localStorage.getItem(["Semester"]);

  useEffect(() => {
    axios
      .post('https://backend.studyouk.com/api/v1/student/explore/course/module/listing/', {
        university: university,
        department: department,
        specialization: specialization,
        semester: semester,
        subject: subject,
      })
      .then((response) => {
        setModule(response.data);
        console.log("-hh---", response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [university, department, specialization, semester, subject]);

  const path = `${university} > ${department} > ${specialization} > Sem ${semester}`;

  return (
    <div>
      <NavBar/>
      <div className='arrow'>
      <FaArrowLeft /> 
      </div>
      <div
        className="module-purchased"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div className="card">
          <img src="https://picsum.photos/280/130" alt="" />
          <h2 style={{ paddingLeft: "8px" }}>
            8199
            <span>
              <s>10999</s>
            </span>
          </h2>
          <h6 style={{ paddingLeft: "8px" }}>
            University :
            <span
              style={{ color: "grey", fontSize: "13px", paddingLeft: "5px" }}
            >{`${university}`}</span>
          </h6>
          <h6 style={{ paddingLeft: "8px" }}>
            Department :
            <span
              style={{ color: "grey", fontSize: "13px", paddingLeft: "5px" }}
            >{`${dep}`}</span>
          </h6>
          <h6 style={{ paddingLeft: "8px" }}>
            Specialization :
            <span
              style={{ color: "grey", fontSize: "13px", paddingLeft: "5px" }}
            >{`${spec}`}</span>
          </h6>
          <h6 style={{ paddingLeft: "8px" }}>
            Semester :
            <span
              style={{ color: "grey", fontSize: "13px", paddingLeft: "5px" }}
            >{`${sem}`}</span>
          </h6>
          <h6 style={{ paddingLeft: "8px" }}>
            Subject :
            <span
              style={{ color: "grey", fontSize: "13px", paddingLeft: "5px" }}
            >{`${sub}`}</span>
          </h6>
          <button className="module-buynow-button">
            <Link
              to="/purchasedcourse/"
              style={{ textDecoration: "none", color: "black" }}
            >
              BUY NOW
            </Link>
          </button>
      </div>
      </div>
      <div>
        <p style={{ marginTop: "20px" ,marginLeft:"30px"}}>
        {`${uni} > ${dep} > ${spec} > Sem ${sem}`}
        </p>
       
        <h1 style={{ marginTop: "10px" ,marginLeft:"30px",fontSize:"12px"}}>SUBJECT : {sub}</h1>
        <h3 style={{ marginTop: "20px" ,marginLeft:"30px", fontSize:"20px"}}>Course Content</h3>
        </div>
        <div>
        {module &&
              module.map((data) => {
                return (
                  <Link
                              to={`/watch/video/${data.id}`}
                              style={{
                                textDecoration: "none",
                                paddingLeft: "20px",
                              }}
                            >
                            {data.video.module.module_name}
                            </Link>
                )}
              )}      
       </div>
       <Footer/>
       </div>
  );}
export default Module