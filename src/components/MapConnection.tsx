// // "use client"

// import { useState, useMemo } from "react"
// import { Info, Filter } from "lucide-react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// interface InvestmentEntry {
//   id: string;
//   logo: string;
//   logoUrl?: string;
//   countries: string[];
//   category: string;
//   content: string;
//   companies: string[];
//   coordinates: {
//     uae?: { x: number; y: number };
//     france?: { x: number; y: number };
//     sweden?: { x: number; y: number };
//   };
// }

// const FlagIcon = ({ country }: { country: "uae" | "france" | "sweden" }) => {
//   if (country === "uae") {
//     return (
//       <svg width="16" height="12" viewBox="0 0 640 480" className="inline-block mr-1" aria-label="UAE flag">
//         <path fill="#00732f" d="M0 0h640v160H0z" />
//         <path fill="#fff" d="M0 160h640v160H0z" />
//         <path d="M0 320h640v160H0z" />
//         <path fill="red" d="M0 0h220v480H0z" />
//       </svg>
//     )
//   }
//   if (country === "france") {
//     return (
//       <svg width="16" height="12" viewBox="0 0 640 480" className="inline-block mr-1" aria-label="France flag">
//         <path fill="#fff" d="M0 0h640v480H0z"/>
//         <path fill="#00267f" d="M0 0h213.3v480H0z"/>
//         <path fill="#f31830" d="M426.7 0H640v480H426.7z"/>
//       </svg>
//     )
//   }
//   return (
//     <svg width="16" height="12" viewBox="0 0 640 480" className="inline-block mr-1" aria-label="Sweden flag">
//       <path fill="#006aa7" d="M0 0h640v480H0z" />
//       <path fill="#fecc00" d="M0 192h640v96H0z" />
//       <path fill="#fecc00" d="M176 0h96v480h-96z" />
//     </svg>
//   )
// }

// // Sample logo URLs to choose from randomly
// const sampleLogoUrls = [
//   "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4BDqeAp6GMfQxWaMUKIABIpho6sHEe.png",
//   "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ww7PN4pkKUSAKYtEYjNDHS76cWTOuB.png",
//   "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-e3t8PziBvV7xTPhyrYrXmuQbkMLpte.png"
// ];

// // Process the raw data into InvestmentEntry format
// const processRawData = () => {
//   const rawData = [
//     {
//       "Countries": "France",
//       "Category": "Investments",
//       "Content": "Mubadala has been active in France since 2014 with over 35 investments worth approximately USD3.8 Billion. For example: Omni-Pac group, a pan European designer and producer of moulded fiber packing products. SGD Pharma, a leading global manufacturer of glass packing for the pharmaceutical industry. Matera, a residential management company founded in 2017. ADISTA, a leading alternative B2B ICT operator in France, providing telecom and IT services including system integrations, IT hosting/outsourcing and project engineering solutions to SMEs. Furthermore, in 2021, Mubadala sovereign wealth fund pledged eight billion euros in investments in French businesses, while the licence of the UAE capital's branch of the Louvre art gallery was extended for 10 years to 2047.",
//       "Companies": "Mubadala, Omni-Pac, Matera, SGD Pharma, Adista"
//     },
//     {
//       "Countries": "UAE, France",
//       "Category": "Energy",
//       "Content": "Mubadala partnered with Bpifrance are jointly investing in global technology investment firm Partech's latest Africa-focused venture fund, Partech Africa II.",
//       "Companies": "Mubadala, Bpifrance"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Energy",
//       "Content": "Arab Development Establishment (ADE) and Schneider Electric today officially launched their joint venture manufacturing facility in Abu Dhabi, TAQANA Energy Solutions.",
//       "Companies": "Arab Development Establishment, Schneider Electric"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Energy",
//       "Content": "DEWA strengthens ties with SUEZ.",
//       "Companies": "DEWA, Suez"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Renewable Energy",
//       "Content": "MOU between ADNOC and Veolia focused on optimising water consumption including water recycling, reduce overall water usage, minimising the carbon footprint.",
//       "Companies": "ADNOC, Veolia"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Energy and Infrastructure",
//       "Content": "The UAE has shown interest in European Nuclear Energy investments. ENEC owned by ADQ has reportedly been holding talks to invest in the UK's nuclear energy infrastructure (Sizewell C large-scale nuclear project) being built by the French energy giant EDF.",
//       "Companies": "ENEC, EDF renewables"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Logistics",
//       "Content": "AD Ports Group has recently entered a 35-year concession agreement with French shipping and logistics giant, CMA CGM Group. The joint venture will secure significant investment from both parties, totalling around AED 570 million (USD 154 million), and prepares the way for a new container terminal to be located at Khalifa Port, Abu Dhabi, UAE.",
//       "Companies": "AD Ports Group, CMA CGM"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Education",
//       "Content": "The Sorbonne University Abu Dhabi was developed under a Public Private Partnership.",
//       "Companies": "Sorbonne University Abu Dhabi, Mubadala"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Sustainability",
//       "Content": "Chalhoub Group, LVMH, EMAAR Malls Management (L.L.C), Majid Al Futtaim Properties LLC, and Aldar Properties PJSC join forces to create 'Unity For Change - أفق' (pronounced UFQ in Arabic, meaning horizon and symbolizing the future), a pioneering partnership among prominent retailers and real estate developers in the Emirates. This alliance is dedicated to defining and achieving sustainability targets.",
//       "Companies": "Chalhoub Group, LVMH, Emaar Malls, Al-Futtaim, Aldar"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Retail",
//       "Content": "Carrefour was introduced to the region in 1995 by UAE company Majid Al Futtaim. Majid Al Futtaim owns the exclusive rights to operate Carrefour under Majid Al Futtaim's distinct name and 'M' logo.",
//       "Companies": "Carrefour, Al-Futtaim"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Tourism and Hospitality",
//       "Content": "French hospitality giant Accor's non-luxury brands - Pullman, Ibis, and Novotel —are seeing strong growth in the region.",
//       "Companies": "Accor"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Transportation",
//       "Content": "KEOLIS signed a contract for Dubai Metro and Tram network.",
//       "Companies": "Keolis"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Renewable energy & green projects",
//       "Content": "Masdar signed an agreement with Hy24 Clean Hydrogen Infrastructure Fund to enable large-scale green hydrogen production projects across Europe, the Americas, Asia Pacific and the Middle East and North Africa. The agreement gave Masdar access to a pipeline of up to €2 billion in co-investment and co-development opportunities.",
//       "Companies": "Masdar, Hy24"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Renewable energy & green projects",
//       "Content": "French utility company ENGIE is looking to further deepen its roots in the UAE market, with $11.9 billion already invested in different projects in the Gulf country. For example: including funding the development of Al Ajban Solar Photovoltaic plant, which will produce 1.5 gigawatts of power. The firm will be responsible for the development and operation of the Mirfa 2 Reverse Osmosis Independent Water Project worth $800 million.",
//       "Companies": "Engie"
//     },
//     {
//       "Countries": "France",
//       "Category": "AI and Technology",
//       "Content": "France is open to Emirati investments in Nuclear and AI industries. For example: Core 42, G42's digital infrastructure company partners with DataOne, First gigascale AI hosting infrastructure data center in Grenoble, France.",
//       "Companies": "Core42, DataOne, G42"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Technology and AI",
//       "Content": "France's Systra awarded consultancy mandate for USD 2.5 Billion UAE-Oman railway project.",
//       "Companies": "Systra, Etihad Rail"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Technology and AI",
//       "Content": "AD Ports signed a partnership with the French company Pasqal to develop AI-driven solutions. This collaboration will focus on integrating artificial intelligence models, quantitative analysis, and advanced algorithm development.",
//       "Companies": "Pasqal, AD Ports"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Aerospace, Defence, and Security",
//       "Content": "EDGE entity EPI, has signed a serial production contract of C295 Cargo Compartment Removable Tanks with Airbus Defence and Space, a division of Airbus Group.",
//       "Companies": "EPI, Airbus Group"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Aerospace, Defence, and Security",
//       "Content": "EDGE Group and Thales signed an MOU to equip its unmanned and remotely piloted combat and reconnaissance aircraft (UAVs) with advanced technologies.",
//       "Companies": "EDGE, Thales"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Aerospace, Defence, and Security",
//       "Content": "KATIM and Thales will start discussing the co-development of Software Defined Radio technologies in the United Arab Emirates (UAE).",
//       "Companies": "KATIM, Thales"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Aerospace, Defence, and Security",
//       "Content": "Mubadala and Safran strengthen strategic partnership to drive Aerospace Growth in the UAE.",
//       "Companies": "Safran, Mubadala"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Aerospace, Defence, and Security",
//       "Content": "The UAE signed a record 14-billion-euro contract for 80 Rafale warplanes which will be produced by Dassault Aviation.",
//       "Companies": "Dassault Aviation"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Aerospace, Defence, and Security",
//       "Content": "Safran Aircraft Engines and Abu Dhabi Aviation Group (ADA) have signed a strategic Memorandum of Understanding (MoU) to enhance collaboration in military aviation maintenance, repair, and overhaul (MRO) services.",
//       "Companies": "ADA, Mubadala"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Aerospace",
//       "Content": "Mohammed Bin Rashid Space Centre (MBRSC) and Thales Alenia Space to develop the Pressure Equalisation Unit of the Gateway lunar space station.",
//       "Companies": "MBRSC, Thales Alenia Space"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Culture",
//       "Content": "UAE's Louvre Abu Dhabi contract extended to 2047.",
//       "Companies": "Louvre Abu Dhabi"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Luxury Retail",
//       "Content": "Al Tayer Group partnership with several French brands.",
//       "Companies": "Al Tayer Insignia"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Luxury Retail",
//       "Content": "Chalhoub Group partnership with several French brands.",
//       "Companies": "Chalhoub Group"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Luxury Retail",
//       "Content": "LVMH is the world's leading luxury products group",
//       "Companies": "LVMH"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Luxury Retail",
//       "Content": "A global Luxury group, Kering manages the development of a series of renowned Houses in Fashion, Leather Goods and Jewelry.",
//       "Companies": "Kering"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Renewable energy & green projects",
//       "Content": "Masdar, TotalEnergies and 2PointZero partnership to support clean energy solutions in emerging markets and developing economies across Africa and Asia.",
//       "Companies": "Masdar, TotalEnergies, 2PointZero"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Renewable energy & green projects",
//       "Content": "Masdar and EDF signed an agreement to establish a JV energy services company (ESCO).",
//       "Companies": "Masdar, EDF renewables"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Renewable energy & green projects",
//       "Content": "Masdar and EDF Group joint venture Emerge signed an MOU with ADNOC Sour Gas to explore leveraging solar energy at the Shah Gas Plant.",
//       "Companies": "ADNOC, EDF renewables"
//     }
//   ];
  
//   return rawData.map((item, index) => {
//     // Parse countries
//     const countries = item.Countries.split(', ').map(c => c.trim());
    
//     // Assign a random logo URL from the sample list
//     const randomLogoIndex = Math.floor(Math.random() * sampleLogoUrls.length);
    
//     // Parse companies
//     const companies = item.Companies.split(', ').map(c => c.trim());
    
//     // Create coordinates
//     const coordinates: any = {};
//     if (countries.includes('UAE') || countries.some(c => c.toLowerCase() === 'uae')) {
//       coordinates.uae = { x: 150 + Math.random() * 100, y: 50 + Math.random() * 80 };
//     }
//     if (countries.includes('France') || countries.some(c => c.toLowerCase() === 'france')) {
//       coordinates.france = { x: 140 + Math.random() * 120, y: 250 + Math.random() * 100 };
//     }
    
//     return {
//       id: `entry-${index}`,
//       logo: companies[0] || "Company",
//       logoUrl: sampleLogoUrls[randomLogoIndex],
//       countries: countries,
//       category: item.Category,
//       content: item.Content,
//       companies: companies,
//       coordinates
//     };
//   });
// };

// const investments: InvestmentEntry[] = processRawData();

// // Extract unique categories and countries for filters
// const uniqueCategories = Array.from(new Set(investments.map(item => item.category)));
// const uniqueCountries = Array.from(new Set(investments.flatMap(item => item.countries)));

// const countryImages = {
//   uae: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AE-5TuD3IsqSNBAgpIaSTRzgmp0706AfL.png",
//   france: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FR-pWTYZFejdQXuC97zqiBqGVxkSFomxu.png",
//   sweden: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SE-DM6vGWxobocAEyJ4YxiYRet775n6Yv.png"
// };

// const MapConnection = () => {
//   const [selectedEntry, setSelectedEntry] = useState<InvestmentEntry | null>(null);
//   const [hoveredEntry, setHoveredEntry] = useState<InvestmentEntry | null>(null);
//   const [activeCountry, setActiveCountry] = useState<"all" | string>("all");
//   const [activeCategory, setActiveCategory] = useState<"all" | string>("all");

//   // Filtered investments based on active filters
//   const filteredInvestments = useMemo(() => {
//     return investments.filter((entry) => {
//       const matchesCountry = activeCountry === "all" || entry.countries.includes(activeCountry);
//       const matchesCategory = activeCategory === "all" || entry.category === activeCategory;
//       return matchesCountry && matchesCategory;
//     });
//   }, [activeCountry, activeCategory]);

//   const renderConnections = (entry: InvestmentEntry) => {
//     if (!entry.coordinates) return null;

//     const isHighlighted = hoveredEntry?.id === entry.id || selectedEntry?.id === entry.id;
//     const interactionProps = {
//       onMouseEnter: () => setHoveredEntry(entry),
//       onMouseLeave: () => setHoveredEntry(null),
//       onClick: () => setSelectedEntry(entry === selectedEntry ? null : entry),
//       style: { cursor: "pointer" },
//     };

//     // Create a line between UAE and France if both exist
//     const connections = [];

//     if (entry.coordinates.uae && entry.coordinates.france) {
//       connections.push(
//         <path
//           key={`path-${entry.id}-uae-france`}
//           d={`M ${entry.coordinates.uae.x} ${entry.coordinates.uae.y} 
//               C ${entry.coordinates.uae.x} ${(entry.coordinates.uae.y + entry.coordinates.france.y) / 2},
//                 ${entry.coordinates.france.x} ${(entry.coordinates.uae.y + entry.coordinates.france.y) / 2},
//                 ${entry.coordinates.france.x} ${entry.coordinates.france.y}`}
//           stroke={isHighlighted ? "#f97316" : "#4169E1"}
//           strokeDasharray={isHighlighted ? "0" : "3 3"}
//           strokeWidth={isHighlighted ? "3" : "1.5"}
//           fill="none"
//           className="transition-all duration-300"
//           {...interactionProps}
//         />
//       );
//     }

//     // Create points for each country
//     const points = [];
    
//     if (entry.coordinates.uae) {
//       points.push(
//         <g key={`uae-point-${entry.id}`} {...interactionProps}>
//           <circle
//             cx={entry.coordinates.uae.x}
//             cy={entry.coordinates.uae.y}
//             r={isHighlighted ? "8" : "5"}
//             fill={isHighlighted ? "#f97316" : "#94a3b8"}
//             className="transition-all duration-300"
//           />
//           {isHighlighted && (
//             <text
//               x={entry.coordinates.uae.x + 12}
//               y={entry.coordinates.uae.y}
//               fontSize="10"
//               fill="#f97316"
//               fontWeight="bold"
//             >
//               {entry.category}
//             </text>
//           )}
//         </g>
//       );
//     }
    
//     if (entry.coordinates.france) {
//       points.push(
//         <g key={`france-point-${entry.id}`} {...interactionProps}>
//           <circle
//             cx={entry.coordinates.france.x}
//             cy={entry.coordinates.france.y}
//             r={isHighlighted ? "8" : "5"}
//             fill={isHighlighted ? "#f97316" : "#94a3b8"}
//             className="transition-all duration-300"
//           />
//           {isHighlighted && (
//             <text
//               x={entry.coordinates.france.x + 12}
//               y={entry.coordinates.france.y}
//               fontSize="10"
//               fill="#f97316"
//               fontWeight="bold"
//             >
//               {entry.category}
//             </text>
//           )}
//         </g>
//       );
//     }

//     return (
//       <g key={`connection-${entry.id}`}>
//         {connections}
//         {points}
//       </g>
//     );
//   };

//   const getCardClassName = (entry: InvestmentEntry) => {
//     const isActive = hoveredEntry?.id === entry.id || selectedEntry?.id === entry.id;
//     return isActive ? "border-primary bg-primary/5 shadow-md" : "border-border hover:bg-accent/50";
//   };

//   const getCountryFlagIcons = (countries: string[]) => {
//     return countries.map((country, index) => {
//       const lowerCountry = country.toLowerCase();
//       if (lowerCountry === "uae") {
//         return <FlagIcon key={`flag-${index}`} country="uae" />;
//       } else if (lowerCountry === "france") {
//         return <FlagIcon key={`flag-${index}`} country="france" />;
//       } else if (lowerCountry === "sweden") {
//         return <FlagIcon key={`flag-${index}`} country="sweden" />;
//       }
//       return null;
//     });
//   };

//   return (
//     <div className="max-w-[1200px] mx-auto p-4">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">UAE-France Investment Connections</h1>
//         <p className="text-muted-foreground max-w-2xl mx-auto">
//           Visualizing cross-border investments and business relationships between the UAE and France
//         </p>
//       </div>

//       {/* Filter Controls */}
//       <div className="mb-8 bg-accent/20 p-4 rounded-lg">
//         <div className="flex flex-col md:flex-row gap-4">
//           <div className="flex-1">
//             <h3 className="text-sm font-medium mb-2 flex items-center">
//               <Filter size={16} className="mr-2" /> Filter by Country
//             </h3>
//             <div className="flex flex-wrap gap-2">
//               <Badge
//                 variant={activeCountry === "all" ? "default" : "outline"}
//                 className="cursor-pointer text-sm px-4 py-1"
//                 onClick={() => setActiveCountry("all")}
//               >
//                 All Countries
//               </Badge>
//               {uniqueCountries.map((country) => (
//                 <Badge
//                   key={`country-filter-${country}`}
//                   variant={activeCountry === country ? "default" : "outline"}
//                   className="cursor-pointer text-sm px-4 py-1"
//                   onClick={() => setActiveCountry(country)}
//                 >
//                   {getCountryFlagIcons([country])} {country}
//                 </Badge>
//               ))}
//             </div>
//           </div>
          
