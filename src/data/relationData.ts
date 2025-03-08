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
        year: "2023",
        title: "UAE Hosts COP28",
        description: "The UAE hosted the UN Climate Change Conference, highlighting its commitment to sustainability, an area where Sweden has extensive expertise.",
        type: "positive"
      },
      {
        year: "2024",
        title: "Legal Cooperation Agreements",
        description: "Sweden and the UAE sign new agreements on mutual legal assistance and extradition to combat organized crime.",
        type: "positive"
      },
      {
        year: "2024",
        title: "Tawdheef Job Fair",
        description: "Sweden became the first foreign country to host a national pavilion at the UAE's Tawdheef job fair.",
        type: "positive"
      }
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
            influence: "high",
            imageUrl: "/lovable-uploads/Picture_16.png"
          },
          {
            name: "H.E. Alexis Michel Kohler",
            title: "Secretary General to the President (Elysée Palace)",
            description: "President Macron’s powerful aide who coordinates France-UAE relations pragmatically, balancing strategic partnership with subtle caution on UAE’s rising influence.",
            influence: "high",
            imageUrl: "/lovable-uploads/Picture_15.png"
          },
          {
            name: "H.E. Sebastian Lecornu",
            title: "Minister of Defense",
            description: "Strong advocate for deeper defence ties with the UAE, viewing Abu Dhabi as a strategic ally in offsetting France’s reduced military presence in Africa.",
            influence: "high",
            imageUrl: "/lovable-uploads/Picture_14.png"
          },
          {
            name: "H.E. Rachida Dati",
            title: "Minister of Culture",
            description: "High-profile advocate for France-UAE cultural diplomacy, leveraging shared cultural projects to strengthen bilateral ties and avoid political tensions.",
            influence: "high",
            imageUrl: "/lovable-uploads/Picture_13.png"
          },
          {
            name: "H.E. Eric Lombard",
            title: "Minister of Economy, Finance and Industry",
            description: "Pragmatic economist focused on collaborative economic ties with UAE, navigating competition carefully to protect French commercial interests in Africa.",
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
