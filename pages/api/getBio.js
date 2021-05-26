const API_ENDPOINT = `https://api.takeshape.io/project/${process.env.TAKESHAPE_PROJECT_ID}/v3/graphql`;
const TAKESHAPE_API_KEY = process.env.TAKESHAPE_API_KEY;

const fetchData = async (query, { variables } = {}) => {
  const res = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TAKESHAPE_API_KEY}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  // return res;
  const responseJson = await res.json();
  if (responseJson.errors) {
    console.error(responseJson.errors);
    return responseJson.errors;
  }

  return responseJson.data;
};

// get all posts to display on work page
export async function getBio() {
  const data = await fetchData(
    `query Bio {
        bio:getBio {
            _id
            asset {
              _id
              caption
              credit
              description
              filename
              mimeType
              path
              sourceUrl
              title
              uploadStatus
            }
            markdown
          }
      }`
  );
  return data;
}
