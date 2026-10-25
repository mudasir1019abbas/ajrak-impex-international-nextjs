import SignupForm from "@/components/SignupForm";

export const metadata = {
  title: "Sign up",
  robots: { index: false, follow: true },
};

export default function SignupPage() {
  return <SignupForm />;
}
