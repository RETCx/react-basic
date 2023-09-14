import "./StudentList.css"
import "./Item.css"
export default function Item(props){
    const{data,deleteStudent} = props;
    return(
        <>
             <li key={data.id} className={data.gender}>
              <p>
                {data.namestu}
              </p>
              <button onClick={() => deleteStudent(data.id)} className="delete">delete</button>
            </li>
        </>
    );

}