"use client"
import React from "react"
import { AntdRegistry } from "@ant-design/nextjs-registry"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: "0px" }}>
        {/* {children} */}
        <AntdRegistry>{children}</AntdRegistry>
        {/* <Header /> */}
      </body>
    </html>
  )
}
