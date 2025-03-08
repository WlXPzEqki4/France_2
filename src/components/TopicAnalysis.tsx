// import React, { useState } from 'react';

// const UAESwedenAnalysis = () => {
//   const [activeView, setActiveView] = useState('overview');
  
//   // Topic data
//   const topicData = {
//     "Diplomacy": {
//       count: 32,
//       description: "Diplomatic relations between UAE and Sweden, including ambassadorial appointments, official statements, and formal agreements.",
//       subtopics: [
//         { name: "Extradition & Legal Cooperation" },
//         { name: "Ambassadorial Relations" },
//         { name: "Official Statements" }
//       ]
//     },
//     "Defense": {
//       count: 28,
//       description: "Military and defense cooperation, including joint systems development and security partnerships.",
//       subtopics: [
//         { name: "Defense Systems" },
//         { name: "Military Technology" }
//       ]
//     },
//     "Security": {
//       count: 24,
//       description: "Security incidents, responses, and cooperation on security matters including infrastructure protection.",
//       subtopics: [
//         { name: "School Shooting" },
//         { name: "Infrastructure Security" },
//         { name: "Other Security Incidents" }
//       ]
//     },
//     "Health": {
//       count: 18,
//       description: "Health-related issues affecting both countries, particularly infectious disease concerns and travel implications.",
//       subtopics: [
//         { name: "Mpox Outbreak" },
//         { name: "Travel Health" }
//       ]
//     },
//     "Tourism": {
//       count: 15,
//       description: "Tourism initiatives, travel between the countries, and promotional activities.",
//       subtopics: [
//         { name: "Ajman Tourism" },
//         { name: "Travel Advisories" }
//       ]
//     },
//     "Technology": {
//       count: 12,
//       description: "Technology cooperation and innovation between UAE and Sweden, particularly in transportation and defense.",
//       subtopics: [
//         { name: "Transportation Tech" },
//         { name: "Defense Technology" }
//       ]
//     },
//     "Business": {
//       count: 10,
//       description: "Business partnerships, investments, and economic cooperation between UAE and Sweden.",
//       subtopics: [
//         { name: "Corporate Partnerships" },
//         { name: "Talent Recruitment" }
//       ]
//     }
//   };
  
