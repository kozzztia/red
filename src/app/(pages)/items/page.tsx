import React from 'react'
import style from '../index.module.css'
import Link from 'next/link'
import { getItems } from '@/utils/api'




const page = async() => {
  const items = await getItems()

  return (
    <div className={style.container}>
        {
          items.map((item: any) => (
            <Link key={item.id} href={`items/${item.id}`}>
              {item.id} |
            </Link>
          ))
        }
    </div>
  )
}

export default page

