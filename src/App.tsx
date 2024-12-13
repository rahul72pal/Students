import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
// import QRScanner from "./components/QRScanner";
import TakeAttendance from "./components/attendance/TakeAttendance";
import StudentAttendance from "./pages/StudentAttendance";
import ViewStudentList from "./pages/ViewStudentList";
import Class from "./pages/Class";
import ClassAttendance from "./components/class/ClassAttendance";
import ClassIdComponent from "./utils/ClassIdComponent";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreateStudents from "./components/Student/CreateStudents";


const App: React.FC = () => {

  return (
    <div className="w-[100%] font-title h-[100%] bg-[#000814] text-white">
      {/* <QRScanner/> */}
      <div className="h-[10vh] border-b-2 py-4 pb-4 border-gray-600">
        <Navbar />
      </div>
      <div className="sm:min-h-[90vh] pb-4 ">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/QR" element={<QRScanner onClose={()=>void} />} /> */}
          <Route path="/takeattendance" element={
            <ClassIdComponent>
            <TakeAttendance />
            </ClassIdComponent>
            } />
          <Route path="/class" element={<Class />} />
          <Route path="/classAttendance" element={
            <ClassIdComponent>
            <ClassAttendance />
            </ClassIdComponent>
            } />
          <Route path="/viewStudentList" element={
             <ClassIdComponent>
            <ViewStudentList />
            </ClassIdComponent>
            } />
          <Route path="/student/:id/:name" element={
             <ClassIdComponent>
            <StudentAttendance />
            </ClassIdComponent>
            } />
          <Route path="/student/add" element={
             <ClassIdComponent>
            <CreateStudents />
            </ClassIdComponent>
            } />
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;