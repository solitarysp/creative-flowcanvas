
import { Handle, Position, NodeProps } from '@xyflow/react';
import { cn } from '@/lib/utils';

interface ImageNodeData {
  label?: string;
  imageUrl: string;
  description?: string;
}

const ImageNode = ({ data, isConnectable, selected }: NodeProps<ImageNodeData>) => {
  return (
    <div className={cn(
      "px-4 py-3 rounded-lg border-2 shadow-md min-w-[180px] max-w-[300px]",
      selected ? "border-indigo-500" : "border-yellow-200",
      "bg-white"
    )}>
      <Handle
        type="target"
        position={Position.Top}
        className="!w-3 !h-3 !bg-yellow-500"
        isConnectable={isConnectable}
      />
      {data.label && (
        <div className="font-medium text-lg text-yellow-700 mb-2">{data.label}</div>
      )}
      <div className="flex justify-center">
        <img 
          src={data.imageUrl} 
          alt={data.label || "Image"} 
          className="max-w-full max-h-[200px] object-contain rounded"
        />
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="!w-3 !h-3 !bg-yellow-500"
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default ImageNode;