//           <div className="flex-1">
//             <h3 className="text-sm font-medium mb-2 flex items-center">
//               <Filter size={16} className="mr-2" /> Filter by Category
//             </h3>
//             <div className="flex flex-wrap gap-2">
//               <Badge
//                 variant={activeCategory === "all" ? "default" : "outline"}
//                 className="cursor-pointer text-sm px-4 py-1"
//                 onClick={() => setActiveCategory("all")}
//               >
//                 All Categories
//               </Badge>
//               {uniqueCategories.map((category) => (
//                 <Badge
//                   key={`category-filter-${category}`}
//                   variant={activeCategory === category ? "default" : "outline"}
//                   className="cursor-pointer text-sm px-4 py-1"
//                   onClick={() => setActiveCategory(category)}
//                 >
//                   {category}
//                 </Badge>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-card rounded-xl shadow-sm border p-4 md:p-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Map Visualization - Full width on mobile, left column on desktop */}
//           <div className="order-1 lg:order-none">
//             <Card className="h-[500px] overflow-hidden">
//               <CardContent className="p-0 h-full">
//                 <div className="relative h-full bg-accent/30 rounded-lg overflow-hidden">
//                   <svg
//                     className="w-full h-full"
//                     viewBox="0 0 400 400"
//                     aria-label="Investment connection map between UAE and France"
//                   >
//                     {/* Background for better contrast */}
//                     <rect x="0" y="0" width="400" height="400" fill="#f8fafc" />

//                     {/* UAE Map Region */}
//                     <g className="uae-region">
//                       <image
//                         href={countryImages.uae}
//                         x="30"
//                         y="10"
//                         width="340"
//                         height="150"
//                         preserveAspectRatio="xMidYMid meet"
//                         style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
//                       />
//                     </g>

//                     {/* France Map Region */}
//                     <g className="france-region">
//                       <image
//                         href={countryImages.france}
//                         x="30"
//                         y="200"
//                         width="340"
//                         height="190"
//                         preserveAspectRatio="xMidYMid meet"
//                         style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
//                       />
//                     </g>

//                     {/* Render all connections */}
//                     {filteredInvestments.map((entry) => renderConnections(entry))}
//                   </svg>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Selected Entry Detail */}
//             {selectedEntry && (
//               <Card className="mt-4 bg-primary/5 border-primary animate-fadeIn">
//                 <CardContent className="p-4">
//                   <div className="flex items-start justify-between mb-2">
//                     <div className="flex flex-col">
//                       <div className="flex items-center gap-2 mb-2">
//                         <h3 className="text-xl font-bold">{selectedEntry.category}</h3>
//                         <div className="flex">
//                           {getCountryFlagIcons(selectedEntry.countries)}
//                         </div>
//                       </div>
//                       <div className="text-sm font-bold mb-3">
//                         {selectedEntry.companies.join(', ')}
//                       </div>
//                     </div>
//                     <button
//                       onClick={() => setSelectedEntry(null)}
//                       className="text-muted-foreground hover:text-foreground"
//                       aria-label="Close details"
//                     >
//                       ✕
//                     </button>
//                   </div>
//                   <p className="text-sm">{selectedEntry.content}</p>
//                 </CardContent>
//               </Card>
//             )}
//           </div>

//           {/* Investment Entries - Right column on desktop, scrollable list */}
//           <div className="order-2 lg:order-none">
//             <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
//               {filteredInvestments.length > 0 ? (
//                 filteredInvestments.map((entry) => (
//                   <Card 
//                     key={entry.id} 
//                     className={`transition-all duration-300 ${getCardClassName(entry)}`}
//                   >
//                     <CardContent className="p-4">
//                       <div
//                         className="cursor-pointer"
//                         onClick={() => setSelectedEntry(entry === selectedEntry ? null : entry)}
//                         onMouseEnter={() => setHoveredEntry(entry)}
//                         onMouseLeave={() => setHoveredEntry(null)}
//                       >
//                         <div className="flex items-start justify-between mb-2">
//                           <div className="flex flex-col">
//                             {/* Category - large, black, bold */}
//                             <div className="flex items-center gap-2">
//                               <h3 className="text-lg font-bold">{entry.category}</h3>
//                               <div className="flex">
//                                 {getCountryFlagIcons(entry.countries)}
//                               </div>
//                             </div>
                            
//                             {/* Companies - black, bold, smaller */}
//                             <p className="text-sm font-semibold mt-1">
//                               {entry.companies.join(', ')}
//                             </p>
//                           </div>
                          
//                           {/* Logo */}
//                           {entry.logoUrl && (
//                             <div className="w-16 h-12 ml-2 flex-shrink-0">
//                               <img
//                                 src={entry.logoUrl}
//                                 alt={`${entry.companies[0]} logo`}
//                                 className="w-full h-full object-contain object-center"
//                               />
//                             </div>
//                           )}
//                         </div>
                        
//                         {/* Content preview */}
//                         <p className="text-sm line-clamp-2 text-muted-foreground">
//                           {entry.content.length > 120
//                             ? `${entry.content.substring(0, 120)}...`
//                             : entry.content}
//                         </p>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))
//               ) : (
//                 <div className="text-center p-8 bg-accent/20 rounded-lg">
//                   <p className="text-muted-foreground">No matches found for the current filters. Try adjusting your selection.</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Summary at the bottom */}
//         <div className="mt-8 p-4 bg-accent/30 rounded-lg">
//           <h3 className="font-semibold mb-2">Summary</h3>
//           <p className="text-sm text-muted-foreground">
//           The UAE-France bilateral relationship has witnessed significant growth, with non-oil trade increasing by 21.3% in 2024 to reach AED 44 billion compared to AED 36.7 billion in 2023. The UAE hosts approximately 600 French companies employing over 30,000 people, making it the largest concentration of French companies in the Middle East, while the UAE ranks as France's second-largest investor in the GCC. Key collaboration sectors include aerospace, defense, energy, AI, luxury goods, and sustainable development, with major investments like the UAE's planned USD 52 billion in French AI data centers and Mubadala's over USD 3.8 billion across 35+ French investments since 2014. The partnership is formalized through the annual UAE-France High Level Business Council, which focuses on promoting sustainable economic development and strategic investments in areas like AI, gas, chemicals, low-carbon fuels, and clean technologies.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MapConnection


























// // "use client"

// import { useState, useMemo } from "react"
// import { Info, Filter } from "lucide-react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// interface InvestmentEntry {
//   id: string;
//   logo: string;
//   logoUrl?: string;
//   countries: string[];
//   category: string;
//   content: string;
//   companies: string[];
//   coordinates: {
//     uae?: { x: number; y: number };
//     france?: { x: number; y: number };
//     sweden?: { x: number; y: number };
//   };
// }

// const FlagIcon = ({ country }: { country: "uae" | "france" | "sweden" }) => {
//   if (country === "uae") {
//     return (
//       <svg width="16" height="12" viewBox="0 0 640 480" className="inline-block mr-1" aria-label="UAE flag">
//         <path fill="#00732f" d="M0 0h640v160H0z" />
//         <path fill="#fff" d="M0 160h640v160H0z" />
//         <path d="M0 320h640v160H0z" />
//         <path fill="red" d="M0 0h220v480H0z" />
//       </svg>
//     )
//   }
//   if (country === "france") {
//     return (
//       <svg width="16" height="12" viewBox="0 0 640 480" className="inline-block mr-1" aria-label="France flag">
//         <path fill="#fff" d="M0 0h640v480H0z"/>
//         <path fill="#00267f" d="M0 0h213.3v480H0z"/>
//         <path fill="#f31830" d="M426.7 0H640v480H426.7z"/>
//       </svg>
//     )
//   }
//   return (
//     <svg width="16" height="12" viewBox="0 0 640 480" className="inline-block mr-1" aria-label="Sweden flag">
//       <path fill="#006aa7" d="M0 0h640v480H0z" />
//       <path fill="#fecc00" d="M0 192h640v96H0z" />
//       <path fill="#fecc00" d="M176 0h96v480h-96z" />
//     </svg>
//   )
// }

// // Sample logo URLs to choose from randomly
// const sampleLogoUrls = [
//   "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4BDqeAp6GMfQxWaMUKIABIpho6sHEe.png",
//   "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ww7PN4pkKUSAKYtEYjNDHS76cWTOuB.png",
//   "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-e3t8PziBvV7xTPhyrYrXmuQbkMLpte.png"
// ];

// // Process the raw data into InvestmentEntry format
// const processRawData = () => {
//   const rawData = [
//     {
//       "Countries": "France",
//       "Category": "Investments",
//       "Content": "Mubadala has been active in France since 2014 with over 35 investments worth approximately USD3.8 Billion. For example: Omni-Pac group, a pan European designer and producer of moulded fiber packing products. SGD Pharma, a leading global manufacturer of glass packing for the pharmaceutical industry. Matera, a residential management company founded in 2017. ADISTA, a leading alternative B2B ICT operator in France, providing telecom and IT services including system integrations, IT hosting/outsourcing and project engineering solutions to SMEs. Furthermore, in 2021, Mubadala sovereign wealth fund pledged eight billion euros in investments in French businesses, while the licence of the UAE capital's branch of the Louvre art gallery was extended for 10 years to 2047.",
//       "Companies": "Mubadala, Omni-Pac, Matera, SGD Pharma, Adista"
//     },
//     {
//       "Countries": "UAE, France",
//       "Category": "Energy",
//       "Content": "Mubadala partnered with Bpifrance are jointly investing in global technology investment firm Partech's latest Africa-focused venture fund, Partech Africa II.",
//       "Companies": "Mubadala, Bpifrance"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Energy",
//       "Content": "Arab Development Establishment (ADE) and Schneider Electric today officially launched their joint venture manufacturing facility in Abu Dhabi, TAQANA Energy Solutions.",
//       "Companies": "Arab Development Establishment, Schneider Electric"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Energy",
//       "Content": "DEWA strengthens ties with SUEZ.",
//       "Companies": "DEWA, Suez"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Renewable Energy",
//       "Content": "MOU between ADNOC and Veolia focused on optimising water consumption including water recycling, reduce overall water usage, minimising the carbon footprint.",
//       "Companies": "ADNOC, Veolia"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Energy and Infrastructure",
//       "Content": "The UAE has shown interest in European Nuclear Energy investments. ENEC owned by ADQ has reportedly been holding talks to invest in the UK's nuclear energy infrastructure (Sizewell C large-scale nuclear project) being built by the French energy giant EDF.",
//       "Companies": "ENEC, EDF renewables"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Logistics",
//       "Content": "AD Ports Group has recently entered a 35-year concession agreement with French shipping and logistics giant, CMA CGM Group. The joint venture will secure significant investment from both parties, totalling around AED 570 million (USD 154 million), and prepares the way for a new container terminal to be located at Khalifa Port, Abu Dhabi, UAE.",
//       "Companies": "AD Ports Group, CMA CGM"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Education",
//       "Content": "The Sorbonne University Abu Dhabi was developed under a Public Private Partnership.",
//       "Companies": "Sorbonne University Abu Dhabi, Mubadala"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Sustainability",
//       "Content": "Chalhoub Group, LVMH, EMAAR Malls Management (L.L.C), Majid Al Futtaim Properties LLC, and Aldar Properties PJSC join forces to create 'Unity For Change - أفق' (pronounced UFQ in Arabic, meaning horizon and symbolizing the future), a pioneering partnership among prominent retailers and real estate developers in the Emirates. This alliance is dedicated to defining and achieving sustainability targets.",
//       "Companies": "Chalhoub Group, LVMH, Emaar Malls, Al-Futtaim, Aldar"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Retail",
//       "Content": "Carrefour was introduced to the region in 1995 by UAE company Majid Al Futtaim. Majid Al Futtaim owns the exclusive rights to operate Carrefour under Majid Al Futtaim's distinct name and 'M' logo.",
//       "Companies": "Carrefour, Al-Futtaim"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Tourism and Hospitality",
//       "Content": "French hospitality giant Accor's non-luxury brands - Pullman, Ibis, and Novotel —are seeing strong growth in the region.",
//       "Companies": "Accor"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Transportation",
//       "Content": "KEOLIS signed a contract for Dubai Metro and Tram network.",
//       "Companies": "Keolis"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Renewable energy & green projects",
//       "Content": "Masdar signed an agreement with Hy24 Clean Hydrogen Infrastructure Fund to enable large-scale green hydrogen production projects across Europe, the Americas, Asia Pacific and the Middle East and North Africa. The agreement gave Masdar access to a pipeline of up to €2 billion in co-investment and co-development opportunities.",
//       "Companies": "Masdar, Hy24"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Renewable energy & green projects",
//       "Content": "French utility company ENGIE is looking to further deepen its roots in the UAE market, with $11.9 billion already invested in different projects in the Gulf country. For example: including funding the development of Al Ajban Solar Photovoltaic plant, which will produce 1.5 gigawatts of power. The firm will be responsible for the development and operation of the Mirfa 2 Reverse Osmosis Independent Water Project worth $800 million.",
//       "Companies": "Engie"
//     },
//     {
//       "Countries": "France",
//       "Category": "AI and Technology",
//       "Content": "France is open to Emirati investments in Nuclear and AI industries. For example: Core 42, G42's digital infrastructure company partners with DataOne, First gigascale AI hosting infrastructure data center in Grenoble, France.",
//       "Companies": "Core42, DataOne, G42"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Technology and AI",
//       "Content": "France's Systra awarded consultancy mandate for USD 2.5 Billion UAE-Oman railway project.",
//       "Companies": "Systra, Etihad Rail"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Technology and AI",
//       "Content": "AD Ports signed a partnership with the French company Pasqal to develop AI-driven solutions. This collaboration will focus on integrating artificial intelligence models, quantitative analysis, and advanced algorithm development.",
//       "Companies": "Pasqal, AD Ports"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Aerospace, Defence, and Security",
//       "Content": "EDGE entity EPI, has signed a serial production contract of C295 Cargo Compartment Removable Tanks with Airbus Defence and Space, a division of Airbus Group.",
//       "Companies": "EPI, Airbus Group"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Aerospace, Defence, and Security",
//       "Content": "EDGE Group and Thales signed an MOU to equip its unmanned and remotely piloted combat and reconnaissance aircraft (UAVs) with advanced technologies.",
//       "Companies": "EDGE, Thales"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Aerospace, Defence, and Security",
//       "Content": "KATIM and Thales will start discussing the co-development of Software Defined Radio technologies in the United Arab Emirates (UAE).",
//       "Companies": "KATIM, Thales"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Aerospace, Defence, and Security",
//       "Content": "Mubadala and Safran strengthen strategic partnership to drive Aerospace Growth in the UAE.",
//       "Companies": "Safran, Mubadala"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Aerospace, Defence, and Security",
//       "Content": "The UAE signed a record 14-billion-euro contract for 80 Rafale warplanes which will be produced by Dassault Aviation.",
//       "Companies": "Dassault Aviation"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Aerospace, Defence, and Security",
//       "Content": "Safran Aircraft Engines and Abu Dhabi Aviation Group (ADA) have signed a strategic Memorandum of Understanding (MoU) to enhance collaboration in military aviation maintenance, repair, and overhaul (MRO) services.",
//       "Companies": "ADA, Mubadala"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Aerospace",
//       "Content": "Mohammed Bin Rashid Space Centre (MBRSC) and Thales Alenia Space to develop the Pressure Equalisation Unit of the Gateway lunar space station.",
//       "Companies": "MBRSC, Thales Alenia Space"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Culture",
//       "Content": "UAE's Louvre Abu Dhabi contract extended to 2047.",
//       "Companies": "Louvre Abu Dhabi"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Luxury Retail",
//       "Content": "Al Tayer Group partnership with several French brands.",
//       "Companies": "Al Tayer Insignia"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Luxury Retail",
//       "Content": "Chalhoub Group partnership with several French brands.",
//       "Companies": "Chalhoub Group"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Luxury Retail",
//       "Content": "LVMH is the world's leading luxury products group",
//       "Companies": "LVMH"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Luxury Retail",
//       "Content": "A global Luxury group, Kering manages the development of a series of renowned Houses in Fashion, Leather Goods and Jewelry.",
//       "Companies": "Kering"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Renewable energy & green projects",
//       "Content": "Masdar, TotalEnergies and 2PointZero partnership to support clean energy solutions in emerging markets and developing economies across Africa and Asia.",
//       "Companies": "Masdar, TotalEnergies, 2PointZero"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Renewable energy & green projects",
//       "Content": "Masdar and EDF signed an agreement to establish a JV energy services company (ESCO).",
//       "Companies": "Masdar, EDF renewables"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Renewable energy & green projects",
//       "Content": "Masdar and EDF Group joint venture Emerge signed an MOU with ADNOC Sour Gas to explore leveraging solar energy at the Shah Gas Plant.",
//       "Companies": "ADNOC, EDF renewables"
//     }
//   ];
  
//   return rawData.map((item, index) => {
//     // Parse countries
//     const countries = item.Countries.split(', ').map(c => c.trim());
    
//     // Assign a random logo URL from the sample list
//     const randomLogoIndex = Math.floor(Math.random() * sampleLogoUrls.length);
    
//     // Parse companies
//     const companies = item.Companies.split(', ').map(c => c.trim());
    
//     // Create coordinates
//     const coordinates: any = {};
//     if (countries.includes('UAE') || countries.some(c => c.toLowerCase() === 'uae')) {
//       coordinates.uae = { x: 150 + Math.random() * 100, y: 50 + Math.random() * 80 };
//     }
//     if (countries.includes('France') || countries.some(c => c.toLowerCase() === 'france')) {
//       coordinates.france = { x: 140 + Math.random() * 120, y: 250 + Math.random() * 100 };
//     }
    
//     return {
//       id: `entry-${index}`,
//       logo: companies[0] || "Company",
//       logoUrl: sampleLogoUrls[randomLogoIndex],
//       countries: countries,
//       category: item.Category,
//       content: item.Content,
//       companies: companies,
//       coordinates
//     };
//   });
// };

// const investments: InvestmentEntry[] = processRawData();

// // Extract unique categories and countries for filters
// const uniqueCategories = Array.from(new Set(investments.map(item => item.category)));
// const uniqueCountries = Array.from(new Set(investments.flatMap(item => item.countries)));

// const countryImages = {
//   uae: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AE-5TuD3IsqSNBAgpIaSTRzgmp0706AfL.png",
//   france: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FR-pWTYZFejdQXuC97zqiBqGVxkSFomxu.png",
//   sweden: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SE-DM6vGWxobocAEyJ4YxiYRet775n6Yv.png"
// };

// const MapConnection = () => {
//   const [selectedEntry, setSelectedEntry] = useState<InvestmentEntry | null>(null);
//   const [hoveredEntry, setHoveredEntry] = useState<InvestmentEntry | null>(null);
//   const [activeCountry, setActiveCountry] = useState<"all" | string>("all");
//   const [activeCategory, setActiveCategory] = useState<"all" | string>("all");

//   // Filtered investments based on active filters
//   const filteredInvestments = useMemo(() => {
//     return investments.filter((entry) => {
//       const matchesCountry = activeCountry === "all" || entry.countries.includes(activeCountry);
//       const matchesCategory = activeCategory === "all" || entry.category === activeCategory;
//       return matchesCountry && matchesCategory;
//     });
//   }, [activeCountry, activeCategory]);

//   const renderConnections = (entry: InvestmentEntry) => {
//     if (!entry.coordinates) return null;

