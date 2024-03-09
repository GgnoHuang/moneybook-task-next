import { Layout } from "antd"
const { Header } = Layout
import { Button, Flex, ConfigProvider, Space } from "antd"
import useStore from "../../zustandStore"

export default function HowitworkBtn({
  text,
  width = "202px",
  backgroundColor,
  color,
  fontSize,
  border = "0px",
}) {
  const { isMobileW } = useStore((state) => ({
    isMobileW: state.isMobileW,
  }))
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: "#E5F4F2",
              algorithm: true,
            },
          },
        }}
      >
        <Button
          type="primary"
          style={{
            width: isMobileW ? "221px" : width,
            height: "60px",
            fontSize: fontSize,
            lineHeight: "24px",
            color: color,
            backgroundColor: backgroundColor,
            borderRadius: "20px",
            border: border,
          }}
        >
          {text}
        </Button>
      </ConfigProvider>
    </>
  )
}
