
import { Handle, Position, NodeProps } from '@xyflow/react';
import { cn } from '@/lib/utils';

interface VideoNodeData {
  videoUrl: string;
  label?: string;
  description?: string;
}

const VideoNode = ({ data, isConnectable, selected }: NodeProps) => {
  return (
    <div className={cn(
      "px-4 py-3 rounded-lg border-2 shadow-md min-w-[200px] max-w-[350px]",
      selected ? "border-indigo-500" : "border-blue-200",
      "bg-white"
    )}>
      <Handle
        type="target"
        position={Position.Top}
        className="!w-3 !h-3 !bg-blue-500"
        isConnectable={isConnectable}
      />
      {data.label && (
        <div className="font-medium text-lg text-blue-700 mb-2">{data.label}</div>
      )}
      <div className="flex justify-center">
        <video 
          src={data.videoUrl} 
          controls
          className="max-w-full max-h-[200px] object-contain rounded"
        />
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

export default VideoNode;
