import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

// Sample team data with 10 members and social media links
const teamMembers = 
[
    {
      id: '1',
      url: './Team/Abhimanyu_Jha.jpg',
      title: 'Abhimanyu Jha',
      description: 'Event Lead',
      social: {
        linkedin: 'https://www.linkedin.com/in/abhimanyu-kumar-jha/',
        instagram: 'https://www.instagram.com/abhimanyu_kumar_2210/'
      }
    },
    {
      id: '2',
      url: './Team/Spruha_Kar.jpg',
      title: 'Spruha Kar',
      description: 'Event Lead',
      social: {
        linkedin: 'https://www.linkedin.com/in/spruha-kar-0a577b254/',
        instagram: 'https://www.instagram.com/spruha_594?igsh=MWZtdzRwZjQwcDA2Nw%3D%3D'
      }
    },
    {
      id: '3',
      url: './Team/aryan.jpeg',
      title: 'Aryan Agarwal',
      description: 'Event Lead',
      social: {
        linkedin: 'https://www.linkedin.com/in/aaryan-agarwal-488582256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        instagram: 'https://www.instagram.com/aaryan_agarwal._?igsh=ajVwa2s1N2d1Mzlz'
      }
    },
    {
      id: '4',
      url: './Team/Kanav_Pahwa.jpg',
      title: 'Kanav Pahwa',
      description: 'Event Lead',
      social: {
        linkedin: 'https://www.linkedin.com/in/kanavpahwa06/',
        instagram: 'https://www.instagram.com/pahwa.kanav/'
      }
    },
    {
        id: '5',
        url: './Team/Yash_Arora.png',
        title: 'Yash Arora',
        description: 'Event Lead',
        social: {
          linkedin: 'https://www.linkedin.com/in/yash-arora-yashinpixels/',
          instagram: 'https://www.instagram.com/iamyash.77/'
        }
      }
  ];

// Social media icon component with animation
const SocialIcons = ({ social, isVisible }) => {
  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div 
      className="flex space-x-3 mt-2"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <motion.a 
        href={social.linkedin} 
        target="_blank" 
        rel="noopener noreferrer"
        custom={0}
        variants={iconVariants}
        whileHover={{ scale: 1.2 }}
        className="text-white hover:text-blue-400"
      >
        <FaLinkedin size={18} />
      </motion.a>
      <motion.a 
        href={social.instagram} 
        target="_blank" 
        rel="noopener noreferrer"
        custom={1}
        variants={iconVariants}
        whileHover={{ scale: 1.2 }}
        className="text-white hover:text-pink-500"
      >
        <FaInstagram size={18} />
      </motion.a>
      
     
      
    </motion.div>
  );
};

function Event_lead() {
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-[Orbitron] font-extrabold mb-2">EVENT LEADS</h1>
        {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Meet the talented individuals behind our success. Each member brings unique skills and perspectives to our work.
        </p> */}
      </motion.div>

      {/* Team grid that reorganizes into rows of 4 on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {/* For large screens, create rows with the expanding/shrinking animation */}
        <div className="hidden lg:block col-span-2">
          {[0, 1, 2].map((rowIndex) => (
            <div key={rowIndex} className={`group flex justify-center gap-2 w-full ${rowIndex === 1 ? 'lg:w-3/5' : 'lg:w-4/5'} mx-auto mb-10`}>
              {teamMembers.slice(rowIndex * 5, rowIndex * 5 + 5).map((member) => (
                <motion.article 
                  key={member.id} 
                  className="group/article relative w-full rounded-xl overflow-hidden 
                    md:group-hover:[&:not(:hover)]:w-[70%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[70%] 
                    transition-all duration-600 ease-[cubic-bezier(.5,.85,.25,1.15)] 
                    before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 before:transition-opacity 
                    md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 
                    after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 
                    after:absolute after:inset-0 after:bg-black/30 after:backdrop-blur after:rounded-lg after:transition-all 
                    focus-within:ring focus-within:ring-[#A59188]"
                  onMouseEnter={() => setHoveredMember(member.id)}
                  onMouseLeave={() => setHoveredMember(null)}
                  whileHover={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className="absolute inset-0 text-white z-10 p-4 flex flex-col justify-end"
                  >
                    <motion.h2 
                      className="text-lg   font-orbitron font-bold md:whitespace-nowrap md:truncate md:opacity-0 
                        group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 
                        group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 
                        transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] 
                        group-hover/article:delay-300 group-focus-within/article:delay-300"
                    >
                      {member.title}
                    </motion.h2>
                    <motion.span 
                      className="text-md font-[KHInterference] md:whitespace-nowrap md:truncate md:opacity-0 
                        group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 
                        group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 
                        transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] 
                        group-hover/article:delay-500 group-focus-within/article:delay-500"
                    >
                      {member.description}
                    </motion.span>
                    
                    <SocialIcons social={member.social} isVisible={hoveredMember === member.id} />
                  </div>
                  <div className="h-72">
                    <Image
                      className="object-cover h-full w-full"
                      src={member.url}
                      width={400}
                      height={500}
                      alt={`Photo of ${member.title}`}
                    />
                  </div>
                </motion.article>
              ))}
            </div>
          ))}
        </div>

        {/* For smaller screens, use a regular grid layout */}
        {teamMembers.map((member) => (
          <motion.article 
            key={member.id}
            className="lg:hidden relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            onMouseEnter={() => setHoveredMember(member.id)}
            onMouseLeave={() => setHoveredMember(null)}
          >
            <div
              className="absolute inset-0 text-white z-4 p-4 flex flex-col  justify-end bg-gradient-to-t from-black/60 to-transparent"
            >
              <h2 className="text-xl font-medium">{member.title}</h2>
              <span className="text-lg">{member.description}</span>
              
              <SocialIcons social={member.social} isVisible={hoveredMember === member.id} />
            </div>
            <div className="h-[450px]">
              <Image
                className="object-cover h-full w-full"
                src={member.url}
                width={400}
                height={500}
                alt={`Photo of ${member.title}`}
              />
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

export default Event_lead;