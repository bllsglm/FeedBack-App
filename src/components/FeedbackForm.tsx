import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import { v4 as uuidv4 } from 'uuid';


type HandleAddProps = (feedback: {id:string|number; text: string; rating: number }) => void;


const FeedbackForm = ({handleAdd}: {handleAdd: HandleAddProps}) => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)

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
      handleAdd(newFeedback)
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