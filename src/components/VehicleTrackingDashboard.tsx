import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Home } from "lucide-react";

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
      <div className="flex-1 p-4 grid gap-4 min-h-0" style={{ gridTemplateRows: '0.6fr 0.8fr 1.8fr' }}>
        {/* Top Row - Vehicle Info Cards */}
        <div className="grid gap-4" style={{ gridTemplateColumns: '1fr 2fr 1fr 1fr 1fr' }}>
          {/* License Plate */}
          <Card className="bg-gradient-panel border-dashboard-border shadow-panel flex flex-col">
            <div className="bg-dashboard-text-muted/20 px-3 py-2 border-b border-dashboard-border">
              <h3 className="text-dashboard-text-light text-sm font-medium">Licence Plate</h3>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <div className="text-white text-lg font-bold mb-1 text-center">IRQ A 4008</div>
              <div className="text-xs text-dashboard-text-muted space-y-0.5 flex-grow">
                <div className="font-medium text-xs">2024-12-12 04:04:21 PM</div>
                <div>Plate Source: <span className="text-white">Iraq - Common</span></div>
                <div>Gate: <span className="text-white">Entry Lane 1</span></div>
                <div>Lane Type: <span className="text-white">Entry</span></div>
                <div>Traffic Type: <span className="text-white">Private</span></div>
                <div>Plate Colour: <span className="text-white">White</span></div>
                <div>Confidence: <span className="text-white font-semibold">21</span></div>
              </div>
            </div>
          </Card>

          {/* Vehicle Details */}
          <Card className="bg-gradient-panel border-dashboard-border shadow-panel flex flex-col">
            <div className="bg-dashboard-text-muted/20 px-3 py-2 border-b border-dashboard-border">
              <h3 className="text-dashboard-text-light text-sm font-medium">Vehicle Details</h3>
            </div>
            <div className="p-3 flex flex-col flex-grow">
              <div className="flex items-center justify-center mb-2">
                <div className="w-20 h-12 flex items-center justify-center p-1">
                  <img src="/icons/truck.png" alt="Truck" className="w-full h-full object-contain brightness-0 invert scale-50" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-2 gap-y-0 text-xs flex-grow overflow-hidden">
                <div className="text-dashboard-text-muted text-xs">Distance (m):</div>
                <div className="text-dashboard-text-muted text-xs">Height (m):</div>
                <div className="text-white font-semibold text-xs">5.7</div>
                <div className="text-white font-semibold text-xs">4.43</div>
                <div className="text-dashboard-text-muted text-xs">Weight (ton):</div>
                <div className="text-dashboard-text-muted text-xs">Total Length (m):</div>
                <div className="text-white font-semibold text-xs">12.00</div>
                <div className="text-white font-semibold text-xs">13650.00</div>
                <div className="text-dashboard-text-muted text-xs">Axles:</div>
                <div className="text-dashboard-text-muted text-xs">Class:</div>
                <div className="text-white font-semibold text-xs">4</div>
                <div className="text-white font-semibold text-xs">Private</div>
              </div>
            </div>
          </Card>

          {/* Speed & Container - Stacked */}
          <div className="flex flex-col gap-2">
            {/* Speed */}
            <Card className="bg-gradient-panel border-dashboard-border shadow-panel flex flex-col flex-1">
              <div className="bg-dashboard-text-muted/20 px-2 py-1 border-b border-dashboard-border">
                <h3 className="text-dashboard-text-light text-xs font-medium">Speed</h3>
              </div>
              <div className="p-2 flex flex-col flex-grow">
                <div className="space-y-1">
                  <div className="text-xs text-dashboard-text-muted">
                    Allowed Speed: <span className="text-white font-semibold">?</span> Kmph
                  </div>
                  <div className="text-xs text-dashboard-text-muted">
                    Detected Speed: <span className="text-dashboard-green text-lg font-bold">12</span> Kmph
                  </div>
                </div>
              </div>
            </Card>

            {/* Container */}
            <Card className="bg-gradient-panel border-dashboard-border shadow-panel flex flex-col flex-1">
              <div className="bg-dashboard-text-muted/20 px-2 py-1 border-b border-dashboard-border">
                <h3 className="text-dashboard-text-light text-xs font-medium">Container</h3>
              </div>
              <div className="p-2 flex flex-col flex-grow">
                <div className="space-y-1">
                  <div className="h-16 mb-1">
                    <img src="/icons/container.png" alt="Container" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-xs text-dashboard-text-muted">Type: -</div>
                </div>
              </div>
            </Card>
          </div>

          {/* 3D Scan */}
          <Card className="bg-gradient-panel border-dashboard-border shadow-panel flex flex-col">
            <div className="bg-dashboard-text-muted/20 px-3 py-2 border-b border-dashboard-border">
              <h3 className="text-dashboard-text-light text-sm font-medium">3D Scan</h3>
            </div>
            <div className="p-3 flex flex-col flex-grow">
              <div className="bg-dashboard-navy/50 flex-grow rounded border border-dashboard-border flex items-center justify-center">
                <div className="text-dashboard-text-muted text-xs">3D Vehicle Scan</div>
              </div>
            </div>
          </Card>

          {/* Front Image */}
          <Card className="bg-gradient-panel border-dashboard-border shadow-panel flex flex-col">
            <div className="bg-dashboard-text-muted/20 px-3 py-2 border-b border-dashboard-border">
              <h3 className="text-dashboard-text-light text-sm font-medium">Front Image</h3>
            </div>
            <div className="p-3 flex flex-col flex-grow">
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
            <div className="bg-dashboard-text-muted/20 px-3 py-2 border-b border-dashboard-border">
              <h3 className="text-dashboard-text-light text-sm font-medium">Back Image</h3>
            </div>
            <div className="p-3 flex flex-col flex-grow">
              <div className="bg-dashboard-navy/50 flex-grow rounded border border-dashboard-border flex items-center justify-center">
                <div className="text-dashboard-text-muted text-xs">Back Camera</div>
              </div>
            </div>
          </Card>

          {/* Overview Image */}
          <Card className="bg-gradient-panel border-dashboard-border shadow-panel flex flex-col">
            <div className="bg-dashboard-text-muted/20 px-3 py-2 border-b border-dashboard-border">
              <h3 className="text-dashboard-text-light text-sm font-medium">Overview Image</h3>
            </div>
            <div className="p-3 flex flex-col flex-grow">
              <div className="bg-dashboard-navy/50 flex-grow rounded border border-dashboard-border flex items-center justify-center">
                <div className="text-dashboard-text-muted text-xs">Overview Camera</div>
              </div>
            </div>
          </Card>

          {/* Timeline */}
          <Card className="bg-gradient-panel border-dashboard-border shadow-panel flex flex-col">
            <div className="bg-dashboard-text-muted/20 px-3 py-2 border-b border-dashboard-border">
              <h3 className="text-dashboard-text-light text-sm font-medium">Timeline</h3>
            </div>
            <div className="p-3 flex flex-col flex-grow">
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
        <div className="grid grid-cols-4 gap-4 min-h-0">
          {/* Filter Section - Square-like */}
          <Card className="bg-gradient-panel border-dashboard-border shadow-panel flex flex-col">
            <div className="bg-dashboard-text-muted/20 px-4 py-2 border-b border-dashboard-border">
              <h3 className="text-dashboard-text-light text-sm font-medium">Filter</h3>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <div className="space-y-3 flex-grow">
                <div>
                  <label className="text-xs text-dashboard-text-muted mb-2 block">Date & Time Range</label>
                  <div className="space-y-2">
                    <div>
                      <label className="text-xs text-dashboard-text-muted">From</label>
                      <div className="flex gap-1">
                        <input 
                          type="date" 
                          defaultValue="2024-12-12"
                          className="flex-1 bg-dashboard-navy/50 border border-dashboard-border rounded px-2 py-1 text-xs text-white"
                        />
                        <input 
                          type="time" 
                          defaultValue="00:00"
                          className="bg-dashboard-navy/50 border border-dashboard-border rounded px-2 py-1 text-xs text-white"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-dashboard-text-muted">To</label>
                      <div className="flex gap-1">
                        <input 
                          type="date" 
                          defaultValue="2024-12-12"
                          className="flex-1 bg-dashboard-navy/50 border border-dashboard-border rounded px-2 py-1 text-xs text-white"
                        />
                        <input 
                          type="time" 
                          defaultValue="23:59"
                          className="bg-dashboard-navy/50 border border-dashboard-border rounded px-2 py-1 text-xs text-white"
                        />
                      </div>
                    </div>
                  </div>
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
            <div className="bg-dashboard-text-muted/20 px-4 py-2 border-b border-dashboard-border">
              <h3 className="text-dashboard-text-light text-sm font-medium">Vehicle Data</h3>
            </div>
            <div className="p-4 flex flex-col h-full">
              <div className="border border-dashboard-border rounded flex-1 flex flex-col min-h-0 mb-4">
                <div className="h-72 overflow-y-auto">
                  <table className="w-full text-xs table-fixed">
                    <thead className="bg-gradient-panel border-b border-dashboard-border sticky top-0">
                      <tr>
                        <th className="text-left text-dashboard-green p-2 w-24">Time</th>
                        <th className="text-left text-dashboard-green p-2 w-24">LPR</th>
                        <th className="text-left text-dashboard-green p-2 w-24">Gate</th>
                        <th className="text-left text-dashboard-green p-2 w-28">Container Code</th>
                        <th className="text-left text-dashboard-green p-2 w-24">Vehicle Class</th>
                        <th className="text-left text-dashboard-green p-2 w-16">Axles</th>
                        <th className="text-left text-dashboard-green p-2 w-20">Weight</th>
                        <th className="text-left text-dashboard-green p-2 w-16">Speed</th>
                        <th className="text-left text-dashboard-green p-2 w-32">Dimension</th>
                        <th className="text-left text-dashboard-green p-2 w-20">Loaded</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from({ length: 25 }, (_, i) => (
                        <tr key={i} className="border-b border-dashboard-border/50 hover:bg-dashboard-navy/20">
                          <td className="p-2 text-dashboard-text-light w-24">2024-12-12<br/>16:04:21.{543 + i}</td>
                          <td className="p-2 text-dashboard-text-light w-24">IRQ A {4008 + i}</td>
                          <td className="p-2 text-dashboard-text-light w-24">Entry Lane 1</td>
                          <td className="p-2 text-dashboard-text-light w-28">-</td>
                          <td className="p-2 text-dashboard-text-light w-24">Private</td>
                          <td className="p-2 text-dashboard-text-light w-16">{i % 2 === 0 ? '4' : '2'}</td>
                          <td className="p-2 text-dashboard-text-light w-20">{(12.00 + (i * 0.5)).toFixed(2)}</td>
                          <td className="p-2 text-dashboard-text-light w-16">{i % 3 === 0 ? '-' : `${25 + i}`}</td>
                          <td className="p-2 text-dashboard-text-light w-32">{(13.86 + i).toFixed(2)}x{(4.43 + (i * 0.1)).toFixed(2)}x0.00</td>
                          <td className="p-2 text-dashboard-text-light w-20">-</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Paging Controls */}
              <div className="flex items-center justify-between px-4 py-3 border-t border-dashboard-border bg-gradient-panel">
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