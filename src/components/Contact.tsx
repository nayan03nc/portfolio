import { useState, type FormEvent } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { Reveal } from '@/components/Reveal';
import { profile, socials } from '@/data/portfolio';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const templateParams = {
      name: formState.name,
      email: formState.email,
      message: formState.message,
    };

    emailjs.send(
      'service_425nq0j',
      'template_unhzjq1',
      templateParams,
      'nIDDBkDncxVhHiWPW'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('sent');
        setTimeout(() => {
          setStatus('idle');
          setFormState({ name: '', email: '', message: '' });
        }, 3000);
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert('Message bhejte waqt kuch error aa gaya. Phir se try karo.');
        setStatus('idle');
      });
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 section-padding">
        <SectionHeader
          icon={Mail}
          label="07 — Contact"
          title="Get In Touch"
          subtitle="Have a project in mind or just want to connect? I'd love to hear from you."
        />

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Left: Contact info */}
          <Reveal>
            <div className="p-6 sm:p-8 rounded-2xl glass h-full flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">Let&apos;s build something together</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                I&apos;m currently available for full-time roles, internships, and freelance
                opportunities. Whether you have a question or just want to say hi, feel free
                to reach out.
              </p>

              {/* Contact details */}
              <div className="space-y-4 mb-8">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500 font-mono uppercase tracking-wide">Email</p>
                    <p className="text-sm font-medium text-white truncate">{profile.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center shadow-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-mono uppercase tracking-wide">Location</p>
                    <p className="text-sm font-medium text-white">{profile.location}</p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-auto">
                <p className="text-xs text-slate-500 font-mono uppercase tracking-wide mb-3">
                  Find me on
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className={`group w-11 h-11 flex items-center justify-center rounded-xl glass text-slate-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 ${s.color}`}
                    >
                      <s.icon className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Contact form */}
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl glass h-full flex flex-col"
            >
              <h3 className="text-xl font-bold text-white mb-6">Send a message</h3>

              <div className="space-y-4 flex-1 flex flex-col">
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wide text-slate-500 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wide text-slate-500 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>

                {/* Message */}
                <div className="flex-1 flex flex-col">
                  <label className="block text-xs font-mono uppercase tracking-wide text-slate-500 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                    placeholder="Tell me about your project or just say hello..."
                    className="w-full flex-1 min-h-[120px] px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status !== 'idle'}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-teal-600 rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === 'idle' && (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                  {status === 'sending' && (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  )}
                  {status === 'sent' && (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      Message Sent!
                    </>
                  )}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}