//   // Timeline events
//   const timelineEvents = [
//     {
//       date: "November 28, 2024",
//       title: "UAE and Sweden Sign Extradition Agreements",
//       description: "The UAE and Sweden signed two agreements to foster cooperation in the extradition of criminals and mutual legal assistance. The agreements were signed by UAE Minister of Justice Abdullah Sultan bin Awad Al Nuaimi and Swedish Minister for Justice Gunnar Strömmer in Abu Dhabi.",
//       source: "Dubai Eye 103.8",
//       category: "Diplomacy",
//       alignment: "left",
//       color: "bg-blue-100 border-blue-400"
//     },
//     {
//       date: "December 2, 2024",
//       title: "Ajman Tourism Targets Scandinavia",
//       description: "The Ajman Tourism Development Department embarked on a strategic promotional tour across Scandinavian nations, including Sweden. The initiative, running until December 7, 2025, aims to position Ajman as a premier travel destination by highlighting its unique offerings and fostering partnerships.",
//       source: "Travel And Tour World",
//       category: "Tourism",
//       alignment: "right",
//       color: "bg-purple-100 border-purple-400"
//     },
//     {
//       date: "January 29, 2025",
//       title: "UAE Ambassador to Sweden Sworn In",
//       description: "Ghasaq Yousif Abdullah Shaheen, the newly appointed UAE Ambassador to Sweden, was sworn in before UAE President Mohamed bin Zayed Al Nahyan at Qasr Al Bahr in Abu Dhabi. The President encouraged her to work diligently to strengthen UAE-Sweden relations at all levels.",
//       source: "The Tribune",
//       category: "Diplomacy",
//       alignment: "left",
//       color: "bg-blue-100 border-blue-400"
//     },
//     {
//       date: "February 3, 2025",
//       title: "Sweden Rules Out Sabotage in Baltic Sea Cable Damage",
//       description: "Swedish prosecutors ruled out sabotage in the case of a damaged undersea cable and released a Bulgarian ship seized in connection with the incident, determining the damage was accidental. The incident was one of several involving damage to cables and other infrastructure in the Baltic Sea.",
//       source: "The Moscow Times",
//       category: "Security",
//       alignment: "right",
//       color: "bg-gray-100 border-gray-400"
//     },
//     {
//       date: "February 4, 2025",
//       title: "School Shooting in Sweden",
//       description: "Around 10 people were killed in a shooting at an adult education center in Orebro, Sweden. The suspected assailant was also killed. This became Sweden's deadliest mass shooting incident.",
//       source: "Khaleej Times",
//       category: "Incident",
//       alignment: "left",
//       color: "bg-orange-100 border-orange-400"
//     },
//     {
//       date: "February 7, 2025",
//       title: "UAE Condemns School Shooting in Sweden",
//       description: "The UAE strongly condemned the shooting at an adult education center in Sweden that killed 11 people, expressing solidarity with the victims' families. In a statement, the Emirati Ministry of Foreign Affairs said it permanently rejects 'all forms of violence that aim to destabilize security and stability.'",
//       source: "Dubai Eye 103.8",
//       category: "Diplomacy",
//       alignment: "right",
//       color: "bg-blue-100 border-blue-400"
//     },
//     {
//       date: "February 19, 2025",
//       title: "Mpox Cases Detected in UAE, Sweden, and Other Countries",
//       description: "The UAE confirmed its first case of clade Ib mpox, a highly contagious strain. Similar cases were reported in other countries including Belgium, Canada, France, Germany, Sweden, and the USA. Health authorities urged travelers to the UAE to take extra precautions.",
//       source: "Travel And Tour World",
//       category: "Health",
//       alignment: "left",
//       color: "bg-red-100 border-red-400"
//     },
//     {
//       date: "February 21, 2025",
//       title: "Sweden and UAE Increase Defence Cooperation",
//       description: "Sweden and the UAE increased defense cooperation with jointly produced systems. The partnership focuses on countering drone and missile attacks as high-intensity warfare returns to global theaters. Swedish defense company Saab also unveiled the DeployNet 5G communications system.",
//       source: "The National",
//       category: "Defense",
//       alignment: "right",
//       color: "bg-green-100 border-green-400"
//     }
//   ];
  
//   // Color based on topic
//   const getTopicColor = (topic) => {
//     const colors = {
//       "Diplomacy": "bg-blue-100 border-l-4 border-blue-500",
//       "Defense": "bg-green-100 border-l-4 border-green-500",
//       "Security": "bg-orange-100 border-l-4 border-orange-500",
//       "Health": "bg-red-100 border-l-4 border-red-500",
//       "Tourism": "bg-purple-100 border-l-4 border-purple-500",
//       "Technology": "bg-teal-100 border-l-4 border-teal-500",
//       "Business": "bg-pink-100 border-l-4 border-pink-500"
//     };
//     return colors[topic] || "bg-gray-100 border-gray-500";
//   };
  
//   // Render overview
//   const renderOverview = () => (
//     <div className="space-y-4">
//       {Object.keys(topicData).map(topic => (
//         <div 
//           key={topic}
//           className={`p-4 rounded-lg shadow ${getTopicColor(topic)}`}
//         >
//           <div className="flex justify-between items-center">
//             <h3 className="font-bold text-lg text-gray-800">{topic}</h3>
//             <span className="bg-white px-3 py-1 rounded-full text-lg font-bold text-blue-600 shadow-sm">
//               {topicData[topic].count}
//             </span>
//           </div>
//           <p className="text-gray-700 my-2">{topicData[topic].description}</p>
//           <div>
//             <p className="font-medium text-gray-700">Top Subtopics:</p>
//             <ul className="list-disc ml-5 mt-1">
//               {topicData[topic].subtopics.slice(0, 2).map((subtopic, idx) => (
//                 <li key={idx} className="text-gray-700">{subtopic.name}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
  
