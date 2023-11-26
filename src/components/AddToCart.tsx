"use client"

import { storefront } from "@/utils/storefront"

const AddToCart = ({ variant }: any) => {
  const out = async () => {
    const cart = localStorage.getItem("cart")

    if (!cart) {
      const {
        cartCreate: {
          cart: { id },
        },
      } = await storefront("create", variant.id)

      localStorage.setItem("cart", id)
    } else {
      console.log("EXISTING CART")
    }
  }

  return (
    <>
      <button onClick={out}>Add to cart</button>
    </>
  )
}

export default AddToCart
