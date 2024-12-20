import { useState } from "react";
import { addCookie, login } from "../utilities/productfetch";
import toast from "react-hot-toast";
import useCookie from "../context/useCookie";

function Login() {
  const [active, setActive] = useState(false);
  const { setCookie } = useCookie();

  function handleLogin(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const fullname = form.get("fullname");
    const email = form.get("email");
    const password = form.get("password");

    if (active) {
      login({ fullname, email, password }, "signup").then((data) => {
        // console.log(data);
        data.status === "failed"
          ? toast.error(data.message)
          : toast.success(data.message) && setActive((prev) => !prev);
      });
    } else {
      login({ email, password }, "login").then((data) => {
        console.log(data);
        if (data.status === "failed") {
          toast.error(data.message);
        } else {
          addCookie("jwt", data.token, 1);
          setCookie(document.cookie);
          toast.success(data.message);
        }
        // data.status === "failed"
        //   ? toast.error(data.message)
        //   : toast.success(data.message);
      });
    }
  }

  return (
    <div className="space-y-4">
      <div className="line-con">
        <h2 className="uppercase">{!active ? "Login" : "Sign Up"}</h2>
        <div className="line"></div>
      </div>
      <form
        className="max-w-[25rem] mx-auto space-y-4 flex flex-col"
        onSubmit={handleLogin}
      >
        {active && (
          <input
            type="text"
            placeholder="fullname"
            name="fullname"
            className="w-full p-2 border-black border"
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-full p-2 border-black border"
          required
        />
        <input
          type="text"
          placeholder="Password"
          name="password"
          className="w-full p-2 border-black border"
          required
        />
        <button
          type="button"
          className="self-end"
          onClick={() => setActive((prev) => !prev)}
        >
          {!active ? "Create Account" : "Login Here"}
        </button>
        <button className="btn self-center" type="submit">
          {!active ? "Sign In" : "Sign Up"}
        </button>
      </form>
    </div>
  );
}

export default Login;
