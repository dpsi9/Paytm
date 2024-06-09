import axios from "axios";
import { BottomWarning } from "../components/BottomWarning";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const data = {
    firstName,
    lastName,
    username,
    password
  }
  const handleClick = async () => {
    const response = await axios.post("http://localhost:3000/api/v1/user/signup", data)
    localStorage.setItem("token", response.data.token);
    navigate("/dashboard");
  }

  return (
    <div className="flex  h-screen bg-slate-300 justify-center ">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg text-center bg-white w-80 h-max p-2 px-4">
          <Heading label={"Sign Up"} />
          <SubHeading label={"Enter your information to create your account"} />
          <InputBox label={"First Name"} placeholder={"John"} onChange={(e) => setFirstName(e.target.value)} />
          <InputBox label={"Last Name"} placeholder={"Doe"} onChange={(e) => setLastName(e.target.value)} />
          <InputBox label={"Email"} placeholder={"John@gmail.com"} onChange={(e) => setUsername(e.target.value)} />
          <InputBox label={"Password"} placeholder={""} onChange={(e) => setPassword(e.target.value)} />
          <div className="pt-4">
            <Button label={"Sign Up"} onClick={handleClick} />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Login"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};
