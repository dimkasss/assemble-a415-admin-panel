import { LoginForm } from "@/components/login-form";
import Image from "next/image";

import LoginPageIcon from "@/public/assemble-login-icon.svg";

const LoginPage = () => {
  return (
    <div>
      <Image
        src={LoginPageIcon}
        alt=""
        width={200}
        className="absolute left-1/2 -translate-x-1/2 top-8 md:top-4 md:left-4  md:translate-x-0"
      />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
