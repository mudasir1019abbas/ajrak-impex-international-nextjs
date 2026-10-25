"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { Button, Field } from "@/components/UI";
import { Emblem } from "@/components/Logo";
import { contactService } from "@/lib/authService";
import { CONTACT_SUBJECTS, validateContact } from "@/lib/validators";

const initial = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", text: "" });

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validateContact(values);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus({ type: "loading", text: "" });
    try {
      await contactService.send(values);
      setStatus({ type: "success", text: "Thank you! We'll reply within one business day." });
      setValues(initial);
    } catch (err) {
      setStatus({ type: "error", text: err.message || "Something went wrong. Please try again." });
    }
  };

  return (
    <Reveal direction="left">
      <form onSubmit={onSubmit} noValidate className="rounded-xl bg-white p-6 shadow-lg ring-1 ring-slate-100 sm:p-8">
        <div className="mb-5 flex flex-col items-center">
          <Emblem className="h-12 w-12" />
          <h2 className="mt-2 text-xl font-extrabold text-navy-800">CONTACT US</h2>
        </div>
        <div className="space-y-4">
          <Field label="Name" id="name" name="name" value={values.name} onChange={onChange} error={errors.name} placeholder="Your name" autoComplete="name" />
          <Field label="Email" id="email" name="email" type="email" value={values.email} onChange={onChange} error={errors.email} placeholder="you@company.com" autoComplete="email" />
          <Field label="Subject" id="subject" error={errors.subject}>
            {(cls) => (
              <select id="subject" name="subject" value={values.subject} onChange={onChange} className={cls}>
                <option value="">Select a subject</option>
                {CONTACT_SUBJECTS.map((s) => <option key={s}>{s}</option>)}
              </select>
            )}
          </Field>
          <Field label="Message" id="message" error={errors.message}>
            {(cls) => (
              <textarea id="message" name="message" rows={5} value={values.message} onChange={onChange} placeholder="How can we help?" className={cls} />
            )}
          </Field>
        </div>

        {status.text && (
          <p role="status" className={`mt-4 animate-fade-up rounded-md px-3 py-2 text-sm ${status.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
            {status.text}
          </p>
        )}

        <Button type="submit" disabled={status.type === "loading"} className="mt-5 w-full sm:w-auto">
          {status.type === "loading" ? "Sending..." : "Submit"}
        </Button>
      </form>
    </Reveal>
  );
}
