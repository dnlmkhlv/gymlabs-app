import React from 'react';
import { Check } from 'lucide-react';

const PriceCard = ({ plan }) => {
  return (
    <div 
      className={`bg-white border rounded-lg p-6 flex flex-col relative ${
        plan.isSelected ? 'transform scale-105 shadow-lg' : 'shadow'
      }`}
      style={plan.isSelected ? {
        background: 'white',
        boxShadow: '0 0 0 2px #4287f5, 0 0 0 4px #ef73ff',
      } : {}}
    >
      {plan.isSelected && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#4287f5] to-[#ef73ff] text-white px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
      <p className="text-3xl font-bold mb-6">{plan.price}<span className="text-sm font-normal">/month</span></p>
      <ul className="flex-grow">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center mb-2">
            <Check className="w-5 h-5 text-green-500 mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`mt-6 btn ${plan.isSelected ? 'btn-primary' : 'btn-outline'} w-full`}>
        {plan.isSelected ? 'Get Started' : 'Choose Plan'}
      </button>
    </div>
  );
};

export default PriceCard;