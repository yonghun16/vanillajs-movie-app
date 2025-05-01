const { APIKEY } = process.env

export default async function handler(request, response) {
  const { title, page, id } = JSON.parse(request.body)
  console.log(title, page, id)

  const url = id
    ? `https://omdbapi.com/?apikey=${APIKEY}&i=${id}&plot=full`
    : `https://omdbapi.com/?apikey=${APIKEY}&s=${title}&page=${page}`

  try {
    const res = await fetch(url)
    const json = await res.json()
    response.status(200).json(json)
  } catch (error) {
    response.status(500).json({ error: 'Something went wrong' })
  }
}
