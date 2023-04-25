import {useState, useEffect} from 'react'
import axios from 'axios'
import {API_SERVER} from './App'
import { Link} from "react-router-dom"


export function BookList() {
    const [books, setBooks] = useState([]);
    const [refresh_page, set_refresh_page]=useState(true)
    useEffect(() => {
      if(refresh_page)
      {
        axios
          .get(API_SERVER)
          .then((res) => {
            setBooks(res.data.data);
          })
          .catch((err) => {
            console.log('Error from BookList');
          });
        }
        set_refresh_page(false)
    }, [refresh_page]);
  
    const bookList =
      books.length === 0
        ? 'there is no book record!'
        : books.map((book, k) => <BookCard book={book} refresh={set_refresh_page} key={k} />);
  
    return (
      <div className='BookList'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <br />
              <h2 className='display-4 text-center'>Books List</h2>
              <h2>{books.length}</h2>
            </div>
  
            <div className='col-md-11'>
              <Link
                to='/create-book'
                className='btn btn-outline-warning float-right'
              >
                + Add New Book
              </Link>
              <br />
              <br />
              <hr />
            </div>
          </div>
  
          <div className='list'>{bookList}</div>
        </div>
      </div>
    );
  }


  function BookCard({book, refresh})
  {
    async function deletebook(some_id)
    {

      console.log('URL is:'+API_SERVER+book._id)
      await axios({method: 'delete', url: API_SERVER+book._id})
        .then((res) => {
          //setBooks(res.data.data);
        })
        .catch((err) => {
          console.log('Error from BookList');
        })
        refresh(true)
    }

    return(
      <>
      <div className="card-container">
          <img
            src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
            alt="Books"
            height="200"
          />
          <div className="desc">
            <h2><a href="/show-book/123id">{book.title}</a></h2>
            <h3>{book.author}</h3>
            <p>{book.description}</p>
            <button onClick={()=>{deletebook(book._id)}}>X</button>
          </div>
        </div>
      </>
    )

  }