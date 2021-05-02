import Link from 'next/link'
function Nav () {
    return(
        <nav 
        class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">

        <Link href="/about">
        <a class="mr-5 hover:text-gray-900">About</a>
        </Link>
  
        <Link href="/contact-us">
        <a class="mr-5 hover:text-gray-900">Contact</a>
        </Link>

        <Link href="/events">
        <a class="mr-5 hover:text-gray-900">Events</a>
        </Link>
      </nav>
    )
}

export  default Nav;

