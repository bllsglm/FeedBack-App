import { FeedbackListProps } from "./FeedbackList"


const FeedbackStats = ({feedback}: FeedbackListProps) => {


  let average: number|string = feedback.reduce((acc,cur)=> acc + cur.rating,0)/ feedback.length
  
  average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {feedback.length>0 ? average : 0}</h4>
    </div>
  )
}

export default FeedbackStats
