import { ReactNode } from "react"

type ButtonProps = {
  children: ReactNode,
  version?: string,
  type: "submit" | "reset" | "button",
  isDisabled : boolean
}

const Button = ({children, version='primary', type='button', isDisabled=false}: ButtonProps) => {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
      {children}
    </button>
  )
}

export default Button

