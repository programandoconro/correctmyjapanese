import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getPersistedDashboardData } from "../storage/persisted";
import { DashboardData } from "../utils/types";
import Header from "./header";
import ButtonNew from "./ui/buttonNew";

const Dashboard = () => {
  const [dataSource, setDataSource] = useState<DashboardData[]>();
  useEffect(() => {
    getPersistedDashboardData({ setDataSource });
  }, []);

  const router = useRouter();
  const MyTable = () => {
    return (
      <div
        className="grid 
      mx-4 justify-center  items-center
      
      grid-cols-10 border-2 border-gray-500"
      >
        <div className="bg-gray-800 border-gray-500 font-bold px-4 col-span-3 h-10 items-center grid select-none">
          Author
        </div>
        <div className="bg-gray-800 font-bold border-gray-500 px-4 col-span-6 h-10 items-center grid select-none">
          Manuscript
        </div>
        <div className="bg-gray-800 font-bold px-4 justify-end h-10 col-span-1 select-none items-center grid">
          Corrected
        </div>
        {dataSource?.map((data, key) => {
          return (
            <React.Fragment key={key}>
              <div
                className="grid
              hover:bg-gray-700
              transition
               h-10 select-none
              items-center
              cursor-pointer
               px-4 col-span-3"
              >
                {data.name}
              </div>
              <div
                className=" h-10 pt-2 
              transition
              overflow-hidden
              text-ellipsis whitespace-nowrap
              px-4 col-span-6 cursor-pointer
              hover:bg-gray-700
              "
                onClick={() => {
                  console.log(data.manuscript);
                  router.push("/teacher");
                }}
              >
                {data.manuscript}
              </div>
              <div className="grid px-4 h-10 justify-end items-center col-span-1 select-none">
                {data.corrected}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    );
  };
  return (
    <div className="gap-4 grid ">
      <Header />
      <ButtonNew />
      <MyTable />
    </div>
  );
};

export default Dashboard;
