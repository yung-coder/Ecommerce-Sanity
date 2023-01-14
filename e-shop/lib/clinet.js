import SanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
  projectId: "y7ozswjb",
  dataset: "production",
  apiVersion: "2023-01-15",
  useCdn: true,
  token:
    "sk6hopLkZuxNZKSt3TXfz2jHO3rL05FTO0oExupdtyS2DN1mt60KmIkdzRrkgVeIFoAApzDMbfpKXYY9uAaa28iQ32kiHm7qUjHkqO4Mwzjjw4AIVrW0tY3Od10mHFUSjQXGTpNPPYUq0Ui1K27QWw5nfdRRxs2fFyPa1Kj78wNdMXHrsuF5",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
