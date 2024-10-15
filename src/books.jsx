import Book from "./book";


export default function Books ({books}){
                    console.log({books});
                  return(
                    <div>
                                        <h1>length:{books.length}</h1>
                    {
                    books.map(book => <Book book={book}></Book>)
                    }
                    </div>
                  )  
}