type HeaderProps = {
  text?: string,
  bgColor? : string,
  textColor? : string 
}

const Header = ({text = 'Feedbacks', bgColor='rgba(0,0,0,4)', textColor= 'green'}: HeaderProps) => {

  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor
  }

  return (
      <header style={headerStyles}>
        <div className="container">
          <h2> {text}</h2>
        </div>
      </header>
  )
}

export default Header