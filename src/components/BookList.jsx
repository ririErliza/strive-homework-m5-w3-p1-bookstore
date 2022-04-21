// import { Component } from "react";

import { Container, Row} from "react-bootstrap";

import SingleBook from "./SingleBook";


const BookList = ({books, searchQuery}) =>{
    
       return (
        <Container>
         
            <Row className="mt-4">
                {books
                .filter((book)=> book.title.toLowerCase().includes(searchQuery.toLowerCase()))
                .map(book=>(<SingleBook key={book.asin} book={book}/> 
                ))}
            </Row>
        </Container>
       ) 
    
    }



export default BookList

// class BookList extends Component {

//     render() {
//         return (
//             <Container>
        
//                 <Row className="mt-4">
//                     {this.props.books
//                     .filter((book)=> book.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
//                     .map(book=>(<SingleBook key={book.asin} book={book}/> 
//                     ))}
//                 </Row>
//             </Container>
//    ) 

// }
// }