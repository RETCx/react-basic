import { useState } from "react";
import "./StudentList.css"
import Item from "./Item";
export default function StudentList(props) {
  
  // boolean state
  const [show, setShow] = useState(true); // true show content ,false hide content
  const {students,deleteStudent} = props ;
  const btnStyle = {
    background: show ? "" : "green"

  }

  return (
    <>
      <div className="header">
        <h1 >number of students : {students.length}</h1>
        <button onClick={() => setShow(!show)} style={btnStyle}>{show? "hide":"show"} </button>
      </div>
      <ul>
        {show && students.map((data) => (
          <Item key={data.id} data={data} deleteStudent={deleteStudent}/>
          ))}
      </ul>
    </>
  );
}
