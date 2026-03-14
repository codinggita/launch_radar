import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { label: 'STARTUPS TRACKED', value: '12.4k+', trend: '+12% this month', trendClass: 'text-accent-green' },
    { label: 'AI ACCURACY', value: '94.2%', trend: 'Backtested results', trendClass: 'text-primary' },
    { label: 'CAPITAL SPOTTED', value: '$2.1B+', trend: 'Early stage flow', trendClass: 'text-accent-green' },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#fcfdfe]">
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="stat-card glass-card p-6 md:p-8 flex flex-col gap-2 cursor-default"
          >
            <span className="text-[0.7rem] md:text-[0.75rem] font-bold text-text-muted tracking-widest">{stat.label}</span>
            <h3 className="text-3xl md:text-[2.5rem] text-text-main leading-tight font-bold">{stat.value}</h3>
            <span className={`text-[0.8rem] md:text-[0.85rem] flex items-center gap-1.5 font-semibold ${stat.trendClass}`}>
              {stat.trendClass.includes('green') && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>
                </svg>
              )}
              {stat.trend}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};




export default Stats;
