import React from 'react';
import PriceCard from './PriceCard';

const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    features: [
      'Limited workout generations',
      'Basic meal plan suggestions',
      'Sleep tracking',
      'Access to basic exercises',
    ],
  },
  {
    name: 'Basic',
    price: '$4.99',
    features: [
      'x5 workout generations per month',
      'x5 meal plan generations per month',
      'Unlimited sleep guidance',
      'Access to all exercises',
    ],
    isSelected: true,
  },
  {
    name: 'Premium',
    price: '$9.99',
    features: [
      'x12 workout generations per month',
      'x12 meal plan generations per month',
      'Unlimited sleep guidance',
      'Access to all exercises',
      'Priority support',
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-16 px-4" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PriceCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;