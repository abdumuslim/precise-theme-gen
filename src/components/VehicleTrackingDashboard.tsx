import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Settings, Plus, Minus, Home } from "lucide-react";

const VehicleTrackingDashboard = () => {
  return (
    <div className="min-h-screen bg-dashboard-navy text-dashboard-text-light">
      {/* Header */}
      <header className="bg-gradient-green h-16 flex items-center justify-between px-6 shadow-panel">
        <div className="flex items-center gap-4">
          <div className="text-white font-bold text-xl">Lane Me</div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
            <Settings className="w-4 h-4 mr-2" />
            System Admin
          </Button>
          <div className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center">
            <Home className="w-4 h-4 text-white" />
          </div>
        </div>
      </header>

      {/* Main Dashboard */}
      <div className="p-6 space-y-6">
        {/* Top Row - Vehicle Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* License Plate */}
          <Card className="bg-gradient-panel border-dashboard-border shadow-panel">
            <div className="p-4">
              <h3 className="text-dashboard-green text-sm font-medium mb-2">Licence Plate</h3>
              <div className="text-dashboard-red text-lg font-bold">IRQ A 4008</div>
              <div className="text-xs text-dashboard-text-muted mt-2">2024-12-12 16:04:21.543</div>
              <div className="text-xs text-dashboard-text-muted">Plate Source: Iraq - Common</div>
              <div className="text-xs text-dashboard-text-muted">Gate: Entry Lane 1</div>
              <div className="text-xs text-dashboard-text-muted">Lane Type: Entry</div>
              <div className="text-xs text-dashboard-text-muted">Traffic Type: Private</div>
              <div className="text-xs text-dashboard-text-muted">Plate Colour: White</div>
              <div className="text-xs text-dashboard-text-muted">Confidence: 21</div>
            </div>
          </Card>

          {/* Vehicle Details */}
          <Card className="bg-gradient-panel border-dashboard-border shadow-panel">
            <div className="p-4">
              <h3 className="text-dashboard-green text-sm font-medium mb-2">Vehicle Details</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center">
                  <div className="w-20 h-12 bg-dashboard-navy/50 rounded border border-dashboard-border flex items-center justify-center">
                    <div className="text-xs text-dashboard-text-muted">Vehicle Icon</div>
                  </div>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="text-dashboard-text-muted">Distance (m): <span className="text-dashboard-text-light">5.7</span></div>
                  <div className="text-dashboard-text-muted">Weight (ton): <span className="text-dashboard-text-light">12.00</span></div>
                  <div className="text-dashboard-text-muted">Number Of Axles: <span className="text-dashboard-text-light">4</span></div>
                  <div className="text-dashboard-text-muted">Vehicle Class: <span className="text-dashboard-text-light">Class 2 (Scheduled)</span></div>
                  <div className="text-dashboard-text-muted">Length: <span className="text-dashboard-text-light">15.00</span></div>
                  <div className="text-dashboard-text-muted">Width: <span className="text-dashboard-text-light">2.400</span></div>
                </div>
              </div>
            </div>
          </Card>

          {/* Speed */}
          <Card className="bg-gradient-panel border-dashboard-border shadow-panel">
            <div className="p-4">
              <h3 className="text-dashboard-green text-sm font-medium mb-2">Speed</h3>
              <div className="space-y-2">
                <div className="text-xs text-dashboard-text-muted">
                  Allowed Speed: <span className="text-dashboard-text-light">? Kmph</span>
                </div>
                <div className="text-xs text-dashboard-green">
                  Detected Speed: <span className="text-xl font-bold">12</span> Kmph
                </div>
                <div className="mt-4">
                  <h4 className="text-dashboard-green text-sm font-medium mb-2">Container</h4>
                  <div className="bg-dashboard-red h-8 rounded flex items-center justify-center mb-2">
                    <div className="text-white text-xs font-mono">|||||||||||||||||||||||||||</div>
                  </div>
                  <div className="text-xs text-dashboard-text-muted">Type: -</div>
                </div>
              </div>
            </div>
          </Card>

          {/* 3D Scan */}
          <Card className="bg-gradient-panel border-dashboard-border shadow-panel">
            <div className="p-4">
              <h3 className="text-dashboard-green text-sm font-medium mb-2">3D Scan</h3>
              <div className="bg-dashboard-navy/50 h-32 rounded border border-dashboard-border flex items-center justify-center">
                <div className="text-dashboard-text-muted text-xs">3D Vehicle Scan Placeholder</div>
              </div>
            </div>
          </Card>

          {/* Front Image */}
          <Card className="bg-gradient-panel border-dashboard-border shadow-panel">
            <div className="p-4">
              <h3 className="text-dashboard-green text-sm font-medium mb-2">Front Image</h3>
              <div className="bg-dashboard-navy/50 h-32 rounded border border-dashboard-border flex items-center justify-center">
                <div className="text-dashboard-text-muted text-xs">Front Camera Placeholder</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Second Row - Camera Views and Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Back Image */}
          <Card className="bg-gradient-panel border-dashboard-border shadow-panel">
            <div className="p-4">
              <h3 className="text-dashboard-green text-sm font-medium mb-2">Back Image</h3>
              <div className="bg-dashboard-navy/50 h-40 rounded border border-dashboard-border flex items-center justify-center">
                <div className="text-dashboard-text-muted text-xs">Back Camera Placeholder</div>
              </div>
            </div>
          </Card>

          {/* Overview Image */}
          <Card className="bg-gradient-panel border-dashboard-border shadow-panel">
            <div className="p-4">
              <h3 className="text-dashboard-green text-sm font-medium mb-2">Overview Image</h3>
              <div className="bg-dashboard-navy/50 h-40 rounded border border-dashboard-border flex items-center justify-center">
                <div className="text-dashboard-text-muted text-xs">Overview Camera Placeholder</div>
              </div>
            </div>
          </Card>

          {/* Timeline */}
          <Card className="bg-gradient-panel border-dashboard-border shadow-panel">
            <div className="p-4">
              <h3 className="text-dashboard-green text-sm font-medium mb-2">Timeline</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-8 bg-dashboard-navy/50 rounded border border-dashboard-border flex items-center justify-center">
                    <div className="text-xs text-dashboard-text-muted">IMG</div>
                  </div>
                  <div className="text-xs text-dashboard-text-muted">
                    2024-12-12 16:04<br/>
                    Entry Lane 1
                  </div>
                </div>
                <div className="bg-dashboard-navy/50 h-24 rounded border border-dashboard-border"></div>
              </div>
            </div>
          </Card>
        </div>

        {/* Third Row - Filters and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filter Section */}
          <Card className="bg-gradient-panel border-dashboard-border shadow-panel">
            <div className="p-4">
              <h3 className="text-dashboard-green text-sm font-medium mb-4">Filter</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-dashboard-text-muted">Timestamp</label>
                  <div className="text-xs text-dashboard-text-light">2024-12-12 00:00 - 2024-12-12 23:59</div>
                </div>
                <div>
                  <label className="text-xs text-dashboard-text-muted">Entry</label>
                  <select className="w-full bg-dashboard-navy/50 border border-dashboard-border rounded px-2 py-1 text-xs text-dashboard-text-light">
                    <option>All</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-dashboard-text-muted">Plate Prefix</label>
                  <input 
                    type="text" 
                    className="w-full bg-dashboard-navy/50 border border-dashboard-border rounded px-2 py-1 text-xs text-dashboard-text-light"
                  />
                </div>
                <div>
                  <label className="text-xs text-dashboard-text-muted">Plate Number</label>
                  <input 
                    type="text" 
                    className="w-full bg-dashboard-navy/50 border border-dashboard-border rounded px-2 py-1 text-xs text-dashboard-text-light"
                  />
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-dashboard-green hover:bg-dashboard-green-bright text-white">
                    Search
                  </Button>
                  <Button size="sm" variant="outline" className="border-dashboard-border text-dashboard-text-light">
                    Reset
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Map */}
          <Card className="lg:col-span-3 bg-gradient-panel border-dashboard-border shadow-panel">
            <div className="p-4">
              <h3 className="text-dashboard-green text-sm font-medium mb-2">Map</h3>
              <div className="bg-dashboard-navy/50 h-64 rounded border border-dashboard-border flex items-center justify-center relative">
                <div className="text-dashboard-text-muted text-xs">Map Placeholder</div>
                <div className="absolute top-2 right-2">
                  <Badge className="bg-dashboard-green text-white">Entry Lane 1</Badge>
                </div>
                <div className="absolute bottom-4 right-4">
                  <Button size="sm" className="bg-dashboard-green hover:bg-dashboard-green-bright text-white">
                    View Events
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Data Table */}
        <Card className="bg-gradient-panel border-dashboard-border shadow-panel">
          <div className="p-4">
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-dashboard-border">
                    <th className="text-left text-dashboard-green p-2">Time</th>
                    <th className="text-left text-dashboard-green p-2">LPR</th>
                    <th className="text-left text-dashboard-green p-2">Gate</th>
                    <th className="text-left text-dashboard-green p-2">Container Code</th>
                    <th className="text-left text-dashboard-green p-2">Vehicle Class</th>
                    <th className="text-left text-dashboard-green p-2">Number Of Axle</th>
                    <th className="text-left text-dashboard-green p-2">Total Weight</th>
                    <th className="text-left text-dashboard-green p-2">Speed</th>
                    <th className="text-left text-dashboard-green p-2">Dimension(LxH)</th>
                    <th className="text-left text-dashboard-green p-2">Loaded</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-dashboard-border/50">
                    <td className="p-2 text-dashboard-text-light">2024-12-12<br/>16:04:21.543</td>
                    <td className="p-2 text-dashboard-text-light">IRQ A 4008</td>
                    <td className="p-2 text-dashboard-text-light">Entry Lane 1</td>
                    <td className="p-2 text-dashboard-text-light">-</td>
                    <td className="p-2 text-dashboard-text-light">Private</td>
                    <td className="p-2 text-dashboard-text-light">-</td>
                    <td className="p-2 text-dashboard-text-light">12.00</td>
                    <td className="p-2 text-dashboard-text-light">-</td>
                    <td className="p-2 text-dashboard-text-light">13.86x4.43x0.00</td>
                    <td className="p-2 text-dashboard-text-light">-</td>
                  </tr>
                  <tr className="border-b border-dashboard-border/50">
                    <td className="p-2 text-dashboard-text-light">2024-12-12<br/>16:04:21.543</td>
                    <td className="p-2 text-dashboard-text-light">IRQ R 39266</td>
                    <td className="p-2 text-dashboard-text-light">Entry Lane 1</td>
                    <td className="p-2 text-dashboard-text-light">-</td>
                    <td className="p-2 text-dashboard-text-light">Private</td>
                    <td className="p-2 text-dashboard-text-light">-</td>
                    <td className="p-2 text-dashboard-text-light">11.00</td>
                    <td className="p-2 text-dashboard-text-light">-</td>
                    <td className="p-2 text-dashboard-text-light">14.38x4.52x0.00</td>
                    <td className="p-2 text-dashboard-text-light">-</td>
                  </tr>
                  <tr className="border-b border-dashboard-border/50">
                    <td className="p-2 text-dashboard-text-light">2024-12-12<br/>15:58:40.093</td>
                    <td className="p-2 text-dashboard-text-light">IRQ 66578</td>
                    <td className="p-2 text-dashboard-text-light">Entry Lane 1</td>
                    <td className="p-2 text-dashboard-text-light">-</td>
                    <td className="p-2 text-dashboard-text-light">Private</td>
                    <td className="p-2 text-dashboard-text-light">-</td>
                    <td className="p-2 text-dashboard-text-light">-</td>
                    <td className="p-2 text-dashboard-text-light">-</td>
                    <td className="p-2 text-dashboard-text-light">0.00x0x0</td>
                    <td className="p-2 text-dashboard-text-light">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-between items-center mt-4 text-xs text-dashboard-text-muted">
              <span>Total 48 rows - Rows Per Page</span>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="border-dashboard-border text-dashboard-text-light">
                  <Minus className="w-3 h-3" />
                </Button>
                <span className="px-2">1</span>
                <Button size="sm" variant="outline" className="border-dashboard-border text-dashboard-text-light">
                  <Plus className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Bottom notice */}
        <div className="text-right text-xs text-dashboard-text-muted">
          Activate Windows<br/>
          Go to Settings to activate Windows
        </div>
      </div>
    </div>
  );
};

export default VehicleTrackingDashboard;