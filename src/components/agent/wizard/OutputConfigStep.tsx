import React from "react";
import { Paintbrush, Music, FileText, Layers, Sparkles } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface OutputConfigStepProps {
  outputFormat: string;
  setOutputFormat: (format: string) => void;
}

const OutputConfigStep: React.FC<OutputConfigStepProps> = ({ outputFormat, setOutputFormat }) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-white animate-pulse text-shadow-sm">Output Configuration</h2>
        <p className="text-white/80 text-shadow-sm">Define where your agent's creations will be published</p>
      </div>
      
      <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-xl">
        <h3 className="font-medium mb-3 text-white text-shadow-sm">Output Destinations</h3>
        
        <div className="space-y-3">
          <div className="flex items-center">
            <input type="checkbox" id="dest-nft" className="mr-2" defaultChecked />
            <label htmlFor="dest-nft" className="text-sm text-white text-shadow-sm">NFT Marketplace</label>
          </div>
          
          <div className="ml-6 mb-4">
            <Select defaultValue="opensea">
              <SelectTrigger className="text-white backdrop-blur-sm bg-white/10 border border-white/20">
                <SelectValue placeholder="Select marketplace" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="opensea">OpenSea</SelectItem>
                <SelectItem value="blur">Blur</SelectItem>
                <SelectItem value="magic">Magic Eden</SelectItem>
                <SelectItem value="sound">Sound.xyz</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center">
            <input type="checkbox" id="dest-social" className="mr-2" defaultChecked />
            <label htmlFor="dest-social" className="text-sm text-white text-shadow-sm">Social Media</label>
          </div>
          
          <div className="ml-6 mb-4 grid grid-cols-2 gap-2">
            <div className="flex items-center">
              <input type="checkbox" id="social-twitter" className="mr-2" defaultChecked />
              <label htmlFor="social-twitter" className="text-sm text-white text-shadow-sm">Twitter</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="social-instagram" className="mr-2" />
              <label htmlFor="social-instagram" className="text-sm text-white text-shadow-sm">Instagram</label>
            </div>
          </div>
          
          <div className="flex items-center">
            <input type="checkbox" id="dest-storage" className="mr-2" />
            <label htmlFor="dest-storage" className="text-sm text-white text-shadow-sm">Decentralized Storage</label>
          </div>
          
          <div className="flex items-center">
            <input type="checkbox" id="dest-api" className="mr-2" />
            <label htmlFor="dest-api" className="text-sm text-white text-shadow-sm">API Endpoint (Webhook)</label>
          </div>
        </div>
      </div>
      
      <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-xl">
        <h3 className="font-medium mb-3 text-white text-shadow-sm">Output Format</h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div 
            className={`backdrop-blur-md bg-white/10 border border-white/20 p-3 rounded-lg text-center cursor-pointer transition-all ${outputFormat === 'image' ? 'border-purple-500 bg-purple-50/10 shadow-lg' : 'hover:border-purple-200'}`}
            onClick={() => setOutputFormat('image')}
          >
            <Paintbrush className="h-5 w-5 mx-auto mb-1 text-purple-500" />
            <span className="text-sm text-white text-shadow-sm">Image</span>
          </div>
          
          <div 
            className={`backdrop-blur-md bg-white/10 border border-white/20 p-3 rounded-lg text-center cursor-pointer transition-all ${outputFormat === 'audio' ? 'border-blue-500 bg-blue-50/10 shadow-lg' : 'hover:border-blue-200'}`}
            onClick={() => setOutputFormat('audio')}
          >
            <Music className="h-5 w-5 mx-auto mb-1 text-blue-500" />
            <span className="text-sm text-white text-shadow-sm">Audio</span>
          </div>
          
          <div 
            className={`backdrop-blur-md bg-white/10 border border-white/20 p-3 rounded-lg text-center cursor-pointer transition-all ${outputFormat === 'text' ? 'border-green-500 bg-green-50/10 shadow-lg' : 'hover:border-green-200'}`}
            onClick={() => setOutputFormat('text')}
          >
            <FileText className="h-5 w-5 mx-auto mb-1 text-green-500" />
            <span className="text-sm text-white text-shadow-sm">Text</span>
          </div>
          
          <div 
            className={`backdrop-blur-md bg-white/10 border border-white/20 p-3 rounded-lg text-center cursor-pointer transition-all ${outputFormat === 'multi' ? 'border-amber-500 bg-amber-50/10 shadow-lg' : 'hover:border-amber-200'}`}
            onClick={() => setOutputFormat('multi')}
          >
            <Layers className="h-5 w-5 mx-auto mb-1 text-amber-500" />
            <span className="text-sm text-white text-shadow-sm">Multi</span>
          </div>
        </div>
      </div>
      
      <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-xl">
        <h3 className="font-medium mb-3 text-white text-shadow-sm">Personalization Options</h3>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="style-options" className="text-sm text-white text-shadow-sm">Style Profile</Label>
            <Select defaultValue="modern">
              <SelectTrigger id="style-options" className="mt-1 text-white backdrop-blur-sm bg-white/10 border border-white/20">
                <SelectValue placeholder="Select style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="modern">Modern Minimalist</SelectItem>
                <SelectItem value="abstract">Abstract Expressionist</SelectItem>
                <SelectItem value="retro">Retro Futurism</SelectItem>
                <SelectItem value="cyberpunk">Cyberpunk</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="content-filter" className="text-sm text-white text-shadow-sm">Content Filter</Label>
            <Select defaultValue="moderate">
              <SelectTrigger id="content-filter" className="mt-1 text-white backdrop-blur-sm bg-white/10 border border-white/20">
                <SelectValue placeholder="Select filter level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="strict">Strict</SelectItem>
                <SelectItem value="moderate">Moderate</SelectItem>
                <SelectItem value="minimal">Minimal</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      <div className="flex items-center bg-blue-50/30 backdrop-blur-sm p-4 rounded-lg border border-blue-100/30">
        <Sparkles className="h-5 w-5 text-blue-500 mr-2" />
        <p className="text-sm text-white text-shadow-sm">
          <strong>AI Assistant:</strong> For optimal reach, I recommend publishing to both NFT marketplaces and social media. This creates multiple revenue streams and maximizes visibility.
        </p>
      </div>
    </div>
  );
};

export default OutputConfigStep;