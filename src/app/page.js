"use client"

import React, { useState, useEffect } from "react"

import { Layout, Flex, ConfigProvide } from "antd"
const { Footer } = Layout

import { layoutStyle } from "../styles/antStyles"

import HeaderComponent from "../components/HeaderComponent/HeaderComponent"
import Content1 from "../components/Content1/Content1"
import Content2 from "../components/Content2/Content2"
import Content3 from "../components/Content3/Content3"
import Content4 from "../components/Content4/Content4"

import useStore from "../zustandStore"

export default function Home() {
  const { isMobileW, setIsMobileW } = useStore((state) => ({
    isMobileW: state.isMobileW,
    setIsMobileW: state.setIsMobileW,
  }))

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 375px)")
    const updateIsMobileW = () => {
      setIsMobileW(mediaQuery.matches ? true : false)
    }
    updateIsMobileW()
    mediaQuery.addListener(updateIsMobileW)
    return () => mediaQuery.removeListener(updateIsMobileW)
  }, [])

  return (
    <div>
      <Flex>
        <Layout
          style={
            {
              // width: isMobileW ? "375px" : "auto",
              // width: "175px",
            }
          }
        >
          <HeaderComponent />
          <Content1 />
          <Content2 />
          <Content3 />
          <Content4 />
        </Layout>
      </Flex>
    </div>
  )
}
