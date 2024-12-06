import { Accordion,AccordionItem } from '@nextui-org/react';
import React from 'react'

const faqs = [
    {
        q: "What credit score do I need to apply for a credit card?",
        a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
    },
    {
        q: " How can I apply for a credit card online?",
        a: "The required credit score approval for premium credit cards.",
    },
    {
        q: "Are there any annual fees associated with the credit card?",
        a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
    },
    {
        q: " How can I apply for a credit card online?",
        a: "The required credit scorespecific  a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
    },
]
 
const Faq = () => {
  return (
    <section className='mt-20'>
      <div className="container mx-auto">
        <div>
            <h2 className='text-center font-bold leading-tight text-2xl lg:text-3xl mb-10'>FAQs</h2>
            <Accordion>
                {faqs.map(({a,q},i)=>(
                         <AccordionItem aria-label={q} title={q} key={i}>
                        <span className='text-secondary'>{a}</span>
                    </AccordionItem>
                    ))}
            </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Faq

