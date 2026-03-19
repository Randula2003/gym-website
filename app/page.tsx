"use client";
import React, { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);

    if (validate()) {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-yellow-400 selection:text-black">
      {/* Navbar */}
      <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
        <div className="w-full px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="text-2xl font-black text-black tracking-tighter">IRON<span className="text-yellow-500">FIT</span></div>
          <nav className="hidden md:flex gap-8">
            <a href="#hero" className="text-neutral-500 hover:text-black transition-colors text-sm font-bold tracking-wide uppercase">Home</a>
            <a href="#about" className="text-neutral-500 hover:text-black transition-colors text-sm font-bold tracking-wide uppercase">About</a>
            <a href="#features" className="text-neutral-500 hover:text-black transition-colors text-sm font-bold tracking-wide uppercase">Classes</a>
            <a href="#contact" className="text-neutral-500 hover:text-black transition-colors text-sm font-bold tracking-wide uppercase">Contact</a>
          </nav>
          <a href="#contact" className="bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2 rounded-md font-bold transition-all text-sm uppercase tracking-wide shadow-sm">Join Now</a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-neutral-200 bg-neutral-50 pt-16">
        
        <div className="relative w-full px-4 md:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-600 mb-8 uppercase tracking-widest shadow-sm">
            Push Your Limits
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-[1.05] text-black">
            Build your <br className="hidden md:block"/><span className="text-yellow-500">perfect body</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-neutral-500 mb-10 font-normal leading-relaxed">
            Join the ultimate fitness destination. State-of-the-art equipment, elite trainers, and a community that pushes you to be your best self.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#contact" className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3.5 rounded-md font-bold text-lg transition-all text-center uppercase tracking-wide shadow-sm">Start Your Journey</a>
            <a href="#features" className="bg-white border border-neutral-200 hover:bg-neutral-50 text-black px-8 py-3.5 rounded-md font-bold text-lg transition-all text-center uppercase tracking-wide shadow-sm">Explore Classes</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white border-b border-neutral-200">
        <div className="w-full px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 shadow-sm">
                  <div className="text-yellow-500 mb-4"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
                  <h3 className="text-4xl font-black text-black mb-1 tracking-tighter">10+</h3>
                  <p className="text-neutral-500 text-sm font-semibold uppercase tracking-wide">Years Exp.</p>
                </div>
                <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 shadow-sm translate-y-8">
                  <div className="text-yellow-500 mb-4"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
                  <h3 className="text-4xl font-black text-black mb-1 tracking-tighter">5K+</h3>
                  <p className="text-neutral-500 text-sm font-semibold uppercase tracking-wide">Members</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-black mb-6 uppercase tracking-tighter">Transform your life with our expertise</h2>
              <p className="text-neutral-500 mb-8 text-lg font-normal leading-relaxed">
                At IRONFIT, we believe fitness is not a hobby; it'\''s a way of life. Founded in 2013, our facility has grown into a premier destination for those serious about their physical and mental well-being.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Certified Expert Trainers',
                  'Modern High-Tech Equipment',
                  'Nutritional Guidance & Plans',
                  'Community Driven Environment'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="bg-yellow-100 p-1 rounded-full text-yellow-600">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span className="text-neutral-800 font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="text-black font-bold inline-flex items-center gap-2 group uppercase tracking-wide hover:text-yellow-500 transition-colors">
                Learn More About Us
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Services Section */}
      <section id="features" className="py-24 bg-neutral-50 border-b border-neutral-200">
        <div className="w-full px-4 md:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tighter mb-4">Everything you need</h2>
            <p className="text-neutral-500 max-w-2xl font-normal text-lg">Explore our wide range of fitness classes and programs tailored to help you reach your specific goals.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Weightlifting', desc: 'Build pure strength and muscle mass with our expansive free weights and specialized lifting zones.', icon: <path d="M6 16.5V21M18 16.5V21M15.5 16.5l-7 1.341a1 1 0 0 1-1.182-.82v-.522a1 1 0 0 1 .818-.98l7-1.34a1 1 0 0 1 1.182.82v.52a1 1 0 0 1-.818.981ZM5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm14 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 8v3M18 8v3M12 9v12M9 13h6"/> },
              { title: 'Cardio Training', desc: 'Boost your endurance and heart health with top-tier treadmills, ellipticals, and rowers.', icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2"/> },
              { title: 'CrossFit', desc: 'High-intensity interval training designed to test your limits and improve overall fitness.', icon: <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5ZM12 2l3.5 3.5L12 9 8.5 5.5 12 2Zm6.5 6.5L22 12l-3.5 3.5L15 12l3.5-3.5ZM12 15l3.5 3.5L12 22l-3.5-3.5L12 15Z"/> },
              { title: 'Yoga & Pilates', desc: 'Enhance flexibility, core strength, and mindfulness in our dedicated quiet studios.', icon: <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82zM7 7h.01"/> },
              { title: 'Personal Training', desc: 'Get 1-on-1 guidance from elite coaches who create customized plans for your goals.', icon: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 14v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/> },
              { title: 'Nutrition Plans', desc: 'Fuel your progress with expert-crafted meal plans designed for recovery and growth.', icon: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/> },
            ].map((feature, i) => (
              <div key={i} className="bg-white border border-neutral-200 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                <div className="bg-neutral-50 border border-neutral-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-black group-hover:bg-yellow-400 group-hover:border-yellow-400 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-black text-black mb-2 uppercase tracking-tight">{feature.title}</h3>
                <p className="text-neutral-500 font-normal leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="relative w-full px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-black mb-6 uppercase tracking-tighter">Ready to start?</h2>
              <p className="text-neutral-500 mb-8 font-normal text-lg">
                Drop us a message or visit our facility. Our team is ready to help you begin your transformation journey today.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 text-black shadow-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-1 uppercase tracking-tight text-sm">Location</h4>
                    <p className="text-neutral-500 font-normal text-sm">123 Muscle Ave, Fitness City, FC 90210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 text-black shadow-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-1 uppercase tracking-tight text-sm">Phone</h4>
                    <p className="text-neutral-500 font-normal text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 text-black shadow-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-1 uppercase tracking-tight text-sm">Email</h4>
                    <p className="text-neutral-500 font-normal text-sm">hello@ironfit.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-4">
                {submitSuccess && (
                  <div className="bg-green-50 text-green-700 p-4 rounded-md border border-green-200 text-sm font-medium">
                    Message sent successfully! We'\''ll get back to you soon.
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-black">First Name *</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full bg-white border ${errors.firstName ? 'border-red-500' : 'border-neutral-300'} rounded-md px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors placeholder:text-neutral-400`} 
                      placeholder="John" 
                    />
                    {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-black">Last Name *</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full bg-white border ${errors.lastName ? 'border-red-500' : 'border-neutral-300'} rounded-md px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors placeholder:text-neutral-400`} 
                      placeholder="Doe" 
                    />
                    {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-black">Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-white border ${errors.email ? 'border-red-500' : 'border-neutral-300'} rounded-md px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors placeholder:text-neutral-400`} 
                    placeholder="john@example.com" 
                  />
                  {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-black">Message *</label>
                  <textarea 
                    rows={4} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-white border ${errors.message ? 'border-red-500' : 'border-neutral-300'} rounded-md px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors resize-none placeholder:text-neutral-400`} 
                    placeholder="How can we help you?"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2.5 rounded-md transition-colors uppercase tracking-wide text-sm mt-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-neutral-200 text-center">
        <div className="w-full px-4">
          <div className="text-xl font-black text-black tracking-tighter mb-2">IRON<span className="text-yellow-500">FIT</span></div>
          <p className="text-neutral-500 text-xs font-medium">© {new Date().getFullYear()} IronFit Fitness. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
