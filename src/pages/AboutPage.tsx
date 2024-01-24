import { Link } from "react-router-dom"
import Card from '../components/shared/Card';

const AboutPage = () => {
  return (
    <div className="container">
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>
          A React application designed for providing feedback on products or services.
        </p>
        <Link to='/'>Back to Home</Link>
      </div>
    </Card>
    </div>
  )
}

export default AboutPage