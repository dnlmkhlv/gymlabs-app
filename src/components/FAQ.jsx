import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "How does GymLabs AI create personalized workout plans?",
    answer: "GymLabs AI uses advanced algorithms to analyze your fitness goals, current fitness level, and preferences to create tailored workout plans that best suit your needs."
  },
  {
    question: "Can I change my meal plan if I have dietary restrictions?",
    answer: "Absolutely! Our AI takes into account your dietary restrictions and preferences when generating meal plans. You can also easily customize your meal plans as needed."
  },
  {
    question: "How often should I update my fitness goals?",
    answer: "We recommend reviewing and updating your fitness goals every 4-6 weeks to ensure your plans remain aligned with your progress and any changing objectives."
  },
  {
    question: "Is the sleep guidance feature available on all plans?",
    answer: "Yes, all plans include access to our sleep guidance feature to help optimize your recovery and overall health."
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time. There are no long-term commitments, and you can easily manage your subscription from your account settings."
  }
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-16 px-4" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <div key={index} className="mb-4 border-b">
              <button
                className="flex justify-between items-center w-full py-4 text-left font-semibold"
                onClick={() => toggleItem(index)}
              >
                {item.question}
                {openItem === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openItem === index && (
                <div className="pb-4">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;