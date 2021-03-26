import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './components/Chat.js';
import Login from './components/Login';
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Container>
          <Header />
            <Main>
              <Sidebar/>
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
            </Main>
          </Container>
        </Router>
      </header>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px auto;
`
const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`