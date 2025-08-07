import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Home } from "lucide-react";

const VehicleTrackingDashboard = () => {
  return (
    <div className="h-screen w-screen bg-dashboard-navy text-dashboard-text-light flex flex-col overflow-hidden">
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
      <div className="flex-1 p-2 grid gap-0.5 overflow-hidden max-w-screen max-h-screen" style={{ gridTemplateRows: '0.45fr 0.35fr 0.7fr' }}>
        {/* Top Row - Vehicle Info Cards */}
        <div className="grid gap-0.5" style={{ gridTemplateColumns: '1fr 2fr 1fr 1fr 1fr' }}>
          {/* License Plate */}
          <Card className="bg-gradient-panel border-dashboard-border shadow-panel flex flex-col">
            <div className="bg-dashboard-text-muted/20 px-1 py-0.5 border-b border-dashboard-border">
              <h3 className="text-dashboard-text-light text-xs font-medium">Licence Plate</h3>
            </div>
            <div className="p-0.5 flex flex-col h-full">
              <div className="flex justify-center mt-2 mb-1 flex-shrink-0">
                <div className="bg-white text-black font-bold py-0.5 px-1 rounded inline-block" style={{ fontSize: 'clamp(10px, 1.5vw, 16px)' }}>IRQ A 4008</div>
              </div>
              <div className="flex-1 flex flex-col justify-center space-y-0 overflow-hidden" style={{ fontSize: 'clamp(8px, 1.1vw, 14px)' }}>
                <div className="font-medium">2024-12-12 04:04:21 PM</div>
                <div><span className="text-dashboard-green">Plate Source</span>: <span className="text-white">Iraq - Common</span></div>
                <div><span className="text-dashboard-green">Gate</span>: <span className="text-white">Entry Lane 1</span></div>
                <div><span className="text-dashboard-green">Lane Type</span>: <span className="text-white">Entry</span></div>
                <div><span className="text-dashboard-green">Traffic Type</span>: <span className="text-white">Private</span></div>
                <div><span className="text-dashboard-green">Plate Colour</span>: <span className="text-white">White</span></div>
                <div><span className="text-dashboard-green">Confidence</span>: <span className="text-white font-semibold">21</span></div>
              </div>
            </div>
          </Card>

          {/* Vehicle Details */}
          <Card className="bg-gradient-panel border-dashboard-border shadow-panel flex flex-col">
            <div className="bg-dashboard-text-muted/20 px-1 py-0.5 border-b border-dashboard-border">
              <h3 className="text-dashboard-text-light text-xs font-medium">Vehicle Details</h3>
            </div>
            <div className="p-0.5 flex flex-grow">
              {/* Left Grid - Vehicle Information */}
              <div className="flex-1 flex flex-col justify-center space-y-0.5 text-sm">
                <div className="text-dashboard-green">Total Weight:</div>
                <div className="text-dashboard-green">Maximum Allowed Weight:</div>
                <div className="text-dashboard-green">Is Loaded:</div>
                <div className="text-dashboard-green">Number Of Axis:</div>
                <div className="text-dashboard-green">Vehicle Class:</div>
                <div className="text-dashboard-green">Vehicle Color:</div>
                <div className="text-dashboard-green">Vehicle Make:</div>
                <div className="text-dashboard-green">Vehicle Model:</div>
              </div>
              
              {/* Right Grid - Truck Image */}
              <div className="flex-1 flex items-center justify-center relative">
                <img src="/icons/truck.png" alt="Truck" className="w-full h-full object-contain brightness-0 invert absolute -left-4" />
              </div>
            </div>
          </Card>

          {/* Speed & Container - Stacked */}
          <div className="flex flex-col gap-1">
            {/* Speed */}
            <Card className="bg-gradient-panel border-dashboard-border shadow-panel flex flex-col flex-1">
              <div className="bg-dashboard-text-muted/20 px-2 py-1 border-b border-dashboard-border">
                <h3 className="text-dashboard-text-light text-xs font-medium">Speed</h3>
              </div>
              <div className="p-1 flex flex-col flex-grow">
                <div className="space-y-0.5">
                  <div className="text-xs text-dashboard-text-muted">
                    Allowed Speed: <span className="text-white font-semibold">?</span> Kmph
                  </div>
                  <div className="text-xs text-dashboard-text-muted">
                    Detected Speed: <span className="text-dashboard-green text-sm font-bold">12</span> Kmph
                  </div>
                </div>
              </div>
            </Card>

            {/* Container */}
            <Card className="bg-gradient-panel border-dashboard-border shadow-panel flex flex-col flex-1">
              <div className="bg-dashboard-text-muted/20 px-2 py-1 border-b border-dashboard-border">
                <h3 className="text-dashboard-text-light text-xs font-medium">Container</h3>
              </div>
              <div className="p-0.5 flex flex-col flex-grow">
                <div className="flex-1 flex items-center justify-center">
                  <img src="/icons/container.png" alt="Container" className="w-4/5 h-4/5 object-contain" />
                </div>
                <div className="text-xs text-dashboard-text-muted text-left">Type: -</div>
              </div>
            </Card>
          </div>

          {/* Back Image */}
          <Card className="bg-gradient-panel border-dashboard-border shadow-panel flex flex-col">
            <div className="bg-dashboard-text-muted/20 px-2 py-1 border-b border-dashboard-border">
              <h3 className="text-dashboard-text-light text-xs font-medium">Back Image</h3>
            </div>
            <div className="p-1 flex flex-col flex-grow">
              <div className="bg-dashboard-navy/50 flex-grow rounded border border-dashboard-border flex items-center justify-center">
                <div className="text-dashboard-text-muted text-xs">Back Camera</div>
              </div>
            </div>
          </Card>

          {/* Front Image */}
          <Card className="bg-gradient-panel border-dashboard-border shadow-panel flex flex-col">
            <div className="bg-dashboard-text-muted/20 px-2 py-1 border-b border-dashboard-border">
              <h3 className="text-dashboard-text-light text-xs font-medium">Front Image</h3>
            </div>
            <div className="p-1 flex flex-col flex-grow">
              <div className="bg-dashboard-navy/50 flex-grow rounded border border-dashboard-border flex items-center justify-center">
                <div className="text-dashboard-text-muted text-xs">Front Camera</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Middle Row - Camera Views and Timeline */}
        <div className="grid grid-cols-3 gap-0.5">
          {/* 3D Scan */}
          <Card className="bg-gradient-panel border-dashboard-border shadow-panel flex flex-col">
            <div className="bg-dashboard-text-muted/20 px-1 py-0.5 border-b border-dashboard-border">
              <h3 className="text-dashboard-text-light text-xs font-medium">3D Scan</h3>
            </div>
            <div className="p-0.5 flex flex-col flex-grow">
              <div className="bg-dashboard-navy/50 flex-grow rounded border border-dashboard-border flex items-center justify-center">
                <div className="text-dashboard-text-muted text-xs">3D Vehicle Scan</div>
              </div>
            </div>
          </Card>

          {/* Overview Image */}
          <Card className="bg-gradient-panel border-dashboard-border shadow-panel flex flex-col">
            <div className="bg-dashboard-text-muted/20 px-1 py-0.5 border-b border-dashboard-border">
              <h3 className="text-dashboard-text-light text-xs font-medium">Overview Image</h3>
            </div>
            <div className="p-0.5 flex flex-col flex-grow">
              <div className="bg-dashboard-navy/50 flex-grow rounded border border-dashboard-border flex items-center justify-center">
                <div className="text-dashboard-text-muted text-xs">Overview Camera</div>
              </div>
            </div>
          </Card>

          {/* Timeline */}
          <Card className="bg-gradient-panel border-dashboard-border shadow-panel flex flex-col">
            <div className="bg-dashboard-text-muted/20 px-1 py-0.5 border-b border-dashboard-border">
              <h3 className="text-dashboard-text-light text-xs font-medium">Timeline</h3>
            </div>
            <div className="p-0.5 flex flex-col flex-grow">
              <div className="flex-grow space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-6 bg-dashboard-navy/50 rounded border border-dashboard-border flex items-center justify-center">
                    <div className="text-xs text-dashboard-text-muted">IMG</div>
                  </div>
                  <div className="text-xs text-dashboard-text-muted">
                    <div className="text-white font-semibold">2024-12-12 16:04</div>
                    <div>Entry Lane 1</div>
                  </div>
                </div>
                <div className="bg-dashboard-navy/50 flex-grow rounded border border-dashboard-border"></div>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom Row - Fixed Filter and Data Table */}
        <div className="grid grid-cols-4 gap-0.5 overflow-hidden">
          {/* Filter Section - Square-like */}
          <Card className="bg-gradient-panel border-dashboard-border shadow-panel flex flex-col">
            <div className="bg-dashboard-text-muted/20 px-1 py-0.5 border-b border-dashboard-border">
              <h3 className="text-dashboard-text-light text-xs font-medium">Filter</h3>
            </div>
            <div className="p-0.5 flex flex-col flex-grow">
              <div className="space-y-0.5 flex-grow">
                <div>
                  <label className="text-xs text-dashboard-text-muted">Period Range</label>
                  <input 
                    type="text" 
                    placeholder="2024-12-12 00:00 - 2024-12-12 23:59"
                    className="w-full bg-dashboard-navy/50 border border-dashboard-border rounded px-2 py-1 text-xs text-white placeholder-dashboard-text-muted"
                  />
                </div>
                <div>
                  <label className="text-xs text-dashboard-text-muted">Entry</label>
                  <select className="w-full bg-dashboard-navy/50 border border-dashboard-border rounded px-2 py-1 text-xs text-white">
                    <option>All</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-dashboard-text-muted">Plate Prefix</label>
                  <input 
                    type="text" 
                    className="w-full bg-dashboard-navy/50 border border-dashboard-border rounded px-2 py-1 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-xs text-dashboard-text-muted">Plate Number</label>
                  <input 
                    type="text" 
                    className="w-full bg-dashboard-navy/50 border border-dashboard-border rounded px-2 py-1 text-xs text-white"
                  />
                </div>
                <div className="flex gap-1 pt-1">
                  <Button size="sm" className="bg-dashboard-green hover:bg-dashboard-green-bright text-white text-xs px-2 py-1">
                    Search
                  </Button>
                  <Button size="sm" variant="outline" className="border-dashboard-border text-dashboard-text-light text-xs px-2 py-1">
                    Reset
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Data Table - Scrollable */}
          <Card className="col-span-3 bg-gradient-panel border-dashboard-border shadow-panel flex flex-col overflow-hidden">
            <div className="bg-dashboard-text-muted/20 px-1 py-0.5 border-b border-dashboard-border">
              <h3 className="text-dashboard-text-light text-xs font-medium">Vehicle Data</h3>
            </div>
            <div className="flex flex-col h-full">
              <div className="border border-dashboard-border rounded mb-2 mx-2 mt-2 flex-1 min-h-0">
                <div className="h-full overflow-y-auto">
                  <table className="w-full text-xs" style={{ tableLayout: 'fixed' }}>
                    <thead className="bg-gradient-panel border-b border-dashboard-border sticky top-0">
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
              
              {/* Paging Controls */}
              <div className="flex items-center justify-between px-4 py-3 border-t border-dashboard-border bg-gradient-panel mx-4 mb-6 rounded-b">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-dashboard-text-muted">Total 25 items</span>
                </div>
                
                <div className="flex items-center gap-4">
                  {/* Rows Per Page */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-dashboard-text-muted">Rows Per Page:</span>
                    <select className="bg-dashboard-navy/50 border border-dashboard-border rounded px-2 py-1 text-xs text-white">
                      <option value="10">10</option>
                      <option value="25" selected>25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                  </div>
                  
                  {/* Page Info */}
                  <span className="text-xs text-dashboard-text-muted">1-8 of 25</span>
                  
                  {/* Navigation Buttons */}
                  <div className="flex items-center gap-1">
                    <Button size="sm" variant="outline" className="border-dashboard-border text-dashboard-text-light h-8 w-8 p-0">
                      <span className="text-xs">⏪</span>
                    </Button>
                    <Button size="sm" variant="outline" className="border-dashboard-border text-dashboard-text-light h-8 w-8 p-0">
                      <span className="text-xs">◀</span>
                    </Button>
                    <Button size="sm" className="bg-dashboard-green text-white h-8 w-8 p-0">
                      <span className="text-xs">1</span>
                    </Button>
                    <Button size="sm" variant="outline" className="border-dashboard-border text-dashboard-text-light h-8 w-8 p-0">
                      <span className="text-xs">2</span>
                    </Button>
                    <Button size="sm" variant="outline" className="border-dashboard-border text-dashboard-text-light h-8 w-8 p-0">
                      <span className="text-xs">3</span>
                    </Button>
                    <Button size="sm" variant="outline" className="border-dashboard-border text-dashboard-text-light h-8 w-8 p-0">
                      <span className="text-xs">▶</span>
                    </Button>
                    <Button size="sm" variant="outline" className="border-dashboard-border text-dashboard-text-light h-8 w-8 p-0">
                      <span className="text-xs">⏩</span>
                    </Button>
                  </div>
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