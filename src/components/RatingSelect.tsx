import { useContext, useEffect } from "react"
import FeedbackContext from "./context/FeedbackContext"


type RatingSelectProps = {
  select: (value:number)=>void,
  selected: number
}

const RatingSelect = ({ select, selected } : RatingSelectProps) => {

  const {  feedBackEdit } = useContext(FeedbackContext)!

  useEffect(()=>{
    select(feedBackEdit.item.rating)
  },[feedBackEdit,select])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    select(+e.currentTarget.value)    
  }

  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect