import { LoginForm } from "@/components/login-form";
import Image from "next/image";

import LoginPageIcon from "@/public/assemble-login-icon.svg";

const LoginPage = () => {
  return (
    <div style={{ backgroundColor: "#FBF8FF" }}>
      <Image
        src={LoginPageIcon}
        className="absolute top-4 left-4"
        alt=""
        width={150}
      />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
