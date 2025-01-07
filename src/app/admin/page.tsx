import { SessionProvider } from "next-auth/react";
import { auth } from "~/server/auth";
import { AdminContent } from "./admin-content";

const AdminPage = async () => {
  const session = await auth();
  if (session?.user) {
    // @ts-expect-error - TODO: add it later
    session.user = {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    };
  }

  return (
    <SessionProvider session={session}>
      <AdminContent />
    </SessionProvider>
  );
};

export default AdminPage;
