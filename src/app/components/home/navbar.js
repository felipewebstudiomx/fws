import Image from "next/image";
import { Bars2Icon, EnvelopeIcon } from '@heroicons/react/24/outline'

export default function Navbar(){
    return(
      <div className="navbar w-full px-5 py-5 fixed z-10 flex items-center justify-center md:px-14">  
        <div className="navbar-content flex items-center w-full">
          <div className="left-section flex-1 flex items-center">
            <div className="desktop-mail hidden md:inline">
              INFO@FELIPEWEBSTUDIO.COM
            </div>
            <div className="mobile-mail inline md:hidden">
              <EnvelopeIcon className="size-6"/>
            </div>
          </div>
          <div className="w-28 flex items-center justify-center">
            <Image
              src="/fws.png"
              width={108}
              height={38}
              alt="FWS."
            />
          </div>
          <div className="left-section flex-1 flex">
            <div className="flex-1 gap-10 justify-end hidden md:flex">
              <div>WHO AM I</div>
              <div>PROJECTS</div>
            </div>
            <div className="mobile-mail w-full flex justify-end inline md:hidden">
              <Bars2Icon className="size-6"/>
            </div>
          </div>
        </div>
      </div>
    )
}