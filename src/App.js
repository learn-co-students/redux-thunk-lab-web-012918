import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Navbar} from 'react-bootstrap'
import {fetchCats} from './actions/catActions'
import CatList from './CatList'
import { bindActionCreators } from 'redux'
// import thunk from 'redux-thunk';
export class App extends Component {

  componentDidMount(){
    // debugger
    this.props.fetchCats()
  }
  render() {
    // debugger
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.catPics}/>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    catPics: state.pictures
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCats: fetchCats
  }, dispatch)
}



export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
// export default App
