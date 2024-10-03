interface AssemblyProps {
  params: {
    id: string;
  };
}

const Assembly: React.FC<AssemblyProps> = ({ params }) => {
  return <div>#{params.id}</div>;
};

export default Assembly;
