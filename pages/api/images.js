const TAKESHAPE_API_KEY = process.env.TAKESHAPE_API_KEY;

const fetchImage = async ({ imagePath }) => {
  const API_ENDPOINT = `https://images.takeshape.io/${imagePath}`;
  // const res = await fetch(API_ENDPOINT, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${TAKESHAPE_API_KEY}`,
  //     },
  //     body: JSON.stringify({
  //       query,
  //       variables,
  //     }),
  //   });

  const res = await fetch(API_ENDPOINT);

  return res;
};

export async function fetchImageGallery() {}
