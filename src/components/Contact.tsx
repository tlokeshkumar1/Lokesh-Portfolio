import React, { useState, useRef } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      await emailjs.sendForm(
        'service_iu8pwwn',
        'template_nehlyaf',
        form.current,
        '5XEgqIrTgwpb27mt4'
      );

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! I will get back to you soon.'
      });
      form.current.reset();
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 dark:from-primary to-purple-400 mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground">Have a question or want to work together?</p>
          </div>
          
          <div className="bg-card rounded-xl shadow-xl p-8 backdrop-blur-sm border border-border">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="from_name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    type="text"
                    name="from_name"
                    id="from_name"
                    className="block w-full px-4 py-3 rounded-lg bg-background border border-input text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    required
                    placeholder="John Wick"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="reply_to" className="block text-sm font-medium text-foreground mb-2">
                  Your Email
                </label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    type="email"
                    name="reply_to"
                    id="reply_to"
                    className="block w-full px-4 py-3 rounded-lg bg-background border border-input text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    required
                    placeholder="johnwick@example.com"
                  />
                  <Mail className="absolute right-3 top-3 h-5 w-5 text-muted-foreground" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <div className="relative rounded-md shadow-sm">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full px-4 py-3 rounded-lg bg-background border border-input text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    required
                    placeholder="Hello Lokesh, I'd like to discuss..."
                  />
                  <MessageSquare className="absolute right-3 top-3 h-5 w-5 text-muted-foreground" />
                </div>
              </div>

              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg border ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border-green-200 dark:border-green-800'
                      : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border-red-200 dark:border-red-800'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-6 py-3.5 rounded-lg font-semibold text-white transition-all duration-200 ${
                  isSubmitting 
                    ? 'bg-gradient-to-r from-indigo-400 to-purple-400 cursor-not-allowed opacity-70'
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-indigo-500 dark:to-purple-500 dark:hover:from-indigo-600 dark:hover:to-purple-600 transform hover:-translate-y-0.5 hover:shadow-lg active:transform-none shadow-md'
                } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-background`}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;