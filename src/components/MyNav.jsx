import { Component } from 'react'
import { Navbar, Nav} from 'react-bootstrap'

class MyNav extends Component{

  render(){
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        {this.props.title}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#home">About</Nav.Link>
          <Nav.Link href="#home">Browse</Nav.Link>
        </Nav>
        <Nav>
            <input type="text" placeholder="Search title..." className="w-75" 
              value={this.props.searchQuery}
              onChange={e => this.props.changeAppState( e.target.value)}
             />
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
    )
  }
}


export default MyNav

//const MyNav = (props) => (
  //   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  //     <Navbar.Brand href="#home">
  //       {props.title}
  //     </Navbar.Brand>
  //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  //     <Navbar.Collapse id="responsive-navbar-nav">
  //       <Nav className="mr-auto">
  //         <Nav.Link href="#home">Home</Nav.Link>
  //         <Nav.Link href="#home">About</Nav.Link>
  //         <Nav.Link href="#home">Browse</Nav.Link>
  //       </Nav>
  //       <Nav>
  //           <input type="text" placeholder="Search title..." className="w-75" 
  //             value={this.state.searchQuery}
  //             onChange={e => this.setState({ searchQuery: e.target.value })}
  //            />
  //       </Nav>
        
  //     </Navbar.Collapse>
  //   </Navbar>
  // )
  