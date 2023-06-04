export async function storefront(query:any, variables = {}){

    const response = await fetch(
       "https://c1c0ac.myshopify.com/api/2023-04/graphql.json",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "X-Shopify-Storefront-Access-Token": "a975612ecafb899532748903eb31cccc"
            },
            body: JSON.stringify({ query, variables }),
        }
    )
    return response
}