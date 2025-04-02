
import { Handle, Position, NodeProps } from '@xyflow/react';
import { cn } from '@/lib/utils';

const FeatureNode = ({ data, isConnectable, selected }: NodeProps) => {
  return (
    <div className={cn(
      "px-4 py-3 rounded-lg border-2 shadow-md min-w-[180px]",
      selected ? "border-indigo-500" : "border-blue-200",
      "bg-gradient-to-br from-blue-50 to-sky-50"
    )}>
      <Handle
        type="target"
        position={Position.Top}
        className="!w-3 !h-3 !bg-blue-500"
        isConnectable={isConnectable}
      />
      <div className="text-center">
        <div className="font-medium text-lg text-blue-700">{data.label}</div>
        {data.subtitle && (
          <div className="text-sm text-blue-500">{data.subtitle}</div>
        )}
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="!w-3 !h-3 !bg-blue-500"
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default FeatureNode;
