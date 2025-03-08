
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const NetworkDiagram: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [selectedNode, setSelectedNode] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');



  // // Define data
  // const nodes = [
  //   // Major Topics/Themes
  //   { id: 'security', label: 'Security', group: 'theme', size: 40, count: 8 },
  //   { id: 'diplomacy', label: 'Diplomacy', group: 'theme', size: 45, count: 10 },
  //   { id: 'defense', label: 'Defense', group: 'theme', size: 35, count: 7 },
  //   { id: 'health', label: 'Health', group: 'theme', size: 30, count: 4 },
  //   { id: 'tourism', label: 'Tourism', group: 'theme', size: 25, count: 3 },
  //   { id: 'extradition', label: 'Extradition', group: 'theme', size: 20, count: 2 },
    
  //   // Countries/Entities
  //   { id: 'uae', label: 'UAE', group: 'country', size: 50, count: 20 },
  //   { id: 'sweden', label: 'Sweden', group: 'country', size: 50, count: 20 },
  //   { id: 'ajman', label: 'Ajman', group: 'entity', size: 20, count: 2 },
  //   { id: 'abu_dhabi', label: 'Abu Dhabi', group: 'entity', size: 15, count: 3 },
  //   { id: 'dubai', label: 'Dubai', group: 'entity', size: 15, count: 3 },
    
  //   // Specific Events/Topics
  //   { id: 'shooting', label: 'School Shooting', group: 'event', size: 30, count: 6 },
  //   { id: 'mpox', label: 'Mpox', group: 'event', size: 25, count: 2 },
  //   { id: 'cable_damage', label: 'Baltic Cable', group: 'event', size: 15, count: 2 },
  //   { id: 'ambassador', label: 'Ambassador', group: 'entity', size: 15, count: 1 },
  //   { id: 'legal_cooperation', label: 'Legal Cooperation', group: 'entity', size: 20, count: 2 },
    
  //   // People
  //   { id: 'minister_justice_uae', label: 'UAE Justice Minister', group: 'person', size: 15, count: 1 },
  //   { id: 'minister_justice_sweden', label: 'Swedish Justice Minister', group: 'person', size: 15, count: 1 },
    
  //   // Military/Defense
  //   { id: 'saab', label: 'Saab', group: 'entity', size: 15, count: 1 },
  //   { id: 'defense_systems', label: 'Defense Systems', group: 'entity', size: 20, count: 2 },
  //   { id: 'einride', label: 'Einride', group: 'entity', size: 15, count: 1 },
    
  //   // Media
  //   { id: 'news_sources', label: 'News Sources', group: 'entity', size: 30, count: 5 },
  //   { id: 'the_national', label: 'The National', group: 'media', size: 20, count: 4 },
  //   { id: 'travel_world', label: 'Travel & Tour World', group: 'media', size: 25, count: 4 },
  //   { id: 'dubai_eye', label: 'Dubai Eye', group: 'media', size: 20, count: 2 },
  //   { id: 'khaleej_times', label: 'Khaleej Times', group: 'media', size: 20, count: 3 },
  // ];



  const nodes = [
    // Major Topics/Themes
    { id: 'security', label: 'Security & Defense', group: 'theme', size: 45, count: 9 },
    { id: 'economy', label: 'Economic Partnerships', group: 'theme', size: 40, count: 8 },
    { id: 'culture', label: 'Cultural Exchange', group: 'theme', size: 35, count: 7 },
    { id: 'energy', label: 'Energy Collaboration', group: 'theme', size: 40, count: 8 },
    { id: 'technology', label: 'Technological Innovation', group: 'theme', size: 35, count: 7 },
    
    // Countries/Entities
    { id: 'uae', label: 'UAE', group: 'country', size: 50, count: 20 },
    { id: 'france', label: 'France', group: 'country', size: 50, count: 20 },
    { id: 'abu_dhabi', label: 'Abu Dhabi', group: 'entity', size: 25, count: 5 },
    { id: 'dubai', label: 'Dubai', group: 'entity', size: 25, count: 5 },
    { id: 'paris', label: 'Paris', group: 'entity', size: 20, count: 4 },
    { id: 'nice', label: 'Nice', group: 'entity', size: 15, count: 3 },
    { id: 'lyon', label: 'Lyon', group: 'entity', size: 15, count: 3 },
    
    // Specific Events/Topics
    { id: 'ai_centre', label: 'AI Data Centre', group: 'event', size: 30, count: 6 },
    { id: 'rafale_deal', label: 'Rafale Jets Deal', group: 'event', size: 30, count: 6 },
    { id: 'energy_agreement', label: 'Energy Agreement', group: 'event', size: 25, count: 5 },
    { id: 'xrg_establishment', label: 'XRG Establishment', group: 'event', size: 20, count: 4 },
    { id: 'louvre_abu_dhabi', label: 'Louvre Abu Dhabi', group: 'entity', size: 25, count: 5 },
    { id: 'sorbonne_abu_dhabi', label: 'Sorbonne Abu Dhabi', group: 'entity', size: 20, count: 4 },
    
    // People
    { id: 'macron', label: 'Emmanuel Macron', group: 'person', size: 25, count: 5 },
    { id: 'mbz', label: 'Sheikh Mohamed bin Zayed', group: 'person', size: 25, count: 5 },
    { id: 'al_mubarak', label: 'Khaldoon Al Mubarak', group: 'person', size: 20, count: 4 },
    { id: 'descotes', label: 'Anne-Marie Descotes', group: 'person', size: 20, count: 4 },
    
    // Companies/Organizations
    { id: 'totalenergies', label: 'TotalEnergies', group: 'entity', size: 25, count: 5 },
    { id: 'airbus', label: 'Airbus', group: 'entity', size: 25, count: 5 },
    { id: 'dassault', label: 'Dassault Aviation', group: 'entity', size: 20, count: 4 },
    { id: 'adnoc', label: 'ADNOC', group: 'entity', size: 25, count: 5 },
    { id: 'mubadala', label: 'Mubadala', group: 'entity', size: 20, count: 4 },
    { id: 'emirates_airline', label: 'Emirates Airline', group: 'entity', size: 15, count: 3 },
    
    // Media
    { id: 'news_sources', label: 'News Sources', group: 'entity', size: 30, count: 6 },
    { id: 'le_monde', label: 'Le Monde', group: 'media', size: 20, count: 4 },
    { id: 'the_national', label: 'The National', group: 'media', size: 20, count: 4 },
    { id: 'gulf_news', label: 'Gulf News', group: 'media', size: 15, count: 3 },
    { id: 'france24', label: 'France 24', group: 'media', size: 15, count: 3 },
    { id: 'wam', label: 'WAM News Agency', group: 'media', size: 15, count: 3 },
  ];




  // const links = [
  //   // Main country connections
  //   { source: 'uae', target: 'sweden', value: 10, type: 'main' },
    
  //   // Theme connections to countries
  //   { source: 'uae', target: 'security', value: 6, type: 'theme' },
  //   { source: 'sweden', target: 'security', value: 6, type: 'theme' },
  //   { source: 'uae', target: 'diplomacy', value: 8, type: 'theme' },
  //   { source: 'sweden', target: 'diplomacy', value: 8, type: 'theme' },
  //   { source: 'uae', target: 'defense', value: 7, type: 'theme' },
  //   { source: 'sweden', target: 'defense', value: 7, type: 'theme' },
  //   { source: 'uae', target: 'health', value: 4, type: 'theme' },
  //   { source: 'sweden', target: 'health', value: 4, type: 'theme' },
  //   { source: 'uae', target: 'tourism', value: 3, type: 'theme' },
  //   { source: 'sweden', target: 'tourism', value: 3, type: 'theme' },
  //   { source: 'uae', target: 'extradition', value: 2, type: 'theme' },
  //   { source: 'sweden', target: 'extradition', value: 2, type: 'theme' },
    
  //   // UAE entities
  //   { source: 'uae', target: 'ajman', value: 2, type: 'entity' },
  //   { source: 'uae', target: 'abu_dhabi', value: 3, type: 'entity' },
  //   { source: 'uae', target: 'dubai', value: 3, type: 'entity' },
    
  //   // Specific events
  //   { source: 'sweden', target: 'shooting', value: 6, type: 'event' },
  //   { source: 'uae', target: 'shooting', value: 4, type: 'event' },
  //   { source: 'diplomacy', target: 'shooting', value: 3, type: 'theme-event' },
    
  //   { source: 'uae', target: 'mpox', value: 2, type: 'event' },
  //   { source: 'sweden', target: 'mpox', value: 2, type: 'event' },
  //   { source: 'health', target: 'mpox', value: 2, type: 'theme-event' },
    
  //   { source: 'sweden', target: 'cable_damage', value: 2, type: 'event' },
  //   { source: 'security', target: 'cable_damage', value: 2, type: 'theme-event' },
    
  //   // Diplomacy connections
  //   { source: 'diplomacy', target: 'ambassador', value: 2, type: 'theme-entity' },
  //   { source: 'diplomacy', target: 'legal_cooperation', value: 3, type: 'theme-entity' },
  //   { source: 'extradition', target: 'legal_cooperation', value: 2, type: 'theme-entity' },
    
  //   // People connections
  //   { source: 'legal_cooperation', target: 'minister_justice_uae', value: 1, type: 'entity-person' },
  //   { source: 'legal_cooperation', target: 'minister_justice_sweden', value: 1, type: 'entity-person' },
  //   { source: 'extradition', target: 'minister_justice_uae', value: 1, type: 'theme-person' },
  //   { source: 'extradition', target: 'minister_justice_sweden', value: 1, type: 'theme-person' },
    
  //   // Defense connections
  //   { source: 'defense', target: 'saab', value: 1, type: 'theme-entity' },
  //   { source: 'defense', target: 'defense_systems', value: 2, type: 'theme-entity' },
  //   { source: 'sweden', target: 'saab', value: 1, type: 'country-entity' },
    
  //   // Technology connections
  //   { source: 'uae', target: 'einride', value: 1, type: 'country-entity' },
  //   { source: 'sweden', target: 'einride', value: 1, type: 'country-entity' },
    
  //   // News source connections
  //   { source: 'uae', target: 'news_sources', value: 5, type: 'media' },
  //   { source: 'sweden', target: 'news_sources', value: 5, type: 'media' },
  //   { source: 'news_sources', target: 'the_national', value: 4, type: 'media-outlet' },
  //   { source: 'news_sources', target: 'travel_world', value: 4, type: 'media-outlet' },
  //   { source: 'news_sources', target: 'dubai_eye', value: 2, type: 'media-outlet' },
  //   { source: 'news_sources', target: 'khaleej_times', value: 3, type: 'media-outlet' },
  //   { source: 'shooting', target: 'khaleej_times', value: 2, type: 'event-media' },
  //   { source: 'mpox', target: 'travel_world', value: 2, type: 'event-media' },
  //   { source: 'defense', target: 'the_national', value: 2, type: 'theme-media' },
  // ];


  const links = [
    // Main country connections
    { source: 'uae', target: 'france', value: 10, type: 'main' },
    
    // Theme connections to countries
    { source: 'uae', target: 'security', value: 9, type: 'theme' },
    { source: 'france', target: 'security', value: 9, type: 'theme' },
    { source: 'uae', target: 'economy', value: 8, type: 'theme' },
    { source: 'france', target: 'economy', value: 8, type: 'theme' },
    { source: 'uae', target: 'culture', value: 7, type: 'theme' },
    { source: 'france', target: 'culture', value: 7, type: 'theme' },
    { source: 'uae', target: 'energy', value: 8, type: 'theme' },
    { source: 'france', target: 'energy', value: 8, type: 'theme' },
    { source: 'uae', target: 'technology', value: 7, type: 'theme' },
    { source: 'france', target: 'technology', value: 7, type: 'theme' },
    
    // UAE entities
    { source: 'uae', target: 'abu_dhabi', value: 5, type: 'entity' },
    { source: 'uae', target: 'dubai', value: 5, type: 'entity' },
    
    // France entities
    { source: 'france', target: 'paris', value: 4, type: 'entity' },
    { source: 'france', target: 'nice', value: 3, type: 'entity' },
    { source: 'france', target: 'lyon', value: 3, type: 'entity' },
    
    // Specific events and connections
    { source: 'technology', target: 'ai_centre', value: 6, type: 'theme-event' },
    { source: 'uae', target: 'ai_centre', value: 6, type: 'event' },
    { source: 'france', target: 'ai_centre', value: 6, type: 'event' },
    
    { source: 'security', target: 'rafale_deal', value: 6, type: 'theme-event' },
    { source: 'uae', target: 'rafale_deal', value: 6, type: 'event' },
    { source: 'france', target: 'rafale_deal', value: 6, type: 'event' },
    
    { source: 'energy', target: 'energy_agreement', value: 5, type: 'theme-event' },
    { source: 'uae', target: 'energy_agreement', value: 5, type: 'event' },
    { source: 'france', target: 'energy_agreement', value: 5, type: 'event' },
    
    { source: 'economy', target: 'xrg_establishment', value: 4, type: 'theme-event' },
    { source: 'uae', target: 'xrg_establishment', value: 4, type: 'event' },
    
    // Cultural entities
    { source: 'culture', target: 'louvre_abu_dhabi', value: 5, type: 'theme-entity' },
    { source: 'abu_dhabi', target: 'louvre_abu_dhabi', value: 5, type: 'entity-entity' },
    { source: 'paris', target: 'louvre_abu_dhabi', value: 4, type: 'entity-entity' },
    
    { source: 'culture', target: 'sorbonne_abu_dhabi', value: 4, type: 'theme-entity' },
    { source: 'abu_dhabi', target: 'sorbonne_abu_dhabi', value: 4, type: 'entity-entity' },
    { source: 'paris', target: 'sorbonne_abu_dhabi', value: 3, type: 'entity-entity' },
    
    // People connections
    { source: 'france', target: 'macron', value: 5, type: 'country-person' },
    { source: 'uae', target: 'mbz', value: 5, type: 'country-person' },
    { source: 'uae', target: 'al_mubarak', value: 4, type: 'country-person' },
    { source: 'france', target: 'descotes', value: 4, type: 'country-person' },
    
    // Company connections
    { source: 'france', target: 'totalenergies', value: 5, type: 'country-entity' },
    { source: 'france', target: 'airbus', value: 5, type: 'country-entity' },
    { source: 'france', target: 'dassault', value: 4, type: 'country-entity' },
    { source: 'uae', target: 'adnoc', value: 5, type: 'country-entity' },
    { source: 'uae', target: 'mubadala', value: 4, type: 'country-entity' },
    { source: 'uae', target: 'emirates_airline', value: 3, type: 'country-entity' },
    
    // Defense connections
    { source: 'security', target: 'dassault', value: 4, type: 'theme-entity' },
    { source: 'rafale_deal', target: 'dassault', value: 4, type: 'event-entity' },
    
    // Energy connections
    { source: 'energy', target: 'totalenergies', value: 5, type: 'theme-entity' },
    { source: 'energy', target: 'adnoc', value: 5, type: 'theme-entity' },
    { source: 'energy_agreement', target: 'totalenergies', value: 4, type: 'event-entity' },
    { source: 'energy_agreement', target: 'adnoc', value: 4, type: 'event-entity' },
    
    // News source connections
    { source: 'uae', target: 'news_sources', value: 6, type: 'media' },
    { source: 'france', target: 'news_sources', value: 6, type: 'media' },
    { source: 'news_sources', target: 'le_monde', value: 4, type: 'media-outlet' },
    { source: 'news_sources', target: 'the_national', value: 4, type: 'media-outlet' },
    { source: 'news_sources', target: 'gulf_news', value: 3, type: 'media-outlet' },
    { source: 'news_sources', target: 'france24', value: 3, type: 'media-outlet' },
    { source: 'news_sources', target: 'wam', value: 3, type: 'media-outlet' },
    { source: 'rafale_deal', target: 'le_monde', value: 3, type: 'event-media' },
    { source: 'ai_centre', target: 'the_national', value: 3, type: 'event-media' },
    { source: 'culture', target: 'france24', value: 3, type: 'theme-media' },
  ];

  
  // Colors for node groups
  const colorMap: Record<string, string> = {
    theme: '#4299e1',    // blue
    country: '#48bb78',  // green
    entity: '#ed8936',   // orange
    event: '#9f7aea',    // purple
    person: '#f56565',   // red
    media: '#718096',    // gray
  };

  // const getNodeDescription = (node: any) => {
  //   switch(node.id) {
  //     case 'uae':
  //       return "Central to most articles, UAE appears in relation to diplomacy, defense, trade, and responses to international events.";
  //     case 'sweden':
  //       return "Featured across all articles, with significant coverage of domestic events that impact bilateral relations.";
  //     case 'security':
  //       return "Major theme covering topics from physical security (school shooting) to infrastructure security (Baltic cable).";
  //     case 'diplomacy':
  //       return "Most prominent theme, covering ambassadorial appointments, official statements, and agreements.";
  //     case 'defense':
  //       return "Growing area of cooperation, with increased defense systems collaboration mentioned in multiple articles.";
  //     case 'shooting':
  //       return "The school shooting in Orebro became a significant event in diplomatic relations with the UAE's formal condemnation.";
  //     case 'health':
  //       return "Featured in articles about mpox detection in both countries and related travel warnings.";
  //     case 'tourism':
  //       return "Covered in relation to Ajman's promotional activities in Scandinavia and potential impact of health warnings.";
  //     case 'extradition':
  //       return "Subject of formal agreements between the UAE and Sweden signed in November 2024.";
  //     case 'mpox':
  //       return "Health concern detected in both countries with related travel implications.";
  //     default:
  //       return `Appears in ${node.count} articles or mentions related to UAE-France relations.`;
  //   }
  // };



  const getNodeDescription = (node: any) => {
    switch(node.id) {
      case 'uae':
        return "Central to bilateral relations with France, with significant partnerships in defense, energy, culture, and economic development.";
      case 'france':
        return "Major European partner with the UAE across multiple sectors, including defense, culture, and technology.";
      case 'security':
        return "Major theme covering defense cooperation, arms deals, and France's military presence in Abu Dhabi since 2009.";
      case 'economy':
        return "Significant focus with bilateral trade reaching €4.8 billion in 2019 and AED 44 billion in 2024, with over 600 French companies in the UAE.";
      case 'culture':
        return "Exemplified by flagship projects like the Louvre Abu Dhabi and Sorbonne University Abu Dhabi.";
      case 'energy':
        return "Strategic collaboration in renewable energy, hydrogen, and nuclear projects, with major investments from both countries.";
      case 'technology':
        return "Emerging priority with focus on AI, with plans for a 1-gigawatt data centre investment worth $30-50 billion.";
      case 'rafale_deal':
        return "Major defense agreement signed in 2021 for UAE's purchase of 80 Rafale fighter jets and 12 Airbus helicopters worth €16 billion.";
      case 'ai_centre':
        return "Landmark technological cooperation with plans for a 1-gigawatt AI data centre announced in February 2025.";
      case 'louvre_abu_dhabi':
        return "Flagship cultural project symbolizing the strong cultural ties between Abu Dhabi and France.";
      case 'abu_dhabi':
        return "Home to key French-UAE collaborations including the Louvre Abu Dhabi, Sorbonne University Abu Dhabi, and France's Gulf military base.";
      case 'dubai':
        return "Hosts 500 of the 1,000 French companies in the UAE and 75% of the 25,000 French nationals in the country.";
      case 'paris':
        return "Central hub for diplomatic and cultural relations, hosting the UAE Embassy and major bilateral meetings.";
      default:
        return `Appears in ${node.count} articles or mentions related to UAE-France relations.`;
    }
  };















  useEffect(() => {
    if (!svgRef.current) return;

    // Clear previous SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    // Filter nodes and links based on selected category
    const filteredNodes = selectedCategory === 'all' 
      ? nodes 
      : nodes.filter(node => node.group === selectedCategory || node.id === 'uae' || node.id === 'sweden');
    
    const filteredNodeIds = new Set(filteredNodes.map(node => node.id));
    
    const filteredLinks = selectedCategory === 'all'
      ? links
      : links.filter(link => 
          filteredNodeIds.has(link.source as string) && 
          filteredNodeIds.has(link.target as string));

    // Setup
    const width = 900;
    const height = 700;
    
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height]);
    
    // Add zoom capabilities
    const g = svg.append('g');
    
    svg.call(
      // @ts-ignore
      d3.zoom()
        .extent([[0, 0], [width, height]])
        .scaleExtent([0.1, 4])
        .on('zoom', (event: any) => {
          g.attr('transform', event.transform);
        })
    );
    
    // Create force simulation
    const simulation: any = d3.forceSimulation(filteredNodes)
      // @ts-ignore
      .force('link', d3.forceLink(filteredLinks).id((d: any) => d.id).distance((d: any) => 150 - d.value * 5))
      .force('charge', d3.forceManyBody().strength(-150))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius((d: any) => Math.sqrt(d.size) * 2.5));
    
    // Create the links
    const link = g.append('g')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.6)
      .selectAll('line')
      .data(filteredLinks)
      .join('line')
      .attr('stroke-width', (d: any) => Math.sqrt(d.value));
    
    // Create the nodes
    const node = g.append('g')
      .selectAll('circle')
      .data(filteredNodes)
      .join('circle')
      .attr('r', (d: any) => Math.sqrt(d.size) * 1.8)
      .attr('fill', (d: any) => colorMap[d.group])
      .attr('stroke', '#fff')
      .attr('stroke-width', 1.5)
      .on('click', (event: any, d: any) => {
        setSelectedNode(d);
      })
      .call(drag(simulation));
    
    // Add node labels
    const text = g.append('g')
      .selectAll('text')
      .data(filteredNodes)
      .join('text')
      .text((d: any) => d.label)
      .attr('font-size', (d: any) => Math.sqrt(d.size) * 0.8 + 'px')
      .attr('dx', (d: any) => Math.sqrt(d.size) * 2 + 1)
      .attr('dy', '.35em')
      .style('pointer-events', 'none')
      .attr('fill', '#333');
    
    // Create drag handler
    function drag(simulation: any) {
      function dragstarted(event: any) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }
      
      function dragged(event: any) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }
      
      function dragended(event: any) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      }
      
      return d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended);
    }
    
    // Update positions
    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);
      
      node
        .attr('cx', (d: any) => d.x)
        .attr('cy', (d: any) => d.y);
      
      text
        .attr('x', (d: any) => d.x)
        .attr('y', (d: any) => d.y);
    });
    
    // Add hover effect
    node.on('mouseover', function() {
      d3.select(this).attr('stroke', '#333').attr('stroke-width', 2);
    }).on('mouseout', function() {
      d3.select(this).attr('stroke', '#fff').attr('stroke-width', 1.5);
    });
    
  }, [selectedCategory]);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'theme', label: 'Themes' },
    { id: 'country', label: 'Countries' },
    { id: 'entity', label: 'Entities' },
    { id: 'event', label: 'Events' },
    { id: 'person', label: 'People' },
    { id: 'media', label: 'Media' }
  ];

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 font-display text-navy-dark">UAE-France News Content Network Analysis</h2>
      <p className="text-center text-gray-600 mb-6">Interactive analysis of central topics to UAE-France relations as recently reported in open source reporting</p>

      <div className="mb-4 space-x-2 flex flex-wrap justify-center">
        {categories.map(category => (
          <button
            key={category.id}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors mb-2
              ${selectedCategory === category.id
                ? 'bg-sweden text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
      
      <div className="w-full flex justify-center ">
        <div className="w-full max-w-4xl rounded-lg relative shadow-lg">
          <svg ref={svgRef} className="border rounded-lg bg-gray-50"></svg>
          
          {selectedNode && (
            <div className="absolute top-4 right-4 p-4 bg-white border rounded-lg shadow-lg max-w-xs">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg">{selectedNode.label}</h3>
                <button 
                  className="text-gray-500 hover:text-gray-700" 
                  onClick={() => setSelectedNode(null)}
                >
                  ✕
                </button>
              </div>
              <div className="text-sm">
                <p><span className="font-medium">Category:</span> {selectedNode.group.charAt(0).toUpperCase() + selectedNode.group.slice(1)}</p>
                <p><span className="font-medium">Mentions:</span> {selectedNode.count}</p>
                <p className="mt-2">{getNodeDescription(selectedNode)}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-4 text-sm text-gray-600 max-w-4xl">
        <p className="mb-2"><strong>How to use:</strong> Click and drag nodes to reposition. Click on a node to see details. Use the category buttons to filter the network. Scroll to zoom in/out.</p>
        <div className="grid grid-cols-3 gap-2 mt-2">
          {Object.entries(colorMap).map(([group, color]) => (
            <div key={group} className="flex items-center">
              <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: color }}></div>
              <span>{group.charAt(0).toUpperCase() + group.slice(1)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NetworkDiagram;