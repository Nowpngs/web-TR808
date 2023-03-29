import React from "react";
import MainProcesser from "./components/main-processer";
import "./index.css";

export default function App() {
  return (
    <div className="background-theme full-screen top-0 z-40">
      <div className="w-full text-white text-center pt-5 text-base font-bold">
        Web Application TR808 Emulator
      </div>
      <div className="px-10 py-5 h-[700px]">
        <MainProcesser />
      </div>
    </div>
  );
}
