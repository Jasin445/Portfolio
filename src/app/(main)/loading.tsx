import Logo from '@/assets/logo-removebg-preview.png'
import React from 'react'
import Image from 'next/image'

const Loading = () => {
   return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-700 animate-fadeOut">
                <Image
                    src={Logo}
                    alt="JD Logo"
                    width={300}
                    height={100}
                    className="animate-pulse-scale"
                />
            </div>
        )
}

export default Loading