//   // Render timeline
//   const renderTimeline = () => (
//     <div className="relative">
//       {/* Timeline center line */}
//       <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>
      
//       {timelineEvents.map((event, index) => (
//         <div key={index} className={`flex items-center mb-16 ${event.alignment === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
//           {/* Timeline content */}
//           <div className={`w-5/12 ${event.alignment === 'left' ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
//             <div className={`p-4 rounded-lg border-l-4 shadow-md ${event.color}`}>
//               <h3 className="font-bold text-lg">{event.title}</h3>
//               <p className="text-sm text-gray-500 mb-2">{event.date}</p>
//               <p className="mb-2">{event.description}</p>
//               <p className="text-xs text-gray-500">Source: {event.source}</p>
//               <span className="inline-block mt-2 px-2 py-1 bg-white rounded-full text-xs border border-gray-200">
//                 {event.category}
//               </span>
//             </div>
//           </div>
          
//           {/* Center circle */}
//           <div className="w-2/12 flex justify-center">
//             <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow"></div>
//           </div>
          
//           {/* Empty space for alternating layout */}
//           <div className="w-5/12"></div>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     // <div className="max-w-4xl mx-auto p-4" >
//     <div className="flex flex-col items-center p-8">
//       {/* <h1 className="text-3xl font-bold mb-2 text-center">UAE-France Relations Topic Analysis</h1> */}
//       <h2 className="text-2xl font-bold mb-4 font-display text-navy-dark">UAE-France Relations Topic Analysis from Open Source Reporting</h2>
//       <p className="text-center text-gray-600 mb-6">Interactive analysis of topics from news articles about UAE-France relations</p>
      
//       <div className="mb-8 flex justify-center gap-4">
//         <button 
//           onClick={() => setActiveView('overview')} 
//           className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeView === 'overview' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
//         >
//           Topic Overview
//         </button>
//         <button 
//           onClick={() => setActiveView('timeline')} 
//           className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeView === 'timeline' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
//         >
//           Timeline
//         </button>
//       </div>
      
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         {activeView === 'overview' && renderOverview()}
//         {activeView === 'timeline' && renderTimeline()}
//       </div>
//     </div>
//   );
// };

// export default UAESwedenAnalysis;
















import React, { useState } from 'react';

