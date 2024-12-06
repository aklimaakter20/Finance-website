import React from 'react'
import {Button,Link,Navbar,NavbarBrand,NavbarContent,NavbarItem} from "@nextui-org/react"
import MainLogo from './MainLogo'

function NavbarArea() {
  return (
    <>
      <Navbar shouldHideOnScroll isBlurred={false} className='w-full bg-[#27322f]/25' maxWidth='xl'>
      <NavbarBrand>
        <MainLogo className='w-16'/>
      </NavbarBrand>

      <NavbarContent justify='end'>
        <NavbarItem>
          <Button as={Link} color='primary' variant= 'bordered' className='lg:px-6' radius='full'>Contact</Button>
        </NavbarItem>
      </NavbarContent>
      </Navbar>
    </>
  )
}

export default NavbarArea
