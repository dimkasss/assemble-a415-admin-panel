"use client";

const UserInfoButton = () => {
  return (
    <button
      onClick={() => alert("В разработке")}
      className="absolute top-2 right-2 border border-none rounded-full bg-blue-200 table-cell text-center align-middle h-12 w-12 m-4 md:text-3xl text-lg"
    >
      A
    </button>
  );
};

export default UserInfoButton;
