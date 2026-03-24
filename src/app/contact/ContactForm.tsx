"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import clsx from "clsx";

const schema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name is too long")
    .regex(/^[a-zA-Z\s]+$/, "First name can only contain letters"),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name is too long")
    .regex(/^[a-zA-Z\s]+$/, "Last name can only contain letters"),
  company: z.string().max(100, "Company name is too long").optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^[+\d\s\-()]{7,20}$/, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),
  country: z.string().min(2, "Please enter your country").max(60, "Country name is too long"),
  application: z.string().min(1, "Please select an application type"),
  quantity: z.string().optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be under 1000 characters"),
  consent: z.literal(true, { errorMap: () => ({ message: "You must accept the terms to proceed" }) }),
});

type FormData = z.infer<typeof schema>;

const applications = [
  "Kitchen Countertop",
  "Bathroom Surface",
  "Restaurant / Bar",
  "Bank / Office",
  "Hospital / Laboratory",
  "Hotel / Hospitality",
  "Airport / Public Building",
  "Residential Flooring",
  "Commercial Flooring",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const messageValue = watch("message") ?? "";

  const onSubmit = async (data: FormData) => {
    setStatus("submitting");
    // Simulate API call — replace with real API endpoint
    await new Promise((resolve) => setTimeout(resolve, 1500));
    try {
      // In production: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
      console.log("Form submitted:", data);
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white border border-border rounded-sm p-10 text-center">
        <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={28} className="text-green-500" />
        </div>
        <h3 className="font-display text-2xl font-light text-ink mb-2">Enquiry Sent!</h3>
        <p className="text-sm text-muted max-w-sm mx-auto">
          Thank you for reaching out to Safayar Ceramics. Our team will respond within 24 business
          hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-accent hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {status === "error" && (
        <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-sm px-4 py-3">
          <AlertCircle size={15} className="text-red-500 flex-shrink-0" />
          <p className="text-xs text-red-600">Something went wrong. Please try again or email us directly.</p>
        </div>
      )}

      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-ink mb-1.5">
            First Name <span className="text-red-400">*</span>
          </label>
          <input
            {...register("firstName")}
            placeholder="John"
            className={clsx("form-input", errors.firstName && "error")}
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle size={11} /> {errors.firstName.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-xs font-medium text-ink mb-1.5">
            Last Name <span className="text-red-400">*</span>
          </label>
          <input
            {...register("lastName")}
            placeholder="Smith"
            className={clsx("form-input", errors.lastName && "error")}
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle size={11} /> {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      {/* Company & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-ink mb-1.5">Company Name</label>
          <input
            {...register("company")}
            placeholder="Your company (optional)"
            className="form-input"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-ink mb-1.5">
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="john@company.com"
            className={clsx("form-input", errors.email && "error")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle size={11} /> {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Phone & Country */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-ink mb-1.5">Phone Number</label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+1 234 567 8900 (optional)"
            className={clsx("form-input", errors.phone && "error")}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle size={11} /> {errors.phone.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-xs font-medium text-ink mb-1.5">
            Country <span className="text-red-400">*</span>
          </label>
          <input
            {...register("country")}
            placeholder="e.g. United Kingdom"
            className={clsx("form-input", errors.country && "error")}
          />
          {errors.country && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle size={11} /> {errors.country.message}
            </p>
          )}
        </div>
      </div>

      {/* Application & Quantity */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-ink mb-1.5">
            Application Type <span className="text-red-400">*</span>
          </label>
          <select
            {...register("application")}
            className={clsx("form-input bg-white", errors.application && "error")}
          >
            <option value="">Select application...</option>
            {applications.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
          {errors.application && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle size={11} /> {errors.application.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-xs font-medium text-ink mb-1.5">Approximate Quantity</label>
          <input
            {...register("quantity")}
            placeholder="e.g. 500 sq.ft (optional)"
            className="form-input"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-medium text-ink mb-1.5">
          Message / Requirements <span className="text-red-400">*</span>
        </label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Tell us about your project — colours you're interested in, quantities, timeline, specific technical requirements..."
          className={clsx("form-input resize-none", errors.message && "error")}
        />
        <div className="flex justify-between mt-1">
          {errors.message ? (
            <p className="text-xs text-red-500 flex items-center gap-1">
              <AlertCircle size={11} /> {errors.message.message}
            </p>
          ) : (
            <span />
          )}
          <span className={clsx("text-xs", messageValue.length > 900 ? "text-red-400" : "text-muted")}>
            {messageValue.length}/1000
          </span>
        </div>
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input
          {...register("consent")}
          type="checkbox"
          id="consent"
          className="mt-0.5 w-4 h-4 accent-accent flex-shrink-0"
        />
        <label htmlFor="consent" className="text-xs text-muted leading-relaxed cursor-pointer">
          I agree that Safayar Ceramics may use the information I provide to respond to my enquiry.
          I understand my data will be handled in accordance with applicable privacy regulations.{" "}
          <span className="text-red-400">*</span>
        </label>
      </div>
      {errors.consent && (
        <p className="text-xs text-red-500 flex items-center gap-1 -mt-3">
          <AlertCircle size={11} /> {errors.consent.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting || status === "submitting"}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting || status === "submitting" ? (
          <>
            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Enquiry <Send size={14} />
          </>
        )}
      </button>

      <p className="text-[0.65rem] text-muted text-center">
        Fields marked <span className="text-red-400">*</span> are required. We respond within 24 business hours.
      </p>
    </form>
  );
}
