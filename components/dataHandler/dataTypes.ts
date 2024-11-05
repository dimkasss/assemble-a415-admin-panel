export interface AssemblyProps {
  params: {
    id: string;
  };
}

export interface IAssembly {
  id: number;
  name: string;
  count: number;
}

export interface IAssemblies extends Array<IAssembly> {}
