import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Table } from "antd";
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

  const columns = [
    {
      title: "Author",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Manuscript",
      dataIndex: "manuscript",
      key: "manuscript",
      render: (manuscript: string) => (
        <div
          className="overflow-hidden text-ellipsis
          whitespace-nowrap w-40 sm:w-full cursor-pointer
          decoration hover:underline
          "
          onClick={() => {
            console.log(manuscript);
            router.push("/teacher");
          }}
        >
          {manuscript}
        </div>
      ),
    },
    {
      title: "Corrected",
      dataIndex: "corrected",
      key: "corrected",
    },
  ];
  const router = useRouter();
  const MyTable = () => {
    return (
      <div
        className="grid 
      mx-4 justify-center  items-center
      
      grid-cols-10 border border-white"
      >
        <div className="bg-gray-800 font-bold px-4 col-span-3">Author</div>
        <div className="bg-gray-800 font-bold px-4 col-span-6">Manuscript</div>
        <div className="bg-gray-800 font-bold px-4 justify-end flex col-span-1">
          Corrected
        </div>
        {dataSource?.map((data, key) => {
          return (
            <React.Fragment key={key}>
              <div className="grid px-4 col-span-3">{data.name}</div>
              <div
                className=" h-10 pt-2 
              overflow-hidden
              text-ellipsis whitespace-nowrap
              px-4 col-span-6 cursor-pointer
              decoration hover:underline
              "
                onClick={() => {
                  console.log(data.manuscript);
                  router.push("/teacher");
                }}
              >
                {data.manuscript}
              </div>
              <div className="grid px-4 justify-end col-span-1">
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
      <div className="mx-4">
        <Table
          dataSource={dataSource}
          columns={columns}
          size={"small"}
          style={{}}
          pagination={{
            style: {
              alignContent: "center",
              alignItems: "center",
              display: "flex",
            },
            size: "default",
            nextIcon: () => (
              <div
                className="border-gray-800 flex justify-center items-center
                 h-8 select-none px-1 border rounded"
              >
                <RightOutlined />
              </div>
            ),
            prevIcon: () => (
              <div
                className="border-gray-800 align-middle justify-center
                 items-center flex h-8  select-none px-1 border rounded"
              >
                <LeftOutlined />
              </div>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
