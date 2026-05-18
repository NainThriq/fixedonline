"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type FormData = {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  message: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.businessName.trim()) errors.businessName = "Business name is required.";
  if (!data.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Enter a valid email address.";
  if (!data.message.trim()) errors.message = "Message is required.";
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError("");
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_CONTACT_FN_URL!,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            businessName: form.businessName,
            email: form.email,
            phone: form.phone,
            message: form.message,
          }),
        }
      );

      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setServerError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-teal-light rounded-2xl p-10 text-center"
      >
        <div className="w-14 h-14 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy mb-2">Message received!</h3>
        <p className="text-gray-600">
          Thanks, {form.name.split(" ")[0]}! We&apos;ll be in touch within a few hours.
        </p>
      </motion.div>
    );
  }

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl border text-navy text-sm transition-colors outline-none focus:ring-2 focus:ring-teal/30 ${
      errors[field]
        ? "border-red-400 bg-red-50"
        : "border-gray-200 bg-white focus:border-teal"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-navy mb-1.5">
            Your name <span className="text-red-400">*</span>
          </label>
          <input type="text" name="name" value={form.name} onChange={handleChange}
            placeholder="John Smith" className={inputClass("name")} />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-navy mb-1.5">
            Business name <span className="text-red-400">*</span>
          </label>
          <input type="text" name="businessName" value={form.businessName} onChange={handleChange}
            placeholder="Smith Plumbing Ltd" className={inputClass("businessName")} />
          {errors.businessName && <p className="mt-1 text-xs text-red-500">{errors.businessName}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-navy mb-1.5">
            Email <span className="text-red-400">*</span>
          </label>
          <input type="email" name="email" value={form.email} onChange={handleChange}
            placeholder="john@smithplumbing.com" className={inputClass("email")} />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-navy mb-1.5">Phone number</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange}
            placeholder="07700 900 000" className={inputClass("phone")} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-navy mb-1.5">
          Tell us about your business <span className="text-red-400">*</span>
        </label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={5}
          placeholder="Where are you based? What services do you offer? Anything specific you'd like on your website?"
          className={inputClass("message") + " resize-none"} />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      {serverError && (
        <p className="text-sm text-red-500 text-center">{serverError}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-teal hover:bg-teal-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-teal/20 hover:-translate-y-0.5 text-base flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"/>
            </svg>
            Sending…
          </>
        ) : (
          "Send Message →"
        )}
      </button>

      <p className="text-center text-xs text-gray-400">
        We typically respond within a few hours during business hours.
      </p>
    </form>
  );
}
