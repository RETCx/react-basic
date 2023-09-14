import { useState } from "react";
import "./AddForm.css";

export default function AddForm(props) {
  const{students,setStudent} = props;
  const [name, setName] = useState("");
  const [gender,setGender] = useState("male");
  function saveStudent(e) {
    //seva data and when refresh will not clear
    e.preventDefault();
    if (!name) {
        alert("Pls enter a name ")
    } else {
      const newStudent = {
        id: Math.floor(Math.random() * 1000),
        namestu: name,
        gender:gender
      }
      console.log(newStudent.namestu)
      setStudent([...students,newStudent])
      setName("")
      setGender("")
    }
  }
  return (
    <>
      <section className="container">
        <form onSubmit={saveStudent}>
          <label>name student</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select value={gender} onChange={(e)=>setGender((e.target.value))}>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          <button type="submit" className="btn-add">
            record
          </button>
        </form>
      </section>
    </>
  );
}
