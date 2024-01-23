import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

const FeedbackForm = () => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={setRating} selected={rating}/>
        <div className="input-group">
          <input value={text} onChange={handleTextChange} type="text" placeholder='Write a review'/>
          <Button type="button" isDisabled={text.trim().length < 10 ? true : false}>Send</Button>
        </div>
        {0 < text.trim().length && text.trim().length < 10 && <small className='message'>Text must be at least 10 characters.</small>}
      </form>
    </Card>
  )
}

export default FeedbackForm