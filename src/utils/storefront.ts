const getQuery = (type: string, arg: string) => {
  switch (type) {
    case "create":
      return `mutation {
        cartCreate(
          input: {lines: [{quantity: 1, merchandiseId: "${arg}"}]}
        ) {
          cart {      
            id
          }
          userErrors {
            field
            message
          }
        }
      }`
  }
}

export const storefront = async (type: string, arg: string) => {
  const query = getQuery(type, arg)
  console.log(query)

  const { data } = await fetch(
    `https://362ead-4.myshopify.com/api/2023-10/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": "654b0f6e25248d1191fbda6dfef0f6d1",
      },
      body: JSON.stringify({ query }),
    }
  ).then((res) => res.json())

  return data
}
