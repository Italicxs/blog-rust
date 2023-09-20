import {createClient} from "next-sanity";

const projectId = "mb1qrzy5";
const dataset = "production";
const apiVersion = "2023-09-17";


export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true

})
