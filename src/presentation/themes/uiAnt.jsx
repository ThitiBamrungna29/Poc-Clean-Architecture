import {
    Table as AntTable,
    Button as AntButton,
    Input,
    Modal as AntModal,
    Select as AntSelect,
  } from "antd";
  import { themeConfig } from "./themeConfig";
  
  export const Table = ({ columns, data }) => (
    <AntTable columns={columns} dataSource={data} rowKey="id" />
  );
  
  export const Button = ({ children, type, onClick, style = {} }) => (
    <AntButton
      type={type === "danger" ? "primary" : "default"}
      onClick={onClick}
      style={{
        backgroundColor: type === "danger" ? themeConfig.colors.error : themeConfig.colors.primary,
        color: "#fff",
        ...style,
      }}
    >
      {children}
    </AntButton>
  );
  
  export const Modal = AntModal;
  export const Select = AntSelect;
  