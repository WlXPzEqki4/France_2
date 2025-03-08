// "use client"

// import { useState, useEffect } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { 
//   Info, 
//   ArrowUpRight, 
//   LineChart, 
//   Plane, 
//   Zap,
//   Diamond,
//   Train,
//   Building,
//   Leaf,
//   Bot,
//   FlaskConical,
//   BarChart3
// } from "lucide-react"

// interface CooperationData {
//   id: string
//   year: string
//   value: number
//   growth?: number
//   sectors: {
//     name: string
//     description: string
//     icon: string
//   }[]
//   achievements: string[]
// }

// // Custom flag component for UAE-France
// const CountryFlag = ({ type }: { type: "uae" | "france" | "combined" }) => {
//   if (type === "uae") {
//     return (
//       <div className="w-12 h-12 relative overflow-hidden rounded-full shadow-sm">
//         <div className="absolute h-1/3 w-full top-0 bg-[#00732f]"></div>
//         <div className="absolute h-1/3 w-full top-1/3 bg-white"></div>
//         <div className="absolute h-1/3 w-full top-2/3 bg-black"></div>
//         <div className="absolute h-full w-1/4 left-0 bg-red-600"></div>
//       </div>
//     )
//   }

//   if (type === "france") {
//     return (
//       <div className="w-12 h-12 relative overflow-hidden rounded-full shadow-sm">
//         <div className="flex h-full">
//           <div className="h-full w-1/3 bg-blue-800"></div>
//           <div className="h-full w-1/3 bg-white"></div>
//           <div className="h-full w-1/3 bg-red-600"></div>
//         </div>
//       </div>
//     )
//   }

//   // Combined flag for UAE-France
//   return (
//     <div className="w-20 h-20 relative overflow-hidden rounded-full shadow-md border-4 border-white">
//       <div className="absolute inset-0 flex items-center justify-center">
//         {/* Left half - UAE */}
//         <div className="absolute left-0 w-1/2 h-full overflow-hidden">
//           <div className="absolute h-1/3 w-full top-0 bg-[#00732f]"></div>
//           <div className="absolute h-1/3 w-full top-1/3 bg-white"></div>
//           <div className="absolute h-1/3 w-full top-2/3 bg-black"></div>
//           <div className="absolute h-full w-1/2 left-0 bg-red-600"></div>
//         </div>
        
//         {/* Right half - France */}
//         <div className="absolute right-0 w-1/2 h-full overflow-hidden">
//           <div className="flex h-full">
//             <div className="h-full w-1/3 bg-blue-800"></div>
//             <div className="h-full w-1/3 bg-white"></div>
//             <div className="h-full w-1/3 bg-red-600"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// // Sector icon component - using Lucide icons
// const SectorIcon = ({ icon }: { icon: string }) => {
//   const iconMap: Record<string, JSX.Element> = {
//     aerospace: <div className="text-blue-600"><Plane className="h-4 w-4" /></div>,
//     energy: <div className="text-yellow-600"><Zap className="h-4 w-4" /></div>,
//     luxury: <div className="text-purple-600"><Diamond className="h-4 w-4" /></div>,
//     transport: <div className="text-green-600"><Train className="h-4 w-4" /></div>,
//     banking: <div className="text-slate-600"><Building className="h-4 w-4" /></div>,
//     sustainable: <div className="text-emerald-600"><Leaf className="h-4 w-4" /></div>,
//     ai: <div className="text-indigo-600"><Bot className="h-4 w-4" /></div>,
//     chemicals: <div className="text-cyan-600"><FlaskConical className="h-4 w-4" /></div>,
//   }

//   return iconMap[icon] || <div className="text-gray-600"><BarChart3 className="h-4 w-4" /></div>
// }

