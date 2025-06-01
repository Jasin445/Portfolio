// components/LoadingScreen.tsx
'use client'
import { PropsWithChildren, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Logo from '@/assets/logo-removebg-preview.png' // update path to your logo
import Navbar from './Navbar'

export default function LoadingScreen({children }: PropsWithChildren) {
    const [isLoading, setIsLoading] = useState(true)
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        timerRef.current = setTimeout(() => setIsLoading(false), 1000) // 2s loader
        return () => clearTimeout(timerRef.current!)
    }, [])

    if (!isLoading) {
         return <div>
        <Navbar />
    {children}
</div>

}

    return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent transition-opacity duration-700 animate-fadeOut">
                <Image
                    src={Logo}
                    alt="JD Logo"
                    width={250}
                    height={100}
                    className="animate-pulse-scale"
                />
            </div>
        )
    
   

}