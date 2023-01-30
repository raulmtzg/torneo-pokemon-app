

export const Paginacion = ({paginate, onNextPage}) => {
  
  const { links } = paginate;
  
  return (
    <>
        <div className="row">
            <div className="col-12">
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                  {/* <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                      </a>
                  </li> */}
                  {
                    links.map( ( pagina ) => (
                        
                        <li key={pagina.label} className={ pagina.url == null ? 'page-item disabled' : 'page-item'}>
                          <a className={pagina.active ? 'page-link active' : 'page-link'} href="#" aria-label="Previous" onClick={() => onNextPage(pagina.url)}>
                            <span aria-hidden="true">{pagina.label}</span>
                          </a>
                        </li>
                                                  
                      
                    ))                                  
                  }
                  {/* <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  
                  <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                      </a>
                  </li> */}
                </ul>
            </nav>
            </div>
      </div>
    </>
  )
}