// const cooperationData: CooperationData[] = [
//   {
//     id: "2023",
//     year: "2023",
//     value: 36.7,
//     sectors: [
//       {
//         name: "Aeronautics & Space",
//         description: "UAE airlines operating Airbus aircraft and space cooperation",
//         icon: "aerospace"
//       },
//       {
//         name: "Energy",
//         description: "Oil & gas partnerships and renewable energy projects",
//         icon: "energy"
//       },
//       {
//         name: "Luxury Goods",
//         description: "French luxury brands expanding in UAE markets",
//         icon: "luxury"
//       }
//     ],
//     achievements: [
//       "600 French companies operating in UAE, employing over 30,000 people",
//       "UAE as France's second-largest investor in the GCC",
//       "Establishment of UAE-France Business Council"
//     ]
//   },
//   {
//     id: "2024",
//     year: "2024",
//     value: 44,
//     growth: 21.3,
//     sectors: [
//       {
//         name: "Sustainable Development",
//         description: "Joint clean energy and low-carbon technology initiatives",
//         icon: "sustainable"
//       },
//       {
//         name: "AI & Innovation",
//         description: "Collaborative AI research and development projects",
//         icon: "ai"
//       },
//       {
//         name: "Energy Infrastructure",
//         description: "Gas, chemicals, and low-carbon fuels investments",
//         icon: "chemicals"
//       },
//       {
//         name: "Urban Transport",
//         description: "Rail and urban mobility solutions",
//         icon: "transport"
//       },
//       {
//         name: "Banking & Insurance",
//         description: "Financial sector cooperation and investment",
//         icon: "banking"
//       }
//     ],
//     achievements: [
//       "21.3% growth in trade relations from 2023",
//       "UAE-France high level business Council focused on sustainable economy",
//       "Strategic investments in gas, chemicals, and clean technologies"
//     ]
//   }
// ]

// // Chart data points for visualizing growth
// // const generateChartPoints = () => {
// //   return [
// //     { x: 0, y: 0 },
// //     { x: 100, y: 30 },
// //     { x: 200, y: 35 },
// //     { x: 300, y: 36.7 },
// //     { x: 400, y: 38 },
// //     { x: 500, y: 40 },
// //     { x: 600, y: 42 },
// //     { x: 700, y: 44 }
// //   ]
// // }

// const UAEFranceCooperation = () => {
//   const [selectedYear, setSelectedYear] = useState("2024")
//   const [animateValue, setAnimateValue] = useState(0)
  
//   // Get the selected data
//   const selectedData = cooperationData.find(data => data.id === selectedYear) || cooperationData[1]
  
//   // Animation effect for the value counter
//   useEffect(() => {
//     const targetValue = selectedData.value
//     const duration = 1500 // ms
//     const frameDuration = 16 // ms
//     const totalFrames = Math.round(duration / frameDuration)
//     const valueIncrement = targetValue / totalFrames
    
//     let currentFrame = 0
    
//     const timer = setInterval(() => {
//       currentFrame++
//       setAnimateValue(prev => {
//         const newValue = valueIncrement * currentFrame
//         if (newValue >= targetValue) {
//           clearInterval(timer)
//           return targetValue
//         }
//         return newValue
//       })
//     }, frameDuration)
    
//     return () => {
//       clearInterval(timer)
//     }
//   }, [selectedYear, selectedData.value])
  
//   return (
//     <div className="max-w-[1200px] mx-auto p-4 md:p-8">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">UAE-France Economic Cooperation</h1>
//         <p className="text-muted-foreground max-w-2xl mx-auto">
//           Strong political and commercial relations across key sectors
//         </p>
//       </div>

//       <div className="bg-card rounded-xl shadow-sm border p-4 md:p-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[900px]">
//           {/* Visualization */}
//           <div className="order-1 lg:order-none">
//             <Card className="h-[900px] overflow-hidden relative">
//               <CardContent className="p-6 h-full">
//                 <div className="flex flex-col items-center justify-start pt-4">
//                   {/* Year selector tabs */}
//                   <div className="w-full flex justify-center space-x-4 mb-8">
//                     {cooperationData.map(data => (
//                       <button
//                         key={data.id}
//                         className={`px-4 py-2 rounded-full text-sm font-medium transition-all 
//                         ${selectedYear === data.id 
//                           ? "bg-primary text-white shadow-md" 
//                           : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
//                         onClick={() => {
//                           setSelectedYear(data.id)
//                           setAnimateValue(0)
//                         }}
//                       >
//                         {data.year}
//                       </button>
//                     ))}
//                   </div>
                
