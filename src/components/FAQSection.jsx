import React from 'react';

const Section = ({ children, className = "" }) => (
    <section className={`max-w-7xl mx-auto px-6 py-20 ${className}`}>
      {children}
    </section>
  );

const FAQSection = () => {
    const faqs = [
      {
        q: "Why the focus on long-term stability?",
        a: "Because systems that last reduce risk, cost, and cognitive overhead over time. We build infrastructure that remains stable and understandable, even as it evolves."
      },
      {
        q: "How do you approach AI integration?",
        a: "We treat AI as a tool, not an authority. Our focus is on integrating AI in a controlled, privacy-first manner, where it can reduce operational friction without replacing human judgment."
      },
      {
        q: "What does 'System Correction' involve?",
        a: "It means taking responsibility for systems that have become fragile or complex. We work to restore clarity and stability before adding new features, ensuring a solid foundation for future development."
      }
    ];

    return (
      <Section className="relative z-10 max-w-3xl">
        <h2 className="text-3xl font-bold mb-12 text-center font-mono text-purple-400">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3 flex items-start gap-3">
                <span className="text-cyan-500 font-mono">Q:</span>
                {faq.q}
              </h3>
              <p className="text-gray-300 pl-8 leading-relaxed">
                <span className="text-purple-500 font-mono font-bold mr-2">A:</span>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </Section>
    );
  };

  export default FAQSection;