//     const isHighlighted = hoveredEntry?.id === entry.id || selectedEntry?.id === entry.id;
//     const interactionProps = {
//       onMouseEnter: () => setHoveredEntry(entry),
//       onMouseLeave: () => setHoveredEntry(null),
//       onClick: () => setSelectedEntry(entry === selectedEntry ? null : entry),
//       style: { cursor: "pointer" },
//     };

//     // Create a line between UAE and France if both exist
//     const connections = [];

//     if (entry.coordinates.uae && entry.coordinates.france) {
//       connections.push(
//         <path
//           key={`path-${entry.id}-uae-france`}
//           d={`M ${entry.coordinates.uae.x} ${entry.coordinates.uae.y} 
//               C ${entry.coordinates.uae.x} ${(entry.coordinates.uae.y + entry.coordinates.france.y) / 2},
//                 ${entry.coordinates.france.x} ${(entry.coordinates.uae.y + entry.coordinates.france.y) / 2},
//                 ${entry.coordinates.france.x} ${entry.coordinates.france.y}`}
//           stroke={isHighlighted ? "#f97316" : "#4169E1"}
//           strokeDasharray={isHighlighted ? "0" : "3 3"}
//           strokeWidth={isHighlighted ? "3" : "1.5"}
//           fill="none"
//           className="transition-all duration-300"
//           {...interactionProps}
//         />
//       );
//     }

//     // Create points for each country
//     const points = [];
    
//     if (entry.coordinates.uae) {
//       points.push(
//         <g key={`uae-point-${entry.id}`} {...interactionProps}>
//           <circle
//             cx={entry.coordinates.uae.x}
//             cy={entry.coordinates.uae.y}
//             r={isHighlighted ? "8" : "5"}
//             fill={isHighlighted ? "#f97316" : "#94a3b8"}
//             className="transition-all duration-300"
//           />
//           {isHighlighted && (
//             <text
//               x={entry.coordinates.uae.x + 12}
//               y={entry.coordinates.uae.y}
//               fontSize="10"
//               fill="#f97316"
//               fontWeight="bold"
//             >
//               {entry.category}
//             </text>
//           )}
//         </g>
//       );
//     }
    
//     if (entry.coordinates.france) {
//       points.push(
//         <g key={`france-point-${entry.id}`} {...interactionProps}>
//           <circle
//             cx={entry.coordinates.france.x}
//             cy={entry.coordinates.france.y}
//             r={isHighlighted ? "8" : "5"}
//             fill={isHighlighted ? "#f97316" : "#94a3b8"}
//             className="transition-all duration-300"
//           />
//           {isHighlighted && (
//             <text
//               x={entry.coordinates.france.x + 12}
//               y={entry.coordinates.france.y}
//               fontSize="10"
//               fill="#f97316"
//               fontWeight="bold"
//             >
//               {entry.category}
//             </text>
//           )}
//         </g>
//       );
//     }

//     return (
//       <g key={`connection-${entry.id}`}>
//         {connections}
//         {points}
//       </g>
//     );
//   };

//   const getCardClassName = (entry: InvestmentEntry) => {
//     const isActive = hoveredEntry?.id === entry.id || selectedEntry?.id === entry.id;
//     return isActive ? "border-primary bg-primary/5 shadow-md" : "border-border hover:bg-accent/50";
//   };

//   const getCountryFlagIcons = (countries: string[]) => {
//     return countries.map((country, index) => {
//       const lowerCountry = country.toLowerCase();
//       if (lowerCountry === "uae") {
//         return <FlagIcon key={`flag-${index}`} country="uae" />;
//       } else if (lowerCountry === "france") {
//         return <FlagIcon key={`flag-${index}`} country="france" />;
//       } else if (lowerCountry === "sweden") {
//         return <FlagIcon key={`flag-${index}`} country="sweden" />;
//       }
//       return null;
//     });
//   };

//   return (
//     <div className="max-w-[1200px] mx-auto p-4">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">UAE-France Investment Connections</h1>
//         <p className="text-muted-foreground max-w-2xl mx-auto">
//           Visualizing cross-border investments and business relationships between the UAE and France
//         </p>
//       </div>

//       {/* Filter Controls */}
//       <div className="mb-8 bg-accent/20 p-4 rounded-lg shadow">
//         <div className="flex flex-col md:flex-row gap-6">
//           <div className="flex-1">
//             <h3 className="text-lg font-bold mb-3 flex items-center">
//               <Filter size={18} className="mr-2" /> Filter by Country
//             </h3>
//             <div className="flex flex-wrap gap-2">
//               <Badge
//                 variant={activeCountry === "all" ? "default" : "outline"}
//                 className="cursor-pointer text-sm px-4 py-1.5 bg-gray-100 hover:bg-gray-200"
//                 onClick={() => setActiveCountry("all")}
//               >
//                 All Countries
//               </Badge>
//               {uniqueCountries.map((country) => {
//                 let bgColor = "bg-gray-100 hover:bg-gray-200";
//                 if (country.toLowerCase() === "uae") {
//                   bgColor = "bg-green-50 hover:bg-green-100 border-green-200";
//                 } else if (country.toLowerCase() === "france") {
//                   bgColor = "bg-blue-50 hover:bg-blue-100 border-blue-200";
//                 }
                
//                 return (
//                   <Badge
//                     key={`country-filter-${country}`}
//                     variant={activeCountry === country ? "default" : "outline"}
//                     className={`cursor-pointer text-sm px-4 py-1.5 ${bgColor} ${activeCountry === country ? 'text-black font-semibold' : ''}`}
//                     onClick={() => setActiveCountry(country)}
//                   >
//                     {getCountryFlagIcons([country])} {country}
//                   </Badge>
//                 );
//               })}
//             </div>
//           </div>
          
//           <div className="flex-1">
//             <h3 className="text-lg font-bold mb-3 flex items-center">
//               <Filter size={18} className="mr-2" /> Filter by Category
//             </h3>
//             <div className="flex flex-wrap gap-2">
//               <Badge
//                 variant={activeCategory === "all" ? "default" : "outline"}
//                 className="cursor-pointer text-sm px-4 py-1.5 bg-gray-100 hover:bg-gray-200"
//                 onClick={() => setActiveCategory("all")}
//               >
//                 All Categories
//               </Badge>
//               {uniqueCategories.map((category, index) => {
//                 // Creating a light color palette for categories
//                 const colorClasses = [
//                   "bg-amber-50 hover:bg-amber-100 border-amber-200",
//                   "bg-pink-50 hover:bg-pink-100 border-pink-200",
//                   "bg-purple-50 hover:bg-purple-100 border-purple-200",
//                   "bg-indigo-50 hover:bg-indigo-100 border-indigo-200",
//                   "bg-cyan-50 hover:bg-cyan-100 border-cyan-200",
//                   "bg-teal-50 hover:bg-teal-100 border-teal-200",
//                   "bg-emerald-50 hover:bg-emerald-100 border-emerald-200",
//                   "bg-lime-50 hover:bg-lime-100 border-lime-200",
//                   "bg-orange-50 hover:bg-orange-100 border-orange-200",
//                   "bg-red-50 hover:bg-red-100 border-red-200"
//                 ];
                
//                 const colorClass = colorClasses[index % colorClasses.length];
                
//                 return (
//                   <Badge
//                     key={`category-filter-${category}`}
//                     variant={activeCategory === category ? "default" : "outline"}
//                     className={`cursor-pointer text-sm px-4 py-1.5 ${colorClass} ${activeCategory === category ? 'text-black font-semibold' : ''}`}
//                     onClick={() => setActiveCategory(category)}
//                   >
//                     {category}
//                   </Badge>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-card rounded-xl shadow-sm border p-4 md:p-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Map Visualization - Full width on mobile, left column on desktop */}
//           <div className="order-1 lg:order-none">
//             <Card className="h-[500px] overflow-hidden">
//               <CardContent className="p-0 h-full">
//                 <div className="relative h-full bg-accent/30 rounded-lg overflow-hidden">
//                   <svg
//                     className="w-full h-full"
//                     viewBox="0 0 400 400"
//                     aria-label="Investment connection map between UAE and France"
//                   >
//                     {/* Background for better contrast */}
//                     <rect x="0" y="0" width="400" height="400" fill="#f8fafc" />

//                     {/* UAE Map Region */}
//                     <g className="uae-region">
//                       <image
//                         href={countryImages.uae}
//                         x="30"
//                         y="10"
//                         width="340"
//                         height="150"
//                         preserveAspectRatio="xMidYMid meet"
//                         style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
//                       />
//                     </g>

//                     {/* France Map Region */}
//                     <g className="france-region">
//                       <image
//                         href={countryImages.france}
//                         x="30"
//                         y="200"
//                         width="340"
//                         height="190"
//                         preserveAspectRatio="xMidYMid meet"
//                         style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
//                       />
//                     </g>

//                     {/* Render all connections */}
//                     {filteredInvestments.map((entry) => renderConnections(entry))}
//                   </svg>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Selected Entry Detail */}
//             {selectedEntry && (
//               <Card className="mt-4 bg-primary/5 border-primary animate-fadeIn">
//                 <CardContent className="p-4">
//                   <div className="flex items-start justify-between mb-2">
//                     <div className="flex flex-col">
//                       <div className="flex items-center gap-2 mb-2">
//                         <h3 className="text-xl font-bold">{selectedEntry.category}</h3>
//                         <div className="flex">
//                           {getCountryFlagIcons(selectedEntry.countries)}
//                         </div>
//                       </div>
//                       <div className="text-sm font-bold mb-3">
//                         {selectedEntry.companies.join(', ')}
//                       </div>
//                     </div>
//                     <button
//                       onClick={() => setSelectedEntry(null)}
//                       className="text-muted-foreground hover:text-foreground"
//                       aria-label="Close details"
//                     >
//                       ✕
//                     </button>
//                   </div>
//                   <p className="text-sm">{selectedEntry.content}</p>
//                 </CardContent>
//               </Card>
//             )}
//           </div>

//           {/* Investment Entries - Right column on desktop, scrollable list */}
//           <div className="order-2 lg:order-none">
//             <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
//               {filteredInvestments.length > 0 ? (
//                 filteredInvestments.map((entry) => (
//                   <Card 
//                     key={entry.id} 
//                     className={`transition-all duration-300 ${getCardClassName(entry)}`}
//                   >
//                     <CardContent className="p-4">
//                       <div
//                         className="cursor-pointer"
//                         onClick={() => setSelectedEntry(entry === selectedEntry ? null : entry)}
//                         onMouseEnter={() => setHoveredEntry(entry)}
//                         onMouseLeave={() => setHoveredEntry(null)}
//                       >
//                         <div className="flex items-start justify-between mb-2">
//                           <div className="flex flex-col">
//                             {/* Category - large, black, bold */}
//                             <div className="flex items-center gap-2">
//                               <h3 className="text-lg font-bold">{entry.category}</h3>
//                               <div className="flex">
//                                 {getCountryFlagIcons(entry.countries)}
//                               </div>
//                             </div>
                            
//                             {/* Companies - black, bold, smaller */}
//                             <p className="text-sm font-semibold mt-1">
//                               {entry.companies.join(', ')}
//                             </p>
//                           </div>
                          
//                           {/* Logo */}
//                           {entry.logoUrl && (
//                             <div className="w-16 h-12 ml-2 flex-shrink-0">
//                               <img
//                                 src={entry.logoUrl}
//                                 alt={`${entry.companies[0]} logo`}
//                                 className="w-full h-full object-contain object-center"
//                               />
//                             </div>
//                           )}
//                         </div>
                        
//                         {/* Content preview */}
//                         <p className="text-sm line-clamp-2 text-muted-foreground">
//                           {entry.content.length > 120
//                             ? `${entry.content.substring(0, 120)}...`
//                             : entry.content}
//                         </p>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))
//               ) : (
//                 <div className="text-center p-8 bg-accent/20 rounded-lg">
//                   <p className="text-muted-foreground">No matches found for the current filters. Try adjusting your selection.</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Summary at the bottom */}
//         <div className="mt-8 p-4 bg-accent/30 rounded-lg">
//           <h3 className="font-semibold mb-2">Summary</h3>
//           <p className="text-sm text-muted-foreground">
//             France and the UAE maintain robust economic ties across various sectors, including energy, aerospace, defense, luxury retail, and technology. French companies have established a significant presence in the UAE market, while UAE sovereign wealth funds like Mubadala have made substantial investments in French businesses. This two-way investment flow strengthens bilateral economic relations and creates opportunities for growth and innovation in both countries.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MapConnection



















































































// // "use client"

// import { useState, useMemo } from "react"
// import { Info, Filter } from "lucide-react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import franceMapImage from '/src/assets/images/france.png'; // Adjust the path as needed
// // import mubadalaLogo from '/public/lovable-uploads/1.png'; // Add this new import
// // import bpifranceLogo from '/public/lovable-uploads/2.png';

// import logo1 from '/public/lovable-uploads/1.png';  // Mubadala investments
// import logo2 from '/public/lovable-uploads/2.png';  // Mubadala & Bpifrance energy
// import logo3 from '/public/lovable-uploads/3.png';  // ADE & Schneider
// import logo4 from '/public/lovable-uploads/4.png';  // DEWA & SUEZ
// import logo5 from '/public/lovable-uploads/5.png';  // ADNOC & Veolia
// import logo6 from '/public/lovable-uploads/6.png';  // ENEC & EDF
// import logo7 from '/public/lovable-uploads/7.png';  // AD Ports & CMA CGM
// import logo8 from '/public/lovable-uploads/8.png';  // Sorbonne & Mubadala
// import logo9 from '/public/lovable-uploads/9.png';  // Chalhoub & LVMH etc
// import logo10 from '/public/lovable-uploads/10.png'; // Carrefour & Al-Futtaim
// import logo11 from '/public/lovable-uploads/11.png'; // Accor
// import logo12 from '/public/lovable-uploads/12.png'; // Keolis
// import logo13 from '/public/lovable-uploads/13.png'; // Masdar & Hy24
// import logo14 from '/public/lovable-uploads/14.png'; // Engie
// import logo15 from '/public/lovable-uploads/15.png'; // Core42 & DataOne
// import logo16 from '/public/lovable-uploads/16.png'; // Systra & Etihad Rail
// import logo17 from '/public/lovable-uploads/17.png'; // Pasqal & AD Ports
// import logo18 from '/public/lovable-uploads/18.png'; // EPI & Airbus
// import logo19 from '/public/lovable-uploads/19.png'; // EDGE & Thales
// import logo20 from '/public/lovable-uploads/20.png'; // KATIM & Thales
// import logo21 from '/public/lovable-uploads/21.png'; // Safran & Mubadala
// import logo22 from '/public/lovable-uploads/22.png'; // Dassault Aviation
// import logo23 from '/public/lovable-uploads/23.png'; // ADA & Mubadala
// import logo24 from '/public/lovable-uploads/24.png'; // MBRSC & Thales Alenia
// import logo25 from '/public/lovable-uploads/25.png'; // Louvre Abu Dhabi
// import logo26 from '/public/lovable-uploads/26.png'; // Al Tayer Insignia
// import logo27 from '/public/lovable-uploads/27.png'; // Chalhoub Group
// import logo28 from '/public/lovable-uploads/28.png'; // LVMH
// import logo29 from '/public/lovable-uploads/29.png'; // Kering
// import logo30 from '/public/lovable-uploads/30.png'; // Masdar & TotalEnergies
// import logo31 from '/public/lovable-uploads/31.png'; // Masdar & EDF
// import logo32 from '/public/lovable-uploads/32.png'; // ADNOC & EDF


// interface InvestmentEntry {
//   id: string;
//   logo: string;
//   logoUrl?: string;
//   countries: string[];
//   category: string;
//   content: string;
//   companies: string[];
//   coordinates: {
//     uae?: { x: number; y: number };
//     france?: { x: number; y: number };
//     sweden?: { x: number; y: number };
//   };
// }

// const FlagIcon = ({ country }: { country: "uae" | "france" | "sweden" }) => {
//   if (country === "uae") {
//     return (
//       <svg width="16" height="12" viewBox="0 0 640 480" className="inline-block mr-1" aria-label="UAE flag">
//         <path fill="#00732f" d="M0 0h640v160H0z" />
//         <path fill="#fff" d="M0 160h640v160H0z" />
//         <path d="M0 320h640v160H0z" />
//         <path fill="red" d="M0 0h220v480H0z" />
//       </svg>
//     )
//   }
//   if (country === "france") {
//     return (
//       <svg width="16" height="12" viewBox="0 0 640 480" className="inline-block mr-1" aria-label="France flag">
//         <path fill="#fff" d="M0 0h640v480H0z"/>
//         <path fill="#00267f" d="M0 0h213.3v480H0z"/>
//         <path fill="#f31830" d="M426.7 0H640v480H426.7z"/>
//       </svg>
//     )
//   }
//   return (
//     <svg width="16" height="12" viewBox="0 0 640 480" className="inline-block mr-1" aria-label="Sweden flag">
//       <path fill="#006aa7" d="M0 0h640v480H0z" />
//       <path fill="#fecc00" d="M0 192h640v96H0z" />
//       <path fill="#fecc00" d="M176 0h96v480h-96z" />
//     </svg>
//   )
// }

// // Sample logo URLs to choose from randomly
// const sampleLogoUrls = [
//   "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4BDqeAp6GMfQxWaMUKIABIpho6sHEe.png",
//   "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ww7PN4pkKUSAKYtEYjNDHS76cWTOuB.png",
//   "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-e3t8PziBvV7xTPhyrYrXmuQbkMLpte.png"
// ];






