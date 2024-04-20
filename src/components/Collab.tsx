import AddMember from "./AddMember"
import AdminCard from "./AdminCard"

const Collab = () => {
  return (
    <div className=" col-span-5 bg-slate-100">
        <div className=" flex justify-between m-4 items-center">
            <h3 className=" text-xl font-semibold">Collaborations</h3>
            <button className=" px-5 py-2 bg-blue-500 text-white rounded">Publish</button>
        </div>
        <hr />
        <div className=" flex justify-between mx-20 my-5 items-center">
            <p className="">Expert Name</p>
            <p className=" ">Percentage</p>
        </div>
        <AdminCard/>
        <AddMember/>
    </div>
  )
}

export default Collab