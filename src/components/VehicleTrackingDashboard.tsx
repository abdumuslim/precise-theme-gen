import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Settings, Home, CalendarIcon } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import type { DateRange } from "react-day-picker";

const VehicleTrackingDashboard = () => {
  const [filters, setFilters] = useState({
    periodRange: '',
    entry: 'All',
    platePrefix: '',
    plateNumber: ''
  });
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  const vehicleData = [
    { time: '2025-08-15 14:23:18.543', lpr: 'IRQ 102345', gate: 'Entry Lane 1', container: '-', vehicleClass: 'Private', axles: '4', weight: '12.00', speed: '-', dimension: '13.86x4.43x0.00', loaded: '-', image: 'number 102345.png' },
    { time: '2025-07-22 09:15:42.544', lpr: 'IRQ S 10346', gate: 'Entry Lane 1', container: '-', vehicleClass: 'Private', axles: '2', weight: '12.50', speed: '26', dimension: '14.86x4.53x0.00', loaded: '-', image: 'number s 10346.png' },
    { time: '2025-06-08 11:37:29.545', lpr: 'IRQ 3296', gate: 'Entry Lane 1', container: '-', vehicleClass: 'Private', axles: '4', weight: '13.00', speed: '-', dimension: '15.86x4.63x0.00', loaded: '-', image: 'number 3296.jpg' },
    { time: '2025-05-14 16:52:07.546', lpr: 'IRQ 548306', gate: 'Entry Lane 1', container: '-', vehicleClass: 'Private', axles: '2', weight: '13.50', speed: '28', dimension: '16.86x4.73x0.00', loaded: '-', image: 'number 548306.jpg' },
    { time: '2025-08-03 08:41:33.547', lpr: '21 G 34567', gate: 'Entry Lane 1', container: '-', vehicleClass: 'Private', axles: '4', weight: '14.00', speed: '29', dimension: '17.86x4.83x0.00', loaded: '-', image: 'number 21 G 34567.png' }
  ];

  const filteredData = vehicleData.filter(item => {
    if (filters.platePrefix && !item.lpr.toLowerCase().includes(filters.platePrefix.toLowerCase())) {
      return false;
    }
    if (filters.plateNumber && !item.lpr.toLowerCase().includes(filters.plateNumber.toLowerCase())) {
      return false;
    }
    if (filters.entry !== 'All' && item.gate !== filters.entry) {
      return false;
    }
    return true;
  });

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const handleSearch = () => {
    // Filter is applied automatically through filteredData
  };

  const handleReset = () => {
    setFilters({
      periodRange: '',
      entry: 'All',
      platePrefix: '',
      plateNumber: ''
    });
    setDateRange(undefined);
  };
  return (
    <div className="h-screen w-screen bg-dashboard-navy text-dashboard-text-light flex flex-col overflow-hidden">
      {/* Header */}
      <header className="bg-gradient-green h-16 flex items-center justify-between px-6 shadow-panel flex-shrink-0">
        <div className="flex items-center gap-4">
          <div className="text-white font-bold text-xl">Check point monitoring system</div>
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
                <div className="font-medium">2025-08-15 02:23:18 PM</div>
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
                <div><span className="text-dashboard-green">Total Weight:</span> <span className="text-white">18,500 kg</span></div>
                <div><span className="text-dashboard-green">Maximum Allowed Weight:</span> <span className="text-white">25,000 kg</span></div>
                <div><span className="text-dashboard-green">Is Loaded:</span> <span className="text-white">Yes</span></div>
                <div><span className="text-dashboard-green">Number Of Axis:</span> <span className="text-white">4</span></div>
                <div><span className="text-dashboard-green">Vehicle Class:</span> <span className="text-white">Heavy Truck</span></div>
                <div><span className="text-dashboard-green">Vehicle Color:</span> <span className="text-white">Blue</span></div>
                <div><span className="text-dashboard-green">Vehicle Make:</span> <span className="text-white">Mercedes</span></div>
                <div><span className="text-dashboard-green">Vehicle Model:</span> <span className="text-white">Actros</span></div>
              </div>
              
              {/* Right Grid - Truck Image */}
              <div className="flex-1 flex items-center justify-center relative">
                {/* Truck Image */}
                <img src="/icons/truck.png" alt="Truck" className="w-full h-full object-contain brightness-0 invert absolute -left-8" />
                
                {/* Height measurement */}
                <div className="absolute right-0.5 top-14 flex flex-col items-center">
                  <div className="bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">4.2</div>
                </div>
                
                {/* Length measurement */}
                <div className="absolute bottom-11 left-1/2 transform translate-x-4 flex flex-col items-center">
                  <div className="bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">12.5</div>
                </div>
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
                <img src="/icons/rear truck.jpg" alt="Rear Truck" className="w-1/2 h-1/2 object-cover rounded" />
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
                <img src="/icons/front truck.jpg" alt="Front Truck" className="w-1/2 h-1/2 object-cover rounded" />
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

          {/* Overview Image & Map - Split */}
          <div className="grid grid-cols-2 gap-0.5">
            {/* Overview Image */}
            <Card className="bg-gradient-panel border-dashboard-border shadow-panel flex flex-col">
              <div className="bg-dashboard-text-muted/20 px-1 py-0.5 border-b border-dashboard-border">
                <h3 className="text-dashboard-text-light text-xs font-medium">Overview Image</h3>
              </div>
              <div className="p-0.5 flex flex-col flex-grow">
                <div className="bg-dashboard-navy/50 flex-grow rounded border border-dashboard-border flex items-center justify-center">
                  <img src="/icons/overview image.png" alt="Overview" className="w-1/2 h-1/2 object-cover rounded" />
                </div>
              </div>
            </Card>

            {/* Map */}
            <Card className="bg-gradient-panel border-dashboard-border shadow-panel flex flex-col">
              <div className="bg-dashboard-text-muted/20 px-1 py-0.5 border-b border-dashboard-border">
                <h3 className="text-dashboard-text-light text-xs font-medium">Map</h3>
              </div>
              <div className="p-0.5 flex flex-col flex-grow">
                <div className="bg-dashboard-navy/50 flex-grow rounded border border-dashboard-border flex items-center justify-center">
                  <img src="/icons/map.png" alt="Map" className="w-1/2 h-1/2 object-cover rounded" />
                </div>
              </div>
            </Card>
          </div>

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
                    <div className="text-white font-semibold">2025-08-15 14:23</div>
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
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal bg-dashboard-navy/50 border-dashboard-border text-xs h-8",
                          !dateRange && "text-dashboard-text-muted"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-3 w-3" />
                        {dateRange?.from ? (
                          dateRange.to ? (
                            <>
                              {format(dateRange.from, "LLL dd, y")} -{" "}
                              {format(dateRange.to, "LLL dd, y")}
                            </>
                          ) : (
                            format(dateRange.from, "LLL dd, y")
                          )
                        ) : (
                          <span>Pick a date range</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="range"
                        defaultMonth={dateRange?.from}
                        selected={dateRange}
                        onSelect={setDateRange}
                        numberOfMonths={2}
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <label className="text-xs text-dashboard-text-muted">Entry</label>
                  <select 
                    value={filters.entry}
                    onChange={(e) => handleFilterChange('entry', e.target.value)}
                    className="w-full bg-dashboard-navy/50 border border-dashboard-border rounded px-2 py-1 text-xs text-white"
                  >
                    <option value="All">All</option>
                    <option value="Entry Lane 1">Entry Lane 1</option>
                    <option value="Entry Lane 2">Entry Lane 2</option>
                    <option value="Exit Lane 1">Exit Lane 1</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-dashboard-text-muted">Plate Prefix</label>
                  <input 
                    type="text" 
                    value={filters.platePrefix}
                    onChange={(e) => handleFilterChange('platePrefix', e.target.value)}
                    className="w-full bg-dashboard-navy/50 border border-dashboard-border rounded px-2 py-1 text-xs text-white placeholder-dashboard-text-muted"
                  />
                </div>
                <div>
                  <label className="text-xs text-dashboard-text-muted">Plate Number</label>
                  <input 
                    type="text" 
                    value={filters.plateNumber}
                    onChange={(e) => handleFilterChange('plateNumber', e.target.value)}
                    className="w-full bg-dashboard-navy/50 border border-dashboard-border rounded px-2 py-1 text-xs text-white placeholder-dashboard-text-muted"
                  />
                </div>
                <div className="flex gap-1 pt-1">
                  <Button 
                    size="sm" 
                    onClick={handleSearch}
                    className="bg-dashboard-green hover:bg-dashboard-green-bright text-white text-xs px-2 py-1"
                  >
                    Search
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={handleReset}
                    className="border-dashboard-border text-dashboard-text-light text-xs px-2 py-1"
                  >
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
                    <colgroup>
                      <col style={{ width: '12%' }} />
                      <col style={{ width: '10%' }} />
                      <col style={{ width: '10%' }} />
                      <col style={{ width: '12%' }} />
                      <col style={{ width: '10%' }} />
                      <col style={{ width: '6%' }} />
                      <col style={{ width: '8%' }} />
                      <col style={{ width: '7%' }} />
                      <col style={{ width: '15%' }} />
                      <col style={{ width: '7%' }} />
                      <col style={{ width: '10%' }} />
                    </colgroup>
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
                        <th className="text-left text-dashboard-green p-2"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.map((item, i) => (
                        <tr key={i} className="border-b border-dashboard-border/50 hover:bg-dashboard-navy/20">
                          <td className="p-2 text-dashboard-text-light" dangerouslySetInnerHTML={{__html: item.time.replace(' ', '<br/>')}}></td>
                          <td className="p-2 text-dashboard-text-light">{item.lpr}</td>
                          <td className="p-2 text-dashboard-text-light">{item.gate}</td>
                          <td className="p-2 text-dashboard-text-light">{item.container}</td>
                          <td className="p-2 text-dashboard-text-light">{item.vehicleClass}</td>
                          <td className="p-2 text-dashboard-text-light">{item.axles}</td>
                          <td className="p-2 text-dashboard-text-light">{item.weight}</td>
                          <td className="p-2 text-dashboard-text-light">{item.speed}</td>
                          <td className="p-2 text-dashboard-text-light">{item.dimension}</td>
                          <td className="p-2 text-dashboard-text-light">{item.loaded}</td>
                          <td className="p-2 text-dashboard-text-light">
                            <div className="w-full h-12 flex items-center justify-center">
                              <img 
                                src={`/icons/${item.image}`} 
                                alt="Plate" 
                                className="h-full object-contain" 
                              />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Paging Controls */}
              <div className="flex items-center justify-between px-4 py-3 border-t border-dashboard-border bg-gradient-panel mx-4 mb-6 rounded-b">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-dashboard-text-muted">Total {filteredData.length} items</span>
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