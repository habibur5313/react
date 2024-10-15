import './book.css';
export default function Book ({book}) {
                    console.log(book);
                  return(
                    <div className='book'>
                                        <h1>name:{book.name}</h1>
                                        <h1>price: {book.price}</h1>
                    </div>
                  )  
}