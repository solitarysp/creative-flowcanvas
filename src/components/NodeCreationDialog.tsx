
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface NodeCreationDialogProps {
  onCreateNode: (type: string, data: any) => void;
}

const NodeCreationDialog = ({ onCreateNode }: NodeCreationDialogProps) => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('text');
  
  // Text node state
  const [text, setText] = useState('');
  
  // Image node state
  const [imageUrl, setImageUrl] = useState('');
  const [imageLabel, setImageLabel] = useState('');
  
  // Custom node state
  const [nodeLabel, setNodeLabel] = useState('');
  const [nodeSubtitle, setNodeSubtitle] = useState('');
  const [nodeType, setNodeType] = useState('customNode');
  
  const handleCreateNode = () => {
    if (activeTab === 'text' && text) {
      onCreateNode('textNode', { text });
      setText('');
    } else if (activeTab === 'image' && imageUrl) {
      onCreateNode('imageNode', { 
        imageUrl, 
        label: imageLabel 
      });
      setImageUrl('');
      setImageLabel('');
    } else if (activeTab === 'custom' && nodeLabel) {
      onCreateNode(nodeType, { 
        label: nodeLabel, 
        subtitle: nodeSubtitle || undefined 
      });
      setNodeLabel('');
      setNodeSubtitle('');
    }
    
    setOpen(false);
  };
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="absolute top-4 left-4 z-10">
          Add Node
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Node</DialogTitle>
        </DialogHeader>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="text">Text</TabsTrigger>
            <TabsTrigger value="image">Image</TabsTrigger>
            <TabsTrigger value="custom">Custom</TabsTrigger>
          </TabsList>
          
          <TabsContent value="text">
            <div className="space-y-4">
              <div>
                <Label htmlFor="text">Enter Text</Label>
                <Textarea 
                  id="text"
                  value={text} 
                  onChange={(e) => setText(e.target.value)} 
                  placeholder="Enter your text here..." 
                  className="w-full mt-1"
                  rows={5}
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="image">
            <div className="space-y-4">
              <div>
                <Label htmlFor="imageUrl">Image URL</Label>
                <Input 
                  id="imageUrl"
                  value={imageUrl} 
                  onChange={(e) => setImageUrl(e.target.value)} 
                  placeholder="https://example.com/image.jpg" 
                  className="w-full mt-1"
                />
              </div>
              <div>
                <Label htmlFor="imageLabel">Label (Optional)</Label>
                <Input 
                  id="imageLabel"
                  value={imageLabel} 
                  onChange={(e) => setImageLabel(e.target.value)} 
                  placeholder="Image Label" 
                  className="w-full mt-1"
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="custom">
            <div className="space-y-4">
              <div>
                <Label htmlFor="nodeType">Node Type</Label>
                <select
                  id="nodeType"
                  value={nodeType}
                  onChange={(e) => setNodeType(e.target.value)}
                  className="w-full border rounded px-3 py-2 mt-1"
                >
                  <option value="customNode">Default Node</option>
                  <option value="aiModelNode">AI Model Node</option>
                  <option value="workflowNode">Workflow Node</option>
                  <option value="featureNode">Feature Node</option>
                </select>
              </div>
              <div>
                <Label htmlFor="nodeLabel">Label</Label>
                <Input 
                  id="nodeLabel"
                  value={nodeLabel} 
                  onChange={(e) => setNodeLabel(e.target.value)} 
                  placeholder="Node Label" 
                  className="w-full mt-1"
                />
              </div>
              <div>
                <Label htmlFor="nodeSubtitle">Subtitle (Optional)</Label>
                <Input 
                  id="nodeSubtitle"
                  value={nodeSubtitle} 
                  onChange={(e) => setNodeSubtitle(e.target.value)} 
                  placeholder="Node Subtitle" 
                  className="w-full mt-1"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleCreateNode}>
            Create Node
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NodeCreationDialog;
