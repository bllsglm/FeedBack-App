import { useState, useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import FeedbackContext from './context/FeedbackContext';


const FeedbackForm = () => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)

  const { addFeedback, feedBackEdit, updateFeedback } = useContext(FeedbackContext)!

  useEffect(()=>{
    if(feedBackEdit.edit === true ){
      setText(feedBackEdit.item.text)
      setRating(feedBackEdit.item.rating)
    }
  },[feedBackEdit])


  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const submitHandler = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (text.trim().length >= 10) {
      const id = uuidv4()
      const newFeedback = {
        text,
        rating,
        id,
      };
      newFeedback.id= uuidv4()

      if(feedBackEdit.edit === true ){
        updateFeedback(feedBackEdit.item.id, newFeedback)
      }else{
        addFeedback(newFeedback)
      }
      
      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={setRating} selected={rating}/>
        <div className="input-group">
          <input value={text} onChange={handleTextChange} type="text" placeholder='Write a review'/>
          <Button type="submit" isDisabled={text.trim().length < 10 ? true : false}>Send</Button>
        </div>
        {0 < text.trim().length && text.trim().length < 10 && <small className='message'>Text must be at least 10 characters.</small>}
      </form>
    </Card>
  )
}

export default FeedbackForm