import React,{useEffect,useState} from 'react'
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./Video.css";
import { useParams, Link } from "react-router-dom";
function Video() {
    const id = useParams();
  var x = [0];
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [moduleno,setModuleno]=useState(null);
  const [teacher,setTeacher]=useState(null);
  const [specialization,setSpecialization]=useState(null);
  const [subject,setSubject]=useState(null);
  const [department,setDepartment]=useState(null);
  const [url, setUrl] = useState(null);

  const [readMore, setReadMore] = useState(false);
  const [hide, setHide] = useState(false);

  const [video, setVideo] = useState([]);
  const moreContent = <p>{readMore}</p>;
    useEffect(() => {
        axios.get(`https://backend.studyouk.com/api/v1/student/watch/video/${id["id"]}`).then((res) => {
          setVideo(res.data);
        //   console.log(setTitle(res.data.video.title))
          setTitle(res.data.video.title);
          setDescription(res.data.video.description);
          setModuleno(res.data.video.module.module_no);
          setDepartment(res.data.department.department);
          setSpecialization(res.data.specialization.specialization);
          setSubject(res.data.video.subject.subject);
          setTeacher(res.data.video.teacher);
          setUrl(res.data.video.video);
          console.log("------", res.data);
        });
      }, []);
    
  return (
    <div>
        <NavBar/>
        <div> 
        <div className="mk">
          <video style={{height:"500px",width:"100%",marginTop:"20px"}} controls controlsList="nodownload" src={url}></video>
        </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <p className="study-video-title">{title}</p>
          </div>
        <h5 className="video-desc-heading">Description</h5>
        <div className="panel-wrapper">
          <a href="#show" className="show btn" id="show">
            Show More
          </a>
          <a href="#hide" className="hide btn" id="hide">
            Show Less
          </a>
          <div className="panel">{description}</div>
          <div className="fade"></div>
        </div>
        <div className='details' style={{marginTop:"30px",marginLeft:"18px",padding:"8px",color:"Grey"}}>
            <h4>Department: {department}</h4>
            <h4>Specialization: {specialization}</h4>
            <h4>Subject: {subject}</h4>
            <h4>Module No: {moduleno}</h4>
            <h4>Teacher: {teacher}</h4>
          </div>
      <Footer className="footer" />
    </div>
  )
}

export default Video