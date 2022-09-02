import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { useEffect, useState } from "react";
import { Differences } from "../redux/correctionSlice";
import {
  getPersistedDashboardData,
  getPersistedDifferences,
} from "../storage/persisted";
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
      title: "Corrected",
      dataIndex: "corrected",
      key: "corrected",
    },
    {
      title: "Manuscript",
      dataIndex: "manuscript",
      key: "manuscript",
    },
  ];
  return (
    <div className="">
      <Header />
      <ButtonNew />
      <div className="mx-4">
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{
            style: {
              alignContent: "center",
              alignItems: "center",
              display: "flex",
            },
            size: "default",
            nextIcon: () => {
              return (
                <div
                  className="border-gray-800 flex justify-center items-center
                 h-8 select-none px-1 border rounded"
                >
                  <RightOutlined />
                </div>
              );
            },
            prevIcon: () => {
              return (
                <div
                  className="border-gray-800 align-middle justify-center
                 items-center flex h-8  select-none px-1 border rounded"
                >
                  <LeftOutlined />
                </div>
              );
            },
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
