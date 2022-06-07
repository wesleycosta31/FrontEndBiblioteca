import './App.css'
import './acervo.js'
import { useEffect, useState } from 'react';
import Livro from './componentes/Livro';

function App() {

const [livros, setLivros] = useState([])

  useEffect(() =>{
    fetch('http://localhost:3000/livros')
      .then(resposta => resposta.json())
      .then(dados => {
        setLivros(dados)
      })
  }, [])

  return (
    <div className="App">
           <header>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
              <div className="container-fluid">
              <a className="navbar-brand" href="./App.js">Livraria Sebo Cultural</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Histórias Medievais</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Ficção Científica</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Romances Internacionais</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Literatura Brasileira</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./acervo.js">Acervo Completo</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Lista de desejos</a>
                    </li>
                  </ul>
                
                  <form className='d-flex' role='search'>
                   <input className="form-control me-2" type="search" placeholder="Pesquisar Livro" aria-label="Search"></input>
                    <button className="btn btn-outline-success" type="submit">Pesquisar</button>
                  </form>
                  </div>
              </div>
             </nav>
           </header>


         <section className='prateleira'>
          {livros.map(livro => 
          (<Livro
          key={livro.id} 
          titulo={livro.titulo} 
          autor={livro.autor} 
          />))}

        </section>  



     </div>     
      

  );
}

export default App;
