import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="py-10 w-full flex justify-center items-center">
      <SignIn />;
    </main>
  );
}
