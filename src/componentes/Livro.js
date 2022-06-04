const Livro = ({titulo, autor,}) => {
    return (
    <div>
      <table className="table">
    <thead>
      <tr>
        <th scope="col">Título <td scope="row">{titulo}</td></th>
        <th scope="col">Autor    <td scope="row">{autor}</td></th>
      </tr>
    </thead>

  </table>

    </div>
    )
}
export default Livro