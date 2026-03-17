const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data_store.json'));

data.marketIntelligence = {
  momentumItems: [
    {
      icon: 'FileText',
      iconColor: 'bg-blue-50 text-blue-500',
      title: 'New Quantum patent filing by SynapCore Ltd.',
      time: '2m ago',
      category: 'Patents'
    },
    {
      icon: 'Briefcase',
      iconColor: 'bg-indigo-50 text-indigo-500',
      title: "Lucid Dynamics acquires AI startup 'Nodal'.",
      time: '15m ago',
      category: 'M&A'
    },
    {
      icon: 'Target',
      iconColor: 'bg-orange-50 text-orange-500',
      title: 'Series C funding closed for GreenGrid Energy.',
      time: '1h ago',
      category: 'Venture'
    },
    {
      icon: 'Globe',
      iconColor: 'bg-emerald-50 text-emerald-500',
      title: 'EU Regulatory update on semi-conductors.',
      time: '3h ago',
      category: 'Policy'
    }
  ],
  distribution: [
    { label: 'Software', val: 42, color: 'bg-blue-600' },
    { label: 'Hardware', val: 23, color: 'bg-blue-400' },
    { label: 'Services', val: 35, color: 'bg-blue-200' }
  ]
};

data.brandIntelligence = {
  brands: [
    {
      name: 'Apple Inc.',
      ticker: 'AAPL',
      price: '192.42',
      change: 1.2,
      sector: 'Consumer Electronics & Software',
      logo: 'Target',
      forecast: 'iPhone 16 Pro & Ultra Vision headset likely in Q3 2024',
      probability: 88,
      sentiment: 92
    },
    {
      name: 'Tesla, Inc.',
      ticker: 'TSLA',
      price: '174.60',
      change: -0.8,
      sector: 'Automotive & Energy',
      logo: 'Zap',
      forecast: 'Model 2 entry-level EV prototype reveal high likelihood in Oct.',
      probability: 72,
      sentiment: 68
    },
    {
      name: 'Nike, Inc.',
      ticker: 'NKE',
      price: '102.15',
      change: 0.4,
      sector: 'Apparel & Footwear',
      logo: 'BarChart2',
      forecast: 'Web3-integrated sneaker drop scheduled for next month.',
      probability: 95,
      sentiment: 84
    },
    {
      name: 'Amazon.com',
      ticker: 'AMZN',
      price: '180.12',
      change: 2.4,
      sector: 'Retail & Cloud Computing',
      logo: 'BarChart2',
      forecast: "New LLM model 'Olympus' expected to be integrated in AWS by Q4.",
      probability: 90,
      sentiment: 78
    },
    {
      name: 'Walt Disney Co.',
      ticker: 'DIS',
      price: '114.30',
      change: 0.0,
      sector: 'Media & Entertainment',
      logo: 'Target',
      forecast: 'Major AI-driven VR attraction patent filed for Magic Kingdom.',
      probability: 45,
      sentiment: 62
    },
    {
      name: 'Mercedes-Benz',
      ticker: 'MBG.DE',
      price: '75.12',
      change: 0.9,
      sector: 'Luxury Automotive',
      logo: 'Zap',
      forecast: 'New solid-state battery tech testing completion in early 2025.',
      probability: 68,
      sentiment: 74
    }
  ]
};

data.adminConsole = {
  revenueData: [
    { name: 'JAN', value: 2400 }, { name: 'FEB', value: 2100 }, { name: 'MAR', value: 3200 },
    { name: 'APR', value: 4500 }, { name: 'MAY', value: 2800 }, { name: 'JUN', value: 2400 },
    { name: 'JUL', value: 4800 }, { name: 'AUG', value: 5200 }, { name: 'SEP', value: 2100 },
    { name: 'OCT', value: 6200 }, { name: 'NOV', value: 3400 }, { name: 'DEC', value: 7200 }
  ],
  regions: [
    { label: 'North America', percent: 88 },
    { label: 'Europe', percent: 72 },
    { label: 'Asia Pacific', percent: 94 },
    { label: 'Latin America', percent: 45 }
  ],
  products: [
    { name: 'Titan Engine v4', category: 'Core Infrastructure', status: 'ACTIVE', sales: '2,451', revenue: '$42,800', rating: 5, icon: 'Cpu' },
    { name: 'Cloud Sentinel', category: 'Security Suite', status: 'MAINTENANCE', sales: '1,120', revenue: '$21,340', rating: 4, icon: 'ShieldCheck' },
    { name: 'Insight Analytics', category: 'Business Intelligence', status: 'ACTIVE', sales: '5,630', revenue: '$94,200', rating: 5, icon: 'BarChart3' }
  ]
};

fs.writeFileSync('data_store.json', JSON.stringify(data, null, 2));
console.log('Backend data updated successfully for Phase 6.');
