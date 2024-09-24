import ActivityButtonComponent from "./activity-button";

const ActivitySection = () => {
  return (
    <div className="m-3 bg-[--bg-secondary] w-[15vw] min-w-[250px] border border-transparent rounded-2xl shadow-xl p-8">
      <ActivityButtonComponent icon="home" />
      <ActivityButtonComponent icon="search" />
      <ActivityButtonComponent icon="settings" />
    </div>
  );
};

export default ActivitySection;
