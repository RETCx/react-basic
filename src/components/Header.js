// show menutab
import Logo from "../image/image/logo.png"
import "./Header.css"

//เป็นการบอกว่าจะมี props ส่งมาทำงาน Header(props) , Header({title}) ชื่อที่ส่งมา
export default function Header(props){
    const {title} = props
    return (
        <nav>
            <img src={Logo} alt="logo" className="logo"/>
            <a href="/">{title}</a>  
        </nav>
    );
}