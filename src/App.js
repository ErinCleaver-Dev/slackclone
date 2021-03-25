import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './components/Chat.js';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Container>
          <Header />
            <Switch>
              <Route path="/room">
                <Chat />
              </Route>
              <Route>
                <Route path="/">
                  <Login />
                </Route>
              </Route>
            </Switch>
          </Container>
        </Router>
      </header>
    </div>
  );
}

export default App;
