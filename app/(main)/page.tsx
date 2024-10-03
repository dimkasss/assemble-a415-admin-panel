"use client";

import ActivitySection from "@/components/ActivitySection";
import CardWrapper from "@/components/card-wrapper";
import { assembliesList, containersList } from "@/lib/mockData";

const Page = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Control Panel */}
      <ActivitySection />

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6 overflow-y-auto mt-12">
        <CardWrapper data={assembliesList} title="Сборки" />
        <CardWrapper data={containersList} title="Контейнеры" />
      </div>
    </div>
  );
};

export default Page;
