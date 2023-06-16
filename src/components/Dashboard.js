import React from "react";
import Header from "./Header";
import { FaDownload ,FaCommentAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa";

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="">
        <div className="flex justify-around bg-[#E4FBFB]">
          <h1 className="text-2xl text-[#1F6CAB] font-bold my-4">
            Patient Details
          </h1>
          <ul>
            <li>
              <button class="bg-[#1F6CAB] hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mx-4 my-4">
                Apply Filter
              </button>
              <input
                type="text"
                className="border border-gray-300 rounded-md px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[450px]"
                placeholder="Search by Doctor Name/ Patient Name/ Test Name..."
              />
            </li>
          </ul>
        </div>
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full text-center text-sm font-light">
                  <thead class="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
                    <tr>
                      <th scope="col" class=" px-6 py-4">
                        Order No.
                      </th>
                      <th scope="col" class=" px-6 py-4">
                        Date
                      </th>
                      <th scope="col" class=" px-6 py-4">
                        Patient Name
                      </th>
                      <th scope="col" class=" px-6 py-4">
                        Hospital ID
                      </th>
                      <th scope="col" class=" px-6 py-4">
                        Test name
                      </th>
                      <th scope="col" class=" px-6 py-4">
                        Doctor Name
                      </th>
                      <th scope="col" class=" px-6 py-4">
                        ETA
                      </th>
                      <th scope="col" class=" px-6 py-4">
                        Status
                      </th>
                      <th scope="col" class=" px-6 py-4">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap  px-6 py-4 font-medium">
                        A35363
                      </td>
                      <td class="whitespace-nowrap  px-6 py-4">01/05/2023</td>
                      <td class="whitespace-nowrap  px-6 py-4">Sankaran</td>
                      <td class="whitespace-nowrap  px-6 py-4">DR56373</td>
                      <td class="whitespace-nowrap  px-6 py-4">Anti Leukemia</td>
                      <td class="whitespace-nowrap  px-6 py-4">Dr Arun Thambi</td>
                      <td class="whitespace-nowrap  px-6 py-4">02/7/2023</td>
                      <td class="whitespace-nowrap  px-6 py-4"><div className="w-24 h-5 rounded-full bg-[#89FFAA]">Ready</div></td>
                      <td class="whitespace-nowrap  px-6 py-4 flex "><FaDownload className="mr-2"/><FaCommentAlt/></td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap  px-6 py-4 font-medium">
                        A35363
                      </td>
                      <td class="whitespace-nowrap  px-6 py-4">01/05/2023</td>
                      <td class="whitespace-nowrap  px-6 py-4">Sankaran</td>
                      <td class="whitespace-nowrap  px-6 py-4">DR56373</td>
                      <td class="whitespace-nowrap  px-6 py-4">Anti Leukemia</td>
                      <td class="whitespace-nowrap  px-6 py-4">Dr Arun Thambi</td>
                      <td class="whitespace-nowrap  px-6 py-4">02/7/2023</td>
                      <td class="whitespace-nowrap  px-6 py-4"><div className="w-24 h-5 rounded-full bg-[#E7F880]">Partial Droped</div></td>
                      <td class="whitespace-nowrap  px-6 py-4 flex "><FaDownload className="mr-2"/><FaCommentAlt/></td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap  px-6 py-4 font-medium">
                        A35363
                      </td>
                      <td class="whitespace-nowrap  px-6 py-4">01/05/2023</td>
                      <td class="whitespace-nowrap  px-6 py-4">Sankaran</td>
                      <td class="whitespace-nowrap  px-6 py-4">DR56373</td>
                      <td class="whitespace-nowrap  px-6 py-4">Anti Leukemia</td>
                      <td class="whitespace-nowrap  px-6 py-4">Dr Arun Thambi</td>
                      <td class="whitespace-nowrap  px-6 py-4">02/7/2023</td>
                      <td class="whitespace-nowrap  px-6 py-4"><div className="w-24 h-5 rounded-full bg-[#89FFAA]">Ready</div></td>
                      <td class="whitespace-nowrap  px-6 py-4 flex "><FaDownload className="mr-2"/><FaCommentAlt/></td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap  px-6 py-4 font-medium">
                        A35363
                      </td>
                      <td class="whitespace-nowrap  px-6 py-4">01/05/2023</td>
                      <td class="whitespace-nowrap  px-6 py-4">Sankaran</td>
                      <td class="whitespace-nowrap  px-6 py-4">DR56373</td>
                      <td class="whitespace-nowrap  px-6 py-4">Anti Leukemia</td>
                      <td class="whitespace-nowrap  px-6 py-4">Dr Arun Thambi</td>
                      <td class="whitespace-nowrap  px-6 py-4">02/7/2023</td>
                      <td class="whitespace-nowrap  px-6 py-4"><div className="w-24 h-5 rounded-full bg-[#F2A38A]">Lab Dropped</div></td>
                      <td class="whitespace-nowrap  px-6 py-4 flex "><FaDownload className="mr-2"/><FaCommentAlt/></td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap  px-6 py-4 font-medium">
                        A35363
                      </td>
                      <td class="whitespace-nowrap  px-6 py-4">01/05/2023</td>
                      <td class="whitespace-nowrap  px-6 py-4">Sankaran</td>
                      <td class="whitespace-nowrap  px-6 py-4">DR56373</td>
                      <td class="whitespace-nowrap  px-6 py-4">Anti Leukemia</td>
                      <td class="whitespace-nowrap  px-6 py-4">Dr Arun Thambi</td>
                      <td class="whitespace-nowrap  px-6 py-4">02/7/2023</td>
                      <td class="whitespace-nowrap  px-6 py-4"><div className="w-24 h-5 rounded-full bg-[#F2A38A]">Lab Dropped</div></td>
                      <td class="whitespace-nowrap  px-6 py-4 flex "><FaDownload className="mr-2"/><FaCommentAlt/></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
