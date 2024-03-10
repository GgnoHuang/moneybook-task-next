import { useState, useEffect } from "react"

export function useFetchImg() {
  const [image, setImage] = useState(null)

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((res) => res.json())
      .then((res) => {
        setImage(res[0].url)
      })
      .catch((error) => {
        console.log("error", error)
      })
  }, [])

  return { image }
}
