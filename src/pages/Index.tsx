
import FloraFlow from "../components/FloraFlow";

const Index = () => {
  return (
    <div className="w-full h-screen bg-slate-50 relative">
      <FloraFlow />
      <div className="absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow-md max-w-xs z-10 text-sm">
        <p className="font-semibold mb-1">Instructions:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Click "Add Node" to create new nodes</li>
          <li>Drag from handles to connect nodes</li>
          <li>Select a node and click trash icon to delete</li>
          <li>Add text or images to your diagram</li>
          <li>Drag nodes to reposition them</li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
