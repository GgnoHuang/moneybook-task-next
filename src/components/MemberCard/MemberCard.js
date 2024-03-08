import { Rate, Layout, Button, Flex, ConfigProvider, Space, Card } from "antd"
const { Meta } = Card

import styles from "./MemberCard.module.css"
import { Image as AntdImage } from "antd"
import { space } from "postcss/lib/list"

export default function MemberCard({
  memberName,
  memberPosition,
  rate,
  imgsrc,
}) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {},
        },
      }}
    >
      <Flex className={styles.cardBody} align={"center"} justify={"center"}>
        <Flex align={"center"}>
          <Flex
            vertical={true}
            align={"center"}
            className={styles.infoCard}
            gap={16}
          >
            <AntdImage
              width={120}
              height={120}
              style={{
                borderRadius: "50%",
                border: "0px solid red",
              }}
              alt="example"
              src={imgsrc}
            />
            <Flex justify={"center"} vertical={true}>
              <span className={styles.memberName}>{memberName}</span>
              <span className={styles.memberPosition}>{memberPosition}</span>
            </Flex>
          </Flex>

          <Flex className={styles.rating} vertical={true} justify={"center"}>
            <Rate allowHalf value={4.5} />
            <p className={styles.comment}>
              "Anima’s Landing Page UI Kit has become a staple in my design
              toolkit. This kit has everything I need to get the job done
              quickly and efficiently."
            </p>
          </Flex>
        </Flex>
      </Flex>
    </ConfigProvider>
  )
}
