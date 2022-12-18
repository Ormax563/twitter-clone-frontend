import React from 'react'
import GlobalStyles from './styles/GlobalStyles';
import { TwitterPage } from './pages';


function App() {
  const [token, setToken] = React.useState("");
  return (
    <div className="App">
      <TwitterPage token={token} setToken={setToken}/>
      <GlobalStyles />
    </div>
  );
}

export default App;
