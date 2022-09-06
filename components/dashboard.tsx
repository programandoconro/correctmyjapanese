import { Table } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCorrection } from "../redux/correctionSlice";
import { useAppSelector } from "../redux/hooks";
import { getPersistedDashboardData } from "../storage/persisted";
import { DashboardData } from "../utils/types";
import Header from "./header";
import ButtonNew from "./ui/buttonNew";

const Dashboard = () => {
  const [dataSource, setDataSource] = useState<DashboardData[]>();
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.auth.user);
  useEffect(() => {
    getPersistedDashboardData({ setDataSource });
  }, []);
  const handleClickManuscript = (manuscript: DashboardData, key: number) => {
    router.push("/teacher");
    setDataForThePageToNavigate(manuscript, key);
  };
  const handleClickUser = () => {
    router.push("/user");
  };
  const setDataForThePageToNavigate = (data: DashboardData, key: number) => {
    dispatch(
      setCorrection({
        manuscriptToCorrect: data.manuscript,
        itemKey: key,
        teacher: user.name,
        teacherUid: user.uid,
        studentName: data.name,
        studentToCorrectUid: data.studentUid,
        correction: data.correction,
      })
    );
  };
  const handleClickCorrection = (manuscript: DashboardData, key: number) => {
    setDataForThePageToNavigate(manuscript, key);
    router.push("/my-correction");
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name: string) => <div onClick={handleClickUser}>{name}</div>,
    },
    {
      title: "Manuscript",
      dataIndex: "manuscript",
      key: "manuscript",
      render: (_: string, data: DashboardData) => (
        <div
          className="overflow-hidden text-ellipsis
          whitespace-nowrap sm:w-full cursor-pointer
          decoration hover:underline
          "
          onClick={() => handleClickManuscript(data, Number(data.key))}
        >
          {data.manuscript}
        </div>
      ),
    },
    {
      title: "Correction",
      dataIndex: "correction",
      key: "correction",
      render: (_: string, data: DashboardData) => (
        <div
          className="overflow-hidden text-ellipsis
          whitespace-nowrap sm:w-full cursor-pointer
          decoration hover:underline
          "
          onClick={() => {
            handleClickCorrection(data, Number(data.key));
          }}
        >
          {data.correction}
        </div>
      ),
    },
  ];

  const router = useRouter();
  return (
    <div className="gap-4 grid ">
      <Header />
      <ButtonNew />
      <div className="px-4">
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{
            style: {
              alignContent: "center",
              alignItems: "center",
              display: "flex",
            },
            size: "small",
          }}
        />
      </div>
    </div>
  );
};
export default Dashboard;
