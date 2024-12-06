import React from 'react'
import Person1 from '../assets/person1.png'
import Person2 from '../assets/person2.png'
import Person3 from '../assets/person3.png'
import Quote from '../assets/quote.png'

const reviews = [
    {
        image:Person1,
        review: "Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings.",
        name: "Hadid Khan",
        status: "UI UX Designer",
    },
    {
        image:Person2,
        review: "It's is both attractive and highly adaptable. It's exactly what I've been looking fore finitely wo lorem ipsum dolor th the investment.",
        name: "Wade Warren",
        status: "Web Designer",
    },
    {
        image:Person3,
        review: "I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. ",
        name: "Jenny Wilson",
        status: "Trust Administrator",
    },
];


const Feedback = () => {
  return (
   
    <section>
        <div className="container mx-auto">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                { reviews.map((item)=> (
                        <div className='bg-[#27322f]/25 px-6 py-14 rounded-2xl space-y-8 md:space-y-10' >
                            <div className='bg-[#3d3f54] rounded-full flex justify-center items-center h-14 w-14'>
                                <img className='w-1/2' src={Quote} alt="" />
                            </div>
                            <p>&quot;{item.review}&quot;</p>
                            <div className='flex gap-2 items-center'>
                                <img className='h-12 w-12 rounded-full' src={item.image} alt="icon" />
                             <div>
                                <h5 className='font-bold'>{item.name}</h5>
                                <p className='text-secondary text-sm'>{item.status}</p>
                             </div>
                            </div>
                             </div>
                    ))
                }

            </div>
        </div>

    </section>
  )
}

export default Feedback

