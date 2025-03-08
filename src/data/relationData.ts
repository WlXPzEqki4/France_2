import { NetworkNode, NetworkLink, TimelineEvent, RelationshipDimension, TabData, KeyContact } from "../types";

// Main data structure for the UAE-France Relations content
export interface SectionData {
  id: string;
  title: string;
  content: ContentBlock[];
  graphData?: {
    nodes: NetworkNode[];
    links: NetworkLink[];
  };
  timeline?: TimelineEvent[];
  relationshipDimensions?: RelationshipDimension[];
  tabs?: TabData[];  
}



export type ContentBlock = {
  type: "paragraph" | "heading" | "subheading" | "list" | "image" | "quote" | "paragraph_html";
  content: string;
  items?: string[]; // For list type
  imageUrl?: string; // For image type
  imageCaption?: string; // For image type
  author?: string; // For quote type
};

// Main sections data
export const relationsSections: SectionData[] = [
  {
    id: "intro",
    title: "UAE–France Relations (2019–2025)",
    content: [
      {
        type: "paragraph",
        content: "This interactive analysis explores the multifaceted relationship between the United Arab Emirates and France from 2019 to 2024, examining diplomatic ties, economic cooperation, points of alignment and tension, and key stakeholders in both nations."
      },
      {
        type: "paragraph",
        content: "Navigate through the sections below to explore different aspects of this bilateral relationship."
      }
    ]
  },
  {
    id: "political-diplomatic",
    title: "Political and Diplomatic Ties",
    content: [
      {
        type: "paragraph",
        content: "UAE–France political relations have grown since 2019, marked by frequent high-level visits and a deepening strategic partnership. This regular dialogue culminated in June 2020 with both countries adopting a 10-year roadmap (2020–2030) to guide their strategic partnership."
      },
      {
        type: "paragraph",
        content: "Despite the global pandemic, leaders maintained contact, emphasizing the resilience of diplomatic ties. The relationship reached new heights in late 2021 when President Macron visited the UAE."
      },
      {
        type: "paragraph",
        content: "In January 2022, when Abu Dhabi suffered a Houthi missile/drone attack, France visibly stood by the UAE by activating the 1995 defense accord – deploying Rafale jets to reinforce UAE air defenses. This swift support, at a time when other allies were slower, was warmly noted in Abu Dhabi. Shortly after, in May 2022, President Macron traveled to Abu Dhabi to pay respects upon the passing of H.H. President Sheikh Khalifa bin Zayed, reaffirming solidarity during the UAE’s leadership transition."
      },
      {
        type: "paragraph",
        content: "High-level dialogue continued through 2023 and 2024: the two sides held strategic dialogues to review progress and launch new initiatives. For example, they jointly supported major events like India’s G20 presidency and the UAE’s hosting of COP28, and even formed a trilateral cooperation with India on Indo-Pacific issues in early 2023. Throughout this period, both countries navigated any policy differences quietly and constructively, ensuring that the overall diplomatic trajectory remained positive."
      },
      {
        type: "paragraph",
        content: "The consistent cadence of official visits and consultations attests to a mature relationship, with regular policy alignment on regional stability and a shared vision for a “third way” in global affairs balancing great-power competition"
      }
    ],
    timeline: [
      {
        year: "June 2020",
        title: "Strategic Partnership Roadmap Signing",
        description: "Signing of the UAE–France Strategic Partnership Roadmap (2020–2030), enhancing cooperation across defence, energy, culture, and technology.",
        type: "positive"
      },
      {
        year: "December 2021",
        title: "Macron's UAE Visit and Rafale Deal",
        description: "President Emmanuel Macron visits UAE; historic €16 billion deal signed for 80 Rafale jets.",
        type: "positive"
      },
      {
        year: "January 2022",
        title: "French Military Support After Houthi Attacks",
        description: "France activates mutual defence pact following Houthi attacks on Abu Dhabi; deploys Rafale jets to bolster UAE air defences.",
        type: "positive"
      },
      {
        year: "May 2022",
        title: "Macron's Condolence Visit",
        description: "President Macron visits Abu Dhabi for condolences on passing of Sheikh Khalifa; reaffirms support during UAE leadership transition.",
        type: "positive"
      },
      {
        year: "July 2022",
        title: "President MBZ's First State Visit to France",
        description: "First state visit to France by H.H. Sheikh Mohamed bin Zayed Al Nahyan as UAE President; significant energy, defence, and cultural agreements signed.",
        type: "positive"
      },
      {
        year: "February 2023",
        title: "Indo-Pacific Trilateral Initiative Launch",
        description: "France, UAE, and India launch trilateral cooperation on Indo-Pacific security.",
        type: "positive"
      },
      {
        year: "December 2023",
        title: "COP28 Cooperation",
        description: "President Macron attends COP28 in Dubai, reaffirming strong bilateral alignment on global climate action.",
        type: "positive"
      }
    ],
    relationshipDimensions: [
      {
        name: "Diplomatic Relations",
        value: 85,
        description: "Strong strategic partnership with high-level exchanges and mutual support on critical security matters"
      },
      {
        name: "Parliamentary Cooperation",
        value: 80,
        description: "Regular engagement between legislative bodies with strong institutional ties"
      },
      {
        name: "Cultural Understanding",
        value:95,
        description: "Exceptional cultural bonds strengthened by Louvre Abu Dhabi and educational partnerships"
      },
      {
        name: "Conflict Mediation",
        value: 80,
        description: "Aligned on regional stability goals with some nuanced differences in approach"
      },
      {
        name: "Defense Cooperation",
        value:90,
        description: "Deep military collaboration with UAE hosting France's only Gulf military base and major arms deals like the Rafale fighter agreement"
      },
      {
        name: "Economic Partnership",
        value: 90,
        description: "Robust trade relationship with substantial cross-investment and strategic energy agreements"
      }
    ],
    // graphData: {
    //   nodes: [
    //     { id: "uae_mofa", label: "UAE Ministry of Foreign Affairs", group: "uae", size: 25 },
    //     { id: "sweden_mofa", label: "Swedish Ministry for Foreign Affairs", group: "sweden", size: 25 },
    //     { id: "uae_embassy", label: "UAE Embassy in Stockholm", group: "uae", size: 20 },
    //     { id: "sweden_embassy", label: "Swedish Embassy in Abu Dhabi", group: "sweden", size: 20 },
    //     { id: "un_forum", label: "United Nations", group: "neutral", size: 22 },
    //     { id: "eu_council", label: "European Council", group: "sweden", size: 18 },
    //     { id: "gcc", label: "Gulf Cooperation Council", group: "uae", size: 18 }
    //   ],
    //   links: [
    //     { source: "uae_mofa", target: "sweden_mofa", value: 5 },
    //     { source: "uae_mofa", target: "uae_embassy", value: 4 },
    //     { source: "sweden_mofa", target: "sweden_embassy", value: 4 },
    //     { source: "uae_embassy", target: "sweden_mofa", value: 3 },
    //     { source: "sweden_embassy", target: "uae_mofa", value: 3 },
    //     { source: "uae_mofa", target: "un_forum", value: 2 },
    //     { source: "sweden_mofa", target: "un_forum", value: 2 },
    //     { source: "sweden_mofa", target: "eu_council", value: 3 },
    //     { source: "uae_mofa", target: "gcc", value: 3 },
    //     { source: "un_forum", target: "eu_council", value: 1 },
    //     { source: "un_forum", target: "gcc", value: 1 }
    //   ]
    // }




    graphData: {
      nodes: [
        { id: "french_govt", label: "French Government", group: "france", size: 30 },
        { id: "elysee", label: "Elysée Palace", group: "france", size: 28 },
        { id: "french_foreign", label: "French Ministry for Europe and Foreign Affairs", group: "france", size: 26 },
        { id: "french_defense", label: "French Ministry of Defense", group: "france", size: 25 },
        { id: "uae_foreign", label: "UAE Ministry of Foreign Affairs", group: "uae", size: 28 },
        { id: "uae_embassy_paris", label: "UAE Embassy in Paris", group: "uae", size: 22 },
        { id: "french_embassy_ad", label: "French Embassy in Abu Dhabi", group: "france", size: 22 },
        { id: "gcc", label: "Gulf Cooperation Council", group: "uae", size: 20 },
        { id: "strategic_dialogue", label: "UAE-France Strategic Dialogue", group: "neutral", size: 24 },
        { id: "business_council", label: "UAE-France Business Council", group: "neutral", size: 23 },
        { id: "louvre_ad", label: "Louvre Abu Dhabi", group: "neutral", size: 20 },
        { id: "military_base", label: "French Military Base in UAE", group: "france", size: 20 }
      ],
      links: [
        { source: "elysee", target: "uae_foreign", value: 5 },
        { source: "french_foreign", target: "uae_foreign", value: 5 },
        { source: "french_defense", target: "uae_foreign", value: 4 },
        { source: "elysee", target: "french_foreign", value: 5 },
        { source: "elysee", target: "french_defense", value: 5 },
        { source: "strategic_dialogue", target: "french_foreign", value: 4 },
        { source: "strategic_dialogue", target: "uae_foreign", value: 4 },
        { source: "business_council", target: "french_govt", value: 4 },
        { source: "business_council", target: "uae_foreign", value: 4 },
        { source: "louvre_ad", target: "french_govt", value: 3 },
        { source: "louvre_ad", target: "uae_foreign", value: 3 },
        { source: "military_base", target: "french_defense", value: 5 },
        { source: "military_base", target: "uae_foreign", value: 4 },
        { source: "french_embassy_ad", target: "uae_foreign", value: 3 },
        { source: "uae_embassy_paris", target: "french_foreign", value: 3 },
        { source: "gcc", target: "french_foreign", value: 2 },
        { source: "gcc", target: "uae_foreign", value: 4 }
      ]
    }











  },
  {
    id: "economic-trade",
    title: "Economic and Trade Relations",
    content: [
      {
        type: "paragraph",
        content: "Economic ties between the UAE and France are robust and characterized by significant trade and cross-investment. Non-oil bilateral trade reached $7.5 billion in 2019, reflecting a return to growth after several years of decline. France exports a wide range of goods to the UAE valued around €3.3 billion in 2019, making the UAE France’s second-largest export market in the region. Top French exports include machinery and capital equipment, chemicals, luxury goods and agri-food products. In turn, French imports from the UAE (about €1.5 billion) are dominated by hydrocarbons, reflecting the UAE’s role as a reliable oil supplier."
      },
      {
        type: "paragraph",
        content: "Over 600 French companies operate in the UAE, in sectors ranging from energy and infrastructure to retail and hospitality."
      },
      {
        type: "paragraph",
        content: "On the investment side, the UAE is among the top Gulf investors in France, with cumulative UAE investment flows of roughly $173 million into France (2016–2020) and French FDI into the UAE about $3.1 billion in the same period. Key investment sectors include energy (oil, gas and renewables), transportation, aerospace, luxury goods, and technology. Notably, 207 French companies had invested in the UAE by 2019, while around 21 UAE-based companies invested in France, highlighting a growing two-way confidence."
      }
    ],




    timeline: [
      {
        year: "2019-2023",
        title: "Bilateral Trade Volume (2019-2023)",
        description: "Annual bilateral non-oil trade: Approximately €7.5 billion (average, 2019–2023)",
        type: "positive"
      },
      {
        year: "",
        title: "Key Export Sectors",
        description: "France exports luxury goods, aircraft, machinery, pharmaceuticals, and agricultural products; UAE exports hydrocarbons, aluminum, and petrochemicals.",
        type: "positive"
      },
      {
        year: "",
        title: "French Corporate Presence in UAE",
        description: "Over 600 French companies operate in UAE, notably TotalEnergies, Carrefour, Airbus, Thales, and ENGIE.",
        type: "positive"
      },
      {
        year: "",
        title: "UAE Investment Portfolio in France",
        description: "Significant UAE investments in France: real estate (e.g., Altais Towers), technology, infrastructure, and renewable energy sectors.",
        type: "positive"
      },
      {
        year: "July 2022",
        title: "Comprehensive Strategic Energy Partnership ",
        description: "UAE–France Comprehensive Strategic Energy Partnership launched to boost cooperation in hydrogen, renewables, nuclear energy.",
        type: "positive"
      },
      {
        year: "July 2022",
        title: "Business Council Establishment",
        description: "Establishment of UAE–France Business Council (chaired by TotalEnergies CEO Patrick Pouyanné) to facilitate investment and business collaboration.",
        type: "positive"
      },
      {
        year: "May 2023",
        title: "ADNOC-TotalEnergies LNG Agreement",
        description: "ADNOC Gas and TotalEnergies sign three-year LNG supply agreement valued at approx. €1 billion.",
        type: "positive"
      },
    ],










    relationshipDimensions: [
      {
        name: "Trade Volume",
        value: 85,
        description: "Approximately €7.5 billion in annual bilateral non-oil trade"
      },
      {
        name: "French Business Presence",
        value: 95,
        description: "Over 600 French companies operating in the UAE, including major firms like TotalEnergies, Carrefour, Airbus"
      },
      {
        name: "UAE Investment in France",
        value: 90,
        description: "Significant investments in real estate, technology, infrastructure, and the recent €30-50 billion AI data center commitment"
      },
      {
        name: "Joint Projects",
        value: 90,
        description: "Strong collaboration in energy, defense, cultural institutions, and emerging technologies"
      },
      {
        name: "Energy Partnership",
        value: 90,
        description: "Strategic cooperation in traditional and renewable energy, including ADNOC-TotalEnergies LNG deals and joint renewable initiatives"
      }
    ],
    // graphData: {
    //   nodes: [
    //     { id: "uae_economy", label: "UAE Ministry of Economy", group: "uae", size: 25 },
    //     { id: "sweden_trade", label: "Swedish Ministry of Trade", group: "sweden", size: 25 },
    //     { id: "business_sweden", label: "Business Sweden", group: "sweden", size: 22 },
    //     { id: "uae_chamber", label: "UAE Chambers of Commerce", group: "uae", size: 22 },
    //     { id: "tech_sector", label: "Technology Sector", group: "neutral", size: 20 },
    //     { id: "energy_sector", label: "Energy Sector", group: "neutral", size: 20 },
    //     { id: "defense_sector", label: "Defense Sector", group: "neutral", size: 18 },
    //     { id: "innovation_hub", label: "Innovation Hubs", group: "neutral", size: 15 }
    //   ],
    //   links: [
    //     { source: "uae_economy", target: "sweden_trade", value: 5 },
    //     { source: "business_sweden", target: "uae_chamber", value: 4 },
    //     { source: "uae_economy", target: "tech_sector", value: 4 },
    //     { source: "sweden_trade", target: "tech_sector", value: 4 },
    //     { source: "uae_economy", target: "energy_sector", value: 3 },
    //     { source: "sweden_trade", target: "energy_sector", value: 3 },
    //     { source: "uae_economy", target: "defense_sector", value: 3 },
    //     { source: "sweden_trade", target: "defense_sector", value: 3 },
    //     { source: "business_sweden", target: "innovation_hub", value: 2 },
    //     { source: "uae_chamber", target: "innovation_hub", value: 2 },
    //     { source: "tech_sector", target: "innovation_hub", value: 2 },
    //     { source: "energy_sector", target: "innovation_hub", value: 1 }
    //   ]
    // }

    graphData: {
      nodes: [
        { id: "uae_economy", label: "UAE Ministry of Economy", group: "uae", size: 25 },
        { id: "france_economy", label: "French Ministry of Economy & Finance", group: "france", size: 25 },
        { id: "totalenergies", label: "TotalEnergies", group: "france", size: 22 },
        { id: "adnoc", label: "ADNOC", group: "uae", size: 22 },
        { id: "luxury_sector", label: "Luxury Goods Sector", group: "france", size: 18 },
        { id: "energy_sector", label: "Energy Sector", group: "neutral", size: 23 },
        { id: "defense_sector", label: "Defense & Aerospace Sector", group: "neutral", size: 21 },
        { id: "business_council", label: "UAE-France Business Council", group: "neutral", size: 20 },
        { id: "french_companies", label: "600+ French Companies in UAE", group: "france", size: 24 },
        { id: "uae_investment", label: "UAE Sovereign Wealth Funds", group: "uae", size: 23 },
        { id: "tech_ai_sector", label: "Technology & AI Sector", group: "neutral", size: 22 }
      ],
      links: [
        { source: "uae_economy", target: "france_economy", value: 5 },
        { source: "totalenergies", target: "adnoc", value: 5 },
        { source: "france_economy", target: "business_council", value: 4 },
        { source: "uae_economy", target: "business_council", value: 4 },
        { source: "uae_economy", target: "energy_sector", value: 5 },
        { source: "france_economy", target: "energy_sector", value: 4 },
        { source: "uae_economy", target: "defense_sector", value: 4 },
        { source: "france_economy", target: "defense_sector", value: 5 },
        { source: "french_companies", target: "uae_economy", value: 4 },
        { source: "uae_investment", target: "tech_ai_sector", value: 5 },
        { source: "france_economy", target: "tech_ai_sector", value: 4 },
        { source: "french_companies", target: "luxury_sector", value: 3 },
        { source: "energy_sector", target: "totalenergies", value: 5 },
        { source: "energy_sector", target: "adnoc", value: 5 },
        { source: "uae_investment", target: "france_economy", value: 4 },
        { source: "business_council", target: "french_companies", value: 3 }
      ]
    }
  },
  {
    id: "cooperation",
    title: "Areas of Cooperation",
    content: [
      {
        type: "paragraph",
        content: "Defense cooperation is the cornerstone of UAE–France relations, providing strategic benefits to both sides. A formal defense agreement has existed since 1995, and France operates a permanent military base in Abu Dhabi (established 2009) that includes an air, naval, and land component.  This makes the UAE host to France’s only military base in the Gulf, enabling French forces to project power and respond to crises in the Middle East and Africa. Joint military exercises and intelligence sharing are routine."
      },
      {
        type: "paragraph",
        content: "France, which has led counter-terror operations in the Sahel and Levant, finds a reliable partner in the UAE – indeed Abu Dhabi provided support for France’s mission in Mali and the fight against ISIS. This solidarity enhances security for both countries. The procurement side of defense cooperation (e.g. fighter jets, naval assets) also dovetails with strategic goals – it diversifies the UAE’s defense arsenal with high-end French technology while bolstering France’s defense industry. In February 2023, France, the UAE, and India launched a trilateral initiative, including joint military drills and naval coordination in the Indian Ocean."
      },
      {
        type: "paragraph",
        content: "Energy has long been a vital area of collaboration, now expanding into clean energy and climate action. The UAE has been a key oil supplier to France, and French companies such as Total have large stakes in UAE oil concessions and gas projects. Building on this, the two countries formed a Comprehensive Strategic Energy Partnership (CSEP) in 2022 to coordinate on traditional and renewable energy."
      },
      {
        type: "paragraph",
        content: "Cultural diplomacy is a flagship of the UAE–France partnership, symbolized by the Louvre Abu Dhabi. This pioneering museum – opened in 2017 under a 30-year UAE–France agreement – has become the most visited museum in the Middle East."
      },
      {
        type: "paragraph",
        content: "Both governments have prioritized cooperation in advanced industries and innovation. A bilateral Strategic Dialogue mechanism (held annually) tracks progress in areas like artificial intelligence, cybersecurity, space exploration, food security, and health. Space is a particularly exciting frontier – France’s space agency (CNES) and the UAE Space Agency/Mohammed bin Rashid Space Centre have partnered on missions and signed agreements for lunar exploration and Earth observation in 2022 They are expanding a joint Space Cooperation Sub-Committee to include startups and private companies, aiming to use space data to tackle climate change and encourage industry collaboration."
      }
    ],
    tabs: [
      {
        id: "innovation",
        label: "Defence & Security",
        content: [
          {
            type: "paragraph",
            content: "The UAE-France defence relationship forms the cornerstone of their strategic partnership, providing mutual security benefits and regional stability."
          },
          {
            type: "list",
            content: "Key developments include:",
            items: [
              "Ongoing since 2009: Permanent French military base in Abu Dhabi supporting regional stability.",
              "2021–2024: Intensified joint military exercises, including air force and naval drills.",
              "2022: France provides immediate military support after Houthi missile attacks"
            ]
          }
        ]
      },
      {
        id: "sustainability",
        label: "Energy & Sustainability",
        content: [
          {
            type: "paragraph",
            content: "Energy cooperation between the UAE and France has evolved from traditional oil trade to a comprehensive partnership encompassing renewable and sustainable initiatives."
          },
          {
            type: "list",
            content: "Notable achievements include:",
            items: [
              "2022: Major energy partnership agreement; UAE commits to supply diesel and LNG to France amidst Europe's energy shortages.",
              "2023: ADNOC and TotalEnergies agree on significant LNG contracts worth around $1 billion."
            ]
          }
        ]
      },
      {
        id: "legal",
        label: "Education & Special Projects",
        content: [
          {
            type: "paragraph",
            content: "Cultural and educational collaboration represents one of the most visible dimensions of UAE-France bilateral relations, creating lasting people-to-people connections."
          },
          {
            type: "list",
            content: "Significant milestones include:",
            items: [
              "2017–ongoing: Louvre Abu Dhabi continues as a flagship symbol of bilateral cultural cooperation",
              "February 2024: Launch of MuseoPro joint training initiative for museum professionals.",
              "June 2024: First graduates of joint Emirati-French coding school '42 Abu Dhabi'.",
              "Ongoing: French educational institutions like Sorbonne University Abu Dhabi strengthen cultural ties, now educating thousands of Emirati and expatriate students"
            ]
          }
        ]
      },
      {
        id: "education",
        label: "Science & Advanced Technologies",
        content: [
          {
            type: "paragraph",
            content: "The UAE and France have increasingly focused on future-oriented technological cooperation, aligning their innovation strategies in emerging fields."
          },
          {
            type: "list",
            content: "Recent advancements include:",
            items: [
              "2022: UAE–France initiate deeper space collaboration with joint lunar exploration and satellite projects.",
              "2023–2024: Enhanced cooperation in AI, cybersecurity, digital economy, and smart-city initiatives via bilateral Strategic Dialogues."
            ]
          }
        ]
      }
    ],
    timeline: [
      {
        year: "December 2021",
        title: "Historic Rafale Deal",
        description: "President Emmanuel Macron visits UAE; historic €16 billion deal signed for 80 Rafale jets.",
        type: "positive"
      },
      {
        year: "July 2022",
        title: "Energy Partnership Launch",
        description: "UAE–France Comprehensive Strategic Energy Partnership launched to boost cooperation in hydrogen, renewables, and nuclear energy.",
        type: "positive"
      },
      {
        year: "February 2023",
        title: "Trilateral Initiative",
        description: "UAE, and India launch trilateral cooperation on Indo-Pacific security, including joint military drills and naval coordination.",
        type: "positive"
      },
      {
        year: "December 2023",
        title: "COP28 Collaboration",
        description: "President Macron attends COP28 in Dubai, reaffirming strong bilateral alignment on global climate action.",
        type: "positive"
      },


    ]
  },
  {
    id: "tensions",
    title: "Points of Tension or Policy Differences",
    content: [
      {
        type: "paragraph",
        content: "Despite the overall positive relationship, the UAE and France do have some differences in foreign policy and governance outlook. Both sides generally handle these with discretion and diplomatic language, ensuring disagreements do not escalate publicly."
      },
      {
        type: "paragraph",
        content: "One area of divergence is the approach to regional conflicts and political transitions. For example during the 2017–2021 Gulf rift, the UAE and Qatar were at odds, whereas France maintained cordial ties with both and encouraged a resolution. France’s neutrality in that intra-GCC dispute could have been a friction point, but it was navigated carefully."
      },
      {
        type: "paragraph",
        content: "French and international NGOs have scrutinized the UAE’s involvement in the Yemen conflict and the use of French weapons there. In 2021, the International Federation for Human Rights (FIDH) published an investigation questioning whether French arms sales made France “partners” in alleged war crimes in Yemen. Paris is aware of these critiques and the French government’s approach has been to address such sensitive issues through quiet diplomacy rather than public criticism."
      },
      {
        type: "paragraph",
        content: "Strategically, France and the UAE usually find themselves on the same side, but not always with the same emphasis. The UAE pursues a multi-aligned foreign policy, maintaining strong ties with powers like the US, China, Russia, and others simultaneously. France, as a NATO/EU member, has its own alliance obligations. This can lead to subtle differences. For example, regarding the Ukraine war: France has been firmly aligned with NATO and the EU in condemning Russia’s invasion and imposing sanctions, while the UAE adopted a more neutral stance – calling for diplomacy and humanitarian aid, but not joining sanctions. The UAE even abstained on some early UN votes and continues dialogue with Moscow. However, this divergence has been managed through consultation. The UAE conveyed that its neutrality is aimed at facilitating mediation and safeguarding its interests, not endorsing aggression."
      },
      {
        type: "paragraph",
        content: "The UAE and France share concerns about extremist ideologies, but their approaches to political Islam – particularly the Muslim Brotherhood – are not identical (see Section 5 for details). The UAE sees Islamist movements related to MB as an existential threat and has a zero-tolerance stance, while France, despite fighting Islamist extremism at home, sometimes engage sporadically with a spectrum of actors abroad. This occasionally yields different tactics – for instance, dealing with Islamist-linked groups in Libya or Iraq. Nonetheless, the overall strategic understanding is aligned: both countries prefer stable, secular governance models in the Middle East and oppose terrorism and violent extremism."
      },
    ],
    relationshipDimensions: [
      {
        name: "Syria Policy (2020-2023)",
        value: 65,
        description: "UAE normalizes ties with Syria while France maintains a conditional stance advocating for political reforms"
      },
      {
        name: "Ukraine Conflict Stance (2022-2024)",
        value: 70,
        description: "France firmly aligned with NATO/EU against Russia while UAE adopts a neutral mediating position"
      },
      {
        name: "Approach to Political Islam",
        value: 60,
        description: "UAE designates Muslim Brotherhood as terrorist organization while France takes a more nuanced, cautious position"
      },
      {
        name: "Regional Competition in Africa",
        value: 70,
        description: "Growing UAE economic and political influence in regions traditionally dominated by France, particularly in West Africa"
      }
    ],
    tabs: [
      {
        id: "yemen",
        label: "Syria (2020–2023)",
        content: [
          {
            type: "paragraph",
            content: "UAE normalises ties with Syria."
          },
          {
            type: "paragraph",
            content: "France maintains conditional stance, advocating for political reforms. Both countries carefully manage this divergence through private diplomatic communication."
          },
          {
            type: "paragraph",
            content: "Both countries carefully manage this divergence through private diplomatic communication."
          }
        ]
      },









      {
        id: "ukraine",
        label: "Ukraine Conflict (2022–2024)",
        content: [
          {
            type: "paragraph",
            content: "UAE adopts neutral stance aimed at mediation and humanitarian support."
          },
          {
            type: "paragraph",
            content: "France strongly aligned with NATO/EU stance against Russia’s actions. Regular dialogue has minimised friction."
          },
          {
            type: "paragraph",
            content: "Regular dialogue has minimised friction."
          }
        ]
      },
      {
        id: "human-rights",
        label: "Human Rights",
        content: [
          {
            type: "paragraph",
            content: "Criticism from French NGOs and civil society on Yemen conflict and internal UAE policies."
          },
          {
            type: "paragraph",
            content: "France has addressed these matters privately, respecting UAE sovereignty."
          }
        ]
      },
      {
        id: "political-islam",
        label: "Political Islam",
        content: [
          {
            type: "paragraph",
            content: "Differences in handling political Islamist groups."
          },
          {
            type: "paragraph",
            content: "UAE has banned the Brotherhood, whereas France has a cautious but less definitive approach."
          },
          {
            type: "paragraph",
            content: "Both agree strategically on counter-extremism and maintain close security cooperation."
          }
        ]
      }
    ]
  },
  {
    id: "sweden-mb",
    title: "France's Stance on the Muslim Brotherhood",
    content: [
      {
        type: "subheading",
        content: "France's Nuanced Approach to the Muslim Brotherhood"
      },


      {
        type: "paragraph",
        content: "France’s view of the Muslim Brotherhood (MB) is nuanced, shaped by both domestic and foreign policy considerations. Unlike the UAE, France has not banned the Brotherhood outright as a terrorist organization. There are no French laws designating the MB as an illegal entity, and historically France even engaged with moderate Islamist political parties (for example, Paris maintained contacts with Egypt’s short-lived MB-led government in 2012)."
      },
      {
        type: "paragraph",
        content: "France's stance on the Muslim Brotherhood is one of cautious engagement coupled with internal vigilance, whereas the UAE's is one of active containment. There is growing Islamophobic rhetoric in civil society in France, that is echoed in political circles. This impacts all Muslims, including members of the Muslim Brotherhood network of organisations."
      },


    ],
    tabs: [
      {
        id: "government",
        label: "France's Evolving Position",
        content: [
          {
            type: "subheading",
            content: "France's Evolving Position"
          },
          {
            type: "paragraph",
            content: "However, in recent years French attitudes have hardened. President Macron's government has been increasingly wary of Islamist ideologies that challenge France's secular values. French officials often include the Brotherhood in the broader category of 'political Islam' that they argue needs to be kept out of undue influence."
          },
          {
            type: "paragraph",
            content: " Domestically, France has cracked down on associations and schools linked to Islamist networks, some of which authorities suspect have ideological ties to the MB. For instance, in 2020–2021, under Macron's 'anti-separatism' initiative, the government dissolved or scrutinized several organizations for propagating extremist ideas – a signal that France is intolerant of MB-inspired activism on its soil (even if not explicitly named)."
          },
          {
            type: "paragraph",
            content: "A French Senate report in 2020 also warned of the MB's growing influence in Europe, indicating high-level awareness of the issue. In essence, while France stops short of the UAE's blanket approach, it does view the Brotherhood's ideology with deep caution. French security services keep an eye on MB-associated groups, and public opinion tends to be skeptical of Islamist movements, especially after terrorism incidents in recent years."
          }


        ]
      },
      {
        id: "thinktanks",
        label: "UAE's Contrasting Approach",
        content: [
          {
            type: "subheading",
            content: "UAE's Contrasting Approach"
          },
          {
            type: "paragraph",
            content: "The UAE's policy on the Muslim Brotherhood is unequivocal – it regards the MB and its affiliates as a grave threat to governance and regional stabilityThe UAE has outlawed the Brotherhood at home (since 2014 it is formally designated a terrorist organization) and has actively worked to counter MB-aligned groups ac. oss the Middle East. This stems from Abu Dhabi's belief that the Brotherhood's blend of political activism and religious ideology undermines state sovereignty and can fuel extremism."
          }
        ]
      },
      {
        id: "individuals",
        label: "Managing Differences in Diplomatic Practice",
        content: [
          {
            type: "subheading",
            content: "Managing Differences in Diplomatic Practice"
          },
          {
            type: "paragraph",
            content: "French diplomacy may engage with elected Islamist politicians where they have public support (for example, Ennahda in Tunisia in the past, or Hamas contacts for humanitarian mediation, etc.), though always cautiously. Additionally, France maintains strong relations with countries that support or harbor MB ideologues (such as Qatar and Turkey), balancing those alongside its friendship with the UAE. Both countries also collaborate in supporting governments (like in Libya) that oppose MB-linked factions."
          },
          {
            type: "paragraph",
            content: "The difference in formal stance towards the MB has not caused open conflict between France and the UAE, but it has been managed with careful diplomacy. The UAE urges its Western partners to take a harder line on the Brotherhood internationally."
          },
          {
            type: "paragraph",
            content: "France, while sympathetic to the UAE's concerns, typically responds by tightening surveillance and intelligence cooperation rather than banning the group A potential friction could arise if France were ever to host exiled MB figures or endorse an MB-inclusive government in the region – but Paris has shown prudence, often aligning subtly with the UAE's preferences."
          }
        ]
      }      
    ],




    // graphData: {     
    //   nodes: [
    //     { id: "swedish_govt", label: "Swedish Government", group: "sweden", size: 30 },
    //     { id: "sapo", label: "Swedish Security Service (SÄPO)", group: "sweden", size: 25 },
    //     { id: "foi", label: "Swedish Defense Research Agency", group: "sweden", size: 22 },
    //     { id: "ui", label: "Swedish Institute of International Affairs", group: "sweden", size: 20 },
    //     { id: "academia", label: "Swedish Universities", group: "sweden", size: 20 },
    //     { id: "mb_related", label: "MB-Related Organizations in Sweden", group: "neutral", size: 18 },
    //     { id: "civil_society", label: "Civil Society Organizations", group: "neutral", size: 15 },
    //     { id: "media", label: "Swedish Media", group: "sweden", size: 15 }
    //   ],
    //   links: [
    //     { source: "swedish_govt", target: "sapo", value: 5 },
    //     { source: "sapo", target: "mb_related", value: 4, dashed: true },
    //     { source: "foi", target: "swedish_govt", value: 3 },
    //     { source: "ui", target: "swedish_govt", value: 3 },
    //     { source: "academia", target: "mb_related", value: 2, dashed: true },
    //     { source: "media", target: "mb_related", value: 3, dashed: true },
    //     { source: "civil_society", target: "mb_related", value: 2 },
    //     { source: "academia", target: "foi", value: 2 },
    //     { source: "academia", target: "ui", value: 2 },
    //     { source: "swedish_govt", target: "mb_related", value: 3, dashed: true },
    //     { source: "civil_society", target: "swedish_govt", value: 2 }
    //   ]
    // }



    graphData: {
      nodes: [
        { id: "french_govt", label: "French Government", group: "france", size: 30 },
        { id: "dgsi", label: "French Internal Security (DGSI)", group: "france", size: 25 },
        { id: "french_senate", label: "French Senate", group: "france", size: 22 },
        { id: "french_interior", label: "French Ministry of Interior", group: "france", size: 24 },
        { id: "uae_govt", label: "UAE Government", group: "uae", size: 28 },
        { id: "mb_orgs_france", label: "MB-Related Organizations in France", group: "neutral", size: 18 },
        { id: "islamist_groups", label: "International Islamist Political Parties", group: "neutral", size: 20 },
        { id: "french_civil_society", label: "French Civil Society Organizations", group: "france", size: 16 },
        { id: "french_media", label: "French Media", group: "france", size: 16 },
        { id: "libya_govt", label: "Libyan Government", group: "neutral", size: 18 }
      ],
      links: [
        { source: "french_govt", target: "dgsi", value: 5 },
        { source: "dgsi", target: "mb_orgs_france", value: 4, dashed: true },
        { source: "french_senate", target: "french_govt", value: 3 },
        { source: "french_interior", target: "mb_orgs_france", value: 4, dashed: true },
        { source: "uae_govt", target: "mb_orgs_france", value: 1, dashed: true },
        { source: "french_media", target: "mb_orgs_france", value: 3, dashed: true },
        { source: "french_civil_society", target: "mb_orgs_france", value: 3, dashed: true },
        { source: "french_govt", target: "islamist_groups", value: 2, dashed: true },
        { source: "uae_govt", target: "islamist_groups", value: 1, dashed: true },
        { source: "french_govt", target: "uae_govt", value: 4 },
        { source: "french_govt", target: "mb_orgs_france", value: 3, dashed: true },
        { source: "french_civil_society", target: "french_govt", value: 2 },
        { source: "uae_govt", target: "french_govt", value: 4, dashed: false },
        { source: "french_govt", target: "libya_govt", value: 3 },
        { source: "uae_govt", target: "libya_govt", value: 3 }
      ]
    }
    





  },
  {
    id: "key-contacts",
    title: "People and Places of Interest",
    content: [
      {
        type: "paragraph",
        content: "For UAE delegations seeking to strengthen bilateral relations with France, engagement with key governmental stakeholders and cultural institutions would be highly beneficial for advancing diplomatic, economic, defense, and cultural ties. The following profiles highlight influential French officials and notable cultural venues that offer valuable opportunities for enhancing UAE-France cooperation and showcasing the UAE's commitment to this strategic partnership."
      }
    ],


    tabs: [
      {
        id: "government",
        label: "Government Officials",
        content: [
          {
            type: "subheading",
            content: "Government Officials"
          },
          {
            type: "paragraph",
            content: "For UAE delegations seeking to strengthen bilateral relations with France, engaging with the following key stakeholders would be beneficial for advancing diplomatic, economic, and cultural ties."
          }
        ],        
        keyContacts: [

          {
            name: "H.E. Jean-Noël Barrot",
            title: "Minister for Europe and Foreign Affairs",
            description: "A centrist economist and diplomat, likely to engage positively with the UAE, emphasising strategic cooperation on tech, security, and regional stability.",            
            extendedDescription: "UAE-Related Statements and Policies: As France's foreign minister, Jean-Noël Barrot has highlighted strong cooperation with the UAE in emerging sectors and regional stability. He hailed the new UAE-France AI Partnership, noting a joint framework to build a 1 GW AI campus in France that reflects a 'shared determination' to develop an ambitious tech partnership. Barrot has also engaged the UAE on Middle East issues – for example, in talks with UAE Foreign Minister Sheikh Abdullah bin Zayed, he advocated a 'just, inclusive' political transition in Syria and emphasized respecting Syrians' rights. He has similarly stressed the need for stability in Lebanon, urging that ceasefires be upheld and affirming France's commitments (e.g. via UNIFIL) to regional peace. These positions indicate Barrot's support for the UAE's role in regional security and a collaborative approach to conflicts, aligning with the UAE on seeking stability and countering extremism. Role of the Foreign Ministry in UAE-France Relations: Barrot's ministry leads France's strategic diplomatic engagement with the UAE across a broad spectrum. The Foreign Ministry coordinates high-level dialogues and agreements, such as the annual UAE-France Strategic Dialogue which enhances cooperation in trade, energy, advanced technology, defense, and culture. Under Barrot's guidance, the ministry ensures that bilateral initiatives – from economic forums to security consultations – are cohesive. For instance, the Foreign Ministry co-chairs strategic meetings (the 16th session in 2024 underscored expanding ties in renewables, AI, cybersecurity, space exploration, education, and culture. Barrot's team also facilitates state visits and diplomatic communication, laying the groundwork for agreements that other ministries (defense, economy, culture) then implement. In essence, Barrot's ministry is the linchpin that ties together France's multifaceted partnership with the UAE, ensuring consistency with France's foreign policy goals while deepening the bilateral 'strategic partnership' at every level. Bilateral Agreements & Diplomatic Engagements: Barrot has been directly involved in recent France-UAE agreements that span various sectors. During UAE President Sheikh Mohamed bin Zayed's visit to Paris (Feb 2025), Barrot announced the UAE's €30–50 billion investment to create a cutting-edge AI data center 'campus' in France; a project positioned as a landmark in tech cooperation. He also lauded the UAE-France Framework for AI Cooperation signed during that visit, which both countries see as pivotal for a 'stable and prosperous future' built on advanced technology. Diplomatically, Barrot maintains active contact with Emirati counterparts: for example, he held calls to coordinate on Syria's post-conflict transition and on Lebanese security, following up on outcomes of a Paris conference. Under his tenure, France and the UAE have also pursued agreements on energy and climate action (building on a July 2022 energy cooperation deal to secure Gulf oil & gas supplies for France. and reaffirmed commitments in nuclear energy and space via bilateral roadmaps. Barrot's diplomatic engagements thus solidify both innovative partnerships (AI, renewables) and traditional strategic ties (energy security, regional diplomacy) with the UAE. Alignment and Potential Friction Points: Barrot's diplomatic positioning toward the UAE is largely aligned and positive. Both France and the UAE share goals of regional stability (e.g. countering terrorism, ending conflicts in Syria and Yemen) and economic development. France and the UAE have a record of close defense and counter-terrorism cooperation, and Barrot continues to support UAE's initiatives for Middle East peace and development. They also align on climate and sustainability rhetoric – France congratulated the UAE's hosting of COP28 and signed a climate action MoU, reflecting common ground on clean energy. Potential frictions exist mostly in the realm of human rights and war: for instance, French arms sales to the UAE (for the Yemen war) drew criticism from rights groups, and legal analyses warned Paris about complicity. However, Barrot and other officials have handled such issues quietly – French diplomats signaled they may informally slow new arms licenses. This suggests that on sensitive issues (e.g. civilian harm in Yemen or political freedoms), Barrot's France prefers private dialogue over public confrontation. As France's top diplomat, Barrot has addressed Africa's changing geopolitical landscape with cautious diplomacy. He has acknowledged France's military drawdown and the need to rethink strategy, but emphasizes continued engagement. For instance, on a late-2024 trip to Chad and Ethiopia, Barrot focused on humanitarian support for the Sudan crisis and met regional leaders to discuss the future of French bases and partnerships in Africa. While he has not singled out the UAE publicly, Barrot's ministry is mindful of Gulf states' growing role. He has indicated that France must work with allies and African partners to fill security and development gaps as French troops depart, implying a space for Gulf cooperation as long as it stabilizes the region. In diplomatic forums, Barrot has also championed a multilateral approach – for example, supporting greater African representation at the UN – which aligns with the UAE's own messaging. In essence, Barrot's stance has not been confrontational toward Abu Dhabi; instead, he projects that France welcomes contributions from any country (including the UAE) that help African stability, but also subtly insists on respect for international norms. Behind the scenes, the Foreign Ministry keeps a close eye on where UAE influence might conflict with French interests – whether in Sudan peace talks or Sahel politics. In West Africa, where French troops have been pressured to leave, Paris is wary of any external actor stepping in to legitimize the new anti-French regimes. Overall, areas like economic cooperation, security, and technology show strong alignment, whereas values-related issues are downplayed to preserve the strategic relationship. Engagement with UAE Minister of Foreign Affairs: Barrot is likely to engage positively and constructively with the Minister. Barrot's tone is likely to be welcoming and partnership-focused – emphasizing France's 'longstanding strategic relations' with the UAE and mutual interests in peace and prosperity. He will likely highlight successes (like the AI center and cultural collaborations) as evidence of ever-closer ties, and reaffirm France's commitment to its Gulf ally's security. If a high-level UAE official raises concerns or regional issues, Barrot would address them diplomatically, seeking common ground. Given France's prioritization of the UAE, it is unlikely he would voice criticism openly during the visit; instead, he would stress respect and cooperation. In summary, Barrot's engagement would be warm, collaborative, and forward-looking, reinforcing positive momentum in France–UAE relations and sidestepping any points of tension in public.",
            influence: "high",
            imageUrl: "/lovable-uploads/Picture_16.png"
          },
          {
            name: "H.E. Alexis Michel Kohler",
            title: "Secretary General to the President (Elysée Palace)",
            description: "President Macron’s powerful aide who coordinates France-UAE relations pragmatically, balancing strategic partnership with subtle caution on UAE’s rising influence.",
            extendedDescription: "UAE-Related Statements and Policies: As the Elysée's Secretary General (Chief of Staff to President Macron), Alexis Kohler seldom makes public statements, but he plays a pivotal role in crafting and executing France's UAE policy behind the scenes. Kohler is known as President Macron's top confidant and policy enforcer, ensuring that the Elysée's warm approach to Abu Dhabi translates into action. Under Macron, France's partnership with the UAE has notably accelerated. This shift owes much to Macron's centralized diplomatic style – and Kohler is the key figure coordinating that style. He operates on Macron's mandate that the UAE is a crucial strategic partner, aligning ministries on initiatives from defense sales to cultural projects. While not issuing his own policies, Kohler has been instrumental in opportunistic diplomacy toward the UAE – for example, after the January 2022 Houthi missile attack on Abu Dhabi, the Elysée quickly offered support, reflecting Kohler's responsiveness to UAE security needs (in line with Macron's stance). His approach is highly pragmatic: he works to remove obstacles and 'cut out intermediaries' in dealings with state leaders. Kohler's actions prioritize strategic, security and economic ties with the UAE and they consistently echo Macron's pro-UAE outlook. Elysée Palace's Role in UAE-France Relations: As Secretary General, Kohler's role is to orchestrate inter-ministerial efforts and presidential initiatives vis-à-vis the UAE. He ensures that all French ministries speak with one voice in strengthening ties with Abu Dhabi. In practice, Kohler coordinates high-profile state visits and summit agendas – for instance, he was deeply involved in organizing H.H. President Sheikh Mohamed bin Zayed's state visit to Paris in July 2022 which produced numerous bilateral agreements. His office oversees follow-up on those agreements, for example: advancing an energy partnership or finalizing an arms contract. Kohler also liaises directly with top Emirati officials in Macron's orbit. Thanks to the close personal rapport between Macron and H.H. President Sheikh Mohamed bin Zayed, direct channels exist. This centralized approach at the Elysée Palace has allowed France to cement deals rapidly – for example, the Rafale fighter jet contract in 2021 was negotiated and concluded with strong Elysée involvement, reflecting Kohler's behind-the-scenes negotiations to secure France's largest-ever arms sale to the UAE. Similarly, when Macron hosted H.H. President Sheikh Mohamed bin Zayed's in 2022 and 2023, Kohler was responsible for ensuring that ministries of defense, economy, and culture all presented a unified package of cooperation (covering defense, trade, climate, and technology). In essence, Kohler's Elysée position means he is the gatekeeper and coordinator of France's relationship with the UAE, translating the French President's strategic vision into concrete policies and deals. Key Diplomatic Engagements & Agreements: Although not a public-facing diplomat, Kohler has been central to most major France-UAE agreements in recent years. He was reportedly a driving force in finalizing the €16 billion Rafale deal (80 jets) signed in December 2021 – a 'historic' defense contract that elevated the security partnership. Kohler also oversaw the comprehensive set of MoUs signed during H.H. President Sheikh Mohamed bin Zayed's state visit in July 2022, which spanned climate action, education, defense industry, and space exploration. These included a climate cooperation agreement (signed by the UAE climate envoy and French energy minister) and a defense roadmap between the UAE's Tawazun Council and France's DGA (armaments directorate) to enhance defense industrial collaboration. Under Kohler's coordination, France and the UAE agreed to hold UAE–France Energy Days (Nov 2022) to advance energy security cooperation, and launched a High-Level Business Council to boost trade and investment. Notably, Kohler's office was involved in the February 2025 UAE–France High-Level Business Council meeting in Paris – which French Finance Minister Éric Lombard and UAE's Dr. Sultan Al Jaber co-chaired – where new partnerships in energy, infrastructure, and AI were signed. This reflects Kohler's hand in facilitating high-level economic dialogues. His behind-the-scenes engagement ensures that once France and the UAE's leaders reach understanding, the agreements are swiftly formalized and implemented. Alignment and Potential Friction Points: Under Kohler's stewardship, the Elysée Palace's stance is aligned with the UAE's interests, emphasizing partnership and minimizing public discord. France and the UAE are aligned on countering terrorism and political extremism, a priority that Macron (and thus Kohler) shares with the UAE. For example, both governments are wary of groups like the Muslim Brotherhood and coordinate on counterterrorism in the Middle East and Africa. Economically and technologically, Kohler has aligned France's goals with the UAE's investment ambitions – evident in joint ventures in AI, renewable energy, and space. When disagreements arise, they are typically managed discreetly. One example is the differing approach to the Ukraine–Russia conflict. France staunchly supports Ukraine, whereas the UAE has maintained a more neutral, pragmatic stance. Human rights issues are another area of potential tension; the UAE is criticized at times in Europe, over freedoms and labor rights. However, Kohler's approach has been to sidestep these issues in public forums; any concerns are likely raised behind closed doors to avoid derailing strategic cooperation. Kohler and the presidential office remain cautious that the UAE's agenda in Africa might diverge from France's values. Kohler has been deeply involved in Macron's efforts to rese France's Africa policy after the setbacks in the Sahel. The Élysée's view, which Kohler helps shape, is that France must adapt to a new reality of multipolar involvement in Africa. This means accepting that countries like the UAE (as well as China, Turkey, and Russia) have become key players. Kohler is said to perceive the UAE's growing influence with a mix of pragmatism and vigilance. Overall, Kohler ensures France-UAE ties remain synergistic. Alignment is strongest in defense, security, trade, and innovation, and any policy disagreements (e.g. on Yemen war implications or outreach to Iran) are carefully managed through quiet diplomacy so they do not hinder the broader partnership. Likely Engagement with the Minister: Kohler would almost certainly engage in a highly positive and facilitative manner with the Minister. As one of the French President's key advisors, Kohler's priority would be to make the visit a success on all fronts Given his role, Kohler is unlikely to voice any criticism or sensitive issues during the visit – instead, he will emphasize France's commitment.",
            influence: "high",
            imageUrl: "/lovable-uploads/Picture_15.png"
          },
          {
            name: "H.E. Sebastian Lecornu",
            title: "Minister of Defense",
            description: "Strong advocate for deeper defence ties with the UAE, viewing Abu Dhabi as a strategic ally in offsetting France’s reduced military presence in Africa.",
            extendedDescription: "UAE-Related Statements and Policies: Defence Minister Sébastien Lecornu has been a strong proponent of the longstanding France–UAE defense partnership. He has consistently underscored the growing defence cooperation between the two countries, which he notes has directly strengthened bilateral relations. In meetings with UAE leaders, Lecornu emphasizes high interoperability between French and Emirati forces and mutual strategic interests. For example, during a visit to Abu Dhabi in November 2022, he discussed expanding defense ties with H.H. President Sheikh Mohamed bin Zayed, exchanging views on regional security issues. Lecornu's policies continue France's commitment to UAE and Gulf security. He supports France's permanent military presence in the UAE and champions joint initiatives like combined training exercises and intelligence sharing to combat terrorism. Publicly, Lecornu often highlights successes like the historic Rafale fighter jet deal – calling the delivery of advanced French jets to the UAE a milestone that will 'enhance the capabilities' of UAE's armed forces. He also aligns with the UAE on regional threats; for instance, he condemned the Houthi missile attacks on Abu Dhabi (2022) and affirmed France's solidarity in bolstering UAE air defenses. Overall, Lecornu's statements reflect a robust, alliance-oriented posture: he portrays the UAE as a key defense ally and regularly affirms France's resolve to help secure the Gulf region alongside Emirati partners. Role of the Defence Ministry in Relations: The Ministry of Defence, under Lecornu, is at the forefront of operational and strategic cooperation with the UAE. This ministry manages the French military presence in Abu Dhabi, under the auspices of French military Establishment in the United Arab Emirates (IMFEAU). This includes Camp de la Paix, a naval base located in Port Zayed, an air detachment at Al Dhafra Air Base and a land group operating in Abu Dhabi emirate. where about 700 French troops are stationed, and which serves as a hub for joint exercises and power projection in the region. Lecornu ensures this presence translates into real partnership – French forces regularly train with Emirati forces, enhancing interoperability in air, land, and naval domains. His ministry oversees major defense contracts and arms transfers to the UAE. The Rafale fighter jet program (80 aircraft) is a centerpiece of this collaboration, with the first batch of jets formally handed over in January 2025 during a ceremony that Lecornu hosted alongside UAE officials. In addition, the Defence Ministry facilitates defense-industrial collaboration. Under Lecornu, France's armament directorate signed a roadmap with the UAE's Tawazun Council to cooperate on defense technology and equipment development. On 03 March 20205, Thales announced the signature of a memorandum of understanding with Earth, an entity in the EDGE Group. The partnership is part of the UAE's strategy to equip its unmanned and remotely piloted combat and reconnaissance aircraft (UAVs) with advanced technologies. The ministry also plays a key role in high-level strategic dialogues – for example, contributing to discussions in the UAE-France Strategic Dialogue on regional security and counter-extremism. In crisis situations, Lecornu's department coordinates closely with the UAE (e.g. maritime security in the Gulf and Red Sea, or joint humanitarian evacuations). In summary, Lecornu's ministry is a critical pillar of the bilateral security relationship, managing everything from troops on the ground to multi-billion euro armaments. Areas of Alignment or Potential Friction: In defense matters, France and the UAE are aligned. Both view Iran's ballistic missile proliferation and trans-national terrorist networks as serious threats, and thus prioritize air defense and counter-terrorism – issues on which they collaborate closely. They also share an interest in stabilizing the Horn of Africa and Sahel regions, where the UAE has backed some French security initiatives. However, a few subtle frictions exist. An example of this is the UAE's evolving foreign policy; Abu Dhabi's cordial relationship with China require France to balance its own So far, Lecornu has managed these differences by focusing on common goals and downplaying contentious issues. In a late-2024 interview, Lecornu announced that as France 'reduces the sail' in West Africa, it will reinforce its presence in the UAE – effectively using the UAE as a forward operating hub. At the same time, Lecornu has voiced concerns about the 'strategic competitors' influencing Africa in France's absence. While this is assessed to generally mean Russia or China, it implies that any external power filling France's role must be watched. The Defence Ministry he leads is likely assessing UAE activities such as arms transfers in Africa. Stance Toward the Minister: Minister Lecornu would likely be highly positive and welcoming toward the Minister.",
            influence: "high",
            imageUrl: "/lovable-uploads/Picture_14.png"
          },
          {
            name: "H.E. Rachida Dati",
            title: "Minister of Culture",
            description: "High-profile advocate for France-UAE cultural diplomacy, leveraging shared cultural projects to strengthen bilateral ties and avoid political tensions.",
            extendedDescription: "UAE-Related Statements and Cultural Policies: As France's Culture Minister, Rachida Dati has actively championed cultural diplomacy and exchange with the UAE. In her public statements, Dati praises the depth of Franco-Emirati cultural ties. For example, while presenting France's Légion d'Honneur to Abu Dhabi's culture chief Mohamed Khalifa Al Mubarak in May 2024, she lauded his 'remarkable role' in advancing cultural relations 'between France, the emirate of Abu Dhabi and the UAE'. Dati often references iconic cooperative projects like the Louvre Abu Dhabi as symbols of shared heritage. At a panel in Abu Dhabi, she spoke of a 'new momentum' at Sorbonne University's Abu Dhabi campus that meets UAE expectations and reflects collaborative efforts in education and culture. Her policies focus on extending France's cultural footprint: supporting French language schools in the Emirates, joint art exhibits, and heritage preservation partnerships. Dati has highlighted the importance of culture in society, emphasizing that initiatives in the UAE (museums, universities, Alliances Françaises) showcase cultural diversity and foster dialogue. She aligns closely with UAE authorities in celebrating cultural achievements – for instance, she hailed the Louvre Abu Dhabi's success and backed new programs like MuseoPro, a training scheme for museum professionals from the UAE and France. Culture Ministry's Role in Relations: The Culture Ministry under Dati plays a key role in the soft power and people-to-people dimension of UAE-France relations. It oversees the implementation of bilateral agreements on museums, arts, and education. For instance, Dati's ministry is responsible for the French side of the Louvre Abu Dhabi partnership, ensuring continued support from France's museums and lending of artworks. It also guides projects like the restoration of historic sites (one recent plan involves French expertise helping restore the Grand Trianon palace in Versailles, funded with Emirati support, as noted during bilateral talks. The ministry facilitates French cultural events in the Emirates – film festivals, literary fairs, concerts – often in coordination with the UAE's Ministry of Culture and Tourism. Under Dati, the ministry has placed emphasis on educational exchanges: expanding the network of French schools in the UAE and bolstering institutions like Sorbonne University Abu Dhabi (SUAD). During her February 2024 visit to Abu Dhabi, Dati engaged with SUAD's new academic projects and reaffirmed France's commitment to its success. Notable Cultural Agreements and Exchanges: Several high-profile cultural agreements mark Dati's tenure in engaging the UAE. One cornerstone is the Louvre Abu Dhabi accord; a 30-year agreement under which France provides expertise, artwork loans, and special exhibitions to the UAE's Louvre (in return for significant funding that supports French museums). Dati has upheld this agreement and participated in events celebrating its milestones. Another key development is the ongoing support for Sorbonne University Abu Dhabi. In 2024, France and the UAE created new strategic plans to expand SUAD, which Dati discussed during her visit. Both countries declared 2023 as a year of Emirati-French Cultural Dialogue, featuring dozens of events. On heritage, the UAE has financed renovations of French cultural sites (such as the Sheikh Khalifa bin Zayed Theatre at Château de Fontainebleau), and France has sent archaeological teams to UAE historic sites – agreements underpin these exchanges. Through these concrete engagements – museums, academia, arts training, and cultural honors – Dati has further enhanced French and Emirati cultural institutions, creating a robust fabric of bilateral exchange. Alignment and Potential Points of Friction: Culturally, France and the UAE are highly aligned, and Dati's approach underscores this harmony. Both governments see culture as a cornerstone of their bilateral relationship and as a means of soft power. The UAE has heavily invested in world-class cultural projects (museums, galleries universities) and looks to France as a partner of choice for expertise and prestige, which links with France's goal of spreading Francophone culture abroad. Potential areas of divergence are minor: one could be subversive artistic freedom, as France has a very liberal arts environment. This has not caused open friction; exhibitions and programs are carefully curated to respect local norms. Under Dati's tenure, the Ministry of Culture has continued to promote the French language, education exchanges, and cultural programs across African countries, aiming to preserve France's historic soft power. Her ministry is cognizant that the UAE also exercises soft power in Africa, funding mosques, churches, cultural festivals, and humanitarian initiatives (such as museums or hospitals) in various African states.One notable Franco-Emirati cultural collaboration actually exemplifies how the two countries can work together instead of compete: the ALIPH foundation (Alliance for the Protection of Heritage in Conflict Areas), launched jointly by France and the UAE, has financed the restoration of cultural treasures in African nations such as Mali and Sudan. Dati's tenure reflects overwhelming alignment in valuing cultural cooperation, with virtually no public disagreements. Any differences in cultural values are navigated diplomatically so that the overall narrative remains one of mutual respect. Engagement with the Minister: Rachida Dati is likely to greet a senior UAE visitor with great warmth and positivity, especially if the visit touches on cultural or educational themes. Her talking points would center on friendship: she would praise the UAE's cultural vision (as she did in calling Louvre Abu Dhabi a cornerstone of relations.",
            influence: "high",
            imageUrl: "/lovable-uploads/Picture_13.png"
          },
          {
            name: "H.E. Eric Lombard",
            title: "Minister of Economy, Finance and Industry",
            description: "Pragmatic economist focused on collaborative economic ties with UAE, navigating competition carefully to protect French commercial interests in Africa.",
            extendedDescription: "UAE-Related Statements and Economic Policies: Éric Lombard, as France's Finance and Economy Minister, has emphasized strong economic ties and investment partnerships with the UAE. He often points to the vitality of bilateral trade – which grew nearly 17% in 2022 to reach about AED 29.5 billion (US$8 billion) as a sign of robust engagement. Lombard has publicly praised the 'dynamism of the bilateral economic relationship' that has led to ambitious joint projects, particularly in areas like artificial intelligence and the green transition, which he identifies as strategic priorities shared by France and the UAE. He warmly welcomed the UAE's massive investment (up to €50 billion) in developing Europe's largest AI hub in France, calling it clear evidence that both nations are committed to leading the 'AI revolution' together. In terms of policy, Lombard advocates for France to remain an attractive destination for Emirati investment – he supports frameworks that facilitate UAE sovereign wealth funds investing in French industries (from energy to infrastructure). He also underscores the importance of reciprocal access for French businesses in the UAE's booming market. Lombard's economic outlook with the UAE includes cooperation on energy security (backing deals that ensure stable UAE oil & LNG supplies to France and on climate finance (given the UAE's role in renewables and France's push for green tech). Notably, he aligns with UAE leaders like Dr. Sultan Al Jaber on promoting sustainable growth: at the UAE-France Business Council in 2025, Lombard echoed the commitment to 'sustainable economic and social growth' as a shared aspiration. Overall, Lombard's statements reflect an approach of optimism and partnership – highlighting investment, innovation, and sustainable development as pillars of the France-UAE economic relationship. Ministry's Role in Economic Relations: Lombard's Economy and Finance Ministry is central to advancing trade, investment, and industry cooperation between France and the UAE. The ministry leads delegations and forums – for instance, Lombard took part in the UAE-France High-Level Business Council meeting in Paris (Feb 2025) alongside over 50 companies from both countries. His ministry facilitates such dialogues to identify new commercial opportunities and resolve any trade barriers. It also oversees bilateral financial agreements: one example is managing joint investment funds (the UAE has partnered with French institutions like Bpifrance and Caisse des Dépôts on investment initiatives). Under Lombard, France has reinforced the Comprehensive Strategic Energy Partnership with the UAE, coordinating with companies like TotalEnergies and ADNOC on projects ranging from oil supply agreements to renewable energy ventures. The Economy Ministry also works on infrastructure partnerships – a recent highlight being the inauguration of a major container terminal at Abu Dhabi's Khalifa Port by a French company (CMA CGM) in joint venture with Abu Dhabi Ports, a project worth AED 3.1 billion. Lombard's team likely played a role in supporting this French investment abroad. Additionally, the ministry looks after export promotion: France's aerospace, luxury goods, and agriculture sectors all export significantly to the UAE (French exports to the UAE were about $5.1 billion in 2023, including aircraft engines, jewelry, perfumes, and medicines. Lombard's ministry provides export credits and political backing for big contracts (such as Airbus or defense sales) and ensures that trade agreements (like UAE's possible inclusion in EU preferential arrangements) align with French interests. Major Economic Agreements & Investments: Recent years have seen significant bilateral economic agreements, many shepherded or supported by Lombard. In energy, France and the UAE signed a landmark deal in July 2022 to cooperate on energy supply and security – ensuring the UAE would help compensate for reduced Russian energy imports to Europe. This included collaboration on liquefied natural gas and diesel supplies, as well as investments in renewable energy and hydrogen. Following that, a Climate Action MoU was signed (UAE's COP28 team with France's Energy Transition Ministry) to bolster joint work on clean energy and carbon reduction. On the investment front, the UAE committed tens of billions of euros to France's economy: the headline being the up to €50 billion for the AI & tech sector (data centers, research and development, semiconductor chips) announced in 2023–2025. Additionally, Mubadala and other Emirati sovereign wealth funds have partnered with France in areas such as investments for startups and in French real estate and infrastructure. In November 2022, the two governments launched the UAE–France Business Council to institutionalize these deals; by its third meeting in 2025, it had overseen partnerships such as Masdar (UAE) with TotalEnergies (France) on clean energy projects in Africa/Asiaand ADNOC with Veolia on advanced water management solutions. France also supports UAE investments in French industry: e.g. UAE's EDGE group partnering with French firms on aerospace, or DP World investing in French ports logistics – often under memoranda facilitated by Lombard's ministry. Alignment and Potential Points of Friction: Economically, France and the UAE are closely aligned, and Lombard's outlook reinforces the complementary nature of their economies. Both countries seek diversification: the UAE invests in non-oil sectors and France welcomes this capital to boost industries like tech and energy. They share goals in energy transition – even as the UAE is a major oil producer, it has partnered with France on expanding renewables and even nuclear energy at a strategic level. A potential area of tension is that French commercial interests face fierce new competition as the UAE increases investment in Africa. Traditionally, France maintained dominant positions in West and Central Africa's markets through companies like TotalEnergies, Bolloré and Orange. Now, Lombard notes, Abu Dhabi's state-backed companies are outbidding and out-investing many French entities. For instance, DP World's multibillion-dollar port projects in Senegal and DRC have taken the spotlight as France's longtime port operator Bolloré sold off its Africa logistics business amidst such competition. In the energy sector, Lombard is keenly aware that the UAE is acquiring stakes in African oil and gas fields and leading renewable projects. TotalEnergies – once unrivaled in Africa – now finds UAE's ADNOC and Masdar present in markets including northern states and the Horn of Africa. This competition isn't limited to commerce; it translates into influence. Economic power gives Abu Dhabi political leverage with African governments, potentially sidelining France. Publicly, Minister Lombard has remained diplomatic, often highlighting areas for France-UAE economic cooperation. However, reporting indicates that within his ministry, there is recognition that France must adjust its approach. This has led to initiatives like offering French-backed alternative financing for African infrastructure and pushing EU tools like Global Gateway investments to keep European companies in play. Lombard also observes that the UAE's quick, large-scale financing appeals to African leaders more than Europe's slower, conditional aid. Likely Engagement with the Minister: Minister Éric Lombard is expected to engage positively with a senior UAE visitor, especially if the agenda involves economic or investment discussions.",
            influence: "high",
            imageUrl: "/lovable-uploads/Picture_12.png"
          }


        ],
      },





















      {
        id: "business",
        label: "Places of Interest",
        content: [
          {
            type: "subheading",
            content: "Places of Interest"
          },
          {
            type: "paragraph",
            content: "The following cultural institutions represent significant opportunities for enhancing UAE-France cultural diplomacy and showcasing the UAE's commitment to global heritage and artistic exchange."
          }
        ],
        keyContacts: [
          {
            name: "The Rodin Museum (Musée Rodin)",
            title: "",
            description: "The Rodin Museum (Musée Rodin) is a prominent cultural institution dedicated exclusively to the works of French sculptor Auguste Rodin. Established in 1919 at the Hôtel Biron, the museum operates independently from the French state budget, relying primarily on visitor revenue and limited-edition bronze casts of Rodin’s artworks for financial sustainability. The current director, Amélie Simier (appointed in 2021), oversees all museum operations, curatorial programmes, and strategic international collaborations. Simier’s administration is notably commercially driven, given the museum’s financial independence from the French state. The UAE maintains cultural ties with Musée Rodin primarily through the Louvre Abu Dhabi partnership. This relationship was notably exemplified by the loan of Rodin’s iconic sculpture The Thinker to Abu Dhabi in 2019, highlighting Abu Dhabi’s vision to become a regional and global cultural hub. This aligns with the UAE's broader strategic vision, represented by initiatives such as the Louvre Abu Dhabi and the Cultural District on Saadiyat Island (encompassing existing institutions like Manarat Al Saadiyat and current projects such as the Guggenheim Abu Dhabi, and the Sheikh Zayed Museum), provide potential for further cultural and artistic cooperation with the Rodin Museum. Engagement with Director Amélie Simier would likely focus on reinforcing existing UAE-France cultural collaborations or exploring new avenues for artwork exchanges or educational initiatives.",
            influence: "high",
            imageUrl: "/lovable-uploads/Picture_18.jpg"
          },
          {
            name: "Cathédrale Notre-Dame de Paris",
            title: "",
            description: "Notre-Dame Cathedral, originally constructed in the 12th century, is among France's most revered cultural and religious landmarks. Notre-Dame Cathedral, reopened on 7 December 2024 after extensive restoration following a catastrophic fire in 2019. The cathedral is a national symbol deeply tied to French identity, and holds significant political importance in France, especially following the devastating 2019 fire. French President Emmanuel Macron positioned the cathedral’s restoration as a matter of national pride, pledging completion by late 2024, thereby placing the project under heightened political scrutiny. The high-profile nature of this restoration has amplified political sensitivities, particularly debates over heritage preservation versus modernisation, management transparency, and financial accountability relating to international donations. The UAE expressed strong diplomatic and cultural solidarity with France following the 2019 fire, notably through public statements from UAE President Sheikh Mohamed bin Zayed Al Nahyan. This solidarity is consistent with the UAE’s broader cultural ambitions, demonstrated through initiatives such as Louvre Abu Dhabi and Saadiyat Island’s Cultural District, including Manarat Al Saadiyat and planned venues such as Guggenheim Abu Dhabi. Potential future UAE involvement might centre on diplomatic or ceremonial attendance at Notre-Dame’s continuing schedule of reopening events, opportunities for joint cultural and interfaith dialogue, or collaborations highlighting mutual commitment to global heritage preservation.",
            influence: "high",
            imageUrl: "/lovable-uploads/Picture_17.png"
          }
        ]
      }

    ],


  },
  {
    id: "unfriendly-entities",
    title: "Notable French Entities Unfriendly Toward the UAE",
    content: [
      {
        type: "paragraph",
        content: "Despite the strong bilateral relationship, certain French political figures, civil society organizations, and media outlets maintain critical positions toward UAE policies and French-Emirati cooperation."
      }
    ],
    tabs: [
      {
        id: "critics",
        label: "Political Critics",
        content: [
          {
            type: "subheading",
            content: "Political Critics"
          },
          {
            type: "paragraph",
            content: "Left-wing and environmentalist political voices in France regularly question the ethical dimensions of France's strategic partnership with the UAE, particularly regarding arms sales and human rights concerns."
          },
          {
            type: "list",
            content: "Notable critical entities:",
            items: [
              "Jean-Luc Mélenchon, leader of La France Insoumise: Vocal critic of French arms exports and has questioned Gulf cooperation based on ideological grounds.",
              "Europe Ecology–The Greens (EELV): Some party members frequently challenge France’s ties with Gulf states over human rights and environmental concerns."
            ]
          }
        ]
      },
      {
        id: "islamist",
        label: "Civil Society and Media Critics",
        content: [
          {
            type: "subheading",
            content: "Civil Society and Media Critics"
          },
          {
            type: "paragraph",
            content: "Several influential human rights organizations and media platforms in France maintain scrutiny of UAE activities, with some specialized outlets like Intelligence Online conducting targeted reporting on UAE security and technology entities."
          },
          {
            type: "list",
            content: "Notable critical organizations:",
            items: [
              "Human Rights Watch (France office) and International Federation for Human Rights (FIDH) have publicly criticised aspects of UAE’s domestic and foreign policies.",
              "Media outlets (Mediapart, Le Monde, and Libération): Occasional critical coverage of UAE regional actions and lobbying efforts; however, these reports rarely significantly impact high-level bilateral relations.",
              "Intelligence Online is a Paris based OSINT company that reports on intelligence personnel and topics of interest.  It actively targets the EDGE Group, G42 and other UAE entities with negative reporting."
            ]
          }
        ]
      }
    ],


    // graphData: {
    //   nodes: [
    //     { id: "uae_govt", label: "UAE Government", group: "uae", size: 30 },
    //     { id: "critics_political", label: "Political Critics", group: "sweden", size: 20 },
    //     { id: "critics_ngo", label: "Critical NGOs", group: "sweden", size: 20 },
    //     { id: "critics_media", label: "Media Critics", group: "sweden", size: 18 },
    //     { id: "critics_academic", label: "Academic Critics", group: "sweden", size: 15 },
    //     { id: "islamist_orgs", label: "Islamist-Leaning Organizations", group: "neutral", size: 20 },
    //     { id: "human_rights", label: "Human Rights Organizations", group: "neutral", size: 18 }
    //   ],
    //   links: [
    //     { source: "critics_political", target: "uae_govt", value: 3, dashed: true },
    //     { source: "critics_ngo", target: "uae_govt", value: 3, dashed: true },
    //     { source: "critics_media", target: "uae_govt", value: 2, dashed: true },
    //     { source: "critics_academic", target: "uae_govt", value: 2, dashed: true },
    //     { source: "islamist_orgs", target: "uae_govt", value: 4, dashed: true },
    //     { source: "human_rights", target: "uae_govt", value: 3, dashed: true },
    //     { source: "critics_political", target: "critics_ngo", value: 2 },
    //     { source: "critics_media", target: "critics_ngo", value: 2 },
    //     { source: "critics_academic", target: "critics_ngo", value: 1 },
    //     { source: "islamist_orgs", target: "critics_political", value: 2 },
    //     { source: "human_rights", target: "critics_ngo", value: 3 }
    //   ]
    // }

    graphData: {
      nodes: [
        { id: "uae_govt", label: "UAE Government", group: "uae", size: 30 },
        { id: "melenchon", label: "La France Insoumise (Mélenchon)", group: "france", size: 22 },
        { id: "greens", label: "Europe Ecology–The Greens", group: "france", size: 20 },
        { id: "hrw_fidh", label: "Human Rights Watch/FIDH", group: "france", size: 22 },
        { id: "media_outlets", label: "French Media (Mediapart, Le Monde, Libération)", group: "france", size: 18 },
        { id: "intelligence_online", label: "Intelligence Online", group: "france", size: 19 },
        { id: "edge_g42", label: "UAE Tech/Defense Entities (EDGE, G42)", group: "uae", size: 22 },
        { id: "yemen_involvement", label: "UAE Yemen Involvement", group: "neutral", size: 20 }
      ],
      links: [
        { source: "melenchon", target: "uae_govt", value: 3, dashed: true },
        { source: "greens", target: "uae_govt", value: 3, dashed: true },
        { source: "hrw_fidh", target: "uae_govt", value: 4, dashed: true },
        { source: "media_outlets", target: "uae_govt", value: 2, dashed: true },
        { source: "intelligence_online", target: "edge_g42", value: 4, dashed: true },
        { source: "yemen_involvement", target: "uae_govt", value: 3 },
        { source: "hrw_fidh", target: "yemen_involvement", value: 4, dashed: true },
        { source: "melenchon", target: "hrw_fidh", value: 2 },
        { source: "greens", target: "hrw_fidh", value: 2 },
        { source: "media_outlets", target: "hrw_fidh", value: 3 },
        { source: "media_outlets", target: "intelligence_online", value: 2 },
        { source: "melenchon", target: "greens", value: 2 }
      ]
    }

  },


  {
    id: "interactive-visualisations",
    title: "Interactive Visualisations",
    
    content: [
      {
        type: "paragraph",
        content: "Below are a number of visusaltions which highlight current trends and themes in the UAE-France relationship discussed above."
      }
    ]
  },





  {
    id: "conclusion",
    title: "Conclusion",
    content: [
      {
        type: "paragraph",
        content: "Overall, UAE–France relations (2019–2025) have significantly strengthened, reflecting high mutual trust, deep strategic alignment, and multifaceted cooperation across defense, economy, culture, and technology. Differences on issues such as human rights or political Islam have been discreetly managed, reflecting mature diplomacy."
      }
    ],
    relationshipDimensions: [
      {
        name: "Overall Bilateral Strength",
        value: 90,
        description: "Strong strategic partnership with coordinated diplomacy and crisis support"
      },
      {
        name: "Economic Partnership",
        value: 90,
        description: "Robust trade relationship with major investments and strategic energy cooperation"
      },
      {
        name: "Political Alignment",
        value: 75,
        description: "Strong alignment on core interests with some policy differences managed diplomatically"
      },
      {
        name: "Defense Cooperation",
        value: 95,
        description: "Deep military alliance with permanent French base and major arms agreements"
      },

      {
        name: "Future Cooperation Potential",
        value: 95,
        description: "Significant opportunities in AI, space technology, renewables, and cultural exchanges"
      }
    ]
  }
];