// // Process the raw data into InvestmentEntry format
// const processRawData = () => {
//   const rawData = [
//     {
//       "Countries": "France",
//       "Category": "Investments",
//       "Content": "Mubadala has been active in France since 2014 with over 35 investments worth approximately USD3.8 Billion. For example: Omni-Pac group, a pan European designer and producer of moulded fiber packing products. SGD Pharma, a leading global manufacturer of glass packing for the pharmaceutical industry. Matera, a residential management company founded in 2017. ADISTA, a leading alternative B2B ICT operator in France, providing telecom and IT services including system integrations, IT hosting/outsourcing and project engineering solutions to SMEs. Furthermore, in 2021, Mubadala sovereign wealth fund pledged eight billion euros in investments in French businesses, while the licence of the UAE capital's branch of the Louvre art gallery was extended for 10 years to 2047.",
//       "Companies": "Mubadala, Omni-Pac, Matera, SGD Pharma, Adista"
//     },
//     {
//       "Countries": "UAE, France",
//       "Category": "Energy",
//       "Content": "Mubadala partnered with Bpifrance are jointly investing in global technology investment firm Partech's latest Africa-focused venture fund, Partech Africa II.",
//       "Companies": "Mubadala, Bpifrance"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Energy",
//       "Content": "Arab Development Establishment (ADE) and Schneider Electric today officially launched their joint venture manufacturing facility in Abu Dhabi, TAQANA Energy Solutions.",
//       "Companies": "Arab Development Establishment, Schneider Electric"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Energy",
//       "Content": "DEWA strengthens ties with SUEZ.",
//       "Companies": "DEWA, Suez"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Renewable Energy",
//       "Content": "MOU between ADNOC and Veolia focused on optimising water consumption including water recycling, reduce overall water usage, minimising the carbon footprint.",
//       "Companies": "ADNOC, Veolia"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Energy and Infrastructure",
//       "Content": "The UAE has shown interest in European Nuclear Energy investments. ENEC owned by ADQ has reportedly been holding talks to invest in the UK's nuclear energy infrastructure (Sizewell C large-scale nuclear project) being built by the French energy giant EDF.",
//       "Companies": "ENEC, EDF renewables"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Logistics",
//       "Content": "AD Ports Group has recently entered a 35-year concession agreement with French shipping and logistics giant, CMA CGM Group. The joint venture will secure significant investment from both parties, totalling around AED 570 million (USD 154 million), and prepares the way for a new container terminal to be located at Khalifa Port, Abu Dhabi, UAE.",
//       "Companies": "AD Ports Group, CMA CGM"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Education",
//       "Content": "The Sorbonne University Abu Dhabi was developed under a Public Private Partnership.",
//       "Companies": "Sorbonne University Abu Dhabi, Mubadala"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Sustainability",
//       "Content": "Chalhoub Group, LVMH, EMAAR Malls Management (L.L.C), Majid Al Futtaim Properties LLC, and Aldar Properties PJSC join forces to create 'Unity For Change - أفق' (pronounced UFQ in Arabic, meaning horizon and symbolizing the future), a pioneering partnership among prominent retailers and real estate developers in the Emirates. This alliance is dedicated to defining and achieving sustainability targets.",
//       "Companies": "Chalhoub Group, LVMH, Emaar Malls, Al-Futtaim, Aldar"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Retail",
//       "Content": "Carrefour was introduced to the region in 1995 by UAE company Majid Al Futtaim. Majid Al Futtaim owns the exclusive rights to operate Carrefour under Majid Al Futtaim's distinct name and 'M' logo.",
//       "Companies": "Carrefour, Al-Futtaim"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Tourism and Hospitality",
//       "Content": "French hospitality giant Accor's non-luxury brands - Pullman, Ibis, and Novotel —are seeing strong growth in the region.",
//       "Companies": "Accor"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Transportation",
//       "Content": "KEOLIS signed a contract for Dubai Metro and Tram network.",
//       "Companies": "Keolis"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Renewable energy & green projects",
//       "Content": "Masdar signed an agreement with Hy24 Clean Hydrogen Infrastructure Fund to enable large-scale green hydrogen production projects across Europe, the Americas, Asia Pacific and the Middle East and North Africa. The agreement gave Masdar access to a pipeline of up to €2 billion in co-investment and co-development opportunities.",
//       "Companies": "Masdar, Hy24"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Renewable energy & green projects",
//       "Content": "French utility company ENGIE is looking to further deepen its roots in the UAE market, with $11.9 billion already invested in different projects in the Gulf country. For example: including funding the development of Al Ajban Solar Photovoltaic plant, which will produce 1.5 gigawatts of power. The firm will be responsible for the development and operation of the Mirfa 2 Reverse Osmosis Independent Water Project worth $800 million.",
//       "Companies": "Engie"
//     },
//     {
//       "Countries": "France",
//       "Category": "AI and Technology",
//       "Content": "France is open to Emirati investments in Nuclear and AI industries. For example: Core 42, G42's digital infrastructure company partners with DataOne, First gigascale AI hosting infrastructure data center in Grenoble, France.",
//       "Companies": "Core42, DataOne, G42"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Technology and AI",
//       "Content": "France's Systra awarded consultancy mandate for USD 2.5 Billion UAE-Oman railway project.",
//       "Companies": "Systra, Etihad Rail"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Technology and AI",
//       "Content": "AD Ports signed a partnership with the French company Pasqal to develop AI-driven solutions. This collaboration will focus on integrating artificial intelligence models, quantitative analysis, and advanced algorithm development.",
//       "Companies": "Pasqal, AD Ports"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Aerospace, Defence, and Security",
//       "Content": "EDGE entity EPI, has signed a serial production contract of C295 Cargo Compartment Removable Tanks with Airbus Defence and Space, a division of Airbus Group.",
//       "Companies": "EPI, Airbus Group"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Aerospace, Defence, and Security",
//       "Content": "EDGE Group and Thales signed an MOU to equip its unmanned and remotely piloted combat and reconnaissance aircraft (UAVs) with advanced technologies.",
//       "Companies": "EDGE, Thales"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Aerospace, Defence, and Security",
//       "Content": "KATIM and Thales will start discussing the co-development of Software Defined Radio technologies in the United Arab Emirates (UAE).",
//       "Companies": "KATIM, Thales"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Aerospace, Defence, and Security",
//       "Content": "Mubadala and Safran strengthen strategic partnership to drive Aerospace Growth in the UAE.",
//       "Companies": "Safran, Mubadala"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Aerospace, Defence, and Security",
//       "Content": "The UAE signed a record 14-billion-euro contract for 80 Rafale warplanes which will be produced by Dassault Aviation.",
//       "Companies": "Dassault Aviation"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Aerospace, Defence, and Security",
//       "Content": "Safran Aircraft Engines and Abu Dhabi Aviation Group (ADA) have signed a strategic Memorandum of Understanding (MoU) to enhance collaboration in military aviation maintenance, repair, and overhaul (MRO) services.",
//       "Companies": "ADA, Mubadala"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Aerospace",
//       "Content": "Mohammed Bin Rashid Space Centre (MBRSC) and Thales Alenia Space to develop the Pressure Equalisation Unit of the Gateway lunar space station.",
//       "Companies": "MBRSC, Thales Alenia Space"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Culture",
//       "Content": "UAE's Louvre Abu Dhabi contract extended to 2047.",
//       "Companies": "Louvre Abu Dhabi"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Luxury Retail",
//       "Content": "Al Tayer Group partnership with several French brands.",
//       "Companies": "Al Tayer Insignia"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Luxury Retail",
//       "Content": "Chalhoub Group partnership with several French brands.",
//       "Companies": "Chalhoub Group"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Luxury Retail",
//       "Content": "LVMH is the world's leading luxury products group",
//       "Companies": "LVMH"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Luxury Retail",
//       "Content": "A global Luxury group, Kering manages the development of a series of renowned Houses in Fashion, Leather Goods and Jewelry.",
//       "Companies": "Kering"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Renewable energy & green projects",
//       "Content": "Masdar, TotalEnergies and 2PointZero partnership to support clean energy solutions in emerging markets and developing economies across Africa and Asia.",
//       "Companies": "Masdar, TotalEnergies, 2PointZero"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Renewable energy & green projects",
//       "Content": "Masdar and EDF signed an agreement to establish a JV energy services company (ESCO).",
//       "Companies": "Masdar, EDF renewables"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Renewable energy & green projects",
//       "Content": "Masdar and EDF Group joint venture Emerge signed an MOU with ADNOC Sour Gas to explore leveraging solar energy at the Shah Gas Plant.",
//       "Companies": "ADNOC, EDF renewables"
//     }
//   ];
  
//   return rawData.map((item, index) => {
//     // Parse countries
//     const countries = item.Countries.split(', ').map(c => c.trim());
    
//     // Assign a random logo URL from the sample list
//     // const randomLogoIndex = Math.floor(Math.random() * sampleLogoUrls.length);
    

//     // Assign the Mubadala logo for the Investments entry, or a random logo for others
//     // let logoUrl;
//     // if (index === 0) { // The Mubadala/France investments entry
//     //   logoUrl = mubadalaLogo;
//     // } else {
//     //   const randomLogoIndex = Math.floor(Math.random() * sampleLogoUrls.length);
//     //   logoUrl = sampleLogoUrls[randomLogoIndex];
//     // }



//     // Assign specific logos for selected entries, or a random logo for others
//     // let logoUrl;
//     // if (index === 0) { // The Mubadala/France investments entry
//     //   logoUrl = mubadalaLogo;
//     // } else if (index === 1) { // The Mubadala/Bpifrance energy entry
//     //   logoUrl = bpifranceLogo;
//     // } else {
//     //   const randomLogoIndex = Math.floor(Math.random() * sampleLogoUrls.length);
//     //   logoUrl = sampleLogoUrls[randomLogoIndex];
//     // }


// // Map index to corresponding logo
// const logoMap = [
//   logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, 
//   logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16,
//   logo17, logo18, logo19, logo20, logo21, logo22, logo23, logo24,
//   logo25, logo26, logo27, logo28, logo29, logo30, logo31, logo32
// ];

// // Use the matching logo or fall back to a random one if index exceeds available logos
// const logoUrl = index < logoMap.length ? logoMap[index] : sampleLogoUrls[Math.floor(Math.random() * sampleLogoUrls.length)];


//     // Parse companies
//     const companies = item.Companies.split(', ').map(c => c.trim());
    
//     // Create coordinates
//     const coordinates: any = {};
//     if (countries.includes('UAE') || countries.some(c => c.toLowerCase() === 'uae')) {
//       coordinates.uae = { x: 150 + Math.random() * 100, y: 50 + Math.random() * 80 };
//     }
//     if (countries.includes('France') || countries.some(c => c.toLowerCase() === 'france')) {
//       coordinates.france = { x: 140 + Math.random() * 120, y: 250 + Math.random() * 100 };
//     }
    
//     return {
//       id: `entry-${index}`,
//       logo: companies[0] || "Company",
//       // logoUrl: sampleLogoUrls[randomLogoIndex],
//       logoUrl: logoUrl,
//       countries: countries,
//       category: item.Category,
//       content: item.Content,
//       companies: companies,
//       coordinates
//     };
//   });
// };

// const investments: InvestmentEntry[] = processRawData();

// // Extract unique categories and countries for filters
// const uniqueCategories = Array.from(new Set(investments.map(item => item.category)));
// const uniqueCountries = Array.from(new Set(investments.flatMap(item => item.countries)));

// const countryImages = {
//   uae: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AE-5TuD3IsqSNBAgpIaSTRzgmp0706AfL.png",
//   // france: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FR-pWTYZFejdQXuC97zqiBqGVxkSFomxu.png",
//   france: franceMapImage,
//   sweden: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SE-DM6vGWxobocAEyJ4YxiYRet775n6Yv.png"
// };

// const MapConnection = () => {
//   const [selectedEntry, setSelectedEntry] = useState<InvestmentEntry | null>(null);
//   const [hoveredEntry, setHoveredEntry] = useState<InvestmentEntry | null>(null);
//   const [activeCountry, setActiveCountry] = useState<"all" | string>("all");
//   const [activeCategory, setActiveCategory] = useState<"all" | string>("all");

//   // Filtered investments based on active filters
//   const filteredInvestments = useMemo(() => {
//     return investments.filter((entry) => {
//       const matchesCountry = activeCountry === "all" || entry.countries.includes(activeCountry);
//       const matchesCategory = activeCategory === "all" || entry.category === activeCategory;
//       return matchesCountry && matchesCategory;
//     });
//   }, [activeCountry, activeCategory]);

//   const renderConnections = (entry: InvestmentEntry) => {
//     if (!entry.coordinates) return null;

//     const isHighlighted = hoveredEntry?.id === entry.id || selectedEntry?.id === entry.id;
//     const interactionProps = {
//       onMouseEnter: () => setHoveredEntry(entry),
//       onMouseLeave: () => setHoveredEntry(null),
//       onClick: () => setSelectedEntry(entry === selectedEntry ? null : entry),
//       style: { cursor: "pointer" },
//     };

//     // Create a line between UAE and France if both exist
//     const connections = [];

//     // if (entry.coordinates.uae && entry.coordinates.france) {
//     //   connections.push(
//     //     <path
//     //       key={`path-${entry.id}-uae-france`}
//     //       d={`M ${entry.coordinates.uae.x} ${entry.coordinates.uae.y} 
//     //           C ${entry.coordinates.uae.x} ${(entry.coordinates.uae.y + entry.coordinates.france.y) / 2},
//     //             ${entry.coordinates.france.x} ${(entry.coordinates.uae.y + entry.coordinates.france.y) / 2},
//     //             ${entry.coordinates.france.x} ${entry.coordinates.france.y}`}
//     //       stroke={isHighlighted ? "#f97316" : "#4169E1"}
//     //       strokeDasharray={isHighlighted ? "0" : "3 3"}
//     //       strokeWidth={isHighlighted ? "3" : "1.5"}
//     //       fill="none"
//     //       className="transition-all duration-300"
//     //       {...interactionProps}
//     //     />
//     //   );
//     // }

//     // Create points for each country
//     const points = [];
    
//     if (entry.coordinates.uae) {
//       points.push(
//         <g key={`uae-point-${entry.id}`} {...interactionProps}>
//           <circle
//             cx={entry.coordinates.uae.x}
//             cy={entry.coordinates.uae.y}
//             r={isHighlighted ? "8" : "5"}
//             fill={isHighlighted ? "#f97316" : "#94a3b8"}
//             className="transition-all duration-300"
//           />
//           {isHighlighted && (
//             <text
//               x={entry.coordinates.uae.x + 12}
//               y={entry.coordinates.uae.y}
//               fontSize="10"
//               fill="#f97316"
//               fontWeight="bold"
//             >
//               {entry.category}
//             </text>
//           )}
//         </g>
//       );
//     }
    
//     if (entry.coordinates.france) {
//       points.push(
//         <g key={`france-point-${entry.id}`} {...interactionProps}>
//           <circle
//             cx={entry.coordinates.france.x}
//             cy={entry.coordinates.france.y}
//             r={isHighlighted ? "8" : "5"}
//             fill={isHighlighted ? "#f97316" : "#94a3b8"}
//             className="transition-all duration-300"
//           />
//           {isHighlighted && (
//             <text
//               x={entry.coordinates.france.x + 12}
//               y={entry.coordinates.france.y}
//               fontSize="10"
//               fill="#f97316"
//               fontWeight="bold"
//             >
//               {entry.category}
//             </text>
//           )}
//         </g>
//       );
//     }

//     return (
//       <g key={`connection-${entry.id}`}>
//         {connections}
//         {points}
//       </g>
//     );
//   };

//   const getCardClassName = (entry: InvestmentEntry) => {
//     const isActive = hoveredEntry?.id === entry.id || selectedEntry?.id === entry.id;
//     return isActive ? "border-primary bg-primary/5 shadow-md" : "border-border hover:bg-accent/50";
//   };

//   const getCountryFlagIcons = (countries: string[]) => {
//     return countries.map((country, index) => {
//       const lowerCountry = country.toLowerCase();
//       if (lowerCountry === "uae") {
//         return <FlagIcon key={`flag-${index}`} country="uae" />;
//       } else if (lowerCountry === "france") {
//         return <FlagIcon key={`flag-${index}`} country="france" />;
//       } else if (lowerCountry === "sweden") {
//         return <FlagIcon key={`flag-${index}`} country="sweden" />;
//       }
//       return null;
//     });
//   };

//   return (
//     <div className="max-w-[1200px] mx-auto p-4">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">UAE-France Investment Connections</h1>
//         <p className="text-muted-foreground max-w-2xl mx-auto">
//           Visualizing cross-border investments and business relationships between the UAE and France
//         </p>
//       </div>

//       {/* Filter Controls */}
//       <div className="mb-8 bg-accent/20 p-4 rounded-lg shadow">
//         <div className="flex flex-col md:flex-row gap-6">
//           <div className="flex-1">
//             <h3 className="text-lg font-bold mb-3 flex items-center">
//               <Filter size={18} className="mr-2" /> Filter by Country
//             </h3>
//             <div className="flex flex-wrap gap-2">
//               <Badge
//                 variant={activeCountry === "all" ? "outline" : "outline"}
//                 className={`cursor-pointer text-sm px-4 py-1.5 ${activeCountry === "all" 
//                   ? 'bg-gray-700 text-white font-semibold border-gray-600' 
//                   : 'bg-gray-100 hover:bg-gray-200'}`}
//                 onClick={() => setActiveCountry("all")}
//               >
//                 All Countries
//               </Badge>
//               {uniqueCountries.map((country) => {
//                 let bgColor = "bg-gray-100 hover:bg-gray-200";
//                 let selectedBgColor = "bg-gray-700 text-white font-semibold";
                
//                 if (country.toLowerCase() === "uae") {
//                   bgColor = "bg-green-50 hover:bg-green-100 border-green-200";
//                   selectedBgColor = "bg-green-600 text-white font-semibold border-green-700";
//                 } else if (country.toLowerCase() === "france") {
//                   bgColor = "bg-blue-50 hover:bg-blue-100 border-blue-200";
//                   selectedBgColor = "bg-blue-600 text-white font-semibold border-blue-700";
//                 }
                
//                 return (
//                   <Badge
//                     key={`country-filter-${country}`}
//                     variant="outline"
//                     className={`cursor-pointer text-sm px-4 py-1.5 ${activeCountry === country 
//                       ? selectedBgColor 
//                       : bgColor}`}
//                     onClick={() => setActiveCountry(country)}
//                   >
//                     {getCountryFlagIcons([country])} {country}
//                   </Badge>
//                 );
//               })}
//             </div>
//           </div>
          
//           <div className="flex-1">
//             <h3 className="text-lg font-bold mb-3 flex items-center">
//               <Filter size={18} className="mr-2" /> Filter by Category
//             </h3>
//             <div className="flex flex-wrap gap-2">
//               <Badge
//                 variant="outline"
//                 className={`cursor-pointer text-sm px-4 py-1.5 ${activeCategory === "all" 
//                   ? 'bg-gray-700 text-white font-semibold border-gray-600' 
//                   : 'bg-gray-100 hover:bg-gray-200'}`}
//                 onClick={() => setActiveCategory("all")}
//               >
//                 All Categories
//               </Badge>
//               {uniqueCategories.map((category, index) => {
//                 // Creating a light color palette for categories with corresponding dark versions
//                 const colorPairs = [
//                   { light: "bg-amber-50 hover:bg-amber-100 border-amber-200", dark: "bg-amber-600 text-white font-semibold border-amber-700" },
//                   { light: "bg-pink-50 hover:bg-pink-100 border-pink-200", dark: "bg-pink-600 text-white font-semibold border-pink-700" },
//                   { light: "bg-purple-50 hover:bg-purple-100 border-purple-200", dark: "bg-purple-600 text-white font-semibold border-purple-700" },
//                   { light: "bg-indigo-50 hover:bg-indigo-100 border-indigo-200", dark: "bg-indigo-600 text-white font-semibold border-indigo-700" },
//                   { light: "bg-cyan-50 hover:bg-cyan-100 border-cyan-200", dark: "bg-cyan-600 text-white font-semibold border-cyan-700" },
//                   { light: "bg-teal-50 hover:bg-teal-100 border-teal-200", dark: "bg-teal-600 text-white font-semibold border-teal-700" },
//                   { light: "bg-emerald-50 hover:bg-emerald-100 border-emerald-200", dark: "bg-emerald-600 text-white font-semibold border-emerald-700" },
//                   { light: "bg-lime-50 hover:bg-lime-100 border-lime-200", dark: "bg-lime-600 text-white font-semibold border-lime-700" },
//                   { light: "bg-orange-50 hover:bg-orange-100 border-orange-200", dark: "bg-orange-600 text-white font-semibold border-orange-700" },
//                   { light: "bg-red-50 hover:bg-red-100 border-red-200", dark: "bg-red-600 text-white font-semibold border-red-700" }
//                 ];
                
