
import { Handle, Position, NodeProps } from '@xyflow/react';
import { cn } from '@/lib/utils';

interface TextNodeData {
  text: string;
  description?: string;
}

const TextNode = ({ data, isConnectable, selected }: NodeProps) => {
  return (
    <div className={cn(
      "px-4 py-3 rounded-lg border-2 shadow-md min-w-[180px] max-w-[300px]",
      selected ? "border-indigo-500" : "border-gray-200",
      "bg-gradient-to-br from-orange-50 to-amber-50"
    )}>
      <Handle
        type="target"
        position={Position.Top}
        className="!w-3 !h-3 !bg-orange-500"
        isConnectable={isConnectable}
      />
      <div className="text-orange-700 whitespace-pre-wrap">{data.text}</div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="!w-3 !h-3 !bg-orange-500"
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default TextNode;
