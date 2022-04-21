import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import './App.css';
import BookList from './components/BookList';
import MyBadge from './components/MyBadge';
import MyNav from './components/MyNav';
import DataBooks from './data/Books.json';


class App extends Component{
    state = {
        searchQuery: ''
    }

    changeAppState=(newValue)=>{
      this.setState({
        searchQuery:newValue
      })
    }

    render(){
      return(
        <div >
      <MyNav title="Yo!Bookstore" searchQuery={this.state.searchQuery} changeAppState={this.changeAppState}/>
      <MyBadge text="Badge" color="danger" />
      
      <BookList books={DataBooks} searchQuery={this.state.searchQuery}/>
      
    </div>
      )
    }

}
// function App() {
//   return (
//     <div >
//       <MyNav title="Yo!Bookstore"/>
//       <MyBadge text="Badge" color="danger" />
      
//       <BookList books={DataBooks} />
      
//     </div>
//   );
// }

export default App;

