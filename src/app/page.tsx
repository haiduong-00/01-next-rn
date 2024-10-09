import HomePage from "@/components/layout/homepage";
import { Button } from "antd";
import { signIn } from "@/auth"

export default function Home() {
  return (
    <div>
      <HomePage />
      <Button>Sign in</Button>
    </div>
  );
}
