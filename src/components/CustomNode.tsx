
import { Handle, Position, NodeProps } from '@xyflow/react';
import { cn } from '@/lib/utils';

interface CustomNodeData {
  label: string;
  subtitle?: string;
  description?: string;
}

const CustomNode = ({ data, isConnectable, selected }: NodeProps) => {
  return (
    <div className={cn(
      "px-4 py-2 rounded-lg border-2 shadow-md bg-white min-w-[180px]",
      selected ? "border-indigo-500" : "border-gray-200"
    )}>
      <Handle
        type="target"
        position={Position.Top}
        className="!w-3 !h-3 !bg-indigo-500"
        isConnectable={isConnectable}
      />
      <div className="font-medium text-lg">{data.label}</div>
      {data.subtitle && (
        <div className="text-sm text-gray-500">{data.subtitle}</div>
      )}
      <Handle
        type="source"
        position={Position.Bottom}
        className="!w-3 !h-3 !bg-indigo-500"
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default CustomNode;
