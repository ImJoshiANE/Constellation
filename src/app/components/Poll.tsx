import React from "react";

export default function Poll() {
  return (
    <div className="bg-[rgb(24,24,27)] mt-4 rounded-lg p-3">
      <h1 className="text-white font-semibold">Poll</h1>
      <p className="text-white mt-4">which mess is best?</p>
      <div className="mb-2">
        <div className="flex justify-between ">
          <span className="text-base font-medium text-blue-700 dark:text-white">
            Mega Mess 1
          </span>
          <span className="text-sm font-medium text-blue-700 dark:text-white">
            45%
          </span>
        </div>
        <div className="flex ">
          <div className="">
            <input
              id="link-radio"
              type="radio"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1 ml-1">
            <div
              className="bg-[#1D9BF0] h-2.5 rounded-full"
              style={{ width: "45%" }}
            ></div>
          </div>
        </div>
      </div>

      <div className="mb-2">
        <div className="flex justify-between ">
          <span className="text-base font-medium text-blue-700 dark:text-white">
            Mega Mess 1
          </span>
          <span className="text-sm font-medium text-blue-700 dark:text-white">
            40%
          </span>
        </div>
        <div className="flex ">
          <div className="">
            <input
              id="link-radio"
              type="radio"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1 ml-1">
            <div
              className="bg-[#1D9BF0] h-2.5 rounded-full"
              style={{ width: "40%" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="mb-2">
        <div className="flex justify-between ">
          <span className="text-base font-medium text-blue-700 dark:text-white">
            Annapurna
          </span>
          <span className="text-sm font-medium text-blue-700 dark:text-white">
            15%
          </span>
        </div>
        <div className="flex ">
          <div className="">
            <input
              id="link-radio"
              type="radio"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1 ml-1">
            <div
              className="bg-[#1D9BF0] h-2.5 rounded-full"
              style={{ width: "15%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
