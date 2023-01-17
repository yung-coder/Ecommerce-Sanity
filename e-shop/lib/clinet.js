import SanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
  projectId: "y7ozswjb",
  dataset: "production",
  apiVersion: "2023-01-15",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
