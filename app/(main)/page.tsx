"use client";

import CardWrapper from "@/components/card-wrapper";
import { assembliesList, containersList } from "@/lib/mockData";

const Page = () => {
  return (
    <>
      <CardWrapper data={assembliesList} title="Сборки" />
      <CardWrapper data={containersList} title="Контейнеры" />
    </>
  );
};

export default Page;
