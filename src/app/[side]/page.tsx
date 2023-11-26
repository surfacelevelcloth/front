import { admin } from "@/utils/admin"
import Image from "next/image"
import Link from "next/link"

const getProducts = async (side: string) => {
  return await admin("side", side)
}

const Side = async ({ params: { side } }: any) => {
  const {
    collectionByHandle: {
      products: { nodes },
    },
  } = await getProducts(side)

  return (
    <>
      <h1>{side}</h1>

      {nodes.map((node: any) => {
        return (
          <div className="m-10 bg-slate-300 p-5" key={node.handle}>
            <Image
              src={node.featuredImage.url}
              alt="Product Image"
              width={200}
              height={200}
            />

            <h2 className="inline-block text-lg hover:underline">
              <Link href={`/product/${node.handle}`}>{node.title}</Link>
            </h2>

            <p>{node.description}</p>
          </div>
        )
      })}
    </>
  )
}

export default Side
