import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="py-10 w-full flex justify-center items-center">
      <SignUp />
    </main>
  );
}
