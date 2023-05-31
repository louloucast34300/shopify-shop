export async function storefront(query:any, variables = {}){

    const response = await fetch(
       "https://fcb829-2.myshopify.com/api/2023-04/graphql.json",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "X-Shopify-Storefront-Access-Token": "dc56b8b4664ba27e8e209ca0a91c72f6"
            },
            body: JSON.stringify({ query, variables }),
        }
    )
    return response
}