//                 const colorPair = colorPairs[index % colorPairs.length];
                
//                 return (
//                   <Badge
//                     key={`category-filter-${category}`}
//                     variant="outline"
//                     className={`cursor-pointer text-sm px-4 py-1.5 ${activeCategory === category 
//                       ? colorPair.dark 
//                       : colorPair.light}`}
//                     onClick={() => setActiveCategory(category)}
//                   >
//                     {category}
//                   </Badge>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-card rounded-xl shadow-sm border p-4 md:p-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Map Visualization - Full width on mobile, left column on desktop */}
//           <div className="order-1 lg:order-none">
//             <Card className="h-[500px] overflow-hidden">
//               <CardContent className="p-0 h-full">
//                 <div className="relative h-full bg-accent/30 rounded-lg overflow-hidden">
//                   <svg
//                     className="w-full h-full"
//                     viewBox="0 0 400 400"
//                     aria-label="Investment connection map between UAE and France"
//                   >
//                     {/* Background for better contrast */}
//                     <rect x="0" y="0" width="400" height="400" fill="#f8fafc" />

//                     {/* UAE Map Region */}
//                     <g className="uae-region">
//                       <image
//                         href={countryImages.uae}
//                         x=""
//                         y="10"
//                         width="380"
//                         height="170"
//                         preserveAspectRatio="xMidYMid meet"
//                         style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
//                       />
//                     </g>

//                     {/* France Map Region */}
//                     <g className="france-region">
//                       <image
//                         href={countryImages.france}
//                         x="30"
//                         y="200"
//                         width="340"
//                         height="190"
//                         preserveAspectRatio="xMidYMid meet"
//                         style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
//                       />
//                     </g>

//                     {/* Render all connections */}
//                     {filteredInvestments.map((entry) => renderConnections(entry))}
//                   </svg>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Selected Entry Detail */}
//             {selectedEntry && (
//               <Card className="mt-4 bg-primary/5 border-primary animate-fadeIn">
//                 <CardContent className="p-4">
//                   <div className="flex items-start justify-between mb-2">
//                     <div className="flex flex-col">
//                       <div className="flex items-center gap-2 mb-2">
//                         <h3 className="text-xl font-bold">{selectedEntry.category}</h3>
//                         <div className="flex">
//                           {getCountryFlagIcons(selectedEntry.countries)}
//                         </div>
//                       </div>
//                       <div className="text-sm font-bold mb-3">
//                         {selectedEntry.companies.join(', ')}
//                       </div>
//                     </div>
//                     <button
//                       onClick={() => setSelectedEntry(null)}
//                       className="text-muted-foreground hover:text-foreground"
//                       aria-label="Close details"
//                     >
//                       ✕
//                     </button>
//                   </div>
//                   <p className="text-sm">{selectedEntry.content}</p>
//                 </CardContent>
//               </Card>
//             )}
//           </div>

//           {/* Investment Entries - Right column on desktop, scrollable list */}
//           <div className="order-2 lg:order-none">
//             <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
//               {filteredInvestments.length > 0 ? (
//                 filteredInvestments.map((entry) => (
//                   <Card 
//                     key={entry.id} 
//                     className={`transition-all duration-300 ${getCardClassName(entry)}`}
//                   >
//                     <CardContent className="p-4">
//                       <div
//                         className="cursor-pointer"
//                         onClick={() => setSelectedEntry(entry === selectedEntry ? null : entry)}
//                         onMouseEnter={() => setHoveredEntry(entry)}
//                         onMouseLeave={() => setHoveredEntry(null)}
//                       >
//                         <div className="flex items-start justify-between mb-2">
//                           <div className="flex flex-col">
//                             {/* Category - large, black, bold */}
//                             <div className="flex items-center gap-2">
//                               <h3 className="text-lg font-bold">{entry.category}</h3>
//                               <div className="flex">
//                                 {getCountryFlagIcons(entry.countries)}
//                               </div>
//                             </div>
                            
//                             {/* Companies - black, bold, smaller */}
//                             <p className="text-sm font-semibold mt-1">
//                               {entry.companies.join(', ')}
//                             </p>
//                           </div>
                          
//                           {/* Logo */}
//                           {/* {entry.logoUrl && (
//                             <div className="w-16 h-12 ml-2 flex-shrink-0">
//                               <img
//                                 src={entry.logoUrl}
//                                 alt={`${entry.companies[0]} logo`}
//                                 className="w-full h-full object-contain object-center"
//                               />
//                             </div>
//                           )} */}

//                           {/* Logo */}
//                           {/* {entry.logoUrl && (
//                             <div className="w-24 h-20 ml-2 flex-shrink-0">
//                               <img
//                                 src={entry.logoUrl}
//                                 alt={`${entry.companies[0]} logo`}
//                                 className="w-full h-full object-contain object-center"
//                               />
//                             </div>
//                           )} */}


//                           {/* Logo */}
//                           {/* {entry.logoUrl && (
//                             <div className="ml-2 flex-shrink-0">
//                               <img
//                                 src={entry.logoUrl}
//                                 alt={`${entry.companies[0]} logo`}
//                                 className="max-h-24 max-w-40"
//                               />
//                             </div>
//                           )} */}

//                           {/* Logo */}
//                           {entry.logoUrl && (
//                             <div className="w-24 h-20 ml-2 flex-shrink-0">
//                               <img
//                                 src={entry.logoUrl}
//                                 alt={`${entry.companies[0]} logo`}
//                                 className="w-full h-full object-contain object-center"
//                               />
//                             </div>
//                           )}



//                         </div>
                        
//                         {/* Content preview */}
//                         <p className="text-sm line-clamp-2 text-muted-foreground">
//                           {entry.content.length > 120
//                             ? `${entry.content.substring(0, 120)}...`
//                             : entry.content}
//                         </p>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))
//               ) : (
//                 <div className="text-center p-8 bg-accent/20 rounded-lg">
//                   <p className="text-muted-foreground">No matches found for the current filters. Try adjusting your selection.</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Summary at the bottom */}
//         <div className="mt-8 p-4 bg-accent/30 rounded-lg">
//           <h3 className="font-semibold mb-2">Summary</h3>
//           <p className="text-sm text-muted-foreground">
//                      The UAE-France bilateral relationship has witnessed significant growth, with non-oil trade increasing by 21.3% in 2024 to reach AED 44 billion compared to AED 36.7 billion in 2023. The UAE hosts approximately 600 French companies employing over 30,000 people, making it the largest concentration of French companies in the Middle East, while the UAE ranks as France's second-largest investor in the GCC. Key collaboration sectors include aerospace, defense, energy, AI, luxury goods, and sustainable development, with major investments like the UAE's planned USD 52 billion in French AI data centers and Mubadala's over USD 3.8 billion across 35+ French investments since 2014. The partnership is formalized through the annual UAE-France High Level Business Council, which focuses on promoting sustainable economic development and strategic investments in areas like AI, gas, chemicals, low-carbon fuels, and clean technologies.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MapConnection























































// // "use client"

// import { useState, useMemo } from "react"
// import { Info, Filter } from "lucide-react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import franceMapImage from '/src/assets/images/france.png'; // Adjust the path as needed


// import logo1 from '/public/lovable-uploads/1.png';  // Mubadala investments
// import logo2 from '/public/lovable-uploads/2.png';  // Mubadala & Bpifrance energy
// import logo3 from '/public/lovable-uploads/3.png';  // ADE & Schneider
// import logo4 from '/public/lovable-uploads/4.png';  // DEWA & SUEZ
// import logo5 from '/public/lovable-uploads/5.png';  // ADNOC & Veolia
// import logo6 from '/public/lovable-uploads/6.png';  // ENEC & EDF
// import logo7 from '/public/lovable-uploads/7.png';  // AD Ports & CMA CGM
// import logo8 from '/public/lovable-uploads/8.png';  // Sorbonne & Mubadala
// import logo9 from '/public/lovable-uploads/9.png';  // Chalhoub & LVMH etc
// import logo10 from '/public/lovable-uploads/10.png'; // Carrefour & Al-Futtaim
// import logo11 from '/public/lovable-uploads/11.png'; // Accor
// import logo12 from '/public/lovable-uploads/12.png'; // Keolis
// import logo13 from '/public/lovable-uploads/13.png'; // Masdar & Hy24
// import logo14 from '/public/lovable-uploads/14.png'; // Engie
// import logo15 from '/public/lovable-uploads/15.png'; // Core42 & DataOne
// import logo16 from '/public/lovable-uploads/16.png'; // Systra & Etihad Rail
// import logo17 from '/public/lovable-uploads/17.png'; // Pasqal & AD Ports
// import logo18 from '/public/lovable-uploads/18.png'; // EPI & Airbus
// import logo19 from '/public/lovable-uploads/19.png'; // EDGE & Thales
// import logo20 from '/public/lovable-uploads/20.png'; // KATIM & Thales
// import logo21 from '/public/lovable-uploads/21.png'; // Safran & Mubadala
// import logo22 from '/public/lovable-uploads/22.png'; // Dassault Aviation
// import logo23 from '/public/lovable-uploads/23.png'; // ADA & Mubadala
// import logo24 from '/public/lovable-uploads/24.png'; // MBRSC & Thales Alenia
// import logo25 from '/public/lovable-uploads/25.png'; // Louvre Abu Dhabi
// import logo26 from '/public/lovable-uploads/26.png'; // Al Tayer Insignia
// import logo27 from '/public/lovable-uploads/27.png'; // Chalhoub Group
// import logo28 from '/public/lovable-uploads/28.png'; // LVMH
// import logo29 from '/public/lovable-uploads/29.png'; // Kering
// import logo30 from '/public/lovable-uploads/30.png'; // Masdar & TotalEnergies
// import logo31 from '/public/lovable-uploads/31.png'; // Masdar & EDF
// import logo32 from '/public/lovable-uploads/32.png'; // ADNOC & EDF

// interface InvestmentEntry {
//   id: string;
//   logo: string;
//   logoUrl?: string;
//   countries: string[];
//   category: string;
//   content: string;
//   companies: string[];
//   coordinates: {
//     uae?: { x: number; y: number };
//     france?: { x: number; y: number };
//     sweden?: { x: number; y: number };
//   };
// }

// const FlagIcon = ({ country }: { country: "uae" | "france" | "sweden" }) => {
//   // Flag icon implementation remains the same
//   if (country === "uae") {
//     return (
//       <svg width="16" height="12" viewBox="0 0 640 480" className="inline-block mr-1" aria-label="UAE flag">
//         <path fill="#00732f" d="M0 0h640v160H0z" />
//         <path fill="#fff" d="M0 160h640v160H0z" />
//         <path d="M0 320h640v160H0z" />
//         <path fill="red" d="M0 0h220v480H0z" />
//       </svg>
//     )
//   }
//   if (country === "france") {
//     return (
//       <svg width="16" height="12" viewBox="0 0 640 480" className="inline-block mr-1" aria-label="France flag">
//         <path fill="#fff" d="M0 0h640v480H0z"/>
//         <path fill="#00267f" d="M0 0h213.3v480H0z"/>
//         <path fill="#f31830" d="M426.7 0H640v480H426.7z"/>
//       </svg>
//     )
//   }
//   return (
//     <svg width="16" height="12" viewBox="0 0 640 480" className="inline-block mr-1" aria-label="Sweden flag">
//       <path fill="#006aa7" d="M0 0h640v480H0z" />
//       <path fill="#fecc00" d="M0 192h640v96H0z" />
//       <path fill="#fecc00" d="M176 0h96v480h-96z" />
//     </svg>
//   )
// };

// // Define coordinates for UAE cities/regions
// const uaeCoordinates = {
//   "Abu Dhabi": { x: 170, y: 100 },
//   "Dubai": { x: 210, y: 70 },
//   "Sharjah": { x: 230, y: 60 },
//   "Ajman": { x: 240, y: 50 },
//   "Ras Al Khaimah": { x: 250, y: 30 },
//   "Fujairah": { x: 260, y: 80 },
//   "Al Ain": { x: 220, y: 120 },
//   "Default": { x: 190, y: 90 } // Default position if no specific location
// };

// // Define coordinates for France cities/regions
// const franceCoordinates = {
//   "Paris": { x: 180, y: 270 },
//   "Lyon": { x: 190, y: 320 },
//   "Marseille": { x: 170, y: 350 },
//   "Toulouse": { x: 130, y: 340 },
//   "Nice": { x: 220, y: 350 },
//   "Bordeaux": { x: 110, y: 310 },
//   "Strasbourg": { x: 240, y: 260 },
//   "Grenoble": { x: 200, y: 330 },
//   "Lille": { x: 170, y: 240 },
//   "Default": { x: 180, y: 300 } // Default position if no specific location
// };

// // Function to get UAE coordinate based on mentioned city or use default position
// const getUAECoordinate = (content) => {
//   const lowerContent = content.toLowerCase();
  
//   if (lowerContent.includes('abu dhabi')) return uaeCoordinates["Abu Dhabi"];
//   if (lowerContent.includes('dubai')) return uaeCoordinates["Dubai"];
//   if (lowerContent.includes('sharjah')) return uaeCoordinates["Sharjah"];
//   if (lowerContent.includes('ajman')) return uaeCoordinates["Ajman"];
//   if (lowerContent.includes('ras al khaimah')) return uaeCoordinates["Ras Al Khaimah"];
//   if (lowerContent.includes('fujairah')) return uaeCoordinates["Fujairah"];
//   if (lowerContent.includes('al ain')) return uaeCoordinates["Al Ain"];
  
//   return uaeCoordinates["Default"];
// };

// // Function to get France coordinate based on mentioned city or use default position
// const getFranceCoordinate = (content) => {
//   const lowerContent = content.toLowerCase();
  
//   if (lowerContent.includes('paris')) return franceCoordinates["Paris"];
//   if (lowerContent.includes('lyon')) return franceCoordinates["Lyon"];
//   if (lowerContent.includes('marseille')) return franceCoordinates["Marseille"];
//   if (lowerContent.includes('toulouse')) return franceCoordinates["Toulouse"];
//   if (lowerContent.includes('nice')) return franceCoordinates["Nice"];
//   if (lowerContent.includes('bordeaux')) return franceCoordinates["Bordeaux"];
//   if (lowerContent.includes('strasbourg')) return franceCoordinates["Strasbourg"];
//   if (lowerContent.includes('grenoble')) return franceCoordinates["Grenoble"];
//   if (lowerContent.includes('lille')) return franceCoordinates["Lille"];
  
//   return franceCoordinates["Default"];
// };







