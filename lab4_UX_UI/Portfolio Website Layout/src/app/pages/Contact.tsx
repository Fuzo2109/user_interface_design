import { TopNav } from '../components/TopNav';
import { PortfolioButton } from '../components/PortfolioButton';
import { Mail, Linkedin, Github } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <TopNav />
      <section className="max-w-[1440px] mx-auto px-12 py-16">
        <h1 className="text-5xl font-bold text-[#37474F] mb-6">Get In Touch</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl">
          I'm always interested in hearing about new projects and opportunities. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
          {/* Contact Form */}
          <div className="space-y-6">
            <div>
              <label className="block text-[#37474F] mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#00BCD4] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-[#37474F] mb-2">Email</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#00BCD4] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-[#37474F] mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="Your message..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#00BCD4] focus:outline-none transition-colors resize-none"
              />
            </div>
            <PortfolioButton variant="primary">
              Send Message
            </PortfolioButton>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#37474F] mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <a
                  href="mailto:hello@example.com"
                  className="flex items-center gap-4 p-4 bg-[#f5f5f5] rounded-lg hover:bg-[#e0f7fa] transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#00BCD4] rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-[#37474F]">Email</p>
                    <p className="text-gray-600">hello@example.com</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#f5f5f5] rounded-lg hover:bg-[#e0f7fa] transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#00BCD4] rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-[#37474F]">LinkedIn</p>
                    <p className="text-gray-600">Connect on LinkedIn</p>
                  </div>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#f5f5f5] rounded-lg hover:bg-[#e0f7fa] transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#00BCD4] rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-[#37474F]">GitHub</p>
                    <p className="text-gray-600">Check out my code</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
