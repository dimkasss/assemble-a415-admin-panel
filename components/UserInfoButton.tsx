"use client";

const UserInfoButton = () => {
  return (
    <button
      onClick={() => alert("В разработке")}
      className="border border-none rounded-full bg-blue-200 table-cell text-center align-middle h-16 w-16 m-4 md:text-3xl text-lg"
    >
      A
    </button>
  );
};

export default UserInfoButton;
