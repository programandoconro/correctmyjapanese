import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setCorrection } from "../redux/correctionSlice";
import { useAppSelector } from "../redux/hooks";
import { getPersistedDashboardData } from "../storage/persisted";
import { Table } from "antd";
import Column from "antd/lib/table/Column";
import Header from "./header";
import ButtonNew from "./ui/buttonNew";
import Spinner from "./ui/spinner";
import { DashboardData } from "../utils/types";

const Dashboard = () => {
  const [dataSource, setDataSource] = useState<DashboardData[]>();
  const [loading, setLoading] = useState(false);
  const user = useAppSelector((state) => state.auth.user);
  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    getPersistedDashboardData({ setDataSource });
  }, []);

  useEffect(() => {
    if (!dataSource) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [dataSource, dispatch]);

  const handleClickManuscript = (manuscript: DashboardData, key: number) => {
    router.push("/teacher");
    setDataForThePageToNavigate(manuscript, key);
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

  return (
    <div className="gap-4 grid ">
      <Header />
      <ButtonNew />
      <div className="px-4">
        <Table
          dataSource={dataSource}
          loading={{
            indicator: <Spinner />,
            spinning: loading,
          }}
          pagination={{
            style: {
              alignContent: "center",
              alignItems: "center",
              display: "flex",
            },
            size: "small",
          }}
        >
          <Column title="Name" key="name" dataIndex="name" />
          <Column
            title="Manuscript"
            dataIndex="manuscript"
            key="manuscript"
            render={(_: string, data: DashboardData) => (
              <div
                className="overflow-hidden text-ellipsis
                whitespace-nowrap sm:w-full cursor-pointer
                decoration hover:underline"
                onClick={() => handleClickManuscript(data, Number(data.key))}
              >
                {data.manuscript}
              </div>
            )}
            ellipsis={true}
          />
          <Column
            title="Correction"
            ellipsis={true}
            dataIndex="correction"
            key="correction"
            render={(_: string, data: DashboardData) => (
              <div
                className="overflow-hidden text-ellipsis
                whitespace-nowrap sm:w-full cursor-pointer
                decoration hover:underline"
                onClick={() => {
                  handleClickCorrection(data, Number(data.key));
                }}
              >
                {data.correction}
              </div>
            )}
          />
        </Table>
      </div>
    </div>
  );
};
export default Dashboard;
