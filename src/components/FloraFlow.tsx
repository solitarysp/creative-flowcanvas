
import { useState, useCallback } from 'react';
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
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import CustomNode from './CustomNode';
import AIModelNode from './AIModelNode';
import WorkflowNode from './WorkflowNode';
import FeatureNode from './FeatureNode';
import { initialNodes, initialEdges } from '../data/flowData';

const nodeTypes: NodeTypes = {
  customNode: CustomNode,
  aiModelNode: AIModelNode,
  workflowNode: WorkflowNode,
  featureNode: FeatureNode,
};

const FloraFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

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

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        connectionLineType={ConnectionLineType.SmoothStep}
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
        {selectedNode && (
          <Panel position="bottom-center">
            <div className="bg-white p-4 rounded-lg shadow-md mb-4 max-w-md">
              <h3 className="text-lg font-semibold text-indigo-600">
                {nodes.find(node => node.id === selectedNode)?.data?.label}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {nodes.find(node => node.id === selectedNode)?.data?.description}
              </p>
            </div>
          </Panel>
        )}
      </ReactFlow>
    </div>
  );
};

export default FloraFlow;
