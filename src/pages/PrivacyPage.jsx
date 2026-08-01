import { PageWrapper, Section } from "../components/shared";

const PrivacyPage = () => (
  <PageWrapper>
    <div className="relative min-h-screen bg-void text-white pt-8 pb-32 px-4">
      <Section className="relative z-10 max-w-4xl">
        <p className="font-mono text-cyan-400 text-sm mb-4">POLICY // DATA AND PRIVACY</p>
        <h1 className="text-5xl font-bold mb-6">PRIVACY POLICY</h1>
        <p className="text-gray-400 font-mono mb-12">Effective date: 28 July 2026</p>
        <div className="space-y-10 text-gray-300 leading-relaxed text-lg">
          <section><h2 className="text-2xl font-bold text-white mb-4">1. Who operates this site</h2><p>Blue Panda Hosting and Designs is a sole proprietorship operated by Sachin. For privacy questions, contact <a className="text-cyan-400 hover:text-white" href="mailto:contact@bluepanda.in">contact@bluepanda.in</a>.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">2. Information we receive</h2><p>When you use the contact form, we receive your name, email address, and message. Contact submissions are sent to the business mailbox and retained there as business correspondence for communication, support, and record-keeping.</p><p className="mt-4">When you use AI Architect, your system description and selected analysis depth are sent to a server-side function and then to Google Gemini to generate a blueprint. The website does not provide a user account or application database for storing these prompts.</p><p className="mt-4">Hosting, email, AI, and serverless providers may process technical request data or retain operational logs under their own policies and settings.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">3. How we use information</h2><p>We use information to respond to enquiries, provide requested support, generate AI Architect blueprints, operate and secure the website, and meet applicable business or legal obligations.</p><p className="mt-4">We do not use contact submissions to create a marketing newsletter or sell personal information.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">4. Service providers</h2><p>The current deployment uses Netlify for hosting and serverless functions, Brevo SMTP for delivering contact messages, and Google Gemini for AI Architect generation. The hosting environment may change in the future, including migration to a virtual machine. This policy will be updated when a change affects how personal information is processed.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">5. AI Architect warning</h2><p>Do not submit passwords, access tokens, API keys, private keys, personal data, confidential client information, or other sensitive material to AI Architect. Generated blueprints are informational and require human review before implementation. The tool does not make infrastructure changes or guarantee that an output is production-ready.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">6. Retention and security</h2><p>Contact emails are retained in the business mailbox for as long as reasonably needed for communication, support, business records, or legal obligations. AI Architect prompts are not intentionally stored in a Blue Panda application database. Provider logs, mailbox backups, and third-party retention are governed by the relevant provider settings and policies.</p><p className="mt-4">We use reasonable measures appropriate to the service, but no internet transmission or storage system can be guaranteed completely secure.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">7. Questions and rights</h2><p>For questions about information associated with you, or to request access, correction, or deletion where applicable, email <a className="text-cyan-400 hover:text-white" href="mailto:contact@bluepanda.in">contact@bluepanda.in</a>. We may need to verify your identity before handling a request. Your rights depend on the laws that apply to your situation.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">8. Changes</h2><p>We may update this policy when the site, providers, or data practices change. The effective date above shows when it was last updated.</p></section>
        </div>
      </Section>
    </div>
  </PageWrapper>
);

export default PrivacyPage;
