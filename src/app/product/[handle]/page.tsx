import Options from "@/components/Options"
import { admin } from "@/utils/admin"

const getProduct = async (handle: string) => {
  return await admin("product", handle)
}

const Handle = async ({ params: { handle } }: any) => {
  const {
    productByHandle: { options, variants },
  } = await getProduct(handle)

  return (
    <>
      <h1>Handle</h1>

      <Options options={options} variants={variants} />
    </>
  )
}

export default Handle
