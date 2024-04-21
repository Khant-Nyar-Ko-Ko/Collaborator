import { useState } from "react";

interface CollaboratorData {
  name: string;
  percentage: number;
}

interface AddMemberProps {
  data: CollaboratorData[];
  onDelete : (index : number) => void;
}

const AddMember: React.FC<AddMemberProps> = (
  { data, onDelete },
  props: React.SVGProps<SVGSVGElement>
) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      {data.map((collaborator, index) => (
        <div
          key={index}
          className="px-4 py-3 h-[70px] flex justify-between items-center bg-white mx-10 mt-5 rounded shadow group"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="flex gap-5 items-center">
            <p className="w-10 h-10 rounded-full bg-slate-300"></p>
            <p className="text-lg text-slate-500">{collaborator.name}</p>
            <p className="px-2 rounded-xl bg-orange-100 text-orange-500 text-sm text-center">
              collaborator
            </p>
          </div>
          <div className="mx-10 flex gap-5 ">
            <button
            onClick={() => onDelete(index)}
              className={`hidden ${
                isHovering ? "block" : "hidden"
              } text-red-500  px-2 group-hover:block hover:block`}
            >
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                {...props}
              >
                <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z" />
                <path
                  fillRule="evenodd"
                  d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </button>
            <p className="font-semibold">{collaborator.percentage}%</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default AddMember;
