const getQuery = (type: string, arg: string) => {
  switch (type) {
    case "side":
      return `{
        collectionByHandle(handle: "${arg}") {
          products(first: 2) {
            nodes {
              title
              description
              handle
              featuredImage {
               url
              }
            }
          }
        }
      }`
    case "product":
      return `{
        productByHandle(handle: "${arg}") {
          options {
            name
            values
          }
          variants(first: 18) {
            nodes {
              availableForSale
              price
              title
              id
              image {
                url
              }
            }
          }
        }
      }`
  }
}

export const admin = async (type: string, arg: string) => {
  const query = getQuery(type, arg)

  const { data } = await fetch(
    `https://362ead-4.myshopify.com/admin/api/2023-10/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": process.env.ADMIN!,
      },
      body: JSON.stringify({ query }),
    }
  ).then((res) => res.json())

  return data
}
