import Image from "next/image"
import { Layout } from "antd"
const { Header } = Layout

import { Button } from "antd"
import useStore from "../../zustandStore"

export default function GetstartBtn({ getStartIcon }) {
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
        {getStartIcon == "rocket" && (
          <Image
            style={{ marginRight: "8px" }}
            src="/RocketLaunch.svg"
            width={20}
            height={20}
          />
        )}
        Get Started
        {getStartIcon == "arrow" && (
          <Image
            style={{ marginLeft: "8px" }}
            src="/ArrowRight.png"
            width={20}
            height={20}
          />
        )}
      </Button>
    </>
  )
}
