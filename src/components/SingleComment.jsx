
import { Button } from "react-bootstrap"




const SingleComment =(props) => (
        <>
            <li>{props.singleComment.rate} --- {props.singleComment.comment} 
            <Button variant="danger" size="sm" > Delete </Button> </li>
                         
        </>                       
    )


export default SingleComment

//can be written below:
// (props)--> ({singleComment})

// const SingleComment = ({ comment }) => (
//     <ListGroup.Item>
//         {comment.comment}
//         <Button variant="danger" className="ml-2" onClick={() => deleteComment(comment._id)}>D</Button>
//     </ListGroup.Item>
// )