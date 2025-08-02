import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, MessageCircle, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: 'Sector 62 Noida India',
      color: 'purple'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 9536824061',
      color: 'cyan'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'vnaimishkumar@gmail.com',
      color: 'purple'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-56 h-56 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-float-delay"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text mb-4">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to bring your mobile app idea to life? Let's discuss your project!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                  <Sparkles className="h-6 w-6 text-purple-400" />
                  <span>
                  Get In Touch
                  </span>
                </h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you're a startup looking to build your first app or an established 
                  company wanting to expand to mobile, I'd love to help bring your vision to life.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 group relative">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-r ${info.color === 'purple' ? 'from-purple-500 to-purple-600' : 'from-cyan-500 to-cyan-600'} rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
                        <div className={`relative w-12 h-12 bg-gradient-to-br ${info.color === 'purple' ? 'from-purple-500 to-purple-600' : 'from-cyan-500 to-cyan-600'} rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 border ${info.color === 'purple' ? 'border-purple-400/30' : 'border-cyan-400/30'} backdrop-blur-sm`}>
                        <Icon className="h-6 w-6 text-white group-hover:animate-pulse" />
                      </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{info.title}</h4>
                        <p className="text-gray-300">{info.content}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* 3D floating elements */}
              <div className="relative mt-12">
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full opacity-50 animate-float blur-sm"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full opacity-50 animate-float-delay blur-sm"></div>
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 transform hover:scale-105 hover:rotate-1 transition-all duration-500 border border-gray-700/50 hover:border-purple-500/30">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg border border-purple-400/30">
                      <MessageCircle className="h-6 w-6 text-purple-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">Quick Response</h4>
                  </div>
                  <p className="text-gray-300 relative z-10">
                    I typically respond to messages within 24 hours. For urgent matters, 
                    feel free to call directly.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 transform hover:scale-105 transition-all duration-500 border border-gray-700/50 hover:border-purple-500/30 perspective-1000">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm hover:bg-gray-700/70"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm hover:bg-gray-700/70"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm hover:bg-gray-700/70"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm hover:bg-gray-700/70 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="relative w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-purple-500 hover:to-cyan-500 transform hover:scale-105 transition-all duration-500 flex items-center justify-center space-x-2 group overflow-hidden border border-purple-400/30"
                >
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  <Send className="relative h-5 w-5 group-hover:translate-x-1 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative">Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;