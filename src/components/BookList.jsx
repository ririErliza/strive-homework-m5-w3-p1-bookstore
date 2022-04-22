import { Component } from "react";
import { Container, Row} from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
      state = {
        // display: false,
        selected: undefined,
        
      }
      changeBookState=()=>{
          this.setState({
              selected:this.props.asin,
            //   display:true,
          })
      }

        render() {
            return (
                <Container>
            
                    <Row className="mt-4">
                        {this.props.books
                        .filter((book)=> book.title.toLowerCase().includes(this.props.searchQuery.toLowerCase()))
                        .map(book=>(<SingleBook
                            
                            selected={this.state.selected} 
                            changeBookState ={this.changeBookState}
                            key={book.asin} book={book}/> 
                        ))}
                    </Row>
                </Container>
       ) 
    
    }
}







export default BookList

// const BookList = ({books, searchQuery}) =>{
    
    // return (
    //     <Container>
         
    //         <Row className="mt-4">
    //             {books
    //             .filter((book)=> book.title.toLowerCase().includes(searchQuery.toLowerCase()))
    //             .map(book=>(<SingleBook key={book.asin} book={book}/> 
    //             ))}
    //         </Row>
    //     </Container>
    //    ) 
    