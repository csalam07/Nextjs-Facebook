import Image from "next/image";
import { signIn } from "next-auth/client";

function Login() {
  return (
    <div className="grid place-items-center mt-10">
      <Image
        src="/fb.png"
        alt="logo"
        height={200}
        width={200}
        objectFit="contain"
      />
      <h1
        onClick={signIn}
        className="mt-5 p-5 bg-blue-500 rounded-full cursor-pointer text-white text-center "
      >
        Login with Facebook
      </h1>
    </div>
  );
}

export default Login;
