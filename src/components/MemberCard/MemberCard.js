import { Layout, Button, Flex, ConfigProvider, Space, Card } from "antd"
const { Meta } = Card
import { Image } from "antd"
import styles from "./MemberCard.module.css"

export default function MemberCard() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {},
        },
      }}
    >
      <Card
        hoverable
        style={{
          width: 370,
          height: 454,
        }}
        cover={
          <Image
            style={{
              overflow: "hidden",
              height: 278,
              objectFit: "cover",
            }}
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Flex vertical={true}>
          <Meta title="Project Title" description="Short Description" />
          <Meta description="Category" />
        </Flex>
      </Card>
    </ConfigProvider>
  )
}
