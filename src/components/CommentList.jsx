import { Component } from 'react'
import { Card,Accordion } from 'react-bootstrap'
import SingleComment from './SingleComment'

class CommentList extends Component{

    render(){
    return (
      
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                Read all comments
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        {
                            this.props.userComments.map(comment=>(
                                <SingleComment singleComment={comment} key={comment._id}/>
                            ))
                        }
                       
                     
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
                                                    
    )
}
}
export default CommentList