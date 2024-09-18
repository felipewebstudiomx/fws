import Image from "next/image";
import Link from "next/link";
import { Bars2Icon, EnvelopeIcon } from '@heroicons/react/24/outline'

export default function Navbar(){
    return(
      <div className="navbar w-full px-5 py-5 fixed z-10 flex items-center justify-center md:px-14">  
        <div className="navbar-content flex items-center w-full">
          <div className="left-section flex-1 flex items-center">
            <div className="desktop-mail hidden md:inline">
              FELIPEWEBSTUDIO@GMAIL.COM
            </div>
            <div className="mobile-mail inline text-sm md:hidden">
              <Link href={'#about'} >WHO AM I</Link>
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
            <div className="flex-1 gap-10 justify-end hidden md:flex">
              {/* <Link to='about' spy={true} smooth={true} offset={-100} duration={500} >WHO AM I</Link>
              <Link to='projects' spy={true} smooth={true} offset={-100} duration={500} >PROJECTS</Link> */}

              <Link href={'#about'} >WHO AM I</Link>
              <Link href={'#projects'} >PROJECTS</Link>
            </div>
            <div className="mobile-mail w-full flex justify-end inline text-sm md:hidden">
              <Link href={'#projects'} >PROJECTS</Link>
            </div>
          </div>
        </div>
      </div>
    )
}