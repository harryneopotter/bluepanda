import React from 'react';

const Section = ({ children, className = "" }) => (
    <section className={`max-w-7xl mx-auto px-6 py-20 ${className}`}>
      {children}
    </section>
  );

const TestimonialsSection = () => {
    const testimonials = [
      {
        text: "I run my own software company and have used hosting services of so many branded vendors..but no one has ever delivered the services like bluepanda..thanks bluepanda and team for your support.",
        author: "Yogesh",
        role: "CEO",
        company: "Syndicated Technologies"
      },
      {
        text: "Amazing hosting company. Far better than GoDaddy and any other hosting company I have used in 25 years of being on the internet and having my own websites. So much so, that I have recommended their services to many of my current clients.",
        author: "Darren",
        role: "Web Professional/Musician",
        company: "SEO for Music"
      }
    ];

    return (
      <Section className="relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center font-mono text-cyan-400">CLIENT_TRANSMISSIONS //</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 rounded-2xl bg-black/40 border border-cyan-500/20 relative group hover:border-cyan-500/50 transition-colors">
              <div className="absolute -top-4 -left-4 text-6xl text-cyan-500/20 font-serif">"</div>
              <p className="text-gray-300 text-lg mb-6 italic relative z-10">{t.text}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center font-bold text-black">
                  {t.author[0]}
                </div>
                <div>
                  <h4 className="font-bold text-white">{t.author}</h4>
                  <p className="text-sm text-cyan-400 font-mono">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    );
  };

  export default TestimonialsSection;