import Image from "next/image"

export default function Iphone({ transform = "scale(1)", display }) {
  return (
    <div
      style={{
        transform: transform,
        display: "flex",
        justifyContent: "center",
        position: "relative",
        top: "24px",
        border: "red solid 2px",
        zIndex: "10",
      }}
    >
      <div
        style={{
          width: "304px",
          height: "581px",
          backgroundColor: "#2D2D2D",
          borderRadius: "53.48px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "12px",
          position: "relative",
          // zIndex: "16",
        }}
      >
        <div
          style={{
            width: "91.7px",
            height: "19.86px",
            backgroundColor: "#2D2D2D",
            borderRadius: "50px",
            position: "absolute",
            top: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "3px",
            // zIndex: "10",
          }}
        >
          <div
            style={{
              width: "41.26px",
              height: "3.06px",
              backgroundColor: "#CFCFCF",
              borderRadius: "25px",
              position: "relative",
              // zIndex: "10",
            }}
          ></div>
          <div
            style={{
              width: "3.06px",
              height: "3.06px",
              backgroundColor: "#CFCFCF",
              borderRadius: "50%",
              position: "relative",
            }}
          ></div>
        </div>
        <div
          style={{
            width: "100%",
            flexGrow: 1,
            backgroundColor: "#fff",
            borderRadius: "45.84px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Arial, sans-serif",
            overflow: "hidden",
          }}
        >
          <Image
            src="/dd1e32d37720da772c1a3f47dd40c313.png"
            width={281}
            height={557}
          />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "169px",
          width: "420px",
          height: "420px",
          backgroundColor: "#ffffff",
          borderRadius: "127px",
          zIndex: "-1",
          border: "red 1px solid",
          display: display,
        }}
      ></div>
    </div>
  )
}
