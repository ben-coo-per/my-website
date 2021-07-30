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
export async function getProudOf() {
  const data = await fetchData(
    `query AllWork {
        work:getProjectList(sort: {field: "date", order: "desc"}, where: {tag: {name: {match: "proud of"}}}) {
          items {
            _id
            date
            description
            thumbnail {
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

// get all posts to display on art page
export async function getOkay() {
  const data = await fetchData(
    `query AllWork {
        art:getProjectList(sort: {field: "date", order: "desc"}, where: {tag: {name: {match: "okay"}}}) {
          items {
            _id
            date
            description
            thumbnail {
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

// get all posts to display on art page
export async function getMostlyJunk() {
  const data = await fetchData(
    `query AllWork {
        art:getProjectList(sort: {field: "date", order: "desc"}, where: {tag: {name: {match: "mostly junk"}}}) {
          items {
            _id
            date
            description
            thumbnail {
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

// get specific project based on _id
export async function getProject(_id) {
  const data = await fetchData(
    `query Project($_id: ID = "${_id}") {
      project: getProject(_id: $_id) {
        _id
        date
        description
        imageGallery {
          image {
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
