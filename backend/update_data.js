const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data_store.json'));
data.landing = {
  stats: [
    { label: 'STARTUPS TRACKED', value: '12.4k+', trend: '+12% this month', trendClass: 'text-accent-green' },
    { label: 'AI ACCURACY', value: '94.2%', trend: 'Backtested results', trendClass: 'text-primary' },
    { label: 'CAPITAL SPOTTED', value: '$2.1B+', trend: 'Early stage flow', trendClass: 'text-accent-green' }
  ],
  startups: [
    {
      name: 'NebulaStack',
      description: 'Decentralized cloud compute platform leveraging unused GPU cycles for AI training.',
      score: '9.8',
      tags: ['Cloud Tech', 'Web3'],
      growth: '+114% MoM Growth',
      color: '#8b5cf6',
      icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v8"></path><path d="m4.93 4.93 5.66 5.66"></path><path d="M2 12h8"></path><path d="m4.93 19.07 5.66-5.66"></path><path d="M12 22v-8"></path><path d="m19.07 19.07-5.66-5.66"></path><path d="M22 12h-8"></path><path d="m19.07 4.93-5.66 5.66"></path></svg>'
    },
    {
      name: 'BioSynthetix',
      description: 'AI-driven molecular modeling for rapid drug discovery and carbon sequestration catalysts.',
      score: '9.2',
      tags: ['HealthTech', 'AI'],
      growth: '+89% Signal Increase',
      color: '#10b981',
      icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.31"></path><path d="M14 9.3V2"></path><path d="M6 14v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4"></path><path d="M18 5.23A2 2 0 0 0 16.15 4H7.85A2 2 0 0 0 6 5.23v.06a2 2 0 0 0 .17.8l1.71 3.42A2 2 0 0 1 8 10.39V15h8v-4.61a2 2 0 0 1 .12-.88l1.71-3.42a2 2 0 0 0 .17-.8Z"></path></svg>'
    }
  ],
  process: [
    {
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>',
      title: 'Multi-Source Ingestion',
      description: 'We monitor GitHub activity, job board trends, social sentiment, and domain registrations in real-time.'
    },
    {
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle><line x1="12" y1="7" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="17"></line><line x1="17" y1="12" x2="22" y2="12"></line><line x1="2" y1="12" x2="7" y2="12"></line></svg>',
      title: 'Pattern Recognition',
      description: 'Our AI identifies patterns common in historic unicorns, such as velocity of engineer hiring and open-source momentum.'
    },
    {
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>',
      title: 'Predictive Ranking',
      description: 'Every startup gets a dynamic Radar Score. High-velocity movers are flagged to you instantly via custom alerts.'
    }
  ]
};
fs.writeFileSync('data_store.json', JSON.stringify(data, null, 2));
console.log('data_store.json updated');
