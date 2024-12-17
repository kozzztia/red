'use client'
import React from 'react'
import style from '../index.module.css'
import { usePathname, useRouter } from 'next/navigation'

const page = () => {
  const {back, replace} = useRouter()
  const path = useRouter()
  const pathName = usePathname()
  return (
    <div className={style.container}>
        {pathName}
        <button onClick={back}>back</button>
    </div>
  )
}

export default page