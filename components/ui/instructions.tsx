import { Divider, Steps } from "antd";
import {
  UserOutlined,
  EditOutlined,
  FileAddOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import Title from "antd/lib/typography/Title";

export default function Instructions() {
  return (
    <div className="md:px-10">
      <Title level={3}>Instructions</Title>
      <Title level={4}>To write a manuscript</Title>
      <Steps
        items={[
          {
            title: "Click the New button",
            status: "finish",
            icon: <FileAddOutlined rev={undefined} />,
          },
          {
            title: "Write you manuscript and click Finish",
            status: "finish",
            icon: <EditOutlined rev={undefined} />,
          },
          {
            title: "Wait for some native speaker to correct your manuscript",
            status: "process",
            icon: <ClockCircleOutlined rev={undefined} />,
          },
        ]}
      />
      <Divider />
      <Title level={4}>To correct a manuscript</Title>
      <Steps
        items={[
          {
            title: "Click the manuscript you want to correct ",
            status: "finish",
            icon: <UserOutlined rev={undefined} />,
          },
          {
            title: "Edit it and click Finish",
            status: "finish",
            icon: <EditOutlined rev={undefined} />,
          },
        ]}
      />
    </div>
  );
}
