import { createClient } from "next-sanity";


const client = createClient({
    projectId :"b9th97vd",
    dataset :"production",
    useCdn : true,
    apiVersion : "2025-01-19"
})

export async function sanityFetch({query,params = {}}: {query:string , params?: any}){
    return await client.fetch(query,params)
}