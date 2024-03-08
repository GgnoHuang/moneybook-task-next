// "use client"
import { Button, Flex, ConfigProvider, Space } from "antd"

import { Layout } from "antd"

const { Content } = Layout

import styles from "./Content2.module.css"
import GetstartBtn from "../GetstartBtn/GetstartBtn"
import HowitworkBtn from "../HowitworkBtn/HowitworkBtn"
import UsualBtn from "../UsualBtn/UsualBtn"
import Iphone from "../Iphone/Iphone"

export default function Content2() {
  return (
    <Flex
      className={styles.content2body}
      align={"center"}
      justify={"center"}
      gap={60}
    >
      <Flex
        className={styles.iphoneContainer}
        justify={"center"}
        align={"center"}
      >
        <div className={styles.iphoneBgCircle}></div>

        <Iphone transform="scale(0.733)" display={"none"} />
      </Flex>

      <Flex
        vertical={true}
        style={{ width: "570px", border: "3px blue solid" }}
      >
        <p className={styles.slogan}>Our features</p>
        <p className={styles.slogan2}>
          Few good reasons why you should use Anima Landing Page Ui Kit to make
          your own pages.
        </p>
        <Flex gap="20px" wrap="wrap">
          <Flex gap="20px">
            <UsualBtn textcontent={"Fast building"} imgSrc={"/UFO_icon.png"} />
            <UsualBtn
              textcontent={"Easy to edit"}
              imgSrc={"/MagicWand_icon.png"}
            />
          </Flex>
          <Flex gap="20px">
            <UsualBtn
              textcontent={"Responsiveness"}
              imgSrc={"/BoundingBox_icon.png"}
            />
            <UsualBtn
              textcontent={"No code needed"}
              imgSrc={"/Package_icon.png"}
            />
          </Flex>
        </Flex>
        {/* <Iphone /> */}
      </Flex>
    </Flex>
  )
}
