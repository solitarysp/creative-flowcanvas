
import { Handle, Position, NodeProps } from '@xyflow/react';
import { cn } from '@/lib/utils';

const AIModelNode = ({ data, isConnectable, selected }: NodeProps) => {
  return (
    <div className={cn(
      "px-4 py-3 rounded-lg border-2 shadow-md min-w-[200px]",
      selected ? "border-indigo-500" : "border-purple-200",
      "bg-gradient-to-br from-purple-50 to-indigo-50"
    )}>
      <Handle
        type="target"
        position={Position.Top}
        className="!w-3 !h-3 !bg-purple-500"
        isConnectable={isConnectable}
      />
      <div className="text-center">
        <div className="font-medium text-lg text-purple-700">{data.label}</div>
        {data.subtitle && (
          <div className="text-sm text-purple-500">{data.subtitle}</div>
        )}
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="!w-3 !h-3 !bg-purple-500"
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default AIModelNode;
