"use client";

import { assembliesList } from "@/lib/mockData";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { IAssemblies } from "./dataTypes";

interface IDataContext {
  assemblies: IAssemblies;
  setAssemblies: () => void;
}

export const DataContext = createContext<IDataContext | null>(null);

interface DataContextProviderProps {
  children: ReactNode;
}

const DataContextProvider: React.FC<DataContextProviderProps> = ({
  children,
}) => {
  const [assemblies, setAssemblies] = useState<IAssemblies>([]);

  const contextValue = { assemblies, setAssemblies };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useData = () => {
  const data = useContext(DataContext);
  if (!data) return null;

  const { assemblies, setAssemblies } = data;

  const fetchAssemblies = async () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(assembliesList);
      }, 1000);
    });
  };

  const removeAssembly = (id: number) => {
    assemblies?.filter((assembly) => assembly.id !== id);
  };

  return { assemblies, setAssemblies, fetchAssemblies, removeAssembly };
};

export default DataContextProvider;
