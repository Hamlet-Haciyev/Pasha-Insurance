import { SmileOutlined } from "@ant-design/icons";
import { notification } from "antd";
import React from "react";

export const Notification = ({ msg }) => {
  notification.open({
    message: "SOON",
    description: "",
    icon: (
      <SmileOutlined
        style={{
          color: "#108ee9",
        }}
      />
    ),
  });
};
