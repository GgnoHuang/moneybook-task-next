import Image from "next/image"
import { Layout } from "antd"
const { Header } = Layout

import { Button } from "antd"
import useStore from "../../zustandStore"

export default function GetstartBtn() {
  const { isMobileW } = useStore((state) => ({
    isMobileW: state.isMobileW,
  }))
  return (
    <>
      <Button
        style={{
          width: "221px",
          height: "60px",
          fontSize: "16px",
          lineHeight: "24px",
          backgroundColor: "#009379",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        type="primary"
      >
        <Image
          style={{ marginRight: "8px" }}
          src="/RocketLaunch.svg"
          width={20}
          height={20}
        />
        Get Started
      </Button>
    </>
  )
}
