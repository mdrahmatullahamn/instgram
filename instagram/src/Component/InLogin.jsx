// import { useState } from "react";
// import React from "react";
// import { Routes } from "react-router-dom";
// import Footer from "./Footer";
// function InLogin() {
//     const [dataVL, setFormData] = useState({ email: '', password: '' });
//     function submit(e) {
//         var datFromLS = JSON.parse(localStorage.getItem("instaUserid"))
//         var flag = false;
//         for (var i = 0; i < datFromLS.length; i++) {
//             if (datFromLS[i].email === dataVL.email && datFromLS[i].password === dataVL.password) {
//                 flag = true;
//             }
//         }
//         // if (flag === true) {
//         //     localStorage.setItem("current-prsent-User", JSON.stringify(dataVL.email));
//         //     setFormData({ email: '', password: '' });
//         //     // var user = {};
//         //     // user["current-user"] = dataVL;  
//         //     alert("Log in sucessful");
//         // }
//         if (flag) {
//             localStorage.setItem(
//               "current-prsent-user",
//               JSON.stringify({
//                 currentEmail: formData.email,
//                 currentUserName: storeName,
//               })

//             );
//               setFormData({ email: "", password: "" });
//             //   router("/");
//               alert("Log in sucessful");
//             else {
//             setFormData({ email: '', password: '' });
//             alert("Please check email or password");
//         }

//     }
//     function fatchData(e) {
//         var value = e.target.value;
//         var name = e.target.name;
//         setFormData({ ...dataVL, [name]: value });

//     }
import "./Instagram.css";
import Footer from "./Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-hot-toast";

function InLogin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useNavigate();


  function submit() {
    // e.preventDefault();

    var dataFromLs = JSON.parse(localStorage.getItem("instaUserid"));

    var flag = false;
    var storeName ;
   
    for (var i = 0; i < dataFromLs.length; i++) {
      if (
        dataFromLs[i].email === formData.email &&
        dataFromLs[i].password === formData.password
      ) {
        flag = true;
        storeName = dataFromLs[i].name;
      }
    }
   
    if (flag) {
      localStorage.setItem(
        "current-prsent-user",
        JSON.stringify({
          currentEmail: formData.email,
          currentUserName: storeName,
        })
      );
      
      setFormData({ email: "", password: "" });
      router("/");
      alert("Log in sucessful");
    } else {
      setFormData({ email: "", password: "" });
      alert("Please check email or password");
    }
  }

  function fatchData(e) {
    var value = e.target.value;
    var name = e.target.name;
    // console.log(name,value) ;
    setFormData({ ...formData, [name]: value });
  }
    return (
        <div className="full-page">
            <div className="full-page21">
                <div className="img-insta">
                    <img src="data:image/png;base64,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" alt="" />
                </div>
                <div className="singup-text">
                    <h3>Sign up to see photos and videos </h3>
                    <h4>from your friends</h4>

                </div>

                <form onSubmit={(e) => submit()} >
                    <input type="email" name="email" placeholder="Email" onChange={(e) => { fatchData(e) }} /> <br />
                    <input type="password" placeholder="password" name="password" onChange={(e) => { fatchData(e) }} />
                    <button className="butn3">Sumbit</button>
                </form>
                <button className="btn2">
                    Login with facebook
                </button>
                <p className="forg"><a href="">forgetpassword?</a></p>
            </div>

    <Footer/>
        </div>
        
    )
}
export default InLogin;