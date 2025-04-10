// import Image from 'next/image';
// import React from 'react';

// // Sample team data with 10 members
// const teamMembers = [
//   {
//     id: '1',
//     url: './Logo.png', // Fixed URL path
//     title: 'Adrian Paul',
//     description: 'COO & Co-Founder',
//     tags: ['Floral', 'Highlands', 'Wildflowers', 'Colorful', 'Resilience'],
//   },
//   {
//     id: '2',
//     url: './Logo.png',
//     title: 'Flualy Cual',
//     description: 'Founder & CEO',
//     tags: ['Twilight', 'Peaks', 'Silhouette', 'Evening Sky', 'Peaceful'],
//   },
//   {
//     id: '3',
//     url: './Logo.png',
//     title: 'Naymur Rahman',
//     description: 'CTO & Co-Founder',
//     tags: ['Rocky', 'Ridges', 'Contrast', 'Adventure', 'Clouds'],
//   },
//   {
//     id: '4',
//     url: './Logo.png',
//     title: 'Sarah Johnson',
//     description: 'Lead Designer',
//     tags: ['Creative', 'Innovative', 'Detail-Oriented', 'UI/UX'],
//   },
//   {
//     id: '5',
//     url: '/team-member-5.jpg',
//     title: 'Michael Chen',
//     description: 'Senior Developer',
//     tags: ['Backend', 'Database', 'Architecture', 'Problem Solver'],
//   },
//   {
//     id: '6',
//     url: '/team-member-6.jpg',
//     title: 'Priya Sharma',
//     description: 'Marketing Director',
//     tags: ['Strategy', 'Analytics', 'Communication', 'Growth'],
//   },
//   {
//     id: '7',
//     url: '/team-member-7.jpg',
//     title: 'David Rodriguez',
//     description: 'Product Manager',
//     tags: ['Roadmap', 'Strategy', 'Leadership', 'User-Focused'],
//   },
//   {
//     id: '8',
//     url: '/team-member-8.jpg',
//     title: 'Emily Thompson',
//     description: 'UX Researcher',
//     tags: ['User Testing', 'Analysis', 'Insights', 'Accessibility'],
//   },
//   {
//     id: '9',
//     url: '/team-member-9.jpg',
//     title: 'James Wilson',
//     description: 'DevOps Engineer',
//     tags: ['Infrastructure', 'Automation', 'Deployment', 'Security'],
//   },
//   {
//     id: '10',
//     url: '/team-member-10.jpg',
//     title: 'Olivia Martinez',
//     description: 'Customer Success',
//     tags: ['Support', 'Relationships', 'Solutions', 'Communication'],
//   },
// ];

// function TeamMember({ member }) {
//   return (
//     <article className="group/article relative w-full rounded-xl overflow-hidden h-full transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] 
//       before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 before:transition-opacity 
//       md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 
//       lg:group-hover:[&:not(:hover)]:scale-95 lg:group-focus-within:[&:not(:focus-within):not(:hover)]:scale-95
//       after:opacity-0 lg:group-hover:[&:not(:hover)]:after:opacity-50 lg:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-50 
//       after:absolute after:inset-0 after:bg-black/30 after:backdrop-blur-sm after:rounded-lg after:transition-all 
//       focus-within:ring focus-within:ring-indigo-300 hover:shadow-xl hover:z-10">
//       <a
//         className="absolute inset-0 text-white z-10 p-4 flex flex-col justify-end"
//         href={`/team/${member.id}`}
//         aria-label={`View ${member.title}'s profile`}
//       >
//         <h2 className="text-xl font-medium md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 
//           md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 
//           transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300">
//           {member.title}
//         </h2>
//         <span className="text-lg font-medium md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 
//           md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 
//           transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-500 group-focus-within/article:delay-500">
//           {member.description}
//         </span>
//       </a>
//       <div className="w-full h-64 md:h-72 lg:h-80">
//         <Image
//           className="object-cover h-full w-full"
//           src={member.url}
//           width={400}
//           height={500}
//           alt={`Photo of ${member.title}`}
//         />
//       </div>
//     </article>
//   );
// }

// function Team() {
//   return (
//     <div className="container mx-auto px-4 py-12">
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold mb-2">Our Team</h1>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//           Meet the talented individuals behind our success. Each member brings unique skills and perspectives to our work.
//         </p>
//       </div>

//       {/* Team grid using grid for responsive layouts */}
//       <div className="group grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {teamMembers.map((member) => (
//           <TeamMember key={member.id} member={member} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Team;
import Image from 'next/image';
import React from 'react';

