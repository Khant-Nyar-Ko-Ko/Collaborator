import MemberCard from "./MemberCard";

interface CollaboratorData {
  name: string;
  percentage: number;
}

interface AddMemberProps {
  data: CollaboratorData[];
  onDelete: (index: number) => void;
  onUpdatePercentage: (index: number, percentage: number) => void;
}

const AddMember: React.FC<AddMemberProps> = ({
  data,
  onDelete,
  onUpdatePercentage,
}) => {
  return (
    <>
      {data.map((collaborator: CollaboratorData, index: number) => (
        <MemberCard
        data={data}
          key={index}
          collaborator={collaborator}
          index={index}
          onDelete={onDelete}
          onUpdatePercentage={onUpdatePercentage}
        />
      ))}
    </>
  );
};

export default AddMember;
