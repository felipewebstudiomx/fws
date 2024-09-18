'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation'
import { ArrowLeftIcon, ArrowRightIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function ProjectNavbar(){
  const router = useRouter()

  return(
    <div className="navbar w-full px-5 py-10 fixed z-10 flex items-center justify-center md:px-14">  
      <div className="navbar-content flex items-center w-full">
        <div className="left-section flex-1 flex items-center">
          <div onClick={() => router.back()} className="cursor-pointer desktop-close items-center flex-1 gap-5 hidden md:flex">
              <XMarkIcon className="size-6"/>
              <div>CLOSE</div>
          </div>
          <div onClick={() => router.back()} className="cursor-pointer mobile-mail inline md:hidden">
            <XMarkIcon className="size-6"/>
          </div>
        </div>

        <div className="desktop-logo w-28 flex items-center justify-center hidden md:flex">
          <Image
            src="/fws.png"
            width={108}
            height={38}
            alt="FWS."
          />
        </div>
        <div className="mobile-logo w-28 flex items-center justify-center md:hidden">
          <Image
            src="/fws.png"
            width={90}
            height={32}
            alt="FWS."
          />
        </div>
        
        <div className="left-section flex-1 flex">

        </div>
      </div>
    </div>
  )
}