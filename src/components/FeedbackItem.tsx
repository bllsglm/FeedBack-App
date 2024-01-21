import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";

type ItemProps = {
  id: number;
  rating: number;
  text: string;
  handleDelete: (id:number) => void; 
};

const FeedbackItem = ({id, rating, text, handleDelete}: ItemProps) => {

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={()=>handleDelete(id)}>
        <FaTimes color="red"/>
      </button>
      <div className="text-display">
        {text}
      </div>
    </Card>
  )
}

export default FeedbackItem