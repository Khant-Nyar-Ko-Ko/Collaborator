import Collab from "../components/Collab"
import Navbar from "../components/Navbar"

const MainPage = () => {
  return (
    <div className=" grid grid-cols-6 w-screen bg-slate-50 h-screen">
      <Navbar/>
      <Collab/>
    </div>
  )
}

export default MainPage