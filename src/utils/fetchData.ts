const fetchData = async (query: string, path: string) => {
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${import.meta.env.VITE_CONTENTFUL_SPACE_ID}`

  const fetchOptions = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query
    })
  }

  try {
    const response = await fetch(fetchUrl, fetchOptions).then(response =>
      response.json()
    )
    return response.data[path]
  } catch (error) {
    throw new Error('Could not receive the data from Contentful!');
  }
}

export default fetchData