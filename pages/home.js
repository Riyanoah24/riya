import React from "react";

import { supabase } from "../lib/initSupabase";
import { useRouter } from "next/router";

import Link from "next/link";

const Home = () => {
  const router = useRouter();
  return (
    <section className="container mx-auto max-w-7xl  mt-8">
      <div className="pb-5 px-4 border-b border-gray-200 flex items-center justify-between">
        <h1 className="ml-auto text-2xl text-center leading-6 font-medium text-slate-800">
          Home
        </h1>
        <button
          type="button"
          className="ml-auto inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={async () => {
            const { error } = await supabase.auth.signOut();
            router.push("/");
            if (error) console.log("Error logging out:", error.message);
          }}
        >
          log out
        </button>
      </div>

      <div className="flex items-center justify-center gap-y-8 px-8 gap-x-8 md:gap-x-16 mt-16">
        <Link href="/vehiclesearch">
          <div className="px-8 py-16 md:px-16 md:py-32 max-w-xs rounded-lg bg-slate-100 border cursor-pointer border-slate-200 hover:bg-slate-300 active:ring-2 active:ring-slate-300 active:ring-offset-2 transition-colors ease-in-out">
            <p className="text-center text-lg text-slate-800">
              Search by Vehicle number
            </p>
          </div>
        </Link>
        <Link href="/aadharsearch">
          <div className="px-8 py-16 md:px-16 md:py-32 max-w-xs rounded-lg bg-slate-100 border cursor-pointer border-slate-200 hover:bg-slate-300 active:ring-2 active:ring-slate-300 active:ring-offset-2 transition-colors ease-in-out">
            <p className="text-center text-lg text-slate-800">
              Search by Aadhar number
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Home;
