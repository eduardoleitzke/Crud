import React from "react";

function Sobre(props){
    return(
        <section id="sobre">
        <h2>SOBRE:</h2>   
        <div className="sobre_text"> 
            <p>Olá, me chamo Eduardo Leitzke Pinto, tenho 27 anos e resido na cidade de Pelotas. 
              Lido com programação há um ano, sempre fui fascinado por programação. Estudei até o 
              quarto semestre do curso de Ciência da Computação da Universidade Federal de Pelotas
               onde não me encontrei como programador, porém depois de descobrir Javascript tudo mudou!
                A ideia de poder criar algo visual foi incrível. Desenvolvo Apps completos desde o Design até 
                o back end, normalmente utilizando MERN(<span className="mongo">MongoDB</span>,<span className="express"> Express</span>, <span className="react">React</span>, <span className="node">Node</span>)
                para desenvolver meus projetos. Atualmente estudo Análise e Desenvolvimento de Sistema na Instituição de Ensino Anhanguera, e trabalho com alguns Freelancer no desenvolvimento de sites.
            </p>          
        </div>
      </section>
    )
}

export default Sobre