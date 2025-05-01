const { APIKEY } = process.env

export default async function handler(request, response) {
  const { title, page, id } = request.body

let url = ''

if (id) {
  url = `https://omdbapi.com/?apikey=${APIKEY}&i=${id}&plot=full`
} else {
  url = `https://omdbapi.com/?apikey=${APIKEY}&s=${title}&page=${page}`
  console.log(url)
}

  try {
    const res = await fetch(url)
    const json = await res.json()
    response.status(200).json(json)
  } catch (error) {
    response.status(500).json({ error: 'Something went wrong' })
  }
}
