import './App.css'
import Router from './Routing/Router'

function App() {
  var logStat = "0";
  window.localStorage.setItem("logStatus", logStat);
  return (
    <>
      <Router />
    </>
  )
}

export default App
