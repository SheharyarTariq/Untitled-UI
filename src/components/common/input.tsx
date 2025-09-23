import React from 'react'
import { Input } from '../base/input/input'

interface InputProps {
  className?: string;
  icon?:React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label?: string;
  hint?: string;
  placeholder?: string;
  tooltip?: string;
  isRequired?: boolean;
  isReadOnly?: boolean;
  type?:string;
  id?:string;
}



const input:React.FC<InputProps> = ({icon, placeholder, id, type}) => {
  return (
    <Input
      id={id}
      type={type}
      icon={icon}
      placeholder={placeholder}
    />
  )
}

export default input