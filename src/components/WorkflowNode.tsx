
import { Handle, Position, NodeProps } from '@xyflow/react';
import { cn } from '@/lib/utils';

const WorkflowNode = ({ data, isConnectable, selected }: NodeProps) => {
  return (
    <div className={cn(
      "px-4 py-3 rounded-lg border-2 shadow-md min-w-[220px]",
      selected ? "border-indigo-500" : "border-green-200",
      "bg-gradient-to-br from-green-50 to-emerald-50"
    )}>
      <Handle
        type="target"
        position={Position.Top}
        className="!w-3 !h-3 !bg-green-500"
        isConnectable={isConnectable}
      />
      <div className="text-center">
        <div className="font-medium text-lg text-green-700">{data.label}</div>
        {data.steps && (
          <ul className="text-sm text-green-600 text-left list-disc pl-5 mt-2">
            {data.steps.map((step: string, index: number) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        )}
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="!w-3 !h-3 !bg-green-500"
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default WorkflowNode;
