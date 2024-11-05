import { IAssemblies } from "@/app/(main)/assemblies/[id]/page";
import Detail from "./Detail";

interface DetailsListProps {
  details: IAssemblies;
}

const DetailsList: React.FC<DetailsListProps> = ({ details }) => {
  return (
    <div className="max-w-[40vw] flex flex-col gap-4">
      <h2 className="mb-6">Добавьте детали</h2>
      {details.map((detail) => (
        <Detail />
      ))}
    </div>
  );
};

export default DetailsList;
