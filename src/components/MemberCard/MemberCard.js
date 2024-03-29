import React, { useState, useEffect } from "react"

import { Rate, Layout, Button, Flex, ConfigProvider, Space, Card } from "antd"
const { Meta } = Card

import styles from "./MemberCard.module.css"
import { Image as AntdImage } from "antd"
import { space } from "postcss/lib/list"

import useStore from "../../zustandStore"
import { useFetchImg } from "../../hooks/useFetchImg"

export default function MemberCard({
  memberName,
  memberPosition,
  rate,
  imgsrc,
  comment,
}) {
  const { image } = useFetchImg()
  const { isMobileW } = useStore((state) => ({
    isMobileW: state.isMobileW,
  }))

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

            <p className={styles.comment}>{comment}</p>

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
