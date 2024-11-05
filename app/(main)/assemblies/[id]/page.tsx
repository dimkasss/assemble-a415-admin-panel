import ContentHeading from "@/components/ContentHeading";
import {
  AssemblyProps,
  IAssemblies,
  IAssembly,
} from "@/components/dataHandler/dataTypes";
import DetailsList from "@/components/DetailsList";

const detailsMockData: IAssemblies = [
  {
    id: 1,
    name: "Деталь 1",
    count: 10,
  },
  {
    id: 2,
    name: "Деталь 1",
    count: 10,
  },
  {
    id: 3,
    name: "Деталь 1",
    count: 10,
  },
  {
    id: 4,
    name: "Деталь 1",
    count: 10,
  },
  {
    id: 5,
    name: "Деталь 1",
    count: 10,
  },
  {
    id: 6,
    name: "Деталь 1",
    count: 10,
  },
  {
    id: 7,
    name: "Деталь 1",
    count: 10,
  },
];

const Assembly: React.FC<AssemblyProps> = ({ params }) => {
  return (
    <div>
      <ContentHeading editable title={"Сборка №" + params.id} />
      <DetailsList details={detailsMockData} />
    </div>
  );
};

export default Assembly;
