"use client"

import { client } from "./lib/sanity";
import Image from 'next/image'

interface Data {
  title: string;
  overview: string;
  _id: string;
  imageUrl: string;
}

async function getProjects() {
  const query = `*[_type == 'project']{
    title,
    overview,
    _id,
    "imageUrl" : image.asset->url
  }`;
  const data: Data[] = await client.fetch(query);

  return data;
}

export const revalidate = 60;

export default async function Home() {
  const data = await getProjects();

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <h1 className="text-3xl font-extrabold leading-9 text-gray-900 text-center mb-8">Public Projects</h1>
      <h2 className="text-xl font-light leading-9 text-gray-900 text-center"> You can see the image better by right clicking on it --- Open image in a tab.</h2>
      <h3 className="text-md font-bold leading-9 text-yellow-500 text-center cursor-pointer"> <a href="https://www.tiktok.com/@itamakingbases?is_from_webapp=1&sender_device=pc">ItamakingBases</a></h3>
      <div className="container mx-auto px-4 flex flex-wrap justify-center">
        {data.map((project) => (
          <div key={project._id} className="overflow-hidden bg-white rounded-lg shadow-lg p-4 m-4 max-w-sm">
            <div className="h-64 relative">
              <Image src={project.imageUrl} alt="Image of the project" fill className="object-cover cursor-pointer" priority={true} onClick={() => window.open(project.imageUrl, '_blank')} />
            </div>

            <div className="mt-4">
              <a target="_blank" className="text-lg font-medium text-gray-900">
                {project.title}
              </a>

              <p className="text-sm text-gray-500 mt-2 line-clamp-3">
                {project.overview}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}