import {useLocation} from "react-router-dom"
// import './styles/Styles.css'

export default function FullTodoList() {
  const location = useLocation()
  console.log(location)
  return (
    <>
        {/* <h1>FullTodoList</h1> */}
        <div className="fullTodoList">
          <div className="box">
          {/* sdvmdkvjnsdjnjksngv */}
          {location.state.j}
          </div>
        </div>
    </>
  )
}