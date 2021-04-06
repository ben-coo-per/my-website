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

// get all posts to display on landing page
export async function getAllWork() {
  const data = await fetchData(
    `query AllWork {
        work:getProjectList(sort: {field: "date", order: "desc"}, where: {tag: {name: {match: "work"}}}) {
          items {
            _id
            date
            description
            imageGallery {
              image1 {
                filename
                path
                title
              }
            }
            tag {
              name
            }
            title
          }
        }
      }`
  );
  return data;
}

export async function getProject(_id) {
  const data = await fetchData(
    `query Project($_id: ID = "${_id}") {
      project: getProject(_id: $_id) {
        _id
        date
        description
        imageGallery {
          image1 {
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
          image2 {
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
          image3 {
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
          image4 {
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
          image5 {
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
        }
        markdown
        tag {
          _id
          name
        }
        title
      }
    }    
    `
  );
  return data;
}
