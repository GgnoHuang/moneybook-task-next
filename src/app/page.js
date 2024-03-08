"use client"
import { Flex, ConfigProvide } from "antd"
import { Layout } from "antd"
const { Footer } = Layout

import { layoutStyle } from "../styles/antStyles"

import HeaderComponent from "../components/HeaderComponent/HeaderComponent"
import Content1 from "../components/Content1/Content1"
import Content2 from "../components/Content2/Content2"
import Content3 from "../components/Content3/Content3"
import Content4 from "../components/Content4/Content4"

export default function Home() {
  return (
    <div>
      <Flex>
        <Layout style={layoutStyle}>
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
