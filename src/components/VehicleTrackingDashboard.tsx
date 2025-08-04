import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Plus, Minus, Home } from "lucide-react";

const VehicleTrackingDashboard = () => {
  return (
    <div className="h-screen bg-dashboard-navy text-dashboard-text-light flex flex-col overflow-hidden">
      {/* Header */}
      <header className="bg-gradient-green h-16 flex items-center justify-between px-6 shadow-panel flex-shrink-0">
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

      {/* Main Dashboard Grid */}
      <div className="flex-1 p-4 grid gap-4 min-h-0" style={{ gridTemplateRows: '1fr 1fr 1.5fr' }}>
        {/* Top Row - Vehicle Info Cards */}
        <div className="grid grid-cols-5 gap-4">
          {/* License Plate */}
          <Card className="bg-gradient-panel border-dashboard-border shadow-panel flex flex-col">
            <div className="p-3 flex flex-col flex-grow">
              <h3 className="text-dashboard-green text-sm font-medium mb-2">Licence Plate</h3>
              <div className="text-dashboard-red text-lg font-bold">IRQ A 4008</div>
              <div className="text-xs text-dashboard-text-muted mt-1 space-y-1 flex-grow overflow-hidden">
                <div>2024-12-12 16:04:21.543</div>
                <div>Plate Source: Iraq - Common</div>
                <div>Gate: Entry Lane 1</div>
                <div>Lane Type: Entry</div>
                <div>Traffic Type: Private</div>
                <div>Plate Colour: White</div>
                <div>Confidence: 21</div>
              </div>
            </div>
          </Card>

          {/* Vehicle Details */}
          <Card className="bg-gradient-panel border-dashboard-border shadow-panel flex flex-col">
            <div className="p-3 flex flex-col flex-grow">
              <h3 className="text-dashboard-green text-sm font-medium mb-2">Vehicle Details</h3>
              <div className="flex-grow space-y-2">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-10 bg-dashboard-navy/50 rounded border border-dashboard-border flex items-center justify-center">
                    <div className="text-xs text-dashboard-text-muted">Vehicle</div>
                  </div>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="text-dashboard-text-muted">Distance (m): <span className="text-dashboard-text-light">5.7</span></div>
                  <div className="text-dashboard-text-muted">Weight (ton): <span className="text-dashboard-text-light">12.00</span></div>
                  <div className="text-dashboard-text-muted">Axles: <span className="text-dashboard-text-light">4</span></div>
                  <div className="text-dashboard-text-muted">Class: <span className="text-dashboard-text-light">Class 2</span></div>
                  <div className="text-dashboard-text-muted">Length: <span className="text-dashboard-text-light">15.00</span></div>
                  <div className="text-dashboard-text-muted">Width: <span className="text-dashboard-text-light">2.400</span></div>
                </div>
              </div>
            </div>
          </Card>

          {/* Speed */}
          <Card className="bg-gradient-panel border-dashboard-border shadow-panel flex flex-col">
            <div className="p-3 flex flex-col flex-grow">
              <h3 className="text-dashboard-green text-sm font-medium mb-2">Speed</h3>
              <div className="space-y-2 flex-grow">
                <div className="text-xs text-dashboard-text-muted">
                  Allowed: <span className="text-dashboard-text-light">? Kmph</span>
                </div>
                <div className="text-xs text-dashboard-green">
                  Detected: <span className="text-xl font-bold">12</span> Kmph
                </div>
                <div className="mt-3">
                  <h4 className="text-dashboard-green text-sm font-medium mb-2">Container</h4>
                  <div className="bg-dashboard-red h-6 rounded flex items-center justify-center mb-2">
                    <div className="text-white text-xs font-mono">||||||||||||</div>
                  </div>
                  <div className="text-xs text-dashboard-text-muted">Type: -</div>
                </div>
              </div>
            </div>
          </Card>

          {/* 3D Scan */}
          <Card className="bg-gradient-panel border-dashboard-border shadow-panel flex flex-col">
            <div className="p-3 flex flex-col flex-grow">
              <h3 className="text-dashboard-green text-sm font-medium mb-2">3D Scan</h3>
              <div className="bg-dashboard-navy/50 flex-grow rounded border border-dashboard-border flex items-center justify-center">
                <div className="text-dashboard-text-muted text-xs">3D Vehicle Scan</div>
              </div>
            </div>
          </Card>

          {/* Front Image */}
          <Card className="bg-gradient-panel border-dashboard-border shadow-panel flex flex-col">
            <div className="p-3 flex flex-col flex-grow">
              <h3 className="text-dashboard-green text-sm font-medium mb-2">Front Image</h3>
              <div className="bg-dashboard-navy/50 flex-grow rounded border border-dashboard-border flex items-center justify-center">
                <div className="text-dashboard-text-muted text-xs">Front Camera</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Middle Row - Camera Views and Timeline */}
        <div className="grid grid-cols-3 gap-4">
          {/* Back Image */}
          <Card className="bg-gradient-panel border-dashboard-border shadow-panel flex flex-col">
            <div className="p-3 flex flex-col flex-grow">
              <h3 className="text-dashboard-green text-sm font-medium mb-2">Back Image</h3>
              <div className="bg-dashboard-navy/50 flex-grow rounded border border-dashboard-border flex items-center justify-center">
                <div className="text-dashboard-text-muted text-xs">Back Camera</div>
              </div>
            </div>
          </Card>

          {/* Overview Image */}
          <Card className="bg-gradient-panel border-dashboard-border shadow-panel flex flex-col">
            <div className="p-3 flex flex-col flex-grow">
              <h3 className="text-dashboard-green text-sm font-medium mb-2">Overview Image</h3>
              <div className="bg-dashboard-navy/50 flex-grow rounded border border-dashboard-border flex items-center justify-center">
                <div className="text-dashboard-text-muted text-xs">Overview Camera</div>
              </div>
            </div>
          </Card>

          {/* Timeline */}
          <Card className="bg-gradient-panel border-dashboard-border shadow-panel flex flex-col">
            <div className="p-3 flex flex-col flex-grow">
              <h3 className="text-dashboard-green text-sm font-medium mb-2">Timeline</h3>
              <div className="flex-grow space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-6 bg-dashboard-navy/50 rounded border border-dashboard-border flex items-center justify-center">
                    <div className="text-xs text-dashboard-text-muted">IMG</div>
                  </div>
                  <div className="text-xs text-dashboard-text-muted">
                    2024-12-12 16:04<br/>
                    Entry Lane 1
                  </div>
                </div>
                <div className="bg-dashboard-navy/50 flex-grow rounded border border-dashboard-border"></div>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom Row - Fixed Filter and Data Table */}
        <div className="grid grid-cols-4 gap-4 min-h-0">
          {/* Filter Section - Square-like */}
          <Card className="bg-gradient-panel border-dashboard-border shadow-panel flex flex-col">
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-dashboard-green text-sm font-medium mb-4">Filter</h3>
              <div className="space-y-3 flex-grow">
                <div>
                  <label className="text-xs text-dashboard-text-muted">Timestamp</label>
                  <div className="text-xs text-dashboard-text-light">2024-12-12 00:00 - 23:59</div>
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
                <div className="flex gap-2 pt-2">
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

          {/* Data Table - Scrollable */}
          <Card className="col-span-3 bg-gradient-panel border-dashboard-border shadow-panel flex flex-col">
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-dashboard-green text-sm font-medium mb-2">Vehicle Data</h3>
              <div className="border border-dashboard-border rounded">
                <table className="w-full text-xs">
                  <thead className="bg-gradient-panel border-b border-dashboard-border">
                    <tr>
                      <th className="text-left text-dashboard-green p-2">Time</th>
                      <th className="text-left text-dashboard-green p-2">LPR</th>
                      <th className="text-left text-dashboard-green p-2">Gate</th>
                      <th className="text-left text-dashboard-green p-2">Container Code</th>
                      <th className="text-left text-dashboard-green p-2">Vehicle Class</th>
                      <th className="text-left text-dashboard-green p-2">Axles</th>
                      <th className="text-left text-dashboard-green p-2">Weight</th>
                      <th className="text-left text-dashboard-green p-2">Speed</th>
                      <th className="text-left text-dashboard-green p-2">Dimension</th>
                      <th className="text-left text-dashboard-green p-2">Loaded</th>
                    </tr>
                  </thead>
                </table>
                <div className="h-32 overflow-y-auto">
                  <table className="w-full text-xs">
                    <tbody>
                      {Array.from({ length: 25 }, (_, i) => (
                        <tr key={i} className="border-b border-dashboard-border/50 hover:bg-dashboard-navy/20">
                          <td className="p-2 text-dashboard-text-light">2024-12-12<br/>16:04:21.{543 + i}</td>
                          <td className="p-2 text-dashboard-text-light">IRQ A {4008 + i}</td>
                          <td className="p-2 text-dashboard-text-light">Entry Lane 1</td>
                          <td className="p-2 text-dashboard-text-light">-</td>
                          <td className="p-2 text-dashboard-text-light">Private</td>
                          <td className="p-2 text-dashboard-text-light">{i % 2 === 0 ? '4' : '2'}</td>
                          <td className="p-2 text-dashboard-text-light">{(12.00 + (i * 0.5)).toFixed(2)}</td>
                          <td className="p-2 text-dashboard-text-light">{i % 3 === 0 ? '-' : `${25 + i}`}</td>
                          <td className="p-2 text-dashboard-text-light">{(13.86 + i).toFixed(2)}x{(4.43 + (i * 0.1)).toFixed(2)}x0.00</td>
                          <td className="p-2 text-dashboard-text-light">-</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="flex justify-between items-center mt-2 text-xs text-dashboard-text-muted">
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
        </div>
      </div>
    </div>
  );
};

export default VehicleTrackingDashboard;