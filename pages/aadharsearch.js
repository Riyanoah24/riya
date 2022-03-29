import React, { useState } from "react";
import Link from "next/link";
import { supabase } from "../lib/initSupabase";

import { ArrowCircleLeftIcon } from "@heroicons/react/solid";

const Aadharsearch = () => {
  const [aadharDetails, setAadharDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAadhar = async (event) => {
    event.preventDefault();

    setLoading(true);

    const { data, error } = await supabase
      .from("people")
      .select("*", "aadhar_number!inner(*)")
      .eq("aadhar_number!inner(*)", event.target.aadharNumber.value);
    setLoading(false);
    setAadharDetails(data);

    console.log(aadharDetails);
  };

  return (
    <section className="container mx-auto max-w-7xl mt-8">
      <div className="pb-5 px-4 border-b border-gray-200 flex justify-center items-center">
        <Link href="/home">
          <ArrowCircleLeftIcon className="w-8 h-8 cursor-pointer text-slate-600 hover:text-indigo-600 mr-auto transition-colors ease-in-out" />
        </Link>
        <h1 className="text-2xl mr-auto text-center leading-6 font-medium text-slate-800">
          Aadhar Search
        </h1>
      </div>

      <form onSubmit={(event) => fetchAadhar(event)}>
        <div className="mx-auto mt-8 md:mt-16 flex flex-col items-center justify-center gap-y-8">
          <label
            htmlFor="aadharNumber"
            className="block text-2xl text-center mb-2 font-medium text-gray-700"
          >
            Enter you Adhaar Number
          </label>
          <div className="max-w-lg flex items-center gap-x-2">
            <div className="mt-1">
              <input
                type="text"
                setData
                name="Aadhar Number"
                id="aadharNumber"
                className="shadow-sm focus:ring-indigo-500 px-6 py-3 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder=""
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Search
            </button>
          </div>
        </div>
      </form>

      {loading ? (
        <p className="text-center mx-auto w-full mt-8 md:mt-16">Loading....</p>
      ) : null}

      {aadharDetails.length !== 0 ? (
        <div className="border border-slate-200 rounded-lg w-full mx-auto max-w-lg mt-16 p-8 gap-y-8 flex flex-col">
          <p>Name : {aadharDetails[0]?.name}</p>
          <p>Age : {aadharDetails[0]?.age}</p>
          <p>Driving license : {aadharDetails[0]?.driving_licence}</p>
          <p>Aadhar number : {aadharDetails[0]?.aadhar_number}</p>
          <p>vehicle number : {aadharDetails[0]?.vehicle_number}</p>
        </div>
      ) : null}
    </section>
  );
};

export default Aadharsearch;
