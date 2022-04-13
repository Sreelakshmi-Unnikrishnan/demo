import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import {
  startPaymentURL,
  paymentSuccessURL,
  checktokenURL,
  purchasingCourseDetailsURL,
} from "../API/APIService";
import Navbar from "../Navbar/Navbar";
import "./Payment.css";

function App() {
  const [amount, setAmount] = useState(4800);
  const [startPaymenyError, setStartPaymenyError] = useState(false);

  const [purchasingCourseDetailsError, setPurchasingCourseDetailsError] =
    useState(false);
  const [totalSubjects, setTotalSubjects] = useState(0);
  const [totalVideos, setTotalVideos] = useState(0);
  const [totalModules, setTotalModules] = useState(0);

  var history = useHistory();

  var token = localStorage.getItem("student_auth_token");
  var name = localStorage.getItem("student_username");
  var university = localStorage.getItem("University");
  var department = localStorage.getItem("Department");
  var specialization = localStorage.getItem("Specialization");
  var semester = localStorage.getItem("Semester");
  var subject = localStorage.getItem(["subject"]);

  var purchasingCourse = `${university} > ${department} >sem ${semester}`;

  useEffect(() => {
    if (!token) {
      history.push("/login/next=paymentpage");
    } else {
      axios
        .post(checktokenURL, { token: token })
        .then((response) => console.log("success", response))
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("student_auth_token");
          localStorage.removeItem("student_username");
          history.push("/login/next=paymentpage");
        });

      // Fetching purchasing course details ---------------
      axios
        .post(purchasingCourseDetailsURL, {
          university: university,
          department: department,
          semester: semester,
        })
        .then((response) => {
          console.log("sucees-009", response.data);
          setTotalModules(response.data["modules"]);
          setTotalSubjects(response.data["subjects"]);
          setTotalVideos(response.data["videos"]);
          setPurchasingCourseDetailsError(false);
        })
        .catch((err) => {
          console.log("err-099-", err);
          setPurchasingCourseDetailsError(true);
        });
    }
  }, [token]);

  const handlePaymentSuccess = async (response) => {
    try {
      let bodyData = new FormData();

      // we will send the response we've got from razorpay to the backend to validate the payment
      bodyData.append("response", JSON.stringify(response));

      await axios({
        url: paymentSuccessURL,
        method: "POST",
        data: bodyData,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log("Everything is OK! - Transaction completed");
          name = "";
          setAmount("");
          history.push("/purchased/courses");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(console.error());
    }
  };

  // this will load a script tag which will open up Razorpay payment card to make transactions
  const loadScript = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);
  };

  const showRazorpay = async () => {
    const res = await loadScript();

    let bodyData = new FormData();

    // we will pass the amount and product name to the backend using form data
    bodyData.append("token", token);
    bodyData.append("university", university);
    bodyData.append("department", department);
    bodyData.append("specialization", specialization)
    bodyData.append("semester", semester);
    bodyData.append("amount", amount.toString());

    const data = await axios({
      url: startPaymentURL,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: bodyData,
    })
      .then((res) => {
        setStartPaymenyError(false);
        return res;
      })
      .catch((err) => {
        setStartPaymenyError(true);
        return null;
      });

    // in data we will receive an object from the backend with the information about the payment
    //that has been made by the user

    if (data != null) {
      var options = {
        key_id: process.env.REACT_APP_PUBLIC_KEY, // in react your environment variable must start with REACT_APP_
        key_secret: process.env.REACT_APP_SECRET_KEY,
        amount: data.data.payment.amount,
        currency: "INR",
        name: name,
        description: "Payment transaction",
        image: "", // add image url
        order_id: data.data.payment.id,
        handler: function (response) {
          // we will handle success by calling handlePaymentSuccess method and
          // will pass the response that we've got from razorpay
          handlePaymentSuccess(response);
        },
        prefill: {
          name: "User's name",
          email: "User's email",
          contact: "User's phone",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#16afba",
        },
      };
    }

    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  function removeDataFromLoclStrg() {
    localStorage.removeItem("buying_university");
    localStorage.removeItem("buying_branch");
    localStorage.removeItem("buying_semester");
  }

  return (
    <div>
      <Navbar />
      <div className="payment-wrapper">
        <div className="payment-sub-wrapper">
          <h1 className="proceed-to-pay-txt">Proceed to Pay</h1>
          <h3>{purchasingCourse}</h3>
          <h4>{totalModules} Modules</h4>
          <h4>{totalSubjects} Subjects</h4>
          <h4>{totalVideos} Videos</h4>
          <div>
            <Link
              className="link"
              // to={`/explore/courses/${branch}`}
              to={`/module/listing/${subject}`}
              style={{ textDecoration: "none", color: "#1881ad" }}
              onClick={removeDataFromLoclStrg}
            >
              Go back
            </Link>
          </div>
          <button onClick={showRazorpay} className="pay-btn">
            Pay with razorpay
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;