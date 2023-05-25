import {createClient} from '@sanity/client'


export const client = createClient({
  projectId: import.meta.env.VITE_PROJECT_ID,
  dataset: import.meta.env.VITE_DATASET,
  useCdn: false, // set to `false` to bypass the edge cache
  
});

// export const getResumeList = async () => {
//    const resumeList = await client.fetch('*[_type == "resume"]')
//     return resumeList;
// }