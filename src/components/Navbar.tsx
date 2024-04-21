const Navbar = () => {
  const sideBarData = [
    {
      id: 1,
      name: "Course Overview",
    },
    {
      id: 2,
      name: "Manage Lessons",
    },
    {
      id: 3,
      name: "Subscriptions",
    },
    {
      id: 4,
      name: "Collaborations",
    },
    {
      id: 5,
      name: "Community",
    },
    {
      id: 6,
      name: "Resources",
    },
  ];
  return (
    <div className=" col-span-1 bg-blue-900">
      <div>
        <h2 className=" text-white text-2xl font-serif text-center my-5">
          Wayne Enterprise
        </h2>
        <hr />
      </div>
      <div>
        <ul className=" flex flex-col gap-5 mx-4 my-5">
          {sideBarData?.map(({ name, id }) => (
            <li className=" text-white" key={id}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
