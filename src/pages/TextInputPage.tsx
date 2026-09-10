import { Mail } from "lucide-react";
import { InputEmail } from "../components/InputEmail";


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
      err={true}
      />
    </div>
  )
}