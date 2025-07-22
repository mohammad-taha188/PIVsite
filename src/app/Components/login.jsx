"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <button onClick={() => signOut()} className="btn btn-red">
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      <button onClick={() => signIn()} className="btn btn-green">
        Sign in
      </button>
    </>
  );
}
