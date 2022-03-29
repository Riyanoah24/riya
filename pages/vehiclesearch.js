import React from "react";
import Link from "next/link";

import { ArrowCircleLeftIcon } from "@heroicons/react/solid";

const Vehiclesearch = () => {
  return (
    <section className="container mx-auto max-w-7xl mt-8">
      <div className="pb-5 px-4 border-b border-gray-200 flex justify-center items-center">
        <Link href="/home">
          <ArrowCircleLeftIcon className="w-8 h-8 cursor-pointer text-slate-600 hover:text-indigo-600 mr-auto transition-colors ease-in-out" />
        </Link>
        <h1 className="text-2xl mr-auto text-center leading-6 font-medium text-slate-800">
          Vehicle Search
        </h1>
      </div>

      <div className="mx-auto mt-8 md:mt-16 flex flex-col items-center justify-center gap-y-8">
        <label
          htmlFor="vehicleSearch"
          className="block text-2xl text-center mb-2 font-medium text-gray-700"
        >
          Enter you Vehicle number
        </label>
        <div className="max-w-lg flex items-center gap-x-2">
          <div className="mt-1">
            <input
              type="text"
              name="Vehicle search"
              id="vehicleSearch"
              className="shadow-sm focus:ring-indigo-500 px-6 py-3 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder=""
            />
          </div>
          <button
            type="button"
            className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Vehiclesearch;
