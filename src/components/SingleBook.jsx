import { Col, Card } from 'react-bootstrap'
import { Component } from 'react'
import CommentArea from './CommentArea'




class SingleBook extends Component{
    // state = {
    //     display: false,
    //     selected: false,
        
    //   }
 
    render(){
        return(
            <Col xs={6} md={3} className="mb-3">
                <Card
                    key={this.props.book.asin}
                    // className={ this.props.display ? "BorderOn" : "BorderOff" }
            >

                    <Card.Img variant="top" src={this.props.book.img} className="imageBook"
                            // onClick={() => this.props.changeBookState({display: !this.props.display})}
                    />

                    <Card.Body onClick={() => this.props.changeBookState(this.props.book.asin)}>
                        <Card.Title className="text-truncate">{this.props.book.title}</Card.Title> 
                    </Card.Body>
                   
                    {
                    this.props.selected && <CommentArea asin={this.props.book.asin}/>
                    }
                </Card>
            </Col>
            
            )
        }
            
    }

export default SingleBook