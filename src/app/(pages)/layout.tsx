import React from 'react';
import style from './index.module.css'

const layout: React.FC<Props> = ({children}) => {
  return (
    <div className={style.layout}>
        <p>products/items layout</p>
        {children}
    </div>
  )
}

type Props = {
    children: React.ReactNode;
}

export default layout