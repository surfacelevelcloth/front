"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import AddToCart from "./AddToCart"

const Options = ({ options, variants: { nodes } }: any) => {
  const [variant, setVariant] = useState(nodes[0])

  const split = variant.title.split(" / ")

  const [color, setColor] = useState(split[0])
  const [size, setSize] = useState(split[1])

  const select = (option: string, content: string) => {
    option === "Color" ? setColor(content) : setSize(content)
  }

  useEffect(() => {
    const variant = nodes.find(
      (node: any) => node.title === color + " / " + size
    )!

    setVariant(variant)
  }, [color, size])

  return (
    <>
      <Image
        src={variant.image.url}
        alt="Product Image"
        width={200}
        height={200}
      />

      {options.map(({ name, values }: any) => (
        <div key={name}>
          {values.map((value: any) => (
            <button
              key={value}
              className={`border-2 border-solid border-black rounded-xl ${
                name === "Color" ? "w-36" : "w-16"
              }`}
              onClick={(e) => select(name, e.currentTarget.textContent!)}
            >
              {value}
            </button>
          ))}
        </div>
      ))}

      {variant.availableForSale || <p>Not in stock</p>}

      <AddToCart variant={variant} />
    </>
  )
}

export default Options
