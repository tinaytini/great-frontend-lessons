import { Mail } from "lucide-react";
import { InputEmail } from "../components/InputEmail";
import { InputPassword } from "../components/InputPassword";


export default function TextInputPage() {

  return (
    <div className="flex flex-col justify-around gap-8">
      <InputEmail active={true}/>
      <InputEmail
      active={true}
      prevIcon={Mail}
      />
      <InputEmail
      active={false}
      />
      <InputEmail
      active={true}
      />
      <InputPassword/>
    </div>
  )
}