import { SITE_CONFIG } from '@/config/site';

interface ContactSectionProps {
  isVisible: boolean;
}

const ContactSection = ({ isVisible }: ContactSectionProps) => {
  return (
    <section
      id="contact"
      className="min-h-screen py-20 flex items-center text-sm"
    >
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="flex items-center mb-12">
          <h2 className="text-4xl font-light">Let&apos;s Connect</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-md mb-8 leading-relaxed">
              Ready to bring your ideas to life? Let&apos;s discuss how we can
              work together to create something amazing.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 border border-border rounded-full flex items-center justify-center">
                  <span className="text-sm">@</span>
                </div>
                <span>{SITE_CONFIG.contact.email}</span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 border border-border rounded-full flex items-center justify-center">
                  <span className="text-sm">↗</span>
                </div>
                <span>{SITE_CONFIG.contact.linkedin}</span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 border border-border rounded-full flex items-center justify-center">
                  <span className="text-sm">{}</span>
                </div>
                <span>{SITE_CONFIG.contact.github}</span>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-lg shadow-sm border border-border">
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 border border-border rounded-lg focus:outline-none focus:border-chart-2"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 border border-border rounded-lg focus:outline-none focus:border-chart-2"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-4 border border-border rounded-lg focus:outline-none focus:border-chart-2 resize-none"
                />
              </div>
              <button
                onClick={e => {
                  e.preventDefault();
                  alert('Message sent! (This is a demo)');
                }}
                className="w-full bg-foreground text-secondary py-4 rounded-lg hover:bg-gray-800 font-medium"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
