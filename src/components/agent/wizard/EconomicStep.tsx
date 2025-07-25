import React from "react";
import { Sparkles } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface EconomicStepProps {
  feePercentage: string;
  setFeePercentage: (fee: string) => void;
  agentPurpose: string;
}

const EconomicStep: React.FC<EconomicStepProps> = ({ feePercentage, setFeePercentage, agentPurpose }) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-white animate-pulse text-shadow-sm">Economic Parameters</h2>
        <p className="text-white/80 text-shadow-sm">Define financial aspects of your agent's outputs</p>
      </div>
      
      <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-xl">
        <h3 className="font-medium mb-3 text-white text-shadow-sm">Pricing Strategy</h3>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="pricing-model" className="text-sm text-white text-shadow-sm">Pricing Model</Label>
            <Select defaultValue="dynamic">
              <SelectTrigger id="pricing-model" className="mt-1 text-white backdrop-blur-sm bg-white/10 border border-white/20">
                <SelectValue placeholder="Select pricing model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fixed">Fixed Price</SelectItem>
                <SelectItem value="tiered">Tiered Pricing</SelectItem>
                <SelectItem value="dynamic">Dynamic Pricing</SelectItem>
                <SelectItem value="auction">Auction-Based</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="base-price" className="text-sm text-white text-shadow-sm">Base Price (ETH)</Label>
              <Input id="base-price" type="number" step="0.01" defaultValue="0.1" className="mt-1 text-white backdrop-blur-sm bg-white/10 border border-white/20 placeholder:text-white/50" />
            </div>
            
            <div>
              <Label htmlFor="fee-percentage" className="text-sm text-white text-shadow-sm">Platform Fee (%)</Label>
              <Input 
                id="fee-percentage" 
                type="number" 
                min="1" 
                max="20" 
                value={feePercentage} 
                onChange={(e) => setFeePercentage(e.target.value)}
                className="mt-1 text-white backdrop-blur-sm bg-white/10 border border-white/20 placeholder:text-white/50" 
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-xl">
        <h3 className="font-medium mb-3 text-white text-shadow-sm">Royalty Configuration</h3>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between">
              <Label htmlFor="royalty-percentage" className="text-sm text-white text-shadow-sm">Royalty Percentage</Label>
              <span className="text-xs text-white/70">10%</span>
            </div>
            <input type="range" min="0" max="20" step="1" defaultValue="10" id="royalty-percentage" className="w-full mt-1" />
          </div>
          
          <div>
            <Label htmlFor="split-address" className="text-sm text-white text-shadow-sm">Collaborator Address (Optional)</Label>
            <Input id="split-address" placeholder="0x..." className="mt-1 font-mono text-sm text-white backdrop-blur-sm bg-white/10 border border-white/20 placeholder:text-white/50" />
          </div>
          
          <div>
            <div className="flex justify-between">
              <Label htmlFor="split-percentage" className="text-sm text-white text-shadow-sm">Collaborator Split</Label>
              <span className="text-xs text-white/70">20%</span>
            </div>
            <input type="range" min="0" max="100" step="5" defaultValue="20" id="split-percentage" className="w-full mt-1" />
          </div>
        </div>
      </div>
      
      <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-xl">
        <h3 className="font-medium mb-3 text-white text-shadow-sm">Agent Flow Preview</h3>
        
        <div className="relative h-48 border border-dashed border-white/30 rounded-lg p-4 overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <div className="text-center">
              <svg className="w-12 h-12 mx-auto text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
              <p className="mt-2 text-sm text-white/70 text-shadow-sm">Visual flow preview will appear here</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center bg-blue-50/30 backdrop-blur-sm p-4 rounded-lg border border-blue-100/30">
        <Sparkles className="h-5 w-5 text-blue-500 mr-2" />
        <p className="text-sm text-white text-shadow-sm">
          <strong>AI Assistant:</strong> A 10% royalty is industry standard. Consider dynamic pricing for {agentPurpose === 'art' ? 'art' : agentPurpose === 'music' ? 'music' : 'written content'} to adapt to market demand.
        </p>
      </div>
    </div>
  );
};

export default EconomicStep;