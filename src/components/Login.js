import React from "react";
import bg from "../asset/bgImage.jpg";
import { AiOutlinePhone } from "react-icons/ai";
import Footer from "./Footer";

function Login() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-blue-200 to-cyan-200">
        <div className="absolute top-[91px] left-[25%] w-[50%] h-[80%] rounded-[45px] bg-white drop-shadow-2xl">
          <div className="hidden absolute top-14 left-16 md:block">
            <div className="w-6 h-6 bg-[#e7f1f7]"></div>
            <div className="w-10 h-10 bg-[#e7f1f7] ml-6"></div>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="mt-8 text-3xl font-black">Zinfog</h1>
            <h1 className="font-extrabold font-sans text-[#1F6CAB]  mt-14">
              Report Download portal
            </h1>
            <div className="w-[42%] h-[60%] rounded-[30px] bg-[#00D3EB] drop-shadow-xl mt-5">
              <div className="flex flex-col items-center">
                <h1 className="text-1xl font-normal text-[#1F6CAB] mt-6">
                  Login
                </h1>
                <span className="self-start ml-14 mt-5">User Name</span>
                <input
                  placeholder="Enter E-mail ID"
                  className="text-sm w-[70%] h-5 rounded-sm mt-2"
                ></input>
                <span className="self-start ml-14 mt-2">Password</span>
                <input
                  placeholder="Password"
                  className="text-sm w-[70%] h-5 rounded-sm mt-2"
                ></input>
                <button class="bg-[#1F6CAB] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5">
                  Submit
                </button>
                <a href="">
                  <span className="text-xs underline underline-offset-1 ">
                    Reset Password
                  </span>
                </a>
              </div>
            </div>
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

            <div className="hidden absolute bottom-14 right-16 md:block">
              <div className="w-10 h-10 bg-[#e7f1f7] ml-6"></div>
              <div className="w-6 h-6 bg-[#e7f1f7]"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-end h-screen">
          <div className="absolute bottom-2">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
