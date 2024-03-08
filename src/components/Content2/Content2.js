import { Button, Flex, ConfigProvider, Space } from "antd"

import { Layout } from "antd"

const { Content } = Layout

import styles from "./Content2.module.css"
import GetstartBtn from "../GetstartBtn/GetstartBtn"
import HowitworkBtn from "../HowitworkBtn/HowitworkBtn"
import Iphone from "../Iphone/Iphone"

export default function Content2() {
  return (
    <Flex
      className={styles.contnet2}
      align={"center"}
      justify={"center"}
      gap={60}
      style={{
        backgroundColor: "#F8F9FF",
        backgroundColor: "red",
        zIndex: "100",
      }}
    >
      <Iphone transform="scale(0.733)" display={"none"} />
      <Flex
        vertical={true}
        style={{ width: "620px", border: "3px blue solid" }}
      >
        <p
          style={{
            margin: "0px",
            fontSize: "38px",
            fontWeight: "700",
            border: "1px red solid",
            lineHeight: "49.4px",
          }}
        >
          Our features
        </p>
        <p
          style={{
            margin: "20px 0px 40px 0px",
            fontSize: "21px",
            border: "1px red solid",
          }}
        >
          Few good reasons why you should use Anima Landing Page Ui Kit to make
          your own pages.
        </p>
        <Flex gap="18px">
          <GetstartBtn />
          <HowitworkBtn
            width="202px"
            backgroundColor="#FFFFFF"
            color="#009379"
            fontSize="16px"
          />
        </Flex>
        {/* <Iphone /> */}
      </Flex>
    </Flex>
  )
}