// // Process the raw data into InvestmentEntry format
// const processRawData = () => {
//   const rawData = [
//     {
//       "Countries": "France",
//       "Category": "Investments",
//       "Content": "Mubadala has been active in France since 2014 with over 35 investments worth approximately USD3.8 Billion. For example: Omni-Pac group, a pan European designer and producer of moulded fiber packing products. SGD Pharma, a leading global manufacturer of glass packing for the pharmaceutical industry. Matera, a residential management company founded in 2017. ADISTA, a leading alternative B2B ICT operator in France, providing telecom and IT services including system integrations, IT hosting/outsourcing and project engineering solutions to SMEs. Furthermore, in 2021, Mubadala sovereign wealth fund pledged eight billion euros in investments in French businesses, while the licence of the UAE capital's branch of the Louvre art gallery was extended for 10 years to 2047.",
//       "Companies": "Mubadala, Omni-Pac, Matera, SGD Pharma, Adista"
//     },
//     {
//       "Countries": "UAE, France",
//       "Category": "Energy",
//       "Content": "Mubadala partnered with Bpifrance are jointly investing in global technology investment firm Partech's latest Africa-focused venture fund, Partech Africa II.",
//       "Companies": "Mubadala, Bpifrance"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Energy",
//       "Content": "Arab Development Establishment (ADE) and Schneider Electric today officially launched their joint venture manufacturing facility in Abu Dhabi, TAQANA Energy Solutions.",
//       "Companies": "Arab Development Establishment, Schneider Electric"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Energy",
//       "Content": "DEWA strengthens ties with SUEZ.",
//       "Companies": "DEWA, Suez"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Renewable Energy",
//       "Content": "MOU between ADNOC and Veolia focused on optimising water consumption including water recycling, reduce overall water usage, minimising the carbon footprint.",
//       "Companies": "ADNOC, Veolia"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Energy and Infrastructure",
//       "Content": "The UAE has shown interest in European Nuclear Energy investments. ENEC owned by ADQ has reportedly been holding talks to invest in the UK's nuclear energy infrastructure (Sizewell C large-scale nuclear project) being built by the French energy giant EDF.",
//       "Companies": "ENEC, EDF renewables"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Logistics",
//       "Content": "AD Ports Group has recently entered a 35-year concession agreement with French shipping and logistics giant, CMA CGM Group. The joint venture will secure significant investment from both parties, totalling around AED 570 million (USD 154 million), and prepares the way for a new container terminal to be located at Khalifa Port, Abu Dhabi, UAE.",
//       "Companies": "AD Ports Group, CMA CGM"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Education",
//       "Content": "The Sorbonne University Abu Dhabi was developed under a Public Private Partnership.",
//       "Companies": "Sorbonne University Abu Dhabi, Mubadala"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Sustainability",
//       "Content": "Chalhoub Group, LVMH, EMAAR Malls Management (L.L.C), Majid Al Futtaim Properties LLC, and Aldar Properties PJSC join forces to create 'Unity For Change - أفق' (pronounced UFQ in Arabic, meaning horizon and symbolizing the future), a pioneering partnership among prominent retailers and real estate developers in the Emirates. This alliance is dedicated to defining and achieving sustainability targets.",
//       "Companies": "Chalhoub Group, LVMH, Emaar Malls, Al-Futtaim, Aldar"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Retail",
//       "Content": "Carrefour was introduced to the region in 1995 by UAE company Majid Al Futtaim. Majid Al Futtaim owns the exclusive rights to operate Carrefour under Majid Al Futtaim's distinct name and 'M' logo.",
//       "Companies": "Carrefour, Al-Futtaim"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Tourism and Hospitality",
//       "Content": "French hospitality giant Accor's non-luxury brands - Pullman, Ibis, and Novotel —are seeing strong growth in the region.",
//       "Companies": "Accor"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Transportation",
//       "Content": "KEOLIS signed a contract for Dubai Metro and Tram network.",
//       "Companies": "Keolis"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Renewable energy & green projects",
//       "Content": "Masdar signed an agreement with Hy24 Clean Hydrogen Infrastructure Fund to enable large-scale green hydrogen production projects across Europe, the Americas, Asia Pacific and the Middle East and North Africa. The agreement gave Masdar access to a pipeline of up to €2 billion in co-investment and co-development opportunities.",
//       "Companies": "Masdar, Hy24"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Renewable energy & green projects",
//       "Content": "French utility company ENGIE is looking to further deepen its roots in the UAE market, with $11.9 billion already invested in different projects in the Gulf country. For example: including funding the development of Al Ajban Solar Photovoltaic plant, which will produce 1.5 gigawatts of power. The firm will be responsible for the development and operation of the Mirfa 2 Reverse Osmosis Independent Water Project worth $800 million.",
//       "Companies": "Engie"
//     },
//     {
//       "Countries": "France",
//       "Category": "AI and Technology",
//       "Content": "France is open to Emirati investments in Nuclear and AI industries. For example: Core 42, G42's digital infrastructure company partners with DataOne, First gigascale AI hosting infrastructure data center in Grenoble, France.",
//       "Companies": "Core42, DataOne, G42"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Technology and AI",
//       "Content": "France's Systra awarded consultancy mandate for USD 2.5 Billion UAE-Oman railway project.",
//       "Companies": "Systra, Etihad Rail"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Technology and AI",
//       "Content": "AD Ports signed a partnership with the French company Pasqal to develop AI-driven solutions. This collaboration will focus on integrating artificial intelligence models, quantitative analysis, and advanced algorithm development.",
//       "Companies": "Pasqal, AD Ports"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Aerospace, Defence, and Security",
//       "Content": "EDGE entity EPI, has signed a serial production contract of C295 Cargo Compartment Removable Tanks with Airbus Defence and Space, a division of Airbus Group.",
//       "Companies": "EPI, Airbus Group"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Aerospace, Defence, and Security",
//       "Content": "EDGE Group and Thales signed an MOU to equip its unmanned and remotely piloted combat and reconnaissance aircraft (UAVs) with advanced technologies.",
//       "Companies": "EDGE, Thales"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Aerospace, Defence, and Security",
//       "Content": "KATIM and Thales will start discussing the co-development of Software Defined Radio technologies in the United Arab Emirates (UAE).",
//       "Companies": "KATIM, Thales"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Aerospace, Defence, and Security",
//       "Content": "Mubadala and Safran strengthen strategic partnership to drive Aerospace Growth in the UAE.",
//       "Companies": "Safran, Mubadala"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Aerospace, Defence, and Security",
//       "Content": "The UAE signed a record 14-billion-euro contract for 80 Rafale warplanes which will be produced by Dassault Aviation.",
//       "Companies": "Dassault Aviation"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Aerospace, Defence, and Security",
//       "Content": "Safran Aircraft Engines and Abu Dhabi Aviation Group (ADA) have signed a strategic Memorandum of Understanding (MoU) to enhance collaboration in military aviation maintenance, repair, and overhaul (MRO) services.",
//       "Companies": "ADA, Mubadala"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Aerospace",
//       "Content": "Mohammed Bin Rashid Space Centre (MBRSC) and Thales Alenia Space to develop the Pressure Equalisation Unit of the Gateway lunar space station.",
//       "Companies": "MBRSC, Thales Alenia Space"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Culture",
//       "Content": "UAE's Louvre Abu Dhabi contract extended to 2047.",
//       "Companies": "Louvre Abu Dhabi"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Luxury Retail",
//       "Content": "Al Tayer Group partnership with several French brands.",
//       "Companies": "Al Tayer Insignia"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Luxury Retail",
//       "Content": "Chalhoub Group partnership with several French brands.",
//       "Companies": "Chalhoub Group"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Luxury Retail",
//       "Content": "LVMH is the world's leading luxury products group",
//       "Companies": "LVMH"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Luxury Retail",
//       "Content": "A global Luxury group, Kering manages the development of a series of renowned Houses in Fashion, Leather Goods and Jewelry.",
//       "Companies": "Kering"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Renewable energy & green projects",
//       "Content": "Masdar, TotalEnergies and 2PointZero partnership to support clean energy solutions in emerging markets and developing economies across Africa and Asia.",
//       "Companies": "Masdar, TotalEnergies, 2PointZero"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Renewable energy & green projects",
//       "Content": "Masdar and EDF signed an agreement to establish a JV energy services company (ESCO).",
//       "Companies": "Masdar, EDF renewables"
//     },
//     {
//       "Countries": "UAE",
//       "Category": "Renewable energy & green projects",
//       "Content": "Masdar and EDF Group joint venture Emerge signed an MOU with ADNOC Sour Gas to explore leveraging solar energy at the Shah Gas Plant.",
//       "Companies": "ADNOC, EDF renewables"
//     }
//   ];























//   return rawData.map((item, index) => {
//     // Parse countries
//     const countries = item.Countries.split(', ').map(c => c.trim());
    
//     // Map index to corresponding logo
//     const logoMap = [
//       logo1, logo2, logo3, /* ... other logos ... */
//     ];
    
//     const logoUrl = index < logoMap.length ? logoMap[index] : null;
    
//     // Parse companies
//     const companies = item.Companies.split(', ').map(c => c.trim());
    
//     // Create coordinates using city detection instead of random values
//     const coordinates: any = {};
    
//     if (countries.includes('UAE') || countries.some(c => c.toLowerCase() === 'uae')) {
//       coordinates.uae = getUAECoordinate(item.Content);
//     }
    
//     if (countries.includes('France') || countries.some(c => c.toLowerCase() === 'france')) {
//       coordinates.france = getFranceCoordinate(item.Content);
//     }
    
//     return {
//       id: `entry-${index}`,
//       logo: companies[0] || "Company",
//       logoUrl: logoUrl,
//       countries: countries,
//       category: item.Category,
//       content: item.Content,
//       companies: companies,
//       coordinates
//     };
//   });
// };

// const investments: InvestmentEntry[] = processRawData();

// // Extract unique categories and countries for filters
// const uniqueCategories = Array.from(new Set(investments.map(item => item.category)));
// const uniqueCountries = Array.from(new Set(investments.flatMap(item => item.countries)));

// const countryImages = {
//   uae: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AE-5TuD3IsqSNBAgpIaSTRzgmp0706AfL.png",
//   france: franceMapImage,
//   sweden: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SE-DM6vGWxobocAEyJ4YxiYRet775n6Yv.png"
// };

// const MapConnection = () => {
//   const [selectedEntry, setSelectedEntry] = useState<InvestmentEntry | null>(null);
//   const [hoveredEntry, setHoveredEntry] = useState<InvestmentEntry | null>(null);
//   const [activeCountry, setActiveCountry] = useState<"all" | string>("all");
//   const [activeCategory, setActiveCategory] = useState<"all" | string>("all");

//   // Filtered investments based on active filters
//   const filteredInvestments = useMemo(() => {
//     return investments.filter((entry) => {
//       const matchesCountry = activeCountry === "all" || entry.countries.includes(activeCountry);
//       const matchesCategory = activeCategory === "all" || entry.category === activeCategory;
//       return matchesCountry && matchesCategory;
//     });
//   }, [activeCountry, activeCategory]);

//   // Function to add a small random offset to avoid perfect overlapping of dots
//   const addJitter = (coordinate) => {
//     const jitterAmount = 5; // Maximum amount of jitter in pixels
//     return {
//       x: coordinate.x + (Math.random() * jitterAmount * 2 - jitterAmount),
//       y: coordinate.y + (Math.random() * jitterAmount * 2 - jitterAmount)
//     };
//   };

//   const renderConnections = (entry: InvestmentEntry) => {
//     if (!entry.coordinates) return null;

//     const isHighlighted = hoveredEntry?.id === entry.id || selectedEntry?.id === entry.id;
//     const interactionProps = {
//       onMouseEnter: () => setHoveredEntry(entry),
//       onMouseLeave: () => setHoveredEntry(null),
//       onClick: () => setSelectedEntry(entry === selectedEntry ? null : entry),
//       style: { cursor: "pointer" },
//     };

//     // Create a line between UAE and France if both exist
//     const connections = [];
    
//     // Optional: Uncomment to enable connection lines
//     // if (entry.coordinates.uae && entry.coordinates.france) {
//     //   connections.push(
//     //     <path
//     //       key={`path-${entry.id}-uae-france`}
//     //       d={`M ${entry.coordinates.uae.x} ${entry.coordinates.uae.y} 
//     //           C ${entry.coordinates.uae.x} ${(entry.coordinates.uae.y + entry.coordinates.france.y) / 2},
//     //             ${entry.coordinates.france.x} ${(entry.coordinates.uae.y + entry.coordinates.france.y) / 2},
//     //             ${entry.coordinates.france.x} ${entry.coordinates.france.y}`}
//     //       stroke={isHighlighted ? "#f97316" : "#4169E1"}
//     //       strokeDasharray={isHighlighted ? "0" : "3 3"}
//     //       strokeWidth={isHighlighted ? "3" : "1.5"}
//     //       fill="none"
//     //       className="transition-all duration-300"
//     //       {...interactionProps}
//     //     />
//     //   );
//     // }

//     // Create points for each country
//     const points = [];
    
//     if (entry.coordinates.uae) {
//       // Add slight jitter to avoid perfect overlaps
//       const jitteredCoord = addJitter(entry.coordinates.uae);
      
//       points.push(
//         <g key={`uae-point-${entry.id}`} {...interactionProps}>
//           <circle
//             cx={jitteredCoord.x}
//             cy={jitteredCoord.y}
//             r={isHighlighted ? "8" : "5"}
//             fill={isHighlighted ? "#f97316" : "#94a3b8"}
//             className="transition-all duration-300"
//           />
//           {isHighlighted && (
//             <text
//               x={jitteredCoord.x + 12}
//               y={jitteredCoord.y}
//               fontSize="10"
//               fill="#f97316"
//               fontWeight="bold"
//             >
//               {entry.category}
//             </text>
//           )}
//         </g>
//       );
//     }
    
//     if (entry.coordinates.france) {
//       // Add slight jitter to avoid perfect overlaps
//       const jitteredCoord = addJitter(entry.coordinates.france);
      
//       points.push(
//         <g key={`france-point-${entry.id}`} {...interactionProps}>
//           <circle
//             cx={jitteredCoord.x}
//             cy={jitteredCoord.y}
//             r={isHighlighted ? "8" : "5"}
//             fill={isHighlighted ? "#f97316" : "#94a3b8"}
//             className="transition-all duration-300"
//           />
//           {isHighlighted && (
//             <text
//               x={jitteredCoord.x + 12}
//               y={jitteredCoord.y}
//               fontSize="10"
//               fill="#f97316"
//               fontWeight="bold"
//             >
//               {entry.category}
//             </text>
//           )}
//         </g>
//       );
//     }

//     return (
//       <g key={`connection-${entry.id}`}>
//         {connections}
//         {points}
//       </g>
//     );
//   };

//   // Rest of the component remains the same...
//   const getCardClassName = (entry: InvestmentEntry) => {
//     const isActive = hoveredEntry?.id === entry.id || selectedEntry?.id === entry.id;
//     return isActive ? "border-primary bg-primary/5 shadow-md" : "border-border hover:bg-accent/50";
//   };

//   const getCountryFlagIcons = (countries: string[]) => {
//     return countries.map((country, index) => {
//       const lowerCountry = country.toLowerCase();
//       if (lowerCountry === "uae") {
//         return <FlagIcon key={`flag-${index}`} country="uae" />;
//       } else if (lowerCountry === "france") {
//         return <FlagIcon key={`flag-${index}`} country="france" />;
//       } else if (lowerCountry === "sweden") {
//         return <FlagIcon key={`flag-${index}`} country="sweden" />;
//       }
//       return null;
//     });
//   };

//   return (
//     <div className="max-w-[1200px] mx-auto p-4">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">UAE-France Investment Connections</h1>
//         <p className="text-muted-foreground max-w-2xl mx-auto">
//           Visualizing cross-border investments and business relationships between the UAE and France
//         </p>
//       </div>

//       {/* Filter Controls */}
//       <div className="mb-8 bg-accent/20 p-4 rounded-lg shadow">
//         <div className="flex flex-col md:flex-row gap-6">
//           <div className="flex-1">
//             <h3 className="text-lg font-bold mb-3 flex items-center">
//               <Filter size={18} className="mr-2" /> Filter by Country
//             </h3>
//             <div className="flex flex-wrap gap-2">
//               <Badge
//                 variant={activeCountry === "all" ? "outline" : "outline"}
//                 className={`cursor-pointer text-sm px-4 py-1.5 ${activeCountry === "all" 
//                   ? 'bg-gray-700 text-white font-semibold border-gray-600' 
//                   : 'bg-gray-100 hover:bg-gray-200'}`}
//                 onClick={() => setActiveCountry("all")}
//               >
//                 All Countries
//               </Badge>
//               {uniqueCountries.map((country) => {
//                 let bgColor = "bg-gray-100 hover:bg-gray-200";
//                 let selectedBgColor = "bg-gray-700 text-white font-semibold";
                
//                 if (country.toLowerCase() === "uae") {
//                   bgColor = "bg-green-50 hover:bg-green-100 border-green-200";
//                   selectedBgColor = "bg-green-600 text-white font-semibold border-green-700";
//                 } else if (country.toLowerCase() === "france") {
//                   bgColor = "bg-blue-50 hover:bg-blue-100 border-blue-200";
//                   selectedBgColor = "bg-blue-600 text-white font-semibold border-blue-700";
//                 }
                
//                 return (
//                   <Badge
//                     key={`country-filter-${country}`}
//                     variant="outline"
//                     className={`cursor-pointer text-sm px-4 py-1.5 ${activeCountry === country 
//                       ? selectedBgColor 
//                       : bgColor}`}
//                     onClick={() => setActiveCountry(country)}
//                   >
//                     {getCountryFlagIcons([country])} {country}
//                   </Badge>
//                 );
//               })}
//             </div>
//           </div>
          
//           <div className="flex-1">
//             <h3 className="text-lg font-bold mb-3 flex items-center">
//               <Filter size={18} className="mr-2" /> Filter by Category
//             </h3>
//             <div className="flex flex-wrap gap-2">
//               <Badge
//                 variant="outline"
//                 className={`cursor-pointer text-sm px-4 py-1.5 ${activeCategory === "all" 
//                   ? 'bg-gray-700 text-white font-semibold border-gray-600' 
//                   : 'bg-gray-100 hover:bg-gray-200'}`}
//                 onClick={() => setActiveCategory("all")}
//               >
//                 All Categories
//               </Badge>
//               {uniqueCategories.map((category, index) => {
//                 // Creating a light color palette for categories with corresponding dark versions
//                 const colorPairs = [
//                   { light: "bg-amber-50 hover:bg-amber-100 border-amber-200", dark: "bg-amber-600 text-white font-semibold border-amber-700" },
//                   { light: "bg-pink-50 hover:bg-pink-100 border-pink-200", dark: "bg-pink-600 text-white font-semibold border-pink-700" },
//                   { light: "bg-purple-50 hover:bg-purple-100 border-purple-200", dark: "bg-purple-600 text-white font-semibold border-purple-700" },
//                   { light: "bg-indigo-50 hover:bg-indigo-100 border-indigo-200", dark: "bg-indigo-600 text-white font-semibold border-indigo-700" },
//                   { light: "bg-cyan-50 hover:bg-cyan-100 border-cyan-200", dark: "bg-cyan-600 text-white font-semibold border-cyan-700" },
//                   { light: "bg-teal-50 hover:bg-teal-100 border-teal-200", dark: "bg-teal-600 text-white font-semibold border-teal-700" },
//                   { light: "bg-emerald-50 hover:bg-emerald-100 border-emerald-200", dark: "bg-emerald-600 text-white font-semibold border-emerald-700" },
//                   { light: "bg-lime-50 hover:bg-lime-100 border-lime-200", dark: "bg-lime-600 text-white font-semibold border-lime-700" },
//                   { light: "bg-orange-50 hover:bg-orange-100 border-orange-200", dark: "bg-orange-600 text-white font-semibold border-orange-700" },
//                   { light: "bg-red-50 hover:bg-red-100 border-red-200", dark: "bg-red-600 text-white font-semibold border-red-700" }
//                 ];
                
//                 const colorPair = colorPairs[index % colorPairs.length];
                
//                 return (
//                   <Badge
//                     key={`category-filter-${category}`}
//                     variant="outline"
//                     className={`cursor-pointer text-sm px-4 py-1.5 ${activeCategory === category 
//                       ? colorPair.dark 
//                       : colorPair.light}`}
//                     onClick={() => setActiveCategory(category)}
//                   >
//                     {category}
//                   </Badge>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-card rounded-xl shadow-sm border p-4 md:p-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Map Visualization - Full width on mobile, left column on desktop */}
//           <div className="order-1 lg:order-none">
//             <Card className="h-[500px] overflow-hidden">
//               <CardContent className="p-0 h-full">
//                 <div className="relative h-full bg-accent/30 rounded-lg overflow-hidden">
//                   <svg
//                     className="w-full h-full"
//                     viewBox="0 0 400 400"
//                     aria-label="Investment connection map between UAE and France"
//                   >
//                     {/* Background for better contrast */}
//                     <rect x="0" y="0" width="400" height="400" fill="#f8fafc" />

//                     {/* UAE Map Region */}
//                     <g className="uae-region">
//                       <image
//                         href={countryImages.uae}
//                         x=""
//                         y="10"
//                         width="380"
//                         height="170"
//                         preserveAspectRatio="xMidYMid meet"
//                         style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
//                       />
                      
//                       {/* Optional: Add city markers for UAE */}
//                       <circle cx={uaeCoordinates["Abu Dhabi"].x} cy={uaeCoordinates["Abu Dhabi"].y} r="2" fill="#00732f" />
//                       <circle cx={uaeCoordinates["Dubai"].x} cy={uaeCoordinates["Dubai"].y} r="2" fill="#00732f" />
//                       <circle cx={uaeCoordinates["Sharjah"].x} cy={uaeCoordinates["Sharjah"].y} r="2" fill="#00732f" />
//                     </g>

//                     {/* France Map Region */}
//                     <g className="france-region">
//                       <image
//                         href={countryImages.france}
//                         x="30"
//                         y="200"
//                         width="340"
//                         height="190"
//                         preserveAspectRatio="xMidYMid meet"
//                         style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
//                       />
                      
//                       {/* Optional: Add city markers for France */}
//                       <circle cx={franceCoordinates["Paris"].x} cy={franceCoordinates["Paris"].y} r="2" fill="#00267f" />
//                       <circle cx={franceCoordinates["Lyon"].x} cy={franceCoordinates["Lyon"].y} r="2" fill="#00267f" />
//                       <circle cx={franceCoordinates["Marseille"].x} cy={franceCoordinates["Marseille"].y} r="2" fill="#00267f" />
//                     </g>

