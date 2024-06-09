import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  return (
    <div className="flex  h-screen bg-slate-300 justify-center ">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg text-center bg-white w-80 h-max p-2 px-4">
          <Heading label={"Sign In"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox label={"Email"} placeholder={"John@gmail.com"} onChange={(e) => setUserName(e.target.value)} />
          <InputBox label={"Password"} placeholder={""} onChange={(e) => setPassword(e.target.value)} />
          <div className="pt-4">
            <Button label={"Sign In"} onClick={async () => {
              const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                username,
                password
              })
              localStorage.setItem("token", response.data.token);
              navigate("/dashboard")
            }} />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign Up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};
