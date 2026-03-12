"use client";

import { useState } from "react";
import { Camera, MapPin, Clock } from "lucide-react";
import { Smile, Meh, Frown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function InteractionForm() {
  const [sentiment, setSentiment] = useState("positive");
  const [followUp, setFollowUp] = useState(true);
  const [meetingType, setMeetingType] = useState("virtual");

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-card border border-border rounded-lg p-5">
        <div className="flex justify-between items-center mb-2">
          <div>
            <p className="text-sm font-semibold text-foreground">In Progress</p>
            <p className="text-xs text-muted-foreground">Next: Follow-up Details & Scheduling</p>
          </div>
          <span className="text-sm font-semibold text-foreground">50%</span>
        </div>
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div className="h-full w-1/2 bg-primary rounded-full" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-card border border-border rounded-lg p-5">
          <div className="flex items-center gap-2 mb-4">
            <Camera className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-semibold text-foreground">Proof of Visit</h3>
          </div>
          <div className="border-2 border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center text-center">
            <Camera className="h-8 w-8 text-muted-foreground mb-2" />
            <p className="text-sm font-medium text-foreground">Upload Selfie</p>
            <p className="text-xs text-muted-foreground mt-1">Take a photo at the client location to verify visit</p>
          </div>
        </div>
        <div className="bg-card border border-border rounded-lg p-5">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-semibold text-foreground">Location & Time</h3>
          </div>
          <div className="bg-muted rounded-lg h-28 mb-3 flex items-center justify-center">
            <span className="text-xs text-muted-foreground">Map placeholder</span>
          </div>
          <div className="space-y-1 text-xs text-muted-foreground">
            <div className="flex items-center gap-1"><Clock className="h-3 w-3" /> Oct 24, 2023 • 02:45 PM</div>
            <div className="flex items-center gap-1"><MapPin className="h-3 w-3" /> 123 Business Ave, Tech Park, SF</div>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-5">
        <h3 className="text-sm font-semibold text-foreground mb-4">Meeting Feedback</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-foreground mb-1.5 block">Interaction Summary</label>
            <Textarea placeholder="Describe the key points discussed..." className="min-h-[100px]" />
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-xs font-medium text-foreground mb-1.5 block">Client Sentiment</label>
              <div className="flex gap-2">
                {[
                  { key: "positive", icon: Smile },
                  { key: "neutral", icon: Meh },
                  { key: "negative", icon: Frown },
                ].map(({ key, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => setSentiment(key)}
                    className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-colors ${sentiment === key ? "bg-primary border-primary text-primary-foreground" : "border-border text-muted-foreground hover:bg-muted"}`}
                  >
                    <Icon className="h-5 w-5" />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-foreground mb-1.5 block">Meeting Outcome</label>
              <Select defaultValue="positive">
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="positive">Positive - Moving Forward</SelectItem>
                  <SelectItem value="neutral">Neutral - Need Follow-up</SelectItem>
                  <SelectItem value="negative">Negative - Lost Interest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-foreground">Schedule Follow-up</h3>
          <div className="flex items-center gap-2">
            <Switch checked={followUp} onCheckedChange={setFollowUp} />
            <span className="text-xs text-muted-foreground">Required</span>
          </div>
        </div>
        {followUp && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-medium text-foreground mb-1.5 block">Proposed Date</label>
              <Input type="date" />
            </div>
            <div>
              <label className="text-xs font-medium text-foreground mb-1.5 block">Proposed Time</label>
              <Input type="time" />
            </div>
            <div>
              <label className="text-xs font-medium text-foreground mb-1.5 block">Meeting Type</label>
              <div className="flex rounded-lg border border-border overflow-hidden">
                {["virtual", "in-person"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setMeetingType(type)}
                    className={`flex-1 py-2 text-xs font-medium transition-colors ${meetingType === type ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:bg-muted"}`}
                  >
                    {type === "virtual" ? "Virtual" : "In-Person"}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-center gap-3">
        <Button variant="outline">Discard Draft</Button>
        <Button>Save Interaction →</Button>
      </div>
    </div>
  );
}
