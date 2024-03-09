import Image from "next/image"

import { Layout } from "antd"
const { Header } = Layout

// import styles from "./UsualBtn.module.css"

import { Button, Flex, ConfigProvider, Space } from "antd"

import useStore from "../../zustandStore"

export default function GetstartBtn({ textcontent, imgSrc, width = "275px" }) {
  const { isMobileW } = useStore((state) => ({
    isMobileW: state.isMobileW,
  }))
  return (
    <>
      <Button
        // className={styles.btn}
        style={{
          boxShadow: " 0px 10px 21px 0px #e0e5ff",

          width: width,
          height: "90px",
          fontSize: "21px",
          lineHeight: "31.5px",
          fontWeight: "400",
          backgroundColor: "#FFFFFF",
          borderRadius: "20px",
          border: "1px #E5F4F2 solid",
          color: "#2D2D2D",
        }}
        type="primary"
      >
        <Flex align={"center"} gap={"20px"}>
          <Flex
            align={"center"}
            justify={"center"}
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#E5F4F2",

              borderRadius: "12.2px",
            }}
          >
            <Image alt="example" src={imgSrc} width={25.61} height={25.61} />
          </Flex>
          {textcontent}
        </Flex>
      </Button>
    </>
  )
}
