import './App.js'

function App() {
    return (
    <div>
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
                        <a className="nav-link" href="#">Acervo Completo</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Litsta de desejos</a>
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
    <div>
        <h2>
            olaaaaaaaa
        </h2>
    </div>
     
    </div>
  );
}

export default App;

    