//                     {/* Render all connections */}
//                     {filteredInvestments.map((entry) => renderConnections(entry))}
//                   </svg>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Selected Entry Detail */}
//             {selectedEntry && (
//               <Card className="mt-4 bg-primary/5 border-primary animate-fadeIn">
//                 <CardContent className="p-4">
//                   <div className="flex items-start justify-between mb-2">
//                     <div className="flex flex-col">
//                       <div className="flex items-center gap-2 mb-2">
//                         <h3 className="text-xl font-bold">{selectedEntry.category}</h3>
//                         <div className="flex">
//                           {getCountryFlagIcons(selectedEntry.countries)}
//                         </div>
//                       </div>
//                       <div className="text-sm font-bold mb-3">
//                         {selectedEntry.companies.join(', ')}
//                       </div>
//                     </div>
//                     <button
//                       onClick={() => setSelectedEntry(null)}
//                       className="text-muted-foreground hover:text-foreground"
//                       aria-label="Close details"
//                     >
//                       ✕
//                     </button>
//                   </div>
//                   <p className="text-sm">{selectedEntry.content}</p>
//                 </CardContent>
//               </Card>
//             )}
//           </div>

//           {/* Investment Entries - Right column on desktop, scrollable list */}
//           <div className="order-2 lg:order-none">
//             <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
//               {filteredInvestments.length > 0 ? (
//                 filteredInvestments.map((entry) => (
//                   <Card 
//                     key={entry.id} 
//                     className={`transition-all duration-300 ${getCardClassName(entry)}`}
//                   >
//                     <CardContent className="p-4">
//                       <div
//                         className="cursor-pointer"
//                         onClick={() => setSelectedEntry(entry === selectedEntry ? null : entry)}
//                         onMouseEnter={() => setHoveredEntry(entry)}
//                         onMouseLeave={() => setHoveredEntry(null)}
//                       >
//                         <div className="flex items-start justify-between mb-2">
//                           <div className="flex flex-col">
//                             {/* Category - large, black, bold */}
//                             <div className="flex items-center gap-2">
//                               <h3 className="text-lg font-bold">{entry.category}</h3>
//                               <div className="flex">
//                                 {getCountryFlagIcons(entry.countries)}
//                               </div>
//                             </div>
                            
//                             {/* Companies - black, bold, smaller */}
//                             <p className="text-sm font-semibold mt-1">
//                               {entry.companies.join(', ')}
//                             </p>
//                           </div>
                          
//                           {/* Logo */}
//                           {entry.logoUrl && (
//                             <div className="w-24 h-20 ml-2 flex-shrink-0">
//                               <img
//                                 src={entry.logoUrl}
//                                 alt={`${entry.companies[0]} logo`}
//                                 className="w-full h-full object-contain object-center"
//                               />
//                             </div>
//                           )}
//                         </div>
                        
//                         {/* Content preview */}
//                         <p className="text-sm line-clamp-2 text-muted-foreground">
//                           {entry.content.length > 120
//                             ? `${entry.content.substring(0, 120)}...`
//                             : entry.content}
//                         </p>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))
//               ) : (
//                 <div className="text-center p-8 bg-accent/20 rounded-lg">
//                   <p className="text-muted-foreground">No matches found for the current filters. Try adjusting your selection.</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Summary at the bottom */}
//         <div className="mt-8 p-4 bg-accent/30 rounded-lg">
//           <h3 className="font-semibold mb-2">Summary</h3>
//           <p className="text-sm text-muted-foreground">
//             The UAE-France bilateral relationship has witnessed significant growth, with non-oil trade increasing by 21.3% in 2024 to reach AED 44 billion compared to AED 36.7 billion in 2023. The UAE hosts approximately 600 French companies employing over 30,000 people, making it the largest concentration of French companies in the Middle East, while the UAE ranks as France's second-largest investor in the GCC. Key collaboration sectors include aerospace, defense, energy, AI, luxury goods, and sustainable development, with major investments like the UAE's planned USD 52 billion in French AI data centers and Mubadala's over USD 3.8 billion across 35+ French investments since 2014. The partnership is formalized through the annual UAE-France High Level Business Council, which focuses on promoting sustainable economic development and strategic investments in areas like AI, gas, chemicals, low-carbon fuels, and clean technologies.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MapConnection;



























// "use client"

import { useState, useMemo } from "react"
import { Info, Filter } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import franceMapImage from '/src/assets/images/france.png'; // Adjust the path as needed

import logo1 from '/public/lovable-uploads/1.png';  // Mubadala investments
import logo2 from '/public/lovable-uploads/2.png';  // Mubadala & Bpifrance energy
import logo3 from '/public/lovable-uploads/3.png';  // ADE & Schneider
import logo4 from '/public/lovable-uploads/4.png';  // DEWA & SUEZ
import logo5 from '/public/lovable-uploads/5.png';  // ADNOC & Veolia
import logo6 from '/public/lovable-uploads/6.png';  // ENEC & EDF
import logo7 from '/public/lovable-uploads/7.png';  // AD Ports & CMA CGM
import logo8 from '/public/lovable-uploads/8.png';  // Sorbonne & Mubadala
import logo9 from '/public/lovable-uploads/9.png';  // Chalhoub & LVMH etc
import logo10 from '/public/lovable-uploads/10.png'; // Carrefour & Al-Futtaim
import logo11 from '/public/lovable-uploads/11.png'; // Accor
import logo12 from '/public/lovable-uploads/12.png'; // Keolis
import logo13 from '/public/lovable-uploads/13.png'; // Masdar & Hy24
import logo14 from '/public/lovable-uploads/14.png'; // Engie
import logo15 from '/public/lovable-uploads/15.png'; // Core42 & DataOne
import logo16 from '/public/lovable-uploads/16.png'; // Systra & Etihad Rail
import logo17 from '/public/lovable-uploads/17.png'; // Pasqal & AD Ports
import logo18 from '/public/lovable-uploads/18.png'; // EPI & Airbus
import logo19 from '/public/lovable-uploads/19.png'; // EDGE & Thales
import logo20 from '/public/lovable-uploads/20.png'; // KATIM & Thales
import logo21 from '/public/lovable-uploads/21.png'; // Safran & Mubadala
import logo22 from '/public/lovable-uploads/22.png'; // Dassault Aviation
import logo23 from '/public/lovable-uploads/23.png'; // ADA & Mubadala
import logo24 from '/public/lovable-uploads/24.png'; // MBRSC & Thales Alenia
import logo25 from '/public/lovable-uploads/25.png'; // Louvre Abu Dhabi
import logo26 from '/public/lovable-uploads/26.png'; // Al Tayer Insignia
import logo27 from '/public/lovable-uploads/27.png'; // Chalhoub Group
import logo28 from '/public/lovable-uploads/28.png'; // LVMH
import logo29 from '/public/lovable-uploads/29.png'; // Kering
import logo30 from '/public/lovable-uploads/30.png'; // Masdar & TotalEnergies
import logo31 from '/public/lovable-uploads/31.png'; // Masdar & EDF
import logo32 from '/public/lovable-uploads/32.png'; // ADNOC & EDF


interface InvestmentEntry {
  id: string;
  logo: string;
  logoUrl?: string;
  countries: string[];
  category: string;
  content: string;
  companies: string[];
  coordinates: {
    uae?: { x: number; y: number };
    france?: { x: number; y: number };
    sweden?: { x: number; y: number };
  };
}

const FlagIcon = ({ country }: { country: "uae" | "france" | "sweden" }) => {
  // Flag icon implementation remains the same
  if (country === "uae") {
    return (
      <svg width="16" height="12" viewBox="0 0 640 480" className="inline-block mr-1" aria-label="UAE flag">
        <path fill="#00732f" d="M0 0h640v160H0z" />
        <path fill="#fff" d="M0 160h640v160H0z" />
        <path d="M0 320h640v160H0z" />
        <path fill="red" d="M0 0h220v480H0z" />
      </svg>
    )
  }
  if (country === "france") {
    return (
      <svg width="16" height="12" viewBox="0 0 640 480" className="inline-block mr-1" aria-label="France flag">
        <path fill="#fff" d="M0 0h640v480H0z"/>
        <path fill="#00267f" d="M0 0h213.3v480H0z"/>
        <path fill="#f31830" d="M426.7 0H640v480H426.7z"/>
      </svg>
    )
  }
  return (
    <svg width="16" height="12" viewBox="0 0 640 480" className="inline-block mr-1" aria-label="Sweden flag">
      <path fill="#006aa7" d="M0 0h640v480H0z" />
      <path fill="#fecc00" d="M0 192h640v96H0z" />
      <path fill="#fecc00" d="M176 0h96v480h-96z" />
    </svg>
  )
};

// Define coordinates for UAE cities/regions
const uaeCoordinates = {
  "Abu Dhabi": { x: 170, y: 100 },
  "Dubai": { x: 210, y: 70 },
  "Sharjah": { x: 230, y: 60 },
  "Ajman": { x: 240, y: 50 },
  "Ras Al Khaimah": { x: 250, y: 30 },
  "Fujairah": { x: 260, y: 80 },
  "Al Ain": { x: 220, y: 120 },
  "Default": { x: 190, y: 90 } // Default position if no specific location
};

// Define coordinates for France cities/regions
const franceCoordinates = {
  "Paris": { x: 180, y: 270 },
  "Lyon": { x: 190, y: 320 },
  "Marseille": { x: 170, y: 350 },
  "Toulouse": { x: 130, y: 340 },
  "Nice": { x: 220, y: 350 },
  "Bordeaux": { x: 110, y: 310 },
  "Strasbourg": { x: 240, y: 260 },
  "Grenoble": { x: 200, y: 330 },
  "Lille": { x: 170, y: 240 },
  "Default": { x: 180, y: 300 } // Default position if no specific location
};

// Function to get UAE coordinate based on mentioned city or use default position
const getUAECoordinate = (content) => {
  const lowerContent = content.toLowerCase();
  
  if (lowerContent.includes('abu dhabi')) return uaeCoordinates["Abu Dhabi"];
  if (lowerContent.includes('dubai')) return uaeCoordinates["Dubai"];
  if (lowerContent.includes('sharjah')) return uaeCoordinates["Sharjah"];
  if (lowerContent.includes('ajman')) return uaeCoordinates["Ajman"];
  if (lowerContent.includes('ras al khaimah')) return uaeCoordinates["Ras Al Khaimah"];
  if (lowerContent.includes('fujairah')) return uaeCoordinates["Fujairah"];
  if (lowerContent.includes('al ain')) return uaeCoordinates["Al Ain"];
  
  return uaeCoordinates["Default"];
};

// Function to get France coordinate based on mentioned city or use default position
const getFranceCoordinate = (content) => {
  const lowerContent = content.toLowerCase();
  
  if (lowerContent.includes('paris')) return franceCoordinates["Paris"];
  if (lowerContent.includes('lyon')) return franceCoordinates["Lyon"];
  if (lowerContent.includes('marseille')) return franceCoordinates["Marseille"];
  if (lowerContent.includes('toulouse')) return franceCoordinates["Toulouse"];
  if (lowerContent.includes('nice')) return franceCoordinates["Nice"];
  if (lowerContent.includes('bordeaux')) return franceCoordinates["Bordeaux"];
  if (lowerContent.includes('strasbourg')) return franceCoordinates["Strasbourg"];
  if (lowerContent.includes('grenoble')) return franceCoordinates["Grenoble"];
  if (lowerContent.includes('lille')) return franceCoordinates["Lille"];
  
  return franceCoordinates["Default"];
};





// Process the raw data into InvestmentEntry format
const processRawData = () => {
  const rawData = [
    {
      "Countries": "France",
      "Category": "Investments",
      "Content": "Mubadala has been active in France since 2014 with over 35 investments worth approximately USD3.8 Billion. For example: Omni-Pac group, a pan European designer and producer of moulded fiber packing products. SGD Pharma, a leading global manufacturer of glass packing for the pharmaceutical industry. Matera, a residential management company founded in 2017. ADISTA, a leading alternative B2B ICT operator in France, providing telecom and IT services including system integrations, IT hosting/outsourcing and project engineering solutions to SMEs. Furthermore, in 2021, Mubadala sovereign wealth fund pledged eight billion euros in investments in French businesses, while the licence of the UAE capital's branch of the Louvre art gallery was extended for 10 years to 2047.",
      "Companies": "Mubadala, Omni-Pac, Matera, SGD Pharma, Adista"
    },
    {
      "Countries": "UAE, France",
      "Category": "Energy",
      "Content": "Mubadala partnered with Bpifrance are jointly investing in global technology investment firm Partech's latest Africa-focused venture fund, Partech Africa II.",
      "Companies": "Mubadala, Bpifrance"
    },
    {
      "Countries": "UAE",
      "Category": "Energy",
      "Content": "Arab Development Establishment (ADE) and Schneider Electric today officially launched their joint venture manufacturing facility in Abu Dhabi, TAQANA Energy Solutions.",
      "Companies": "Arab Development Establishment, Schneider Electric"
    },
    {
      "Countries": "UAE",
      "Category": "Energy",
      "Content": "DEWA strengthens ties with SUEZ.",
      "Companies": "DEWA, Suez"
    },
    {
      "Countries": "UAE",
      "Category": "Renewable Energy",
      "Content": "MOU between ADNOC and Veolia focused on optimising water consumption including water recycling, reduce overall water usage, minimising the carbon footprint.",
      "Companies": "ADNOC, Veolia"
    },
    {
      "Countries": "UAE",
      "Category": "Energy and Infrastructure",
      "Content": "The UAE has shown interest in European Nuclear Energy investments. ENEC owned by ADQ has reportedly been holding talks to invest in the UK's nuclear energy infrastructure (Sizewell C large-scale nuclear project) being built by the French energy giant EDF.",
      "Companies": "ENEC, EDF renewables"
    },
    {
      "Countries": "UAE",
      "Category": "Logistics",
      "Content": "AD Ports Group has recently entered a 35-year concession agreement with French shipping and logistics giant, CMA CGM Group. The joint venture will secure significant investment from both parties, totalling around AED 570 million (USD 154 million), and prepares the way for a new container terminal to be located at Khalifa Port, Abu Dhabi, UAE.",
      "Companies": "AD Ports Group, CMA CGM"
    },
    {
      "Countries": "UAE",
      "Category": "Education",
      "Content": "The Sorbonne University Abu Dhabi was developed under a Public Private Partnership.",
      "Companies": "Sorbonne University Abu Dhabi, Mubadala"
    },
    {
      "Countries": "UAE",
      "Category": "Sustainability",
      "Content": "Chalhoub Group, LVMH, EMAAR Malls Management (L.L.C), Majid Al Futtaim Properties LLC, and Aldar Properties PJSC join forces to create 'Unity For Change - أفق' (pronounced UFQ in Arabic, meaning horizon and symbolizing the future), a pioneering partnership among prominent retailers and real estate developers in the Emirates. This alliance is dedicated to defining and achieving sustainability targets.",
      "Companies": "Chalhoub Group, LVMH, Emaar Malls, Al-Futtaim, Aldar"
    },
    {
      "Countries": "UAE",
      "Category": "Retail",
      "Content": "Carrefour was introduced to the region in 1995 by UAE company Majid Al Futtaim. Majid Al Futtaim owns the exclusive rights to operate Carrefour under Majid Al Futtaim's distinct name and 'M' logo.",
      "Companies": "Carrefour, Al-Futtaim"
    },
    {
      "Countries": "UAE",
      "Category": "Tourism and Hospitality",
      "Content": "French hospitality giant Accor's non-luxury brands - Pullman, Ibis, and Novotel —are seeing strong growth in the region.",
      "Companies": "Accor"
    },
    {
      "Countries": "UAE",
      "Category": "Transportation",
      "Content": "KEOLIS signed a contract for Dubai Metro and Tram network.",
      "Companies": "Keolis"
    },
    {
      "Countries": "UAE",
      "Category": "Renewable energy & green projects",
      "Content": "Masdar signed an agreement with Hy24 Clean Hydrogen Infrastructure Fund to enable large-scale green hydrogen production projects across Europe, the Americas, Asia Pacific and the Middle East and North Africa. The agreement gave Masdar access to a pipeline of up to €2 billion in co-investment and co-development opportunities.",
      "Companies": "Masdar, Hy24"
    },
    {
      "Countries": "UAE",
      "Category": "Renewable energy & green projects",
      "Content": "French utility company ENGIE is looking to further deepen its roots in the UAE market, with $11.9 billion already invested in different projects in the Gulf country. For example: including funding the development of Al Ajban Solar Photovoltaic plant, which will produce 1.5 gigawatts of power. The firm will be responsible for the development and operation of the Mirfa 2 Reverse Osmosis Independent Water Project worth $800 million.",
      "Companies": "Engie"
    },
    {
      "Countries": "France",
      "Category": "AI and Technology",
      "Content": "France is open to Emirati investments in Nuclear and AI industries. For example: Core 42, G42's digital infrastructure company partners with DataOne, First gigascale AI hosting infrastructure data center in Grenoble, France.",
      "Companies": "Core42, DataOne, G42"
    },
    {
      "Countries": "UAE",
      "Category": "Technology and AI",
      "Content": "France's Systra awarded consultancy mandate for USD 2.5 Billion UAE-Oman railway project.",
      "Companies": "Systra, Etihad Rail"
    },
    {
      "Countries": "UAE",
      "Category": "Technology and AI",
      "Content": "AD Ports signed a partnership with the French company Pasqal to develop AI-driven solutions. This collaboration will focus on integrating artificial intelligence models, quantitative analysis, and advanced algorithm development.",
      "Companies": "Pasqal, AD Ports"
    },
    {
      "Countries": "UAE",
      "Category": "Aerospace, Defence, and Security",
      "Content": "EDGE entity EPI, has signed a serial production contract of C295 Cargo Compartment Removable Tanks with Airbus Defence and Space, a division of Airbus Group.",
      "Companies": "EPI, Airbus Group"
    },
    {
      "Countries": "UAE",
      "Category": "Aerospace, Defence, and Security",
      "Content": "EDGE Group and Thales signed an MOU to equip its unmanned and remotely piloted combat and reconnaissance aircraft (UAVs) with advanced technologies.",
      "Companies": "EDGE, Thales"
    },
    {
      "Countries": "UAE",
      "Category": "Aerospace, Defence, and Security",
      "Content": "KATIM and Thales will start discussing the co-development of Software Defined Radio technologies in the United Arab Emirates (UAE).",
      "Companies": "KATIM, Thales"
    },
    {
      "Countries": "UAE",
      "Category": "Aerospace, Defence, and Security",
      "Content": "Mubadala and Safran strengthen strategic partnership to drive Aerospace Growth in the UAE.",
      "Companies": "Safran, Mubadala"
    },
    {
      "Countries": "UAE",
      "Category": "Aerospace, Defence, and Security",
      "Content": "The UAE signed a record 14-billion-euro contract for 80 Rafale warplanes which will be produced by Dassault Aviation.",
      "Companies": "Dassault Aviation"
    },
    {
      "Countries": "UAE",
      "Category": "Aerospace, Defence, and Security",
      "Content": "Safran Aircraft Engines and Abu Dhabi Aviation Group (ADA) have signed a strategic Memorandum of Understanding (MoU) to enhance collaboration in military aviation maintenance, repair, and overhaul (MRO) services.",
      "Companies": "ADA, Mubadala"
    },
    {
      "Countries": "UAE",
      "Category": "Aerospace",
      "Content": "Mohammed Bin Rashid Space Centre (MBRSC) and Thales Alenia Space to develop the Pressure Equalisation Unit of the Gateway lunar space station.",
      "Companies": "MBRSC, Thales Alenia Space"
    },
    {
      "Countries": "UAE",
      "Category": "Culture",
      "Content": "UAE's Louvre Abu Dhabi contract extended to 2047.",
      "Companies": "Louvre Abu Dhabi"
    },
    {
      "Countries": "UAE",
      "Category": "Luxury Retail",
      "Content": "Al Tayer Group partnership with several French brands.",
      "Companies": "Al Tayer Insignia"
    },
    {
      "Countries": "UAE",
      "Category": "Luxury Retail",
      "Content": "Chalhoub Group partnership with several French brands.",
      "Companies": "Chalhoub Group"
    },
    {
      "Countries": "UAE",
      "Category": "Luxury Retail",
      "Content": "LVMH is the world's leading luxury products group",
      "Companies": "LVMH"
    },
    {
      "Countries": "UAE",
      "Category": "Luxury Retail",
      "Content": "A global Luxury group, Kering manages the development of a series of renowned Houses in Fashion, Leather Goods and Jewelry.",
      "Companies": "Kering"
    },
    {
      "Countries": "UAE",
      "Category": "Renewable energy & green projects",
      "Content": "Masdar, TotalEnergies and 2PointZero partnership to support clean energy solutions in emerging markets and developing economies across Africa and Asia.",
      "Companies": "Masdar, TotalEnergies, 2PointZero"
    },
    {
      "Countries": "UAE",
      "Category": "Renewable energy & green projects",
      "Content": "Masdar and EDF signed an agreement to establish a JV energy services company (ESCO).",
      "Companies": "Masdar, EDF renewables"
    },
    {
      "Countries": "UAE",
      "Category": "Renewable energy & green projects",
      "Content": "Masdar and EDF Group joint venture Emerge signed an MOU with ADNOC Sour Gas to explore leveraging solar energy at the Shah Gas Plant.",
      "Companies": "ADNOC, EDF renewables"
    }
  ];



  
  return rawData.map((item, index) => {
    // Parse countries
    const countries = item.Countries.split(', ').map(c => c.trim());
    
    // Map index to corresponding logo
    const logoMap = [
      logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, 
      logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16,
      logo17, logo18, logo19, logo20, logo21, logo22, logo23, logo24,
      logo25, logo26, logo27, logo28, logo29, logo30, logo31, logo32
    ];
    
    const logoUrl = index < logoMap.length ? logoMap[index] : null;
    
    // Parse companies
    const companies = item.Companies.split(', ').map(c => c.trim());
    
    // Create coordinates using city detection instead of random values
    const coordinates: any = {};
    
    if (countries.includes('UAE') || countries.some(c => c.toLowerCase() === 'uae')) {
      coordinates.uae = getUAECoordinate(item.Content);
    }
    
    if (countries.includes('France') || countries.some(c => c.toLowerCase() === 'france')) {
      coordinates.france = getFranceCoordinate(item.Content);
    }
    
    return {
      id: `entry-${index}`,
      logo: companies[0] || "Company",
      logoUrl: logoUrl,
      countries: countries,
      category: item.Category,
      content: item.Content,
      companies: companies,
      coordinates
    };
  });
};

