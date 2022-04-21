import { Component } from "react";
import { Accordion } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentList";


class CommentArea extends Component{
    state = {
        comments : [],
    }

    componentDidMount = () =>{
        this.getComments()
    }
    getComments = async()=>{
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/"+ this.props.asin,{
                headers:{
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyZmRkYWRhMTNhZjAwMTUyYzFjNjEiLCJpYXQiOjE2NTAxOTUzMDgsImV4cCI6MTY1MTQwNDkwOH0.R40slCRU5znakDH4Eulwg2ZXXzzrhk0mhwcNDWP8WRA",
                }
            })
            if(response.ok){
                let data = await response.json()
                this.setState({
                    comments:data,
                })
            }else{
                alert("error from comment area")
            }
            
        } catch (error) {
            console.log(error)
        }
    }
    render(){
        return(
            <Accordion>
            <CommentList userComments = {this.state.comments} />
            <AddComment asin={this.props.asin} />

           </Accordion>
        )
    }

}

export default CommentArea