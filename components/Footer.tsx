import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Footer = ({ user, type = 'desktop' }: FooterProps) => {
  return (
    <footer className="footer">
    <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
    <p className="text-xl font-bold text-gray-700">user</p>
    </div>  

    <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>
        <h1 className="text-14 truncate text-gray-700 font-semibold">Nhier</h1>
    </div>   

    <div className="footer_image">
    <Image src="icons/logout.svg" fill alt="logo" />
    </div>   
    </footer>
  )
}

export default Footer