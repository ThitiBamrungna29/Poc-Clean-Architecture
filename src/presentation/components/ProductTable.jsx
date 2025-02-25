import { themeConfig } from "../themes/themeConfig";

const ProductTable = ({ products, onEdit, onDelete, UI }) => {
  const { Table, Button } = UI;

  const columns = [
    { title: "ชื่อสินค้า", dataIndex: "name", key: "name" },
    { title: "ราคา", dataIndex: "price", key: "price" },
    { title: "สต๊อก", dataIndex: "stock", key: "stock" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <Button
            style={{
              backgroundColor: themeConfig.colors.primary,
              color: "#fff",
            }}
            onClick={() => onEdit(record)}
          >
            แก้ไข
          </Button>
          <Button
            type="danger"
            style={{
              backgroundColor: themeConfig.colors.error,
              color: "#fff",
              marginLeft: themeConfig.spacing.small,
            }}
            onClick={() => onDelete(record.id)}
          >
            ลบ
          </Button>
        </>
      ),
    },
  ];

  return <Table columns={columns} data={products || []} />;
};

export default ProductTable;
