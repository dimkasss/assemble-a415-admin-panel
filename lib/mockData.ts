export interface assemblyProps {
  id: number;
  number: number;
  title: string;
  hasSound: boolean;
}

export interface containerProps {
  id: number;
  number: number;
  title: string;
}

export const assembliesList: assemblyProps[] = [
  {
    id: 1,
    number: 10,
    title: "Робот-панда",
    hasSound: true,
  },
  {
    id: 4,
    number: 6,
    title: "Робот-панда",
    hasSound: false,
  },
  {
    id: 2,
    number: 4,
    title: "Робот-панда",
    hasSound: true,
  },
  {
    id: 3,
    number: 3,
    title: "Робот-панда",
    hasSound: true,
  },
  {
    id: 5,
    number: 8,
    title: "Робот-панда",
    hasSound: false,
  },
  {
    id: 6,
    number: 9,
    title: "Робот-панда",
    hasSound: true,
  },
  {
    id: 7,
    number: 2,
    title: "Робот-панда",
    hasSound: true,
  },
  {
    id: 8,
    number: 10,
    title: "Робот-панда",
    hasSound: true,
  },
  {
    id: 9,
    number: 10,
    title: "Робот-панда",
    hasSound: true,
  },
];

export const containersList: containerProps[] = [
  {
    id: 1,
    number: 1,
    title: "Контейнер 1",
  },
  {
    id: 2,
    number: 2,
    title: "Контейнер 1",
  },
  {
    id: 3,
    number: 3,
    title: "Контейнер 1",
  },
  {
    id: 4,
    number: 4,
    title: "Контейнер 1",
  },
  {
    id: 5,
    number: 5,
    title: "Контейнер 1",
  },
  {
    id: 6,
    number: 6,
    title: "Контейнер 1",
  },
  {
    id: 7,
    number: 7,
    title: "Контейнер 1",
  },
];
