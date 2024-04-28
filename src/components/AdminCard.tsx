import Admin from "../image/admin.png"
interface AdminCardProp {
  totalPercentage: number;
}

const AdminCard: React.FC<AdminCardProp> = ({totalPercentage}) => {
  return (
    <>
      <div className="px-4 py-3 h-[70px] flex justify-between items-center bg-white mx-10 rounded shadow">
        <div className=" flex gap-5 items-center">
          <img src={Admin} className=" w-10 rounded-full" alt="youaremysunshine" />
          <p className=" text-lg text-slate-500">Mg Admin</p>
          <p className=" px-2 rounded-xl bg-blue-100 text-blue-500 text-sm text-center">
            owner
          </p>
        </div>
        <div className=" mx-10">
          <p className=" font-semibold">{totalPercentage}%</p>
        </div>
      </div>
    </>
  );
};

export default AdminCard;
