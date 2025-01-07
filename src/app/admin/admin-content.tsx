"use client";

import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export const AdminContent = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    const autoSignin = () => {
      if (!session && status === "unauthenticated") {
        redirect("api/auth/signin");
      }
    };

    autoSignin();
  }, [session, status]);

  return (
    <div className="min-h-screen space-y-6 p-4">
      <p>admin</p>
    </div>
  );
};
