import React from 'react'
import  './styles.css'
import returnEmptyOrValue from '@/design-system/validations/ReturnEmptyOrValue'


function CardContainer({backgroundColor, children}) {
  return <div className="card" style={{backgroundColor:backgroundColor}}>{children}</div>

}

export default CardContainer