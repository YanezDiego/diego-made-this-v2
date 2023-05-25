import {createClient} from '@sanity/client'
import {process} from 'dotenv'

export const client = createClient({
  projectId: process.env.React_APP_PROJECT_ID,
  dataset: process.env.REACT_APP_DATASET,
  useCdn: true,
  apiVersion: "2023-05-01",
});

export async function getResumeList(){
    const resumeList = await client.fetch('*[_type === resume]');
    return resumeList;
}