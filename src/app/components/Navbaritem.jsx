'use client'

import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
useSearchParams


const Navbaritem = ({title,param}) => {

    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');

  return (
    <div>
      <Link className={`hover:text-amber-700 font-semibold ${genre === param ?'underline underline-offset-2 decoration-4 decoration  rounded-lg':'' }`} href ={`/?genre=${param}`}>
      {title}
      </Link>
    </div>
  )
}

export default Navbaritem
