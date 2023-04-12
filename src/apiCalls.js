
export const getTopStories = async (category) => {
  const apiKey = import.meta.env.VITE_API_KEY
  const url = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${apiKey}`
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(response.text)
  }
  return response.json()
}