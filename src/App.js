import { useState } from "react";
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import AddForm from "./components/addForm";
import "./App.css";

function App() {
  //crate a state
  // collect data more than one
  //ex student have id and name
  //[{id,name},{},{}]
  const [students, setStudent] = useState([]);
  function deleteStudent(id) {
    // filter fetch data form students and collect in item
    // and use item for check which id that doesn't match will show
    // in alternative will be filtered
    setStudent(students.filter((item) => item.id !== id));
  }
  // students.map((item)) item is representative of student
  //and map is make an array students into li
  // {students.map((item)=>(

  //   <li key={item.id}>{item.id} - {item.namestu}</li>
  //   we have to set a key for make jsx know which part to update when value has change

  //   <button onClick={()=>deleteStudent(item.id)}>delete</button>
  //   use arrow function action click if not use it wil show now
  // ))}

  //<Header title="student info"/>
  // create props

  return (
    <div className="App">
      <Header title="Home" />
      <main>
        <AddForm students={students} setStudent={setStudent} />
        <StudentList students={students} deleteStudent={deleteStudent} />
      </main>
    </div>
  );
}

export default App;
// เป็นหน้าตา แอพของเรา
