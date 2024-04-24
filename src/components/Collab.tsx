import { useRef, useState } from "react";
import AddMember from "./AddMember";
import AddModal from "./AddModal";
import AdminCard from "./AdminCard";

interface CollaboratorData {
  name : string;
  percentage : number;
}

const Collab : React.FC = () => {

  const [data, setData] = useState<CollaboratorData[]>([]);
  const totalPercentageRef = useRef<number>(100);

  const addData = (newData: CollaboratorData) => {
    const remainingPercentage = totalPercentageRef.current;
  
    if (remainingPercentage === 0) {
      return;
    }
  
    if (newData.percentage <= remainingPercentage) {
      setData([...data, newData]);
      totalPercentageRef.current -= newData.percentage;
    } else {
      const updatedPercentage = remainingPercentage;
      setData([...data, { ...newData, percentage: updatedPercentage }]);
      totalPercentageRef.current = 0;
    }
  };

  const handleDelete : (index : number)  => void = (index) => {
    const deletedPercentage = data[index].percentage;
    const newData = data.filter((_,i) => i !== index);
    setData(newData);
    totalPercentageRef.current += deletedPercentage;
  }

  const handleUpdatePercentage = (index: number, newPercentage: number) => {
    const oldPercentage = data[index].percentage;
    const diff = newPercentage - oldPercentage;
    if (diff <= totalPercentageRef.current) {
      const newData = [...data];
      newData[index].percentage = newPercentage;
      setData(newData);
      totalPercentageRef.current -= diff;
    }
  };
  
  

  return (
    <div className=" col-span-5 bg-slate-100 ">
      <div className=" flex justify-between m-4 items-center">
        <h3 className=" text-xl font-semibold">Collaborations</h3>
        <button className=" px-5 py-2 bg-blue-500 text-white rounded">
          Publish
        </button>
      </div>
      <hr />
      <div className=" grid grid-cols-4">
      <div className=" col-span-3">
      <div className=" flex justify-between mx-20 my-5 items-center">
        <p className="">Expert Name</p>
        <p className=" ">Percentage</p>
      </div>
      <AdminCard totalPercentage={totalPercentageRef.current}  />
      <AddMember data={data} onDelete={handleDelete} onUpdatePercentage={handleUpdatePercentage} />
      </div>
      <AddModal addData={addData}/>
    </div>
    </div>
  );
};

export default Collab;
