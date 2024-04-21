const AdminCard = () => {
  return (
    <>
      <div className="px-4 py-3 h-[70px] flex justify-between items-center bg-white mx-10 rounded shadow">
        <div className=" flex gap-5 items-center">
          <p className=" w-10 h-10 rounded-full bg-slate-300"></p>
          <p className=" text-lg text-slate-500">John Doe</p>
          <p className=" px-2 rounded-xl bg-blue-100 text-blue-500 text-sm text-center">
            owner
          </p>
        </div>
        <div className=" mx-10">
          <p className=" font-semibold">100%</p>
        </div>
      </div>
    </>
  );
};

export default AdminCard;
