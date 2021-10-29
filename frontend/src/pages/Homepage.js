import useFetch from "../hooks/useFetch"
import { Link } from 'react-router-dom'

export default function Homepage() {
  const allReviewsUrl = 'http://localhost:1337/reviews'
  const { data, error, loading } = useFetch(allReviewsUrl)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>

  console.log(data)

  return (
    <div>
      { data ? data.map(review => (
        <div key={review.id} className="review-card">
          <div className="rating">{review.rating}</div>
          <h2>{review.title}</h2>

          <small>console list</small>

          <p>{review.body.substring(0, 100)}...</p>
          <Link to={`/details/${review.id}`}>Read more</Link>
        </div>
      )) : (<p>no data was found</p>)}
    </div>
  )
}
