
import { useState, useCallback, useRef } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  ConnectionLineType,
  Panel,
  NodeTypes,
  Node
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

import CustomNode from './CustomNode';
import AIModelNode from './AIModelNode';
import WorkflowNode from './WorkflowNode';
import FeatureNode from './FeatureNode';
import ImageNode from './ImageNode';
import TextNode from './TextNode';
import NodeCreationDialog from './NodeCreationDialog';
import { initialNodes, initialEdges } from '../data/flowData';

const nodeTypes: NodeTypes = {
  customNode: CustomNode,
  aiModelNode: AIModelNode,
  workflowNode: WorkflowNode,
  featureNode: FeatureNode,
  imageNode: ImageNode,
  textNode: TextNode,
};

const FloraFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);

  const onConnect = useCallback((params: any) => {
    setEdges((eds) => addEdge({ 
      ...params, 
      animated: true,
      style: { stroke: '#6366f1', strokeWidth: 2 },
      type: 'smoothstep',
    }, eds));
  }, [setEdges]);

  const onNodeClick = useCallback((_: any, node: any) => {
    setSelectedNode(node.id);
  }, []);

  const onPaneClick = useCallback(() => {
    setSelectedNode(null);
  }, []);

  const handleDeleteNode = useCallback(() => {
    if (selectedNode) {
      setNodes((nds) => nds.filter((node) => node.id !== selectedNode));
      setEdges((eds) => eds.filter(
        (edge) => edge.source !== selectedNode && edge.target !== selectedNode
      ));
      setSelectedNode(null);
    }
  }, [selectedNode, setNodes, setEdges]);

  const handleCreateNode = useCallback((type: string, data: any) => {
    if (!reactFlowInstance) return;
    
    const position = reactFlowInstance.screenToFlowPosition({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });
    
    const newNode: Node = {
      id: `node_${Date.now()}`,
      type,
      position,
      data,
    };
    
    setNodes((nds) => nds.concat(newNode));
  }, [reactFlowInstance, setNodes]);

  return (
    <div ref={reactFlowWrapper} style={{ width: '100%', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
        nodeTypes={nodeTypes}
        connectionLineType={ConnectionLineType.SmoothStep}
        onInit={setReactFlowInstance}
        fitView
        attributionPosition="bottom-right"
      >
        <Background color="#f1f5f9" gap={16} />
        <Controls />
        <MiniMap nodeStrokeWidth={3} zoomable pannable />
        
        <Panel position="top-center">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center text-indigo-600">Flora: AI Creative Tool Demo</h1>
            <p className="text-gray-600 text-center mt-2">
              A new approach to creative workflows using AI as a power tool
            </p>
          </div>
        </Panel>

        <NodeCreationDialog onCreateNode={handleCreateNode} />
        
        {selectedNode && (
          <>
            <Panel position="top-right">
              <Button 
                variant="destructive" 
                onClick={handleDeleteNode}
                className="rounded-full w-10 h-10 p-0 flex items-center justify-center"
              >
                <Trash2 size={18} />
              </Button>
            </Panel>
            
            <Panel position="bottom-center">
              <div className="bg-white p-4 rounded-lg shadow-md mb-4 max-w-md">
                <h3 className="text-lg font-semibold text-indigo-600">
                  {nodes.find(node => node.id === selectedNode)?.data?.label || 
                   nodes.find(node => node.id === selectedNode)?.data?.text || 
                   "Selected Node"}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {nodes.find(node => node.id === selectedNode)?.data?.description || 
                   "No description available"}
                </p>
              </div>
            </Panel>
          </>
        )}
      </ReactFlow>
    </div>
  );
};

export default FloraFlow;
