import './App.css'
import About from './components/About'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Header from './components/Header'
import Login from './components/Login'


const personData = {
  name:"Ibrahim",
  age:"25",
  email:"test@gmail.com",
}
const clickMe = ()=>{
  alert("Click Me");
}
function App(props) {

  return (
    <>
      <Banner title="This is from Parent Component"/>
      <About item={personData} clickFunc={clickMe}/>
    </>
  )
}

export default App
