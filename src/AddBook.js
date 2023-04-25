import {useState, useEffect} from 'react'
import axios from 'axios'
import {API_SERVER} from './App'
import { Link, redirect, useNavigate} from "react-router-dom"

export function AddBook()
{
    const [book, set_book]= useState({})
    const nav=useNavigate()
    async function create_book()
    {
        axios({method: 'POST', url: API_SERVER, data:{book}})
        .then((res) => {
          //setBooks(res.data.data);
        })
        .catch((err) => {
          console.log('Error from BookList');
        })
        
        nav('/')
    }
    return(
        <div className="CreateBook">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br /><Link className="btn btn-info float-left" to="/">Show BooK List</Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add Book</h1>
            <p className="lead text-center">Create new book</p>
            <form noValidate="">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title of the Book"
                  name="title"
                  className="form-control"
                  
                  spellCheck="false"
                  data-ms-editor="true"
                  onChange={(e)=>set_book((p)=>{return {...p,'title':e.target.value}})}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  className="form-control"
                  
                  spellCheck="false"
                  data-ms-editor="true"
                  onChange={(e)=>set_book((p)=>{return {...p,'author':e.target.value}})}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Describe this book"
                  name="description"
                  className="form-control"
                  
                  spellCheck="false"
                  data-ms-editor="true"
                  onChange={(e)=>set_book((p)=>{return {...p,'description':e.target.value}})}
                />
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" 
              onClick={()=>{create_book(book)}}/>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}