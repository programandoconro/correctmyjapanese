import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Table } from "antd";
import Header from "./header";
import ButtonNew from "./ui/buttonNew";

const Dashboard = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
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
                <div className="border-gray-400 flex justify-center items-center h-8 select-none px-1 border rounded">
                  <RightOutlined />
                </div>
              );
            },
            prevIcon: () => {
              return (
                <div className="border-gray-400 align-middle justify-center items-center flex h-8  select-none px-1 border rounded">
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
