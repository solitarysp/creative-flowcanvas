
import { Node, Edge } from '@xyflow/react';

export const initialNodes: Node[] = [
  // Core
  {
    id: 'flora',
    type: 'customNode',
    data: { 
      label: 'Flora',
      subtitle: 'AI Creative Tool for Professionals',
      description: 'Flora offers an "infinite canvas" that integrates with existing AI models - a visual interface where users can generate blocks of text, images, and video.'
    },
    position: { x: 250, y: 0 },
  },
  
  // Principles
  {
    id: 'principle1',
    type: 'customNode',
    data: { 
      label: 'Models ≠ Tools',
      subtitle: 'AI Models are not creative tools',
      description: 'Flora isn\'t trying to build better generative AI models. One of the startup\'s key insights is that "models are not creative tools."'
    },
    position: { x: 0, y: 150 },
  },
  {
    id: 'principle2',
    type: 'customNode',
    data: { 
      label: 'Interface First',
      subtitle: 'It\'s about the interface',
      description: '"The model does not matter, the technology does not matter," Wong said. "It\'s about the interface."'
    },
    position: { x: 500, y: 150 },
  },
  
  // AI Models
  {
    id: 'aiModels',
    type: 'aiModelNode',
    data: { 
      label: 'AI Integration',
      subtitle: 'Connects with existing models',
      description: 'Flora isn\'t building its own AI models but instead integrates with existing ones to provide a better creative interface.'
    },
    position: { x: 250, y: 250 },
  },
  
  // Workflow
  {
    id: 'workflow',
    type: 'workflowNode',
    data: { 
      label: 'Creative Workflow',
      steps: [
        'Generate initial concept',
        'Explore variations',
        'Refine details',
        'Collaborate and share',
      ],
      description: 'A user could start by prompting Flora to create an image, ask for details, with those details leading to more prompts and varied images, all mapped on the canvas.'
    },
    position: { x: 250, y: 400 },
  },
  
  // Features
  {
    id: 'feature1',
    type: 'featureNode',
    data: { 
      label: 'Infinite Canvas',
      subtitle: 'Visualize creative process',
      description: 'Flora offers an "infinite canvas" that lets users see the entire creative process mapped out visually.'
    },
    position: { x: 0, y: 550 },
  },
  {
    id: 'feature2',
    type: 'featureNode',
    data: { 
      label: 'Creative Control',
      subtitle: 'Professional-grade tools',
      description: 'Unlike existing AI tools that "make it easy to create, but lack creative control," Flora gives professionals the control they need.'
    },
    position: { x: 250, y: 550 },
  },
  {
    id: 'feature3',
    type: 'featureNode',
    data: { 
      label: 'Collaboration',
      subtitle: 'Share with clients & teams',
      description: 'The canvas can be shared for collaborative work with clients, making it ideal for design agencies like Pentagram.'
    },
    position: { x: 500, y: 550 },
  },
  
  // User Types
  {
    id: 'users1',
    type: 'customNode',
    data: { 
      label: 'AI Curious',
      subtitle: 'Initial target audience',
      description: 'Wong hopes Flora can win over the "AI curious" professionals who are interested but not yet fully invested in AI tools.'
    },
    position: { x: 100, y: 700 },
  },
  {
    id: 'users2',
    type: 'customNode',
    data: { 
      label: 'Design Agencies',
      subtitle: 'e.g., Pentagram',
      description: 'Flora is initially focused on working with visual design agencies, iterating on the product with feedback from designers at Pentagram.'
    },
    position: { x: 400, y: 700 },
  },
];

export const initialEdges: Edge[] = [
  // Core to Principles
  { id: 'e-flora-p1', source: 'flora', target: 'principle1', animated: true, style: { stroke: '#6366f1', strokeWidth: 2 }, type: 'smoothstep' },
  { id: 'e-flora-p2', source: 'flora', target: 'principle2', animated: true, style: { stroke: '#6366f1', strokeWidth: 2 }, type: 'smoothstep' },
  
  // Principles to AI Models
  { id: 'e-p1-ai', source: 'principle1', target: 'aiModels', style: { stroke: '#8b5cf6', strokeWidth: 2 }, type: 'smoothstep' },
  { id: 'e-p2-ai', source: 'principle2', target: 'aiModels', style: { stroke: '#8b5cf6', strokeWidth: 2 }, type: 'smoothstep' },
  
  // AI Models to Workflow
  { id: 'e-ai-work', source: 'aiModels', target: 'workflow', animated: true, style: { stroke: '#10b981', strokeWidth: 2 }, type: 'smoothstep' },
  
  // Workflow to Features
  { id: 'e-work-f1', source: 'workflow', target: 'feature1', style: { stroke: '#0ea5e9', strokeWidth: 2 }, type: 'smoothstep' },
  { id: 'e-work-f2', source: 'workflow', target: 'feature2', style: { stroke: '#0ea5e9', strokeWidth: 2 }, type: 'smoothstep' },
  { id: 'e-work-f3', source: 'workflow', target: 'feature3', style: { stroke: '#0ea5e9', strokeWidth: 2 }, type: 'smoothstep' },
  
  // Features to Users
  { id: 'e-f1-u1', source: 'feature1', target: 'users1', style: { stroke: '#6366f1', strokeWidth: 2 }, type: 'smoothstep' },
  { id: 'e-f2-u2', source: 'feature2', target: 'users2', style: { stroke: '#6366f1', strokeWidth: 2 }, type: 'smoothstep' },
  { id: 'e-f3-u2', source: 'feature3', target: 'users2', style: { stroke: '#6366f1', strokeWidth: 2 }, type: 'smoothstep' },
];
