"use client";

import React, { useState, FormEvent } from "react";
import { Mail, Copy, Check, Loader2, Send } from "lucide-react";
import { contactDetails } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  
  // Toast notifications state
  const [toast, setToast] = useState<{
    show: boolean;
    type: "success" | "error";
    message: string;
  }>({
    show: false,
    type: "success",
    message: "",
  });

  // Handle inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Copy Email to clipboard
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactDetails.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      showToast("error", "Failed to copy email address.");
    }
  };

  // Toast helper
  const showToast = (type: "success" | "error", message: string) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 5000);
  };

  // Form submit handler
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      showToast("error", "Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Retrieve EmailJS configuration from environment variables
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Check if configuration is missing or contains placeholder values to fallback to simulation
    const isMockMode =
      !serviceId || serviceId === "your_service_id_here" ||
      !templateId || templateId === "your_template_id_here" ||
      !publicKey || publicKey === "your_public_key_here";

    if (isMockMode) {
      // Simulate API call for local testing without credentials
      console.warn(
        "EmailJS credentials missing. Simulating email transmission. Set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in .env.development.local to send real emails."
      );
      
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setIsSubmitting(false);
      setForm({ name: "", email: "", subject: "", message: "" });
      showToast(
        "success",
        "Demo Mode: Message simulated successfully! Check console for setup details."
      );
      return;
    }

    try {
      // Call EmailJS REST API
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: form.name,
            from_email: form.email,
            subject: form.subject || `Portfolio Contact from ${form.name}`,
            message: form.message,
          },
        }),
      });

      if (response.ok) {
        setForm({ name: "", email: "", subject: "", message: "" });
        showToast("success", "Your message was sent successfully!");
      } else {
        const errorText = await response.text();
        console.error("EmailJS Error Response:", errorText);
        
        let displayError = response.statusText;
        if (errorText.includes("Invalid grant") || errorText.includes("reconnect your Gmail")) {
          displayError = "Email service needs reconnection. Please log into your EmailJS dashboard and reconnect your Gmail account.";
        } else if (errorText) {
          displayError = errorText;
        }
        
        showToast("error", `Failed to send message: ${displayError}`);
      }
    } catch (error) {
      console.error("Connection error sending email:", error);
      showToast("error", "Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDemo =
    !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID === "your_service_id_here" ||
    !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID === "your_template_id_here" ||
    !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ||
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY === "your_public_key_here";

  return (
    <section id="contact" className="w-full py-20 px-4 md:px-8 bg-background relative overflow-hidden">
      {/* Toast Notification */}
      {toast.show && (
        <div
          className={`fixed bottom-5 right-5 z-50 flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border transition-all duration-300 transform translate-y-0 animate-fade-in-up ${
            toast.type === "success"
              ? "bg-emerald-50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900/50"
              : "bg-rose-50 dark:bg-rose-950/20 text-rose-800 dark:text-rose-300 border-rose-200 dark:border-rose-900/50"
          }`}
        >
          <span className="text-sm font-medium">{toast.message}</span>
          <button
            onClick={() => setToast((prev) => ({ ...prev, show: false }))}
            className="text-xs font-semibold opacity-75 hover:opacity-100 transition-opacity ml-2"
          >
            ✕
          </button>
        </div>
      )}

      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Reveal direction="up" delay={50}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-tight text-foreground">
              Let's Build Something Together
            </h2>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-4" />
          </Reveal>
          <Reveal direction="up" delay={150}>
            <p className="text-muted-foreground max-w-md mx-auto text-sm md:text-base leading-relaxed">
              Have a project in mind or just want to say hi? My inbox is always open.
            </p>
          </Reveal>
        </div>

        {/* Demo Mode Badge */}
        {isDemo && (
          <Reveal direction="up" delay={200} className="mb-6 flex justify-center">
            <span className="text-[11px] font-medium text-amber-600 bg-amber-500/10 dark:text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full text-center">
              ℹ️ Form is running in <b>Simulation Mode</b>. Add EmailJS variables to enable live delivery.
            </span>
          </Reveal>
        )}

        {/* Main Content Area */}
        <Reveal direction="up" delay={250}>
          <div className="bg-card/40 dark:bg-card/20 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 shadow-sm">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    disabled={isSubmitting}
                    className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm transition-all outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:opacity-50 text-foreground"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                    className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm transition-all outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:opacity-50 text-foreground"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Subject <span className="text-muted-foreground/60">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry / Say hello"
                  disabled={isSubmitting}
                  className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm transition-all outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:opacity-50 text-foreground"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Hi Alex, I'd love to chat about working together on..."
                  disabled={isSubmitting}
                  className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm transition-all outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:opacity-50 resize-y min-h-[100px] text-foreground"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto self-end bg-accent text-accent-foreground hover:bg-accent-hover font-semibold transition-all rounded-lg py-2.5 px-6 text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-accent/10 active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-8 text-muted-foreground/40">
              <div className="flex-grow border-t border-border/80" />
              <span className="px-4 text-[11px] font-bold tracking-widest uppercase">Or Reach Out Directly</span>
              <div className="flex-grow border-t border-border/80" />
            </div>

            {/* Quick Copy Email Section */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-muted/30 dark:bg-muted/10 border border-border/50 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">My Email</p>
                  <p className="text-sm font-mono font-medium text-foreground">{contactDetails.email}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg hover:bg-muted/80 dark:hover:bg-muted/40 transition-colors border border-border text-foreground hover:border-accent/30 cursor-pointer active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Buttons Row */}
            <div className="flex items-center justify-center gap-4">
              <a
                href={`mailto:${contactDetails.email}`}
                title="Send direct email"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background text-muted-foreground hover:text-accent hover:border-accent/40 hover:bg-accent/5 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={contactDetails.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background text-muted-foreground hover:text-accent hover:border-accent/40 hover:bg-accent/5 hover:-translate-y-0.5 transition-all duration-300"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              {contactDetails.twitter && (
                <a
                  href={contactDetails.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter Profile"
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background text-muted-foreground hover:text-accent hover:border-accent/40 hover:bg-accent/5 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
