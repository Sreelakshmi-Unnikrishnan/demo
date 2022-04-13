import React from "react";
import { useState , useEffect} from "react";
import './ExploreCourse.css';
import NavBar from "../NavBar/NavBar";
import Footer from '../Footer/Footer';
import axios from 'axios';
import { Link } from "react-router-dom";

function ExploreCourse() {
    
   const [university, setUniversity] = useState("Mahatma Gandhi University");
    const [department, setDepartment] = useState("BA");
    const [specialization, setSpecialization] = useState("Computer Application");
    const [semester, setSemester] = useState("1");
    // const [subject, setSubject] = useState([]);
    const [APIData, setAPIData] = useState([]);
    const [APIResltNotFound, setAPIResltNotFound] = useState(false);
    useEffect(() => {
      axios
        .post('https://backend.studyouk.com/api/v1/student/explore/course/subject/listing/', {
          university: university,
          department: department,
          specialization: specialization,
          semester: semester,
        })
        .then((response) => {
           if (response.data["Message"]) {
             setAPIResltNotFound(true);
           } else {
             setAPIResltNotFound(false);
            setAPIData(response.data["subjects"]);
            localStorage.setItem("subject", response.data["subjects"]);
            console.log("------", response.data["subjects"]);
          }
      })}, [university, department, semester, specialization]);

      useEffect(() => {
        localStorage.setItem("University", university);
        localStorage.setItem("Department", department);
        localStorage.setItem("Specialization", specialization);
        localStorage.setItem("Semester", semester);
      });
    
    
  return (
    <div>
      <NavBar/>
        <div className="filter-university"style={{ textAlign:"center", marginTop:"1%" ,fontWeight:"bold",fontSize:"24px", color:"GrayText"}}>MG University</div>
        <div className='department' style={{display: "flex",
              flexWrap: "wrap",
              flexDirection: "row"
        }}>
        {department == "B.com" ? (<p onClick={() => setDepartment("B.com")} style={{ color: "#007ede", fontWeight: "bold" }}>B.com</p>) : (<p onClick={() => setDepartment("B.com")}>B.com</p> )}
        {department == "BA" ? (<p onClick={() => setDepartment("BA")} style={{ color: "#007ede", fontWeight: "bold" }}>BA</p>) : (<p onClick={() => setDepartment("BA")}>BA</p> )}
        {department == "BBA" ? (<p onClick={() => setDepartment("BBA")} style={{ color: "#007ede", fontWeight: "bold" }}>BBA</p>) : (<p onClick={() => setDepartment("BBA")}>BBA</p> )}
        {department == "BSC" ? (<p onClick={() => setDepartment("BSC")} style={{ color: "#007ede", fontWeight: "bold" }}>BSC</p>) : (<p onClick={() => setDepartment("BSC")}>BSC</p> )}
        {department == "BCA" ? (<p onClick={() => setDepartment("BCA")} style={{ color: "#007ede", fontWeight: "bold" }}>BCA</p>) : (<p onClick={() => setDepartment("BCA")}>BCA</p> )}
        </div>
        <hr style={{marginTop:"-20px"}}></hr>
        <div className='specialization' style={{display: "flex",
              flexWrap: "wrap",
              flexDirection: "row"
        }}>
            {specialization == "Computer Application" ? ( <p onClick={() => setSpecialization("Computer Application")} style={{ color: "#007ede", fontWeight: "bold" }} >  Computer Application</p> ) : ( <p onClick={() => setSpecialization("Computer Application")}>Computer Application</p> )}
            {specialization == "Finance" ? ( <p onClick={() => setSpecialization("Finance")} style={{ color: "#007ede", fontWeight: "bold" }} >  Finance</p> ) : ( <p onClick={() => setSpecialization("Finance")}>Finance</p> )}
            {specialization == "Tax" ? ( <p onClick={() => setSpecialization("Tax")} style={{ color: "#007ede", fontWeight: "bold" }} >  Tax</p> ) : ( <p onClick={() => setSpecialization("Tax")}>Tax</p> )}
            {specialization == "HR" ? ( <p onClick={() => setSpecialization("HR")} style={{ color: "#007ede", fontWeight: "bold" }} >  HR</p> ) : ( <p onClick={() => setSpecialization("HR")}>HR</p> )}
            {specialization == "MARKETING" ? ( <p onClick={() => setSpecialization("MARKETING")} style={{ color: "#007ede", fontWeight: "bold" }} >  MARKETING</p> ) : ( <p onClick={() => setSpecialization("MARKETING")}>MARKETING</p> )}
        </div>
        <hr></hr>
        <div className='semester' style={{display: "flex",
              flexWrap: "wrap",
              flexDirection: "row"
        }}>
        {semester == "1" ? ( <p onClick={() => setSemester("1")}style={{ color: "#007ede", fontWeight: "bold" }} > Sem 1 </p> ) : (<p onClick={() => setSemester("1")}>Sem 1</p> )}
        {semester == "2" ? ( <p onClick={() => setSemester("2")}style={{ color: "#007ede", fontWeight: "bold" }} > Sem 2 </p> ) : (<p onClick={() => setSemester("2")}>Sem 2</p> )}
        {semester == "3" ? ( <p onClick={() => setSemester("3")}style={{ color: "#007ede", fontWeight: "bold" }} > Sem 3 </p> ) : (<p onClick={() => setSemester("3")}>Sem 3</p> )}
        {semester == "4" ? ( <p onClick={() => setSemester("4")}style={{ color: "#007ede", fontWeight: "bold" }} > Sem 4 </p> ) : (<p onClick={() => setSemester("4")}>Sem 4</p> )}
        {semester == "5" ? ( <p onClick={() => setSemester("5")}style={{ color: "#007ede", fontWeight: "bold" }} > Sem 5 </p> ) : (<p onClick={() => setSemester("5")}>Sem 5</p> )}
        {semester == "6" ? ( <p onClick={() => setSemester("6")}style={{ color: "#007ede", fontWeight: "bold" }} > Sem 6 </p> ) : (<p onClick={() => setSemester("6")}>Sem 6</p> )}
        </div>
        <hr></hr>
        <div className="container-1">
        <p style={{ marginTop: "20px" ,marginLeft:"10px"}}>
              MG University &gt; Bcom &gt; Computer Application &gt; Sem1
        </p>
        {        APIResltNotFound ? (
        <div className="subject">
          <p style={{ color: "red", margin: "10px" }}>Result not found</p>
        </div>
      ) : (
        <div className="subject">
          {
            APIData.map((data, index) => {
              return (
                <div className="subject-list" key={index.id}>
                  <button style={{marginLeft:"100px", marginTop:"30px", width:"250px",
    height:"65px"}}><Link to="/module/">{data}</Link></button>
                    
                </div>
              );
            })}
        </div>
      )}
        <button style={{marginLeft:"1250px",textAlign:"center",backgroundColor:"lightGrey",fontSize:"14px",width:"270px",fontWeight:"bold",textDecoration:"none"}}> Purchase Bcom Sem1 <br />
            6+ subjects, 30+ modules, 60+ videos <br />
            Now only 7000/-
        </button>
        </div>
        <hr style={{marginTop:"50px"}}></hr>
        <Footer/> 
    </div>
  )
}

export default ExploreCourse;