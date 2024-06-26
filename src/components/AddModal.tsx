import { useState } from "react";

interface AddModalProps {
  addData: (data: CollaboratorData) => void;
}

interface CollaboratorData {
  name: string;
  percentage: number;
}

const AddModal: React.FC<AddModalProps> = ({ addData }) => {
  const [name, setName] = useState("");
  const [percentage, setPercentage] = useState("");

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangePercentage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPercentage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsedPercentage = parseFloat(percentage);
    if (isNaN(parsedPercentage)) {
      console.error('Percentage must be a number.');
      return;
    }
    const data : CollaboratorData = {
      name,
      percentage : parsedPercentage,
    };
    addData(data);
    setName("");
    setPercentage("");
  };

  return (
    <div className=" bg-slate-200 w-full h-[700px] flex justify-center items-start py-10 ">
      <div className=" w-[250px] bg-white h-[230px] flex flex-col justify-center py-5 px-3 gap-5 items-center rounded shadow">
        <h3 className=" text-blue-500 font-semibold text-lg">
          Add new collaborator
        </h3>
        <form onSubmit={handleSubmit} className=" flex flex-col gap-5">
          <div className=" flex flex-col text-slate-500 text-sm justify-between">
            <label htmlFor="" className="">
              Name
            </label>
            <input
              type="text"
              className=" w-[200px] bg-slate-100"
              value={name}
              onChange={handleChangeName}
            />
          </div>
          <div className=" flex flex-col text-slate-500 text-sm justify-between">
            <label htmlFor="">Percentage :</label>
            <input
              type="number"
              className=" w-[200px] bg-slate-100"
              value={percentage}
              min={0}
              max={100}
              onChange={handleChangePercentage}
            />
          </div>
          <button
            type="submit"
            className=" text-center bg-blue-500 px-4 py-2 rounded text-white "
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddModal;
