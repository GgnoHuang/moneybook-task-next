import React, { useState, useEffect } from "react"

import { Rate, Layout, Button, Flex, ConfigProvider, Space, Card } from "antd"
const { Meta } = Card

import styles from "./MemberCard.module.css"
import { Image as AntdImage } from "antd"
import { space } from "postcss/lib/list"

import useStore from "../../zustandStore"

export default function MemberCard({
  memberName,
  memberPosition,
  rate,
  imgsrc,
}) {
  const { isMobileW } = useStore((state) => ({
    isMobileW: state.isMobileW,
  }))
  const [image, setImage] = useState(null)
  useEffect(() => {
    const headers = new Headers({
      "Content-Type": "application/json",
      "x-api-key": "DEMO-API-KEY",
    })
    fetch("https://api.thecatapi.com/v1/images/search", {
      method: "GET",
      headers: headers,
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        setImage(result[0].url)
      })
      .catch((error) => {
        console.log("error", error)
      })
  }, [])

  return (
    <div>
      <Flex className={styles.cardBody} align={"center"} justify={"center"}>
        <Flex
          align={"center"}
          gap={30}
          vertical={isMobileW ? true : false}
          style={
            {
              // border: "2px solid red",
            }
          }
        >
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
                objectFit: "cover",
              }}
              alt="example"
              src={image ? image : imgsrc}
            />
            <Flex justify={"center"} vertical={true} gap={6}>
              <span className={styles.memberName}>{memberName}</span>
              <span className={styles.memberPosition}>{memberPosition}</span>
            </Flex>
          </Flex>

          <Flex
            className={styles.rating}
            vertical={true}
            justify={"center"}
            gap={24}
          >
            {!isMobileW && (
              <Rate
                className={styles.stars}
                style={{
                  display: "flex",
                }}
                allowHalf
                value={4.5}
              />
            )}

            <p className={styles.comment}>
              "Anima’s Landing Page UI Kit has become a staple in my design
              toolkit. This kit has everything I need to get the job done
              quickly and efficiently."
            </p>

            {isMobileW && (
              <Rate
                className={styles.stars}
                style={{
                  display: "flex",
                }}
                allowHalf
                value={3.5}
              />
            )}
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
}
