import MyForm from '../components/MyForm';
import '../App.css'


function MyForm() {

    return (
        <Router>
          <div className = "container-front">
            <div className="App">
              <MyNavbar />
              <Switch>
              <Route path="/" exact component={Todo} />
              <Route path="/contacts" exact component={Contacts} />
              </Switch>
          
            </div>
          </div>
      </Router>  
      );
    }
    
    export default App
    


}
