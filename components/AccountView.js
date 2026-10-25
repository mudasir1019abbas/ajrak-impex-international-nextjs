"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Button, PageHero } from "@/components/UI";
import Reveal from "@/components/Reveal";

// Example protected page - extend with orders, inquiries, etc.
export default function AccountView() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  return (
    <>
      <PageHero title="My Account" />
      <section className="py-12">
        <Reveal className="mx-auto max-w-xl rounded-xl p-6 shadow-lg ring-1 ring-slate-100">
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between"><dt className="text-slate-500">Name</dt><dd className="font-semibold text-navy-800">{user?.name}</dd></div>
            <div className="flex justify-between"><dt className="text-slate-500">Email</dt><dd className="font-semibold text-navy-800">{user?.email}</dd></div>
          </dl>
          <Button variant="outline" className="mt-6" onClick={handleLogout}>Log out</Button>
        </Reveal>
      </section>
    </>
  );
}
