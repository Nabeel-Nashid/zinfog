import React, { useState } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import logo from "../asset/zinfogLog.jpg";
import plus from "../asset/plusIcon.jpg";
import { Link } from "react-router-dom";

function LoginError() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-cyan-200">
      <div className="absolute top-[91px] left-[25%] w-[50%] h-[80%] rounded-[45px] bg-white drop-shadow-2xl">
        <div className="hidden absolute top-14 left-16 md:block">
          <img src={plus} className="w-[30px] h-[30px]" />
        </div>
        <div className="flex flex-col items-center">
          <img src={logo} className="mt-8" />{" "}
          <h1 className="font-extrabold font-sans text-[#1F6CAB]  mt-14">
            Report Download portal
          </h1>
          <div className="hidden absolute top-28 right-20 md:block">
            <img src={plus} className="w-[60px] h-[60px]" />
          </div>
          <div className="w-[42%] h-[60%] rounded-[30px] bg-[#00D3EB] drop-shadow-xl mt-5">
            <div className="flex flex-col items-center">
              <h1 className="text-1xl font-normal text-[#1F6CAB] mt-6">
                Login
              </h1>
              <form
                className="flex flex-col items-center"
                onSubmit={handleSubmit}
              >
                <span className="self-start mt-5">User Name</span>
                <input
                  placeholder="Enter E-mail ID"
                  className="text-sm h-5 rounded-sm mt-2"
                  name="uname"
                />
                {renderErrorMessage("uname")}
                <span className="self-start mt-2">Password</span>
                <input
                  placeholder="Password"
                  className="text-sm h-5 rounded-sm mt-2"
                  name="pass"
                />
                {renderErrorMessage("pass")}
                <button class="bg-[#1F6CAB] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5"
                type="submit">
                  Submit
                </button>
                {isSubmitted ? (
                  <Link to={"/dashboard"}>Go To Dashboard</Link>
                ) : (
                  <Link to={"/loginerror"}>Error</Link>
                )}
              </form>
              <a href="">
                <span className="text-xs underline underline-offset-1 ">
                  Reset Password
                </span>
              </a>
            </div>
          </div>
          <h1 className="text-red-700 underline-offset-1 mt-2">
            Wrong Credentials! your email Id or password entered is wrong
          </h1>
          <div className="flex items-center">
            <AiOutlinePhone className="text-[#1F6CAB] mt-5 mr-2" />
            <h1 className="font-extrabold font-sans text-[#1F6CAB] mt-5">
              9656346808
            </h1>
          </div>
          <h1 className="font-normal font-sans text-[black] mt-9">
            I hereby agree and accept the{" "}
            <a href="">
              <span className="text-[#2a2a9e]">Terms of service</span>
            </a>{" "}
            and{" "}
            <a href="">
              <span className="text-[#2a2a9e]">Privacy policy</span>
            </a>
          </h1>
          <div className="hidden absolute bottom-14 left-16 md:block">
            <img src={plus} className="w-[100px] h-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginError;
