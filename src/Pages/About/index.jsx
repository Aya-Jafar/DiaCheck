import React from 'react';
import FeatureCard from './component/FeatureCard';
import figWIthi from '../../assets/figWIthi.png'
import { features } from '../../store';



const About = () => {
  return (
    <div className=" py-16 px-4 text-center lg:text-left">
      <div className="container mx-auto flex flex-row  items-center">  {/* Container with flexbox */}
      <div className='bg-primary w-8/12 h-20 px-6 rounded-2xl flex items-center mr-24'>
          <div className='flex items-center'>
            <div className='w-10 h-10 bg-white rounded-md mr-8'></div>
            <h2 className="text-white text-3xl font-bold ">About Our Predictive System</h2>
          </div>
        </div>
        <img src={figWIthi} alt="Image description" className="w-60 h-48 " />  {/* Image with adjustments */}
      </div>
      {/* Feature cards section moved here */}
      {features.map((feature) => (
        <FeatureCard
        key={feature.title}
        image={feature.image}
        title={feature.title}
        description={feature.description}
      />
      ))}
    </div>
  );
};

export default About;