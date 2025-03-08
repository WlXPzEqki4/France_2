import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const ThematicNetworkDiagram = () => {
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 960, height: 600 });

  useEffect(() => {
    // Handle window resize
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight - 100
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear previous rendering
    d3.select(svgRef.current).selectAll('*').remove();
    
    // Define the themes and their subthemes
    const themes = [
      {
        id: 'theme1',
        name: 'UAE-France Diplomatic & Economic Relations',
        type: 'main-theme',
        color: '#4E79A7',
        radius: 20
      },
      {
        id: 'theme2',
        name: 'Defense & Security Cooperation',
        type: 'main-theme',
        color: '#F28E2B',
        radius: 20
      },
      {
        id: 'theme3',
        name: 'Cultural & Educational Exchange',
        type: 'main-theme',
        color: '#E15759',
        radius: 20
      },
      {
        id: 'theme4',
        name: 'Technology & Energy Innovation',
        type: 'main-theme',
        color: '#76B7B2',
        radius: 20
      }
    ];
    

    // Create the subthemes
    const subthemeTypes = ['Description', 'Markers & Indicators', 'Articles Covering this Theme', 'Links to Other Themes'];
    
    let nodes = [...themes];
    let links = [];

    // Create subtheme nodes and links
    themes.forEach(theme => {
      subthemeTypes.forEach((subthemeType, idx) => {
        const subthemeId = `${theme.id}-${idx + 1}`;
        nodes.push({
          id: subthemeId,
          name: subthemeType,
          type: 'subtheme',
          themeId: theme.id,
          color: theme.color,
          radius: 10
        });
        
        links.push({
          source: theme.id,
          target: subthemeId,
          value: 3,
          color: theme.color
        });
      });
    });


// Add content nodes
const contentData = [
  // Theme 1: UAE-France Diplomatic & Economic Relations
  {
    id: 'theme1-1-content',
    name: 'Focuses on high-level bilateral relations, trade agreements, and strategic partnerships between UAE and France',
    type: 'content',
    subthemeId: 'theme1-1',
    radius: 6
  },
  {
    id: 'theme1-2-content1',
    name: 'Keywords: "UAE" (38), "France" (35), "bilateral" (17), "economic" (14), "Paris" (12), "Abu Dhabi" (10), "trade" (9)',
    type: 'content',
    subthemeId: 'theme1-2',
    radius: 6
  },
  {
    id: 'theme1-3-content1',
    name: '16th UAE-France Strategic Dialogue (May 2024)',
    type: 'content',
    subthemeId: 'theme1-3',
    radius: 6
  },
  {
    id: 'theme1-3-content2',
    name: 'High-Level Business Council Meeting (Feb 2025)',
    type: 'content',
    subthemeId: 'theme1-3',
    radius: 6
  },
  {
    id: 'theme1-3-content3',
    name: 'Sheikh Mohamed bin Zayed\'s visit to Paris (Feb 2025)',
    type: 'content',
    subthemeId: 'theme1-3',
    radius: 6
  },
  {
    id: 'theme1-4-content1',
    name: 'Connects with Defense & Security through major arms deals (Rafale jets)',
    type: 'content',
    subthemeId: 'theme1-4',
    radius: 6
  },
  {
    id: 'theme1-4-content2',
    name: 'Intersects with Technology & Energy Innovation through joint investments in AI and energy',
    type: 'content',
    subthemeId: 'theme1-4',
    radius: 6
  },

  // Theme 2: Defense & Security Cooperation
  {
    id: 'theme2-1-content',
    name: 'Highlights the €16 billion Rafale jets deal, France\'s military base in Abu Dhabi, and joint security initiatives',
    type: 'content',
    subthemeId: 'theme2-1',
    radius: 6
  },
  {
    id: 'theme2-2-content',
    name: 'Keywords: "defense" (22), "Rafale" (15), "military" (12), "security" (9), "arms" (6)',
    type: 'content',
    subthemeId: 'theme2-2',
    radius: 6
  },
  {
    id: 'theme2-3-content1',
    name: 'Delivery of Rafale jets to UAE (January 2025)',
    type: 'content',
    subthemeId: 'theme2-3',
    radius: 6
  },
  {
    id: 'theme2-3-content2',
    name: 'France\'s permanent military base in Abu Dhabi since 2009',
    type: 'content',
    subthemeId: 'theme2-3',
    radius: 6
  },
  {
    id: 'theme2-3-content3',
    name: 'Joint efforts in combating extremism',
    type: 'content',
    subthemeId: 'theme2-3',
    radius: 6
  },
  {
    id: 'theme2-4-content1',
    name: 'Diplomatic Relations: Major defense agreements form backbone of strategic partnership',
    type: 'content',
    subthemeId: 'theme2-4',
    radius: 6
  },
  {
    id: 'theme2-4-content2',
    name: 'Technology & Energy: Defense technology relates to broader technological cooperation',
    type: 'content',
    subthemeId: 'theme2-4',
    radius: 6
  },

  // Theme 3: Cultural & Educational Exchange
  {
    id: 'theme3-1-content',
    name: 'Cultural collaborations exemplified by the Louvre Abu Dhabi and Sorbonne University Abu Dhabi',
    type: 'content',
    subthemeId: 'theme3-1',
    radius: 6
  },
  {
    id: 'theme3-2-content',
    name: 'Keywords: "culture" (18), "Louvre" (15), "Sorbonne" (12), "education" (10), "heritage" (7)',
    type: 'content',
    subthemeId: 'theme3-2',
    radius: 6
  },
  {
    id: 'theme3-3-content1',
    name: 'Louvre Abu Dhabi as flagship cultural collaboration',
    type: 'content',
    subthemeId: 'theme3-3',
    radius: 6
  },
  {
    id: 'theme3-3-content2',
    name: 'Sorbonne University Abu Dhabi offering French higher education',
    type: 'content',
    subthemeId: 'theme3-3',
    radius: 6
  },
  {
    id: 'theme3-3-content3',
    name: 'MuseoPro training programs for museum professionals',
    type: 'content',
    subthemeId: 'theme3-3',
    radius: 6
  },
  {
    id: 'theme3-4-content1',
    name: 'Diplomatic Relations: Cultural initiatives strengthen soft power diplomacy',
    type: 'content',
    subthemeId: 'theme3-4',
    radius: 6
  },
  {
    id: 'theme3-4-content2',
    name: 'Technology & Innovation: Digital cultural experiences and educational technology',
    type: 'content',
    subthemeId: 'theme3-4',
    radius: 6
  },

  // Theme 4: Technology & Energy Innovation
  {
    id: 'theme4-1-content',
    name: 'Emphasizes cutting-edge AI collaboration, energy partnerships, and joint investments in innovation',
    type: 'content',
    subthemeId: 'theme4-1',
    radius: 6
  },
  {
    id: 'theme4-2-content',
    name: 'Keywords: "AI" (20), "energy" (18), "renewable" (15), "innovation" (12), "hydrogen" (10), "nuclear" (8)',
    type: 'content',
    subthemeId: 'theme4-2',
    radius: 6
  },
  {
    id: 'theme4-3-content1',
    name: 'AI Framework Agreement (Feb 2025) with €30-50B investment',
    type: 'content',
    subthemeId: 'theme4-3',
    radius: 6
  },
  {
    id: 'theme4-3-content2',
    name: 'Strategic Energy Agreement on hydrogen, renewable, and nuclear energy (July 2022)',
    type: 'content',
    subthemeId: 'theme4-3',
    radius: 6
  },
  {
    id: 'theme4-3-content3',
    name: 'ADNOC-TotalEnergies partnerships',
    type: 'content',
    subthemeId: 'theme4-3',
    radius: 6
  },
  {
    id: 'theme4-4-content1',
    name: 'Diplomatic & Economic Relations: Tech and energy agreements form largest economic partnerships',
    type: 'content',
    subthemeId: 'theme4-4',
    radius: 6
  },
  {
    id: 'theme4-4-content2',
    name: 'Defense & Security: Energy security and critical infrastructure protection',
    type: 'content',
    subthemeId: 'theme4-4',
    radius: 6
  }
];

// Add cross-theme relationships with connection descriptions
const crossThemeLinks = [
  { 
    source: 'theme1', 
    target: 'theme2', 
    value: 2, 
    label: 'Connection Points:\n• €16B Rafale fighter jets deal\n• Defense strategic partnerships\n• 1995 defense agreement',
    labelOffset: { x: 0, y: -40 }
  },
  { 
    source: 'theme1', 
    target: 'theme4', 
    value: 2, 
    label: 'Connection Points:\n• AI Framework Agreement (€30-50B)\n• Strategic Energy Partnership\n• TotalEnergies-ADNOC collaboration',
    labelOffset: { x: 0, y: 40 }
  },
  { 
    source: 'theme2', 
    target: 'theme3', 
    value: 2, 
    label: 'Connection Points:\n• Military training programs\n• Educational exchanges in defense\n• Cultural diplomacy influence',
    labelOffset: { x: 40, y: 0 }
  },
  { 
    source: 'theme3', 
    target: 'theme4', 
    value: 2, 
    label: 'Connection Points:\n• Digital cultural initiatives\n• Educational technology programs\n• Innovation in cultural preservation',
    labelOffset: { x: -40, y: 0 }
  }
];

    nodes = [...nodes, ...contentData];

    // Connect content nodes to their subthemes
    contentData.forEach(content => {
      links.push({
        source: content.subthemeId,
        target: content.id,
        value: 1,
        color: themes.find(theme => content.subthemeId.startsWith(theme.id)).color
      });
    });

    // Add cross-theme relationships with connection descriptions
    // const crossThemeLinks = [
    //   { 
    //     source: 'theme1', 
    //     target: 'theme2', 
    //     value: 2, 
    //     label: 'Connection Points:\n• Military partnerships\n• Defense systems development\n• Security cooperation agreements',
    //     labelOffset: { x: 0, y: -40 }
    //   },
    //   { 
    //     source: 'theme1', 
    //     target: 'theme4', 
    //     value: 2, 
    //     label: 'Connection Points:\n• Joint aviation projects\n• Sustainable technology initiatives\n• Bilateral innovation agreements',
    //     labelOffset: { x: 0, y: 40 }
    //   },
    //   { 
    //     source: 'theme2', 
    //     target: 'theme3', 
    //     value: 2, 
    //     label: 'Connection Points:\n• Security affecting travel advisories\n• Violence-related travel warnings\n• Safety concerns for tourists',
    //     labelOffset: { x: 40, y: 0 }
    //   },
    //   { 
    //     source: 'theme3', 
    //     target: 'theme4', 
    //     value: 2, 
    //     label: 'Connection Points:\n• Smart travel infrastructure\n• Tourism tech innovations\n• Digital travel experiences',
    //     labelOffset: { x: -40, y: 0 }
    //   }
    // ];

    links = [...links, ...crossThemeLinks];

    // Setup SVG
    const svg = d3.select(svgRef.current)
      .attr('width', dimensions.width)
      .attr('height', dimensions.height)
      .attr('viewBox', [0, 0, dimensions.width, dimensions.height])
      .attr('style', 'max-width: 100%; height: auto;');

    // Create tooltip
    const tooltip = d3.select(tooltipRef.current)
      .style('opacity', 0)
      .attr('class', 'absolute bg-white p-2 rounded shadow-lg border border-gray-200 z-10 text-sm max-w-xs');

    // Create a force simulation
    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id(d => d.id).distance(d => {
        // Set distance based on node types
        if (d.source.type === 'main-theme' && d.target.type === 'subtheme') return 100;
        if (d.source.type === 'subtheme' && d.target.type === 'content') return 70;
        if (d.source.type === 'main-theme' && d.target.type === 'main-theme') return 250;
        return 100;
      }))
      .force('charge', d3.forceManyBody().strength(-200))
      .force('center', d3.forceCenter(dimensions.width / 2, dimensions.height / 2))
      .force('collision', d3.forceCollide().radius(d => {
        if (d.type === 'main-theme') return 40;
        if (d.type === 'subtheme') return 30;
        return 15; 
      }));

    // Create a container for all elements with zoom capability
    const container = svg.append('g');

    // Add zoom capabilities
    const zoom = d3.zoom()
      .scaleExtent([0.3, 3])
      .on('zoom', (event) => {
        container.attr('transform', event.transform);
      });

    svg.call(zoom);

    // Handle elements dragging
    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    // Draw links
    const link = container.append('g')
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke-width', d => Math.sqrt(d.value))
      .attr('stroke', d => d.color || '#999')
      .attr('stroke-opacity', 0.6);
      
    // Add link labels for cross-theme connections
    const linkLabels = container.append('g')
      .selectAll('.link-label')
      .data(links.filter(d => d.label)) // Only links with labels
      .join('g')
      .attr('class', 'link-label');
      
    // Add white background for better readability
    linkLabels.append('rect')
      .attr('class', 'label-background')
      .attr('rx', 5)
      .attr('ry', 5)
      .attr('fill', 'white')
      .attr('fill-opacity', 0.8)
      .attr('stroke', d => d.color || '#999')
      .attr('stroke-width', 1);
      
    // Add the actual text labels
    const labelText = linkLabels.append('text')
      .attr('class', 'link-label-text')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('fill', '#333')
      .attr('font-size', '10px')
      .style('pointer-events', 'none');
      
    // Split multi-line labels and add as multiple tspans
    labelText.each(function(d) {
      const lines = d.label.split('\n');
      const text = d3.select(this);
      
      lines.forEach((line, i) => {
        text.append('tspan')
          .attr('x', 0)
          .attr('dy', i === 0 ? 0 : '1.2em')
          .attr('text-anchor', 'middle')
          .text(line);
      });
    });
    
    // Size the background rectangle based on text dimensions
    linkLabels.each(function() {
      const g = d3.select(this);
      const text = g.select('text');
      const bbox = text.node().getBBox();
      
      g.select('rect')
        .attr('x', bbox.x - 5)
        .attr('y', bbox.y - 3)
        .attr('width', bbox.width + 10)
        .attr('height', bbox.height + 6);
    });

    // Create node groups
    const node = container.append('g')
      .selectAll('.node')
      .data(nodes)
      .join('g')
      .attr('class', 'node')
      .call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended))







      // .on('mouseover', (event, d) => {
      //   tooltip.transition()
      //     .duration(200)
      //     .style('opacity', 0.9);
        
      //   tooltip.html(`<strong>${d.name}</strong>`)
      //     .style('left', `${event.pageX + 10}px`)
      //     .style('top', `${event.pageY - 28}px`);
        
      //   // Highlight connected nodes
      //   const linkedNodeIds = new Set();
      //   links.forEach(link => {
      //     if (link.source.id === d.id || link.target.id === d.id) {
      //       const connectedNode = link.source.id === d.id ? link.target.id : link.source.id;
      //       linkedNodeIds.add(connectedNode);
      //     }
      //   });
        
      //   node.style('opacity', n => linkedNodeIds.has(n.id) || n.id === d.id ? 1 : 0.2);
      //   link.style('opacity', l => (l.source.id === d.id || l.target.id === d.id) ? 1 : 0.1);
      // })
      // .on('mouseout', () => {
      //   tooltip.transition()
      //     .duration(500)
      //     .style('opacity', 0);
          
      //   node.style('opacity', 1);
      //   link.style('opacity', 0.6);
      // });




      .on('mouseover', (event, d) => {
        // Make tooltip visible
        tooltip
          .transition()
          .duration(100)
          .style('opacity', 1);
    
        // Highlight connected nodes
        const linkedNodeIds = new Set();
        links.forEach(link => {
          if (link.source.id === d.id || link.target.id === d.id) {
            const connectedNode = link.source.id === d.id ? link.target.id : link.source.id;
            linkedNodeIds.add(connectedNode);
          }
        });
        node.style('opacity', n => linkedNodeIds.has(n.id) || n.id === d.id ? 1 : 0.2);
        link.style('opacity', l => (l.source.id === d.id || l.target.id === d.id) ? 1 : 0.1);
      })
      .on('mousemove', (event, d) => {
        // Get pointer coords relative to your SVG (or container)
        const [x, y] = d3.pointer(event, svgRef.current);
    
        tooltip
          .html(`<strong>${d.name}</strong>`)
          // Offset the tooltip so it doesn't obscure the cursor
          .style('left', `${x - 300}px`)
          .style('top', `${y}px`);
      })
      .on('mouseout', () => {
        // Hide tooltip
        tooltip
          .transition()
          .duration(200)
          .style('opacity', 0);
    
        // Reset any styling
        node.style('opacity', 1);
        link.style('opacity', 0.6);
      });







    // Draw different node shapes based on type
    node.each(function(d) {
      const currentNode = d3.select(this);
      
      if (d.type === 'main-theme') {
        // Circle for main themes
        currentNode.append('circle')
          .attr('r', d.radius)
          .attr('fill', d.color);
      } else if (d.type === 'subtheme') {
        // Square for subthemes
        currentNode.append('rect')
          .attr('x', -d.radius)
          .attr('y', -d.radius)
          .attr('width', d.radius * 2)
          .attr('height', d.radius * 2)
          .attr('fill', d.color);
      } else {
        // Rounded rectangle for content
        currentNode.append('rect')
          .attr('x', -d.radius * 1.5)
          .attr('y', -d.radius)
          .attr('width', d.radius * 3)
          .attr('height', d.radius * 2)
          .attr('rx', 3)
          .attr('ry', 3)
          .attr('fill', themes.find(theme => d.subthemeId?.startsWith(theme.id))?.color || '#999')
          .attr('fill-opacity', 0.7);
      }
      
      // Add labels to main themes and subthemes
      if (d.type !== 'content') {
        currentNode.append('text')
          .attr('dy', d.type === 'main-theme' ? 30 : 20)
          .attr('text-anchor', 'middle')
          .attr('fill', d.type === 'main-theme' ? d.color : '#333')
          .style('font-weight', d.type === 'main-theme' ? 'bold' : 'normal')
          .style('font-size', d.type === 'main-theme' ? '12px' : '10px')
          .text(d.name.length > 20 ? d.name.substring(0, 20) + '...' : d.name);
      }
    });

    // Add legend
    const legend = svg.append('g')
      .attr('transform', `translate(20, 20)`);
      
    // Legend title
    legend.append('text')
      .attr('x', 0)
      .attr('y', 0)
      .attr('font-weight', 'bold')
      .text('Thematic Network Diagram');
      
    // Legend items
    themes.forEach((theme, i) => {
      const g = legend.append('g')
        .attr('transform', `translate(0, ${i * 25 + 30})`);
        
      g.append('circle')
        .attr('r', 6)
        .attr('fill', theme.color);
        
      g.append('text')
        .attr('x', 15)
        .attr('y', 4)
        .text(theme.name);
    });

    // Legend for node types
    const nodeTypeLegend = svg.append('g')
      .attr('transform', `translate(${dimensions.width - 180}, 20)`);
      
    // Node type title
    nodeTypeLegend.append('text')
      .attr('x', 0)
      .attr('y', 0)
      .attr('font-weight', 'bold')
      .text('Node Types');
      
    // Node type items
    const nodeTypes = [
      { name: 'Main Theme', shape: 'circle', size: 6 },
      { name: 'Subtheme', shape: 'rect', size: 6 },
      { name: 'Content', shape: 'roundrect', size: 6 }
    ];
    
    nodeTypes.forEach((type, i) => {
      const g = nodeTypeLegend.append('g')
        .attr('transform', `translate(0, ${i * 25 + 30})`);
        
      if (type.shape === 'circle') {
        g.append('circle')
          .attr('r', type.size)
          .attr('fill', '#666');
      } else if (type.shape === 'rect') {
        g.append('rect')
          .attr('x', -type.size)
          .attr('y', -type.size)
          .attr('width', type.size * 2)
          .attr('height', type.size * 2)
          .attr('fill', '#666');
      } else {
        g.append('rect')
          .attr('x', -type.size * 1.5)
          .attr('y', -type.size)
          .attr('width', type.size * 3)
          .attr('height', type.size * 2)
          .attr('rx', 3)
          .attr('ry', 3)
          .attr('fill', '#666');
      }
        
      g.append('text')
        .attr('x', 15)
        .attr('y', 4)
        .text(type.name);
    });

    // Update positions on each simulation tick
    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node.attr('transform', d => `translate(${d.x},${d.y})`);
      
      // Update position of link labels
      linkLabels.attr('transform', d => {
        // Position in the middle of the link
        const midX = (d.source.x + d.target.x) / 2;
        const midY = (d.source.y + d.target.y) / 2;
        
        // Apply any custom offset defined for this link
        const offsetX = d.labelOffset?.x || 0;
        const offsetY = d.labelOffset?.y || 0;
        
        return `translate(${midX + offsetX}, ${midY + offsetY})`;
      });
    });

    // Initial positions for main themes to spread them out
    themes.forEach((theme, i) => {
      const angle = (i / themes.length) * 2 * Math.PI;
      const radius = 200;
      const node = nodes.find(n => n.id === theme.id);
      if (node) {
        node.x = dimensions.width / 2 + radius * Math.cos(angle);
        node.y = dimensions.height / 2 + radius * Math.sin(angle);
        node.fx = dimensions.width / 2 + radius * Math.cos(angle);
        node.fy = dimensions.height / 2 + radius * Math.sin(angle);
      }
    });

    // Run simulation with a higher alpha to ensure good layout
    simulation.alpha(1).restart();
    
    // Release fixed positions after initial layout
    setTimeout(() => {
      nodes.forEach(node => {
        if (node.type !== 'main-theme') {
          node.fx = null;
          node.fy = null;
        }
      });
    }, 2000);

  }, [dimensions]);

  return (


        <div className="w-full h-screen flex flex-col p-4">
      
          {/* 1. Title and Subtitle */}
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold mb-4">Central UAE-France Relationship Themes</h1>
            <p className="text-gray-600">Interactive analysis of central themes in current UAE-French relations</p>
          </div>
      
          {/* 2. Main diagram container */}
          <div className="relative flex-1">
            {/* <div ref={tooltipRef} /> */}
            <div ref={tooltipRef} className="absolute bg-white p-2 rounded shadow-lg border border-gray-200 z-50 text-sm max-w-xs" />
            <svg ref={svgRef} className="w-full h-full bg-white rounded-lg shadow-lg"></svg>
          </div>
      
        </div>
      
  );
};

export default ThematicNetworkDiagram;

















