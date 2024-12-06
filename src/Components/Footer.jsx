import React from 'react'
const listA = ["Investors","Features","Book a demo","Security "];
const listB = ["Investors","Features","Book a demo","Security "];
const listC = ["Investors","Features","Book a demo","Security "];
const listD = ["Investors","Features","Book a demo","Security "];

const linkList = (title,list)=>
     <div className='space-y-4 min-w-fit'>
        <h5>{title}</h5>
        <ul className='space-y-2'>
            {list.map((item, i)=>(
                <li className='text-secondary text-sm' key={i}>{item}</li>
            ))}
        </ul>
     </div>
const Footer = () => {
  return (
    <footer className='bg-[#292834]/25 mt-[120px] py-10'>
      <div className="container mx-auto">
       <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-2.4 gap-y-5 lg:gap-8py-12 px-2 md:px-10 lg:px-20 xl:px-24 w-full max-w-[1440px] mx-auto'>
        <div className='space-y-2 col-span-2'>
            <h4 className='font-bold text-lg'>Wern Finance</h4>
            <p className='text-secondary text-sm max-w-[280px]'>Discover the power of our secure and rewarding credit cards</p>
        </div>

     
    
      {linkList("About Us", listA)}
      {linkList("Products", listB)}
      {linkList("Useful Links", listC)}
      {linkList("Socials", listD)}
      </div>
      </div>
    </footer>
  )
}

export default Footer
