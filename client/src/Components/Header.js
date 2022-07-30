import React ,{useRef}from "react";
import btnSound from "../Assets/Sounds/btnsounds.mp3"

function Header(props){
     /*Use Refs */
  const btnS_ref = useRef(null)
    function audioManipulate(){
        btnS_ref.current.play()
      }
    return(
        <header>
        <p><span>B</span><span>E</span><span>M</span><span className="traco">-</span><span>V</span><span>I</span><span>N</span><span>D</span><span>O</span></p>
        <div>
            <ul className="menu">
              <li onMouseOver={()=>audioManipulate()}> <audio ref={btnS_ref} src={btnSound}></audio> Sobre</li>
              <li onMouseOver={()=>audioManipulate()}>Projetos</li>
              <li onMouseOver={()=>audioManipulate()}>Certificados</li>
              <li onMouseOver={()=>audioManipulate()}>Tecnologias</li>
              <li onMouseOver={()=>audioManipulate()}>Contato</li>
            </ul>
        </div>
    </header>
    )
}


export default Header