const investments: InvestmentEntry[] = processRawData();

// Extract unique categories and countries for filters
const uniqueCategories = Array.from(new Set(investments.map(item => item.category)));
const uniqueCountries = Array.from(new Set(investments.flatMap(item => item.countries)));

const countryImages = {
  uae: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AE-5TuD3IsqSNBAgpIaSTRzgmp0706AfL.png",
  france: franceMapImage,
  sweden: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SE-DM6vGWxobocAEyJ4YxiYRet775n6Yv.png"
};

const MapConnection = () => {
  const [selectedEntry, setSelectedEntry] = useState<InvestmentEntry | null>(null);
  const [hoveredEntry, setHoveredEntry] = useState<InvestmentEntry | null>(null);
  const [activeCountry, setActiveCountry] = useState<"all" | string>("all");
  const [activeCategory, setActiveCategory] = useState<"all" | string>("all");

  // Filtered investments based on active filters
  const filteredInvestments = useMemo(() => {
    return investments.filter((entry) => {
      const matchesCountry = activeCountry === "all" || entry.countries.includes(activeCountry);
      const matchesCategory = activeCategory === "all" || entry.category === activeCategory;
      return matchesCountry && matchesCategory;
    });
  }, [activeCountry, activeCategory]);

  // Function to handle overlapping dots - now returns the original coordinates
  const getStableCoordinate = (coordinate) => {
    // Return the exact coordinate without jitter
    return {
      x: coordinate.x,
      y: coordinate.y + 20  // Add 20 to the y-coordinate
    };
  };

  const renderConnections = (entry: InvestmentEntry) => {
    if (!entry.coordinates) return null;

    const isHighlighted = hoveredEntry?.id === entry.id || selectedEntry?.id === entry.id;
    const interactionProps = {
      onMouseEnter: () => setHoveredEntry(entry),
      onMouseLeave: () => setHoveredEntry(null),
      onClick: () => setSelectedEntry(entry === selectedEntry ? null : entry),
      style: { cursor: "pointer" },
    };

    // Create a line between UAE and France if both exist
    const connections = [];
    
    // Optional: Uncomment to enable connection lines
    // if (entry.coordinates.uae && entry.coordinates.france) {
    //   connections.push(
    //     <path
    //       key={`path-${entry.id}-uae-france`}
    //       d={`M ${entry.coordinates.uae.x} ${entry.coordinates.uae.y} 
    //           C ${entry.coordinates.uae.x} ${(entry.coordinates.uae.y + entry.coordinates.france.y) / 2},
    //             ${entry.coordinates.france.x} ${(entry.coordinates.uae.y + entry.coordinates.france.y) / 2},
    //             ${entry.coordinates.france.x} ${entry.coordinates.france.y}`}
    //       stroke={isHighlighted ? "#f97316" : "#4169E1"}
    //       strokeDasharray={isHighlighted ? "0" : "3 3"}
    //       strokeWidth={isHighlighted ? "3" : "1.5"}
    //       fill="none"
    //       className="transition-all duration-300"
    //       {...interactionProps}
    //     />
    //   );
    // }

    // Create points for each country
    const points = [];
    
    if (entry.coordinates.uae) {
      // Use stable coordinates without jitter
      const stableCoord = getStableCoordinate(entry.coordinates.uae);
      
      points.push(
        <g key={`uae-point-${entry.id}`} {...interactionProps}>
          <circle
            cx={stableCoord.x}
            cy={stableCoord.y}
            r={isHighlighted ? "8" : "5"}
            fill={isHighlighted ? "#f97316" : "#94a3b8"}
            className="transition-all duration-300"
          />
          {isHighlighted && (
            <text
              x={stableCoord.x + 12}
              y={stableCoord.y}
              fontSize="10"
              fill="#f97316"
              fontWeight="bold"
            >
              {entry.category}
            </text>
          )}
        </g>
      );
    }
    
    if (entry.coordinates.france) {
      // Use stable coordinates without jitter
      const stableCoord = getStableCoordinate(entry.coordinates.france);
      
      points.push(
        <g key={`france-point-${entry.id}`} {...interactionProps}>
          <circle
            cx={stableCoord.x}
            cy={stableCoord.y}
            r={isHighlighted ? "8" : "5"}
            fill={isHighlighted ? "#f97316" : "#94a3b8"}
            className="transition-all duration-300"
          />
          {isHighlighted && (
            <text
              x={stableCoord.x + 12}
              y={stableCoord.y}
              fontSize="10"
              fill="#f97316"
              fontWeight="bold"
            >
              {entry.category}
            </text>
          )}
        </g>
      );
    }

    return (
      <g key={`connection-${entry.id}`}>
        {connections}
        {points}
      </g>
    );
  };

  // Rest of the component remains the same...
  const getCardClassName = (entry: InvestmentEntry) => {
    const isActive = hoveredEntry?.id === entry.id || selectedEntry?.id === entry.id;
    return isActive ? "border-primary bg-primary/5 shadow-md" : "border-border hover:bg-accent/50";
  };

  const getCountryFlagIcons = (countries: string[]) => {
    return countries.map((country, index) => {
      const lowerCountry = country.toLowerCase();
      if (lowerCountry === "uae") {
        return <FlagIcon key={`flag-${index}`} country="uae" />;
      } else if (lowerCountry === "france") {
        return <FlagIcon key={`flag-${index}`} country="france" />;
      } else if (lowerCountry === "sweden") {
        return <FlagIcon key={`flag-${index}`} country="sweden" />;
      }
      return null;
    });
  };

  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">UAE-France Investment Connections</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Visualizing cross-border investments and business relationships between the UAE and France
        </p>
      </div>

      {/* Filter Controls */}
      <div className="mb-8 bg-accent/20 p-4 rounded-lg shadow">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-3 flex items-center">
              <Filter size={18} className="mr-2" /> Filter by Country
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={activeCountry === "all" ? "outline" : "outline"}
                className={`cursor-pointer text-sm px-4 py-1.5 ${activeCountry === "all" 
                  ? 'bg-gray-700 text-white font-semibold border-gray-600' 
                  : 'bg-gray-100 hover:bg-gray-200'}`}
                onClick={() => setActiveCountry("all")}
              >
                All Countries
              </Badge>
              {uniqueCountries.map((country) => {
                let bgColor = "bg-gray-100 hover:bg-gray-200";
                let selectedBgColor = "bg-gray-700 text-white font-semibold";
                
                if (country.toLowerCase() === "uae") {
                  bgColor = "bg-green-50 hover:bg-green-100 border-green-200";
                  selectedBgColor = "bg-green-600 text-white font-semibold border-green-700";
                } else if (country.toLowerCase() === "france") {
                  bgColor = "bg-blue-50 hover:bg-blue-100 border-blue-200";
                  selectedBgColor = "bg-blue-600 text-white font-semibold border-blue-700";
                }
                
                return (
                  <Badge
                    key={`country-filter-${country}`}
                    variant="outline"
                    className={`cursor-pointer text-sm px-4 py-1.5 ${activeCountry === country 
                      ? selectedBgColor 
                      : bgColor}`}
                    onClick={() => setActiveCountry(country)}
                  >
                    {getCountryFlagIcons([country])} {country}
                  </Badge>
                );
              })}
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-3 flex items-center">
              <Filter size={18} className="mr-2" /> Filter by Category
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className={`cursor-pointer text-sm px-4 py-1.5 ${activeCategory === "all" 
                  ? 'bg-gray-700 text-white font-semibold border-gray-600' 
                  : 'bg-gray-100 hover:bg-gray-200'}`}
                onClick={() => setActiveCategory("all")}
              >
                All Categories
              </Badge>
              {uniqueCategories.map((category, index) => {
                // Creating a light color palette for categories with corresponding dark versions
                const colorPairs = [
                  { light: "bg-amber-50 hover:bg-amber-100 border-amber-200", dark: "bg-amber-600 text-white font-semibold border-amber-700" },
                  { light: "bg-pink-50 hover:bg-pink-100 border-pink-200", dark: "bg-pink-600 text-white font-semibold border-pink-700" },
                  { light: "bg-purple-50 hover:bg-purple-100 border-purple-200", dark: "bg-purple-600 text-white font-semibold border-purple-700" },
                  { light: "bg-indigo-50 hover:bg-indigo-100 border-indigo-200", dark: "bg-indigo-600 text-white font-semibold border-indigo-700" },
                  { light: "bg-cyan-50 hover:bg-cyan-100 border-cyan-200", dark: "bg-cyan-600 text-white font-semibold border-cyan-700" },
                  { light: "bg-teal-50 hover:bg-teal-100 border-teal-200", dark: "bg-teal-600 text-white font-semibold border-teal-700" },
                  { light: "bg-emerald-50 hover:bg-emerald-100 border-emerald-200", dark: "bg-emerald-600 text-white font-semibold border-emerald-700" },
                  { light: "bg-lime-50 hover:bg-lime-100 border-lime-200", dark: "bg-lime-600 text-white font-semibold border-lime-700" },
                  { light: "bg-orange-50 hover:bg-orange-100 border-orange-200", dark: "bg-orange-600 text-white font-semibold border-orange-700" },
                  { light: "bg-red-50 hover:bg-red-100 border-red-200", dark: "bg-red-600 text-white font-semibold border-red-700" }
                ];
                
                const colorPair = colorPairs[index % colorPairs.length];
                
                return (
                  <Badge
                    key={`category-filter-${category}`}
                    variant="outline"
                    className={`cursor-pointer text-sm px-4 py-1.5 ${activeCategory === category 
                      ? colorPair.dark 
                      : colorPair.light}`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Badge>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-xl shadow-sm border p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Visualization - Full width on mobile, left column on desktop */}
          <div className="order-1 lg:order-none">
            <Card className="h-[500px] overflow-hidden">
              <CardContent className="p-0 h-full">
                <div className="relative h-full bg-accent/30 rounded-lg overflow-hidden">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 400 400"
                    aria-label="Investment connection map between UAE and France"
                  >
                    {/* Background for better contrast */}
                    <rect x="0" y="0" width="400" height="400" fill="#f8fafc" />

                    {/* UAE Map Region */}
                    <g className="uae-region">
                      <image
                        href={countryImages.uae}
                        x=""
                        y="10"
                        width="380"
                        height="170"
                        preserveAspectRatio="xMidYMid meet"
                        style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
                      />
                      
                      {/* Optional: Add city markers for UAE */}
                      {/* <circle cx={uaeCoordinates["Abu Dhabi"].x} cy={uaeCoordinates["Abu Dhabi"].y} r="2" fill="#00732f" />
                      <circle cx={uaeCoordinates["Dubai"].x} cy={uaeCoordinates["Dubai"].y} r="2" fill="#00732f" />
                      <circle cx={uaeCoordinates["Sharjah"].x} cy={uaeCoordinates["Sharjah"].y} r="2" fill="#00732f" /> */}
                    </g>

                    {/* France Map Region */}
                    <g className="france-region">
                      <image
                        href={countryImages.france}
                        x="30"
                        y="200"
                        width="340"
                        height="190"
                        preserveAspectRatio="xMidYMid meet"
                        style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
                      />
                      
                      {/* Optional: Add city markers for France */}
                      {/* <circle cx={franceCoordinates["Paris"].x} cy={franceCoordinates["Paris"].y} r="2" fill="#00267f" />
                      <circle cx={franceCoordinates["Lyon"].x} cy={franceCoordinates["Lyon"].y} r="2" fill="#00267f" />
                      <circle cx={franceCoordinates["Marseille"].x} cy={franceCoordinates["Marseille"].y} r="2" fill="#00267f" /> */}
                    </g>

                    {/* Render all connections */}
                    {filteredInvestments.map((entry) => renderConnections(entry))}
                  </svg>
                </div>
              </CardContent>
            </Card>

            {/* Selected Entry Detail */}
            {selectedEntry && (
              <Card className="mt-4 bg-primary/5 border-primary animate-fadeIn">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold">{selectedEntry.category}</h3>
                        <div className="flex">
                          {getCountryFlagIcons(selectedEntry.countries)}
                        </div>
                      </div>
                      <div className="text-sm font-bold mb-3">
                        {selectedEntry.companies.join(', ')}
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedEntry(null)}
                      className="text-muted-foreground hover:text-foreground"
                      aria-label="Close details"
                    >
                      ✕
                    </button>
                  </div>
                  <p className="text-sm">{selectedEntry.content}</p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Investment Entries - Right column on desktop, scrollable list */}
          <div className="order-2 lg:order-none">
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {filteredInvestments.length > 0 ? (
                filteredInvestments.map((entry) => (
                  <Card 
                    key={entry.id} 
                    className={`transition-all duration-300 ${getCardClassName(entry)}`}
                  >
                    <CardContent className="p-4">
                      <div
                        className="cursor-pointer"
                        onClick={() => setSelectedEntry(entry === selectedEntry ? null : entry)}
                        onMouseEnter={() => setHoveredEntry(entry)}
                        onMouseLeave={() => setHoveredEntry(null)}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex flex-col">
                            {/* Category - large, black, bold */}
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-bold">{entry.category}</h3>
                              <div className="flex">
                                {getCountryFlagIcons(entry.countries)}
                              </div>
                            </div>
                            
                            {/* Companies - black, bold, smaller */}
                            <p className="text-sm font-semibold mt-1">
                              {entry.companies.join(', ')}
                            </p>
                          </div>
                          
                          {/* Logo */}
                          {entry.logoUrl && (
                            <div className="w-24 h-20 ml-2 flex-shrink-0">
                              <img
                                src={entry.logoUrl}
                                alt={`${entry.companies[0]} logo`}
                                className="w-full h-full object-contain object-center"
                              />
                            </div>
                          )}
                        </div>
                        
                        {/* Content preview */}
                        <p className="text-sm line-clamp-2 text-muted-foreground">
                          {entry.content.length > 120
                            ? `${entry.content.substring(0, 120)}...`
                            : entry.content}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center p-8 bg-accent/20 rounded-lg">
                  <p className="text-muted-foreground">No matches found for the current filters. Try adjusting your selection.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Summary at the bottom */}
        <div className="mt-8 p-4 bg-accent/30 rounded-lg">
          <h3 className="font-semibold mb-2">Summary</h3>
          <p className="text-sm text-muted-foreground">
            The UAE-France bilateral relationship has witnessed significant growth, with non-oil trade increasing by 21.3% in 2024 to reach AED 44 billion compared to AED 36.7 billion in 2023. The UAE hosts approximately 600 French companies employing over 30,000 people, making it the largest concentration of French companies in the Middle East, while the UAE ranks as France's second-largest investor in the GCC. Key collaboration sectors include aerospace, defense, energy, AI, luxury goods, and sustainable development, with major investments like the UAE's planned USD 52 billion in French AI data centers and Mubadala's over USD 3.8 billion across 35+ French investments since 2014. The partnership is formalized through the annual UAE-France High Level Business Council, which focuses on promoting sustainable economic development and strategic investments in areas like AI, gas, chemicals, low-carbon fuels, and clean technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MapConnection;