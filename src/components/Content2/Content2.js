import React, { useState, useEffect } from "react"

import { Button, Flex, ConfigProvider, Space } from "antd"

import styles from "./Content2.module.css"
import UsualBtn from "../UsualBtn/UsualBtn"
import IphoneForContent2 from "../IphoneForContent2/IphoneForContent2"

import useStore from "../../zustandStore"
import { useFetchImg } from "../../hooks/useFetchImg"

export default function Content2() {
  const { image } = useFetchImg()
  const { isMobileW } = useStore((state) => ({
    isMobileW: state.isMobileW,
  }))

  return (
    <Flex
      className={styles.content2body}
      align={"center"}
      justify={isMobileW ? "flex-start" : "center"}
      gap={60}
      vertical={isMobileW ? true : false}
    >
      {!isMobileW && <IphoneForContent2 image={image} />}

      <Flex
        vertical={true}
        style={{
          width: isMobileW ? "315px" : "570px",
          // border: "1px red solid",
        }}
      >
        <p className={styles.slogan}>Our features</p>
        <p className={styles.slogan2}>
          Few good reasons why you should use Anima Landing Page Ui Kit to make
          your own pages.
        </p>
        <Flex gap="20px" wrap="wrap">
          {isMobileW ? (
            <>
              <UsualBtn
                width="315px"
                textcontent={"Fast building"}
                imgSrc={"/UFO_icon.png"}
              />
              <UsualBtn
                width="315px"
                textcontent={"Easy to edit"}
                imgSrc={"/MagicWand_icon.png"}
              />
              <UsualBtn
                width="315px"
                textcontent={"Responsiveness"}
                imgSrc={"/BoundingBox_icon.png"}
              />
              <UsualBtn
                width="315px"
                textcontent={"No code needed"}
                imgSrc={"/Package_icon.png"}
              />
            </>
          ) : (
            <>
              <Flex gap="20px">
                <UsualBtn
                  textcontent={"Fast building"}
                  imgSrc={"/UFO_icon.png"}
                />
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
            </>
          )}
        </Flex>
      </Flex>
      {isMobileW && <IphoneForContent2 image={image} />}
    </Flex>
  )
}
