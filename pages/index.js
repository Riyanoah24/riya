import React from "react";

import { supabase } from "../lib/initSupabase";
import { Auth } from "@supabase/ui";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  supabase.auth.onAuthStateChange((event, session) => {
    router.push("/home");
  });
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center mx-auto max-w-lg items-center p-4">
        <h1 className="text-center font-semibold text-xl mb-5">
          Vehicle authentication
        </h1>
        <Auth supabaseClient={supabase} />
      </div>
    </>
  );
}
