import HomePage from "@/components/layout/homepage";
import { Button } from "antd";
import { auth, signIn } from "@/auth"

export default async function Home() {
  return (
    <div>
      <HomePage />
      <Button>Sign in</Button>
    </div>
  );
}