const UAEFranceAnalysis = () => {
  const [activeView, setActiveView] = useState('overview');
  
  // Topic data
  const topicData = {
    "Defense & Security": {
      count: 32,
      description: "Military and defense cooperation, including France's permanent military base in Abu Dhabi since 2009 and major arms deals like the €16 billion Rafale fighter jets agreement.",
      subtopics: [
        { name: "Rafale Fighter Jets Deal" },
        { name: "Military Base in Abu Dhabi" },
        { name: "Defense Systems" }
      ]
    },
    "Economic Partnerships": {
      count: 30,
      description: "Trade and economic relations with bilateral trade reaching €4.8 billion in 2019 and AED 44 billion in 2024, involving over 600 French companies in the UAE.",
      subtopics: [
        { name: "Business Council" },
        { name: "Non-oil Trade Growth" },
        { name: "Corporate Investments" }
      ]
    },
    "Energy Collaboration": {
      count: 28,
      description: "Strategic partnerships in energy sectors, including hydrogen, nuclear, and renewable energy projects and investments.",
      subtopics: [
        { name: "Strategic Energy Agreement" },
        { name: "XRG Investment Arm" },
        { name: "TotalEnergies Partnerships" }
      ]
    },
    "Cultural Exchange": {
      count: 24,
      description: "Cultural projects and educational initiatives showcasing the strong cultural ties between UAE and France.",
      subtopics: [
        { name: "Louvre Abu Dhabi" },
        { name: "Sorbonne Abu Dhabi" },
        { name: "MuseoPro Training Programs" }
      ]
    },
    "Technological Innovation": {
      count: 26,
      description: "Cooperation in advanced technologies, particularly the groundbreaking AI Framework Agreement signed in February 2025.",
      subtopics: [
        { name: "AI Data Centre" },
        { name: "Digital Infrastructure" },
        { name: "Tech Talent Development" }
      ]
    },
    "Diplomatic Relations": {
      count: 22,
      description: "Formal diplomatic engagements and high-level meetings under the UAE-France Strategic Dialogue established in 2008.",
      subtopics: [
        { name: "Strategic Dialogue" },
        { name: "State Visits" },
        { name: "Joint Statements" }
      ]
    },
    "Humanitarian Efforts": {
      count: 18,
      description: "Joint initiatives addressing humanitarian crises, particularly regarding Gaza and other Middle East conflicts.",
      subtopics: [
        { name: "Gaza Aid Initiatives" },
        { name: "UN Security Council Cooperation" },
        { name: "E3 Statement on Gaza" }
      ]
    }
  };
  
  // Timeline events
  const timelineEvents = [
    {
      date: "December 3, 2021",
      title: "UAE Signs Historic Rafale Fighter Jets Deal",
      description: "The UAE signed a €16 billion contract with France to purchase 80 Rafale fighter jets and 12 Airbus-built combat helicopters, making it the largest-ever French arms export contract.",
      source: "Le Monde",
      category: "Defense",
      alignment: "left",
      color: "bg-green-100 border-green-400"
    },
    {
      date: "July 18, 2022",
      title: "UAE-France Strategic Energy Agreement",
      description: "France and the UAE entered into a comprehensive strategic partnership focused on collaboration in hydrogen, renewable, and nuclear energy sectors, strengthening their energy cooperation.",
      source: "The National",
      category: "Energy",
      alignment: "right",
      color: "bg-blue-100 border-blue-400"
    },
    {
      date: "May 17, 2024",
      title: "16th UAE-France Strategic Dialogue",
      description: "The 16th session of the UAE-France Strategic Dialogue took place in Abu Dhabi, co-chaired by Khaldoon Al Mubarak and Anne-Marie Descôtes, focusing on trade, energy, AI, and cultural cooperation.",
      source: "French Ministry for Europe & Foreign Affairs",
      category: "Diplomacy",
      alignment: "left",
      color: "bg-purple-100 border-purple-400"
    },
    {
      date: "January 29, 2025",
      title: "First Rafale Jets Delivered to UAE",
      description: "The delivery ceremony for the first of 80 Rafale fighter jets ordered by the UAE took place in Istres, France, with the participation of Sébastien Lecornu (French Minister of Armed Forces) and Mohamed Al Bowardi (UAE Minister of State for Defense Affairs).",
      source: "French Embassy in UAE",
      category: "Defense",
      alignment: "right",
      color: "bg-green-100 border-green-400"
    },
    {
      date: "February 6, 2025",
      title: "UAE President's Visit to Paris for AI Agreement",
      description: "Sheikh Mohamed bin Zayed visited Paris and was hosted by President Emmanuel Macron for the signing of a groundbreaking framework agreement for cooperation in Artificial Intelligence, including a 1 GW AI campus with investments between €30-50 billion.",
      source: "WAM News Agency",
      category: "Technology",
      alignment: "left",
      color: "bg-teal-100 border-teal-400"
    },
    {
      date: "February 16-17, 2025",
      title: "UAE-France High-Level Business Council Meeting",
      description: "The meeting resulted in new partnerships in energy, infrastructure, and AI sectors, with participants including Dr. Sultan Al Jaber (UAE Minister of Industry & Advanced Technology) and Patrick Pouyanné (CEO of TotalEnergies).",
      source: "TotalEnergies Press Release",
      category: "Economy",
      alignment: "right",
      color: "bg-yellow-100 border-yellow-400"
    },
    {
      date: "March 2, 2025",
      title: "Meeting Between UAE President and French Finance Minister",
      description: "Sheikh Mohamed bin Zayed met with Bruno Le Maire at Qasr Al Bahr in Abu Dhabi to discuss strengthening strategic relations in economic and industrial sectors.",
      source: "WAM News Agency",
      category: "Economy",
      alignment: "left",
      color: "bg-yellow-100 border-yellow-400"
    },
    {
      date: "March 5, 2025",
      title: "E3 Foreign Ministers' Statement on Gaza",
      description: "France joined Germany and the UK in urging humanitarian access to Gaza, calling for unhindered provision of humanitarian aid and insisting on the unconditional release of hostages, with participation from French Foreign Minister Catherine Colonna.",
      source: "France 24",
      category: "Humanitarian",
      alignment: "right",
      color: "bg-red-100 border-red-400"
    }
  ];
  
  // Color based on topic
  const getTopicColor = (topic) => {
    const colors = {
      "Defense & Security": "bg-green-100 border-l-4 border-green-500",
      "Economic Partnerships": "bg-yellow-100 border-l-4 border-yellow-500",
      "Energy Collaboration": "bg-blue-100 border-l-4 border-blue-500",
      "Cultural Exchange": "bg-indigo-100 border-l-4 border-indigo-500",
      "Technological Innovation": "bg-teal-100 border-l-4 border-teal-500",
      "Diplomatic Relations": "bg-purple-100 border-l-4 border-purple-500",
      "Humanitarian Efforts": "bg-red-100 border-l-4 border-red-500"
    };
    return colors[topic] || "bg-gray-100 border-gray-500";
  };
  
  // Render overview
  const renderOverview = () => (
    <div className="space-y-4">
      {Object.keys(topicData).map(topic => (
        <div 
          key={topic}
          className={`p-4 rounded-lg shadow ${getTopicColor(topic)}`}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg text-gray-800">{topic}</h3>
            <span className="bg-white px-3 py-1 rounded-full text-lg font-bold text-blue-600 shadow-sm">
              {topicData[topic].count}
            </span>
          </div>
          <p className="text-gray-700 my-2">{topicData[topic].description}</p>
          <div>
            <p className="font-medium text-gray-700">Top Subtopics:</p>
            <ul className="list-disc ml-5 mt-1">
              {topicData[topic].subtopics.slice(0, 3).map((subtopic, idx) => (
                <li key={idx} className="text-gray-700">{subtopic.name}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
  

  const renderTimeline = () => (
    <div className="relative">
      {/* Timeline center line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>
      
      {timelineEvents.map((event, index) => (
        <div key={index} className={`flex items-center mb-16 ${event.alignment === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
          {/* Timeline content */}
          <div className={`w-5/12 ${event.alignment === 'left' ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
            <div className={`p-4 rounded-lg border-l-4 shadow-md ${event.color}`}>
              <h3 className="font-bold text-lg">{event.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{event.date}</p>
              <p className="mb-2">{event.description}</p>
              <p className="text-xs text-gray-500">Source: {event.source}</p>
              <span className="inline-block mt-2 px-2 py-1 bg-white rounded-full text-xs border border-gray-200">
                {event.category}
              </span>
            </div>
          </div>
          
          {/* Center circle */}
          <div className="w-2/12 flex justify-center">
            <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow"></div>
          </div>
          
          {/* Empty space for alternating layout */}
          <div className="w-5/12"></div>
        </div>
      ))}
    </div>
  );
  
  return (
    <div className="flex flex-col items-center p-8">
      <h2 className="text-2xl font-bold mb-4 font-display text-navy-dark">UAE-France Relations Topic Analysis from Open Source Reporting</h2>
      <p className="text-center text-gray-600 mb-6">Interactive analysis of topics from news articles about UAE-France relations</p>
      
      <div className="mb-8 flex justify-center gap-4">
        <button 
          onClick={() => setActiveView('overview')} 
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeView === 'overview' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Topic Overview
        </button>
        <button 
          onClick={() => setActiveView('timeline')} 
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeView === 'timeline' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Timeline
        </button>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {activeView === 'overview' && renderOverview()}
        {activeView === 'timeline' && renderTimeline()}
      </div>
    </div>
  );
  };
  
  export default UAEFranceAnalysis;






























