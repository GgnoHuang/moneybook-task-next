// import React from "react"
"use client"
import { Button, Flex, ConfigProvider, Space } from "antd"
import { Layout } from "antd"
const { Footer } = Layout

import {
  headerStyle,
  contentStyle,
  siderStyle,
  footerStyle,
  layoutStyle,
  whiteContentStyle,
} from "../styles/antStyles"

import HeaderComponent from "../components/HeaderComponent/HeaderComponent"
import Content1 from "../components/Content1/Content1"
import Content2 from "../components/Content2/Content2"

export default function Home() {
  return (
    <div>
      <Flex>
        <Layout style={layoutStyle}>
          <HeaderComponent />
          <Content1 />
          <Content2 />

          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Flex>

      {/* </ConfigProvider> */}
    </div>
  )
}
