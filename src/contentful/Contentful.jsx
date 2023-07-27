import { createClient } from "contentful"

const Contentful = () => {
  const client = createClient({
    space: "u9ekoldsaoxr",
    accessToken: "l5C22VmMTqkoz8qxSlqQWC69sO4L4KTmTE1hVhY1Bys"
  })

  const getData = async () => {
    const res = await client.getEntries({
      content_type: "cvProjects"
    })


    const arr = res.items.map(item => {

      return {
        ...item.fields,
        image: item.fields?.image?.fields.file.url || null,
      }
    })

    return arr;
  }

  return { getData }
} 

export default Contentful
