import ActivityButtonComponent from "./activity-button";

import ActivityButtonIcon1 from "@/public/activity-button-icon-1.svg";
import ActivityButtonIcon2 from "@/public/activity-button-icon-2.svg";

const ActivitySection = () => {
  return (
    <div className="m-3 bg-[--bg-secondary] w-[15vw] min-w-[250px] border border-transparent rounded-2xl shadow-xl p-8 flex flex-col justify-between">
      <div>
        <ActivityButtonComponent
          text="Добавить контейнер"
          imageData={{
            image: ActivityButtonIcon1,
            imageAlt: "",
          }}
        />
        <ActivityButtonComponent
          text="Добавить сборку"
          imageData={{
            image: ActivityButtonIcon2,
            imageAlt: "",
          }}
        />
      </div>
      <ActivityButtonComponent text="Печать QR-кодов" />
    </div>
  );
};

export default ActivitySection;