// Sample team data with 10 members
const teamMembers = [
  {
    id: '1',
    url: './profile_photo.jpg', // Fixed URL path
    title: 'Abhimanyu Kumar Jha',
    description: 'Event Lead',
    tags: ['Floral', 'Highlands', 'Wildflowers', 'Colorful', 'Resilience'],
  },
  {
    id: '2',
    url: './profile_photo.jpg',
    title: 'Supra Car',
    description: 'Event Lead',
    tags: ['Twilight', 'Peaks', 'Silhouette', 'Evening Sky', 'Peaceful'],
  },
  {
    id: '3',
    url: './profile_photo.jpg',
    title: 'Yash Arora',
    description: 'Event Lead',
    tags: ['Rocky', 'Ridges', 'Contrast', 'Adventure', 'Clouds'],
  },
  {
    id: '4',
    url: './profile_photo.jpg',
    title: 'Aryan Agrawal',
    description: 'Event Lead',
    tags: ['Creative', 'Innovative', 'Detail-Oriented', 'UI/UX'],
  },
  {
    id: '5',
    url: './profile_photo.jpg',
    title: 'Unnat Agrawal',
    description: 'Event Lead',
    tags: ['Backend', 'Database', 'Architecture', 'Problem Solver'],
  },
//   {
//     id: '6',
//     url: './profile_photo.jpg',
//     title: 'Priya Sharma',
//     description: 'Marketing Director',
//     tags: ['Strategy', 'Analytics', 'Communication', 'Growth'],
//   },
//   {
//     id: '7',
//     url: './profile_photo.jpg',
//     title: 'David Rodriguez',
//     description: 'Product Manager',
//     tags: ['Roadmap', 'Strategy', 'Leadership', 'User-Focused'],
//   },
//   {
//     id: '8',
//     url: './profile_photo.jpg',
//     title: 'Emily Thompson',
//     description: 'UX Researcher',
//     tags: ['User Testing', 'Analysis', 'Insights', 'Accessibility'],
//   },
//   {
//     id: '9',
//     url: './profile_photo.jpg',
//     title: 'James Wilson',
//     description: 'DevOps Engineer',
//     tags: ['Infrastructure', 'Automation', 'Deployment', 'Security'],
//   },
//   {
//     id: '10',
//     url: '/team-member-10.jpg',
//     title: 'Olivia Martinez',
//     description: 'Customer Success',
//     tags: ['Support', 'Relationships', 'Solutions', 'Communication'],
//   },
];

function Team() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Our Team</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Meet the talented individuals behind our success. Each member brings unique skills and perspectives to our work.
        </p>
      </div>

      {/* Team grid that reorganizes into rows of 4 on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {/* For large screens, create rows of 4 with the expanding/shrinking animation */}
        <div className="hidden lg:block col-span-2">
          {[0, 1, 2].map((rowIndex) => (
            <div key={rowIndex} className="group  flex justify-center gap-2 w-[75%] mx-auto mb-10">
              {teamMembers.slice(rowIndex * 5, rowIndex * 5 + 5).map((member, i) => (
                <article 
                  key={member.id} 
                  className="group/article relative w-full rounded-xl overflow-hidden 
                    md:group-hover:[&:not(:hover)]:w-[45%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[20%] 
                    transition-all duration-600 ease-[cubic-bezier(.5,.85,.25,1.15)] 
                    before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 before:transition-opacity 
                    md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 
                    after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 
                    after:absolute after:inset-0 after:bg-black/30 after:backdrop-blur after:rounded-lg after:transition-all 
                    focus-within:ring focus-within:ring-indigo-300"
                >
                  <a
                    className="absolute inset-0 text-white z-10 p-4 flex flex-col justify-end"
                    href={`/team/${member.id}`}
                    aria-label={`View ${member.title}'s profile`}
                  >
                    <h2 className="text-xl font-medium md:whitespace-nowrap md:truncate md:opacity-0 
                      group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 
                      group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 
                      transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] 
                      group-hover/article:delay-300 group-focus-within/article:delay-300"
                    >
                      {member.title}
                    </h2>
                    <span className="text-lg font-medium md:whitespace-nowrap md:truncate md:opacity-0 
                      group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 
                      group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 
                      transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] 
                      group-hover/article:delay-500 group-focus-within/article:delay-500"
                    >
                      {member.description}
                    </span>
                  </a>
                  <div className="h-72">
                    <Image
                      className="object-cover h-full w-full"
                      src={member.url}
                      width={400}
                      height={500}
                      alt={`Photo of ${member.title}`}
                    />
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>

        {/* For smaller screens, use a regular grid layout */}
        {teamMembers.map((member) => (
          <article 
            key={member.id}
            className="lg:hidden relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
          >
            <a
              className="absolute inset-0 text-white z-10 p-4 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent"
              href={`/team/${member.id}`}
              aria-label={`View ${member.title}'s profile`}
            >
              <h2 className="text-xl font-medium">{member.title}</h2>
              <span className="text-lg">{member.description}</span>
            </a>
            <div className="h-64">
              <Image
                className="object-cover h-full w-full"
                src={member.url}
                width={400}
                height={500}
                alt={`Photo of ${member.title}`}
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Team;