//                   {/* Central visualization */}
//                   <div className="flex flex-col items-center justify-center relative">
//                     {/* Combined flag */}
//                     <CountryFlag type="combined" />
                    
//                     {/* Growth indicator - shows only the percentage */}
//                     {selectedData.growth && (
//                       <div className="flex items-center justify-center mt-2 text-green-600 font-medium">
//                         <ArrowUpRight className="h-4 w-4 mr-1" />
//                         <span>{selectedData.growth}% from previous year</span>
//                       </div>
//                     )}
//                   </div>
                  
//                   {/* Remove graph visualization and go directly to sectors */}
//                   {/* Sector lists for both years side by side */}
//                   <div className="w-full mt-12 mb-8">
//                     <h3 className="text-center font-medium mb-6">Key Cooperation Sectors</h3>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       {/* 2023 Sectors */}
//                       <div className="bg-gray-50 p-4 rounded-lg">
//                         <h4 className="font-semibold text-center mb-4">2023</h4>
//                         <div className="space-y-3">
//                           {cooperationData[0].sectors.map((sector) => (
//                             <div key={sector.name} className="space-y-1">
//                               <div className="flex items-center">
//                                 <SectorIcon icon={sector.icon} />
//                                 <p className="font-medium ml-2">{sector.name}</p>
//                               </div>
//                               <p className="text-sm text-gray-600 pl-6">{sector.description}</p>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
                      
//                       {/* 2024 Sectors */}
//                       <div className="bg-gray-50 p-4 rounded-lg">
//                         <h4 className="font-semibold text-center mb-4">2024</h4>
//                         <div className="space-y-3">
//                           {cooperationData[1].sectors.map((sector) => (
//                             <div key={sector.name} className="space-y-1">
//                               <div className="flex items-center">
//                                 <SectorIcon icon={sector.icon} />
//                                 <p className="font-medium ml-2">{sector.name}</p>
//                               </div>
//                               <p className="text-sm text-gray-600 pl-6">{sector.description}</p>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Source note */}
//                   <div className="mt-auto py-3 text-center text-xs text-gray-500">
//                     <p>Source: UAE-France Economic Reports</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Details Panel */}
//           <div className="order-2 lg:order-none">
//             <Card className="h-[900px]">
//               <CardContent className="p-6">
//                 <div className="flex items-center mb-4">
//                   <div className="flex space-x-3">
//                     <CountryFlag type="uae" />
//                     <CountryFlag type="france" />
//                   </div>
//                   <h2 className="text-xl font-bold ml-4">Partnership Summary</h2>
//                 </div>
                
//                 <div className="prose prose-sm max-w-none">
//                   <p className="mb-4">
//                     The UAE hosts the largest number of French companies operating in the Middle East, 
//                     with about 600 companies employing more than 30,000 employees. The UAE is France's 
//                     second-largest investor in the GCC, while France ranks fourth among investors in the UAE.
//                   </p>
                  
//                   <p className="mb-4">
//                     This dynamic reflects France and UAE long-lasting strong political and commercial relations 
//                     across key sectors including Aeronautics and space, civil and military, luxury goods, energy, 
//                     sustainable development, urban transport, banking and insurance, hotels, mass distribution, 
//                     industry, logistics.
//                   </p>
                  
//                   <div className="mt-6">
//                     <h3 className="text-lg font-semibold flex items-center">
//                       <LineChart className="h-5 w-5 mr-2 text-primary" />
//                       {selectedYear} Key Achievements
//                     </h3>
//                     <ul className="mt-2 space-y-2">
//                       {selectedData.achievements.map((achievement, index) => (
//                         <li key={index} className="flex items-start">
//                           <div className="min-w-8 h-8 flex items-center justify-center bg-primary/10 rounded-full mr-3 text-primary">
//                             {index + 1}
//                           </div>
//                           <p className="mt-1">{achievement}</p>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
                  
//                   <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
//                     <h4 className="font-medium flex items-center text-amber-800">
//                       <Info className="h-4 w-4 mr-2" />
//                       Annual Cooperation Council
//                     </h4>
//                     <p className="text-amber-700 mt-2">
//                       Each year 'The UAE-France high level business Council' convenes to enhance 
//                       economic and investment cooperation. The latest meeting focused on promoting 
//                       sustainable economic development in AI and strategic investments across gas, 
//                       chemicals, low-carbon fuels, clean technologies and energy infrastructure.
//                     </p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default UAEFranceCooperation













"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Info, 
  ArrowUpRight, 
  LineChart, 
  Plane, 
  Zap,
  Diamond,
  Train,
  Building,
  Leaf,
  Bot,
  FlaskConical,
  BarChart3
} from "lucide-react"

interface CooperationData {
  id: string
  year: string
  value: number
  growth?: number
  sectors: {
    name: string
    description: string
    icon: string
  }[]
  achievements: string[]
}

// Custom flag component for UAE-France
const CountryFlag = ({ type }: { type: "uae" | "france" | "combined" }) => {
  if (type === "uae") {
    return (
      <div className="w-12 h-12 relative overflow-hidden rounded-full shadow-sm">
        <div className="absolute h-1/3 w-full top-0 bg-[#00732f]"></div>
        <div className="absolute h-1/3 w-full top-1/3 bg-white"></div>
        <div className="absolute h-1/3 w-full top-2/3 bg-black"></div>
        <div className="absolute h-full w-1/4 left-0 bg-red-600"></div>
      </div>
    )
  }

  if (type === "france") {
    return (
      <div className="w-12 h-12 relative overflow-hidden rounded-full shadow-sm">
        <div className="flex h-full">
          <div className="h-full w-1/3 bg-blue-800"></div>
          <div className="h-full w-1/3 bg-white"></div>
          <div className="h-full w-1/3 bg-red-600"></div>
        </div>
      </div>
    )
  }

  // Combined flag for UAE-France
  return (
    <div className="w-20 h-20 relative overflow-hidden rounded-full shadow-md border-4 border-white">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Left half - UAE */}
        <div className="absolute left-0 w-1/2 h-full overflow-hidden">
          <div className="absolute h-1/3 w-full top-0 bg-[#00732f]"></div>
          <div className="absolute h-1/3 w-full top-1/3 bg-white"></div>
          <div className="absolute h-1/3 w-full top-2/3 bg-black"></div>
          <div className="absolute h-full w-1/2 left-0 bg-red-600"></div>
        </div>
        
        {/* Right half - France */}
        <div className="absolute right-0 w-1/2 h-full overflow-hidden">
          <div className="flex h-full">
            <div className="h-full w-1/3 bg-blue-800"></div>
            <div className="h-full w-1/3 bg-white"></div>
            <div className="h-full w-1/3 bg-red-600"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Sector icon component - using Lucide icons
const SectorIcon = ({ icon }: { icon: string }) => {
  const iconMap: Record<string, JSX.Element> = {
    aerospace: <div className="text-blue-600"><Plane className="h-4 w-4" /></div>,
    energy: <div className="text-yellow-600"><Zap className="h-4 w-4" /></div>,
    luxury: <div className="text-purple-600"><Diamond className="h-4 w-4" /></div>,
    transport: <div className="text-green-600"><Train className="h-4 w-4" /></div>,
    banking: <div className="text-slate-600"><Building className="h-4 w-4" /></div>,
    sustainable: <div className="text-emerald-600"><Leaf className="h-4 w-4" /></div>,
    ai: <div className="text-indigo-600"><Bot className="h-4 w-4" /></div>,
    chemicals: <div className="text-cyan-600"><FlaskConical className="h-4 w-4" /></div>,
  }

  return iconMap[icon] || <div className="text-gray-600"><BarChart3 className="h-4 w-4" /></div>
}

const cooperationData: CooperationData[] = [
  {
    id: "2023",
    year: "2023",
    value: 36.7,
    sectors: [
      {
        name: "Aeronautics & Space",
        description: "UAE airlines operating Airbus aircraft and space cooperation",
        icon: "aerospace"
      },
      {
        name: "Energy",
        description: "Oil & gas partnerships, renewable energy projects",
        icon: "energy"
      },
      {
        name: "Luxury Goods",
        description: "French luxury brands expanding in UAE markets",
        icon: "luxury"
      }
    ],
    achievements: [
      "600 French companies operating in UAE, employing over 30,000 people",
      "UAE as France's second-largest investor in the GCC",
      "Establishment of UAE-France Business Council"
    ]
  },
  {
    id: "2024",
    year: "2024",
    value: 44,
    growth: 21.3,
    sectors: [
      {
        name: "Sustainable Development",
        description: "Joint clean energy & low-carbon technology initiatives",
        icon: "sustainable"
      },
      {
        name: "AI & Innovation",
        description: "Collaborative AI research & development projects",
        icon: "ai"
      },
      {
        name: "Energy Infrastructure",
        description: "Gas, chemicals, & low-carbon fuels investments",
        icon: "chemicals"
      },
      {
        name: "Urban Transport",
        description: "Rail & urban mobility solutions",
        icon: "transport"
      },
      {
        name: "Banking & Insurance",
        description: "Financial sector cooperation & investment",
        icon: "banking"
      }
    ],
    achievements: [
      "21.3% growth in trade relations from 2023",
      "UAE-France high level business Council focused on sustainable economy",
      "Strategic investments in gas, chemicals, and clean technologies"
    ]
  }
]

// Chart data points for visualizing growth
// const generateChartPoints = () => {
//   return [
//     { x: 0, y: 0 },
//     { x: 100, y: 30 },
//     { x: 200, y: 35 },
//     { x: 300, y: 36.7 },
//     { x: 400, y: 38 },
//     { x: 500, y: 40 },
//     { x: 600, y: 42 },
//     { x: 700, y: 44 }
//   ]
// }

const UAEFranceCooperation = () => {
  const [selectedYear, setSelectedYear] = useState("2024")
  const [animateValue, setAnimateValue] = useState(0)
  
  // Get the selected data
  const selectedData = cooperationData.find(data => data.id === selectedYear) || cooperationData[1]
  
  // Animation effect for the value counter
  useEffect(() => {
    const targetValue = selectedData.value
    const duration = 1500 // ms
    const frameDuration = 16 // ms
    const totalFrames = Math.round(duration / frameDuration)
    const valueIncrement = targetValue / totalFrames
    
    let currentFrame = 0
    
    const timer = setInterval(() => {
      currentFrame++
      setAnimateValue(prev => {
        const newValue = valueIncrement * currentFrame
        if (newValue >= targetValue) {
          clearInterval(timer)
          return targetValue
        }
        return newValue
      })
    }, frameDuration)
    
    return () => {
      clearInterval(timer)
    }
  }, [selectedYear, selectedData.value])
  
  return (
    <div className="max-w-[1200px] mx-auto p-4 md:p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">UAE-France Economic Cooperation</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Strong political and commercial relations across key sectors
        </p>
      </div>

      <div className="bg-card rounded-xl shadow-sm border p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[900px]">
          {/* Visualization */}
          <div className="order-1 lg:order-none">
            <Card className="h-[900px] overflow-hidden relative">
              <CardContent className="p-6 h-full">
                <div className="flex flex-col items-center justify-start pt-4">
                  {/* Year selector tabs */}
                  <div className="w-full flex justify-center space-x-4 mb-8">
                    {cooperationData.map(data => (
                      <button
                        key={data.id}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all 
                        ${selectedYear === data.id 
                          ? "bg-primary text-white shadow-md" 
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                        onClick={() => {
                          setSelectedYear(data.id)
                          setAnimateValue(0)
                        }}
                      >
                        {data.year}
                      </button>
                    ))}
                  </div>
                
                  {/* Central visualization */}
                  <div className="flex flex-col items-center justify-center relative">
                    {/* Combined flag */}
                    <CountryFlag type="combined" />
                    
                    {/* Animated value */}
                    <div className="mt-6 text-center">
                      <div className="text-4xl font-bold text-primary">
                        AED {animateValue.toFixed(1)} Bln
                      </div>
                    
                    {/* Growth indicator - shows only the percentage */}
                    {selectedData.growth && (
                      <div className="flex items-center justify-center mt-2 text-green-600 font-medium">
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                        <span>{selectedData.growth}% from previous year</span>
                      </div>
                    )}
                    </div>
                  </div>
                  
                  {/* Remove graph visualization and go directly to sectors */}
                  {/* Sector lists for both years side by side */}
                  <div className="w-full mt-12 mb-8">
                    <h3 className="text-center font-medium mb-6">Key Cooperation Sectors</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 2023 Sectors */}
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-center mb-4">2023</h4>
                        <div className="space-y-3">
                          {cooperationData[0].sectors.map((sector) => (
                            <div key={sector.name} className="space-y-1">
                              <div className="flex items-center">
                                <SectorIcon icon={sector.icon} />
                                <p className="font-medium ml-2">{sector.name}</p>
                              </div>
                              <p className="text-sm text-gray-600 pl-6">{sector.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* 2024 Sectors */}
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-center mb-4">2024</h4>
                        <div className="space-y-3">
                          {cooperationData[1].sectors.map((sector) => (
                            <div key={sector.name} className="space-y-1">
                              <div className="flex items-center">
                                <SectorIcon icon={sector.icon} />
                                <p className="font-medium ml-2">{sector.name}</p>
                              </div>
                              <p className="text-sm text-gray-600 pl-6">{sector.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Source note */}
                  <div className="mt-auto py-3 text-center text-xs text-gray-500">
                    <p>Source: UAE-France Economic Reports</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Details Panel */}
          <div className="order-2 lg:order-none">
            <Card className="h-[900px]">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-3">
                    <CountryFlag type="uae" />
                    <CountryFlag type="france" />
                  </div>
                  <h2 className="text-xl font-bold ml-4">Partnership Summary</h2>
                </div>
                
                <div className="prose prose-sm max-w-none">
                  <p className="mb-4">
                    The UAE hosts the largest number of French companies operating in the Middle East, 
                    with about 600 companies employing more than 30,000 employees. The UAE is France's 
                    second-largest investor in the GCC, while France ranks fourth among investors in the UAE.
                  </p>
                  
                  <p className="mb-4">
                    This dynamic reflects France and UAE long-lasting strong political and commercial relations 
                    across key sectors including Aeronautics and space, civil and military, luxury goods, energy, 
                    sustainable development, urban transport, banking and insurance, hotels, mass distribution, 
                    industry, logistics.
                  </p>
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold flex items-center">
                      <LineChart className="h-5 w-5 mr-2 text-primary" />
                      {selectedYear} Key Achievements
                    </h3>
                    <ul className="mt-2 space-y-2">
                      {selectedData.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <div className="min-w-8 h-8 flex items-center justify-center bg-primary/10 rounded-full mr-3 text-primary">
                            {index + 1}
                          </div>
                          <p className="mt-1">{achievement}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <h4 className="font-medium flex items-center text-amber-800">
                      <Info className="h-4 w-4 mr-2" />
                      Annual Cooperation Council
                    </h4>
                    <p className="text-amber-700 mt-2">
                      Each year 'The UAE-France high level business Council' convenes to enhance 
                      economic and investment cooperation. The latest meeting focused on promoting 
                      sustainable economic development in AI and strategic investments across gas, 
                      chemicals, low-carbon fuels, clean technologies and energy infrastructure.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UAEFranceCooperation






