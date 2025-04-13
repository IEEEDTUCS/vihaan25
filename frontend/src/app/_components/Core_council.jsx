import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

// Sample team data with 10 members and social media links
const teamMembers = [
  {
    id: "1",
    url: "./Team/Rishab Dandriyal.jpeg",
    title: "Rishab Dandriyal",
    description: "Chairperson",
    social: {
      linkedin: "https://www.linkedin.com/in/rishab-dandriyal-45160122a/",
      instagram: "https://www.instagram.com/rintaro_rd/",
    },
  },

  {
    id: "2",
    url: "./Team/Arijit Sen.jpg",
    title: "Arijit Sen",
    description: "Vice-Chairperson",
    social: {
      linkedin: "https://www.linkedin.com/in/arijit-sen-118083233/",
      instagram: "https://www.instagram.com/aj.arijit/",
    },
  },

  {
    id: "3",
    url: "./Team/Areeb_Ahmed_Khan.jpg",
    title: "Areeb Ahmed Khan",
    description: "General Secretary",
    social: {
      linkedin: "https://www.linkedin.com/in/areeb22/",
      instagram: "https://www.instagram.com/khan_areeb22/",
    },
  },

  {
    id: "4",
    url: "./Team/Kurush Rastogi.jpeg",
    title: "Kurush Rastogi",
    description: "Joint Secretary",
    social: {
      linkedin: "https://www.linkedin.com/in/kurush-rastogi/",
      instagram: "https://www.instagram.com/kurush_rastogi/",
    },
  },

  {
    id: "5",
    url: "./Team/Shashank Jha.jpg",
    title: "Shashank Jha",
    description: "Joint Secretary",
    social: {
      linkedin: "https://www.linkedin.com/in/shashank-jha-7843b01aa/",
      instagram: "https://www.instagram.com/meshashankjha/",
    },
  },

  {
    id: "6",
    url: "./Team/AkarshRai.jpg",
    title: "Akarsh Rai",
    description: "Treasurer",
    social: {
      linkedin: "https://www.linkedin.com/in/akarsh-rai-452311229/",
      instagram: "https://www.instagram.com/i_akarsh_rai/",
    },
  },

  {
    id: "7",
    url: "./Team/ashmit.png",
    title: "Ashmit Sharma",
    description: "Joint Treasurer",
    social: {
      linkedin: "https://www.linkedin.com/in/ashmit-sharma-023490227/",
    },
  },
];

// Social media icon component with animation
const SocialIcons = ({ social, isVisible }) => {
  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
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

function Core_council() {
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <div className={`container mx-auto px-4 py-12`}>
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-[Orbitron] font-extrabold mb-2">
          CORE COUNCIL
        </h1>
        {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Meet the talented individuals behind our success. Each member brings unique skills and perspectives to our work.
        </p> */}
      </motion.div>

      {/* Team grid that reorganizes into rows of 4 on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {/* For large screens, create rows with the expanding/shrinking animation */}
        <div className="hidden lg:block col-span-2">
          {[0, 1, 2].map((rowIndex) => {
            // Calculate number of images in this row
            const imagesInRow = teamMembers.slice(rowIndex * 4, rowIndex * 4 + 4).length;
            
            return (
              <div
                key={rowIndex}
                className={`group flex justify-center gap-2  ${
                  // Adjust width based on number of images
                  imagesInRow === 4 ? 'lg:w-4/5' : 
                  imagesInRow === 3 ? 'lg:w-3/4' :
                  imagesInRow === 2 ? 'lg:w-3/5' :
                  'lg:w-1/3'
                } mx-auto mb-10`}
              >
                {teamMembers.slice(rowIndex * 4, rowIndex * 4 + 4).map((member) => (
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
                    <div className="absolute inset-0 text-white z-10 p-4 flex flex-col justify-end">
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

                      <SocialIcons
                        social={member.social}
                        isVisible={hoveredMember === member.id}
                      />
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
            );
          })}
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
            <div className="absolute inset-0 text-white z-4 p-4 flex flex-col  justify-end bg-gradient-to-t from-black/60 to-transparent">
              <h2 className="text-xl font-medium">{member.title}</h2>
              <span className="text-lg">{member.description}</span>

              <SocialIcons
                social={member.social}
                isVisible={hoveredMember === member.id}
              />
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

export default Core_council;
