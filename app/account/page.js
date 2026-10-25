import AccountView from "@/components/AccountView";
import ProtectedRoute from "@/components/ProtectedRoute";

export const metadata = {
  title: "My Account",
  robots: { index: false, follow: false },
};

export default function AccountPage() {
  return (
    <ProtectedRoute>
      <AccountView />
    </ProtectedRoute>
  );
}
