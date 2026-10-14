"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/lib/actions";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const initial: ContactState = { ok: false, message: "" };

const fieldClass =
  "w-full bg-transparent border-b border-border px-0 py-3 text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-accent-teal";

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial);

  return (
    <form action={action} className="space-y-8">
      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="text-xs uppercase tracking-[0.18em] text-muted">Name</span>
          <input
            name="name"
            required
            autoComplete="name"
            className={cn(fieldClass, "mt-2")}
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-[0.18em] text-muted">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={cn(fieldClass, "mt-2")}
            placeholder="you@studio.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-xs uppercase tracking-[0.18em] text-muted">Project type</span>
        <select
          name="projectType"
          defaultValue="wordpress"
          className={cn(fieldClass, "mt-2 appearance-none bg-background")}
        >
          <option value="wordpress">WordPress</option>
          <option value="design">Design / UI</option>
          <option value="custom">Custom web app</option>
          <option value="care">Ongoing care</option>
          <option value="other">Not sure yet</option>
        </select>
      </label>

      <label className="block">
        <span className="text-xs uppercase tracking-[0.18em] text-muted">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          className={cn(fieldClass, "mt-2 resize-y")}
          placeholder="Timeline, goals, links — whatever helps."
        />
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" variant="teal" disabled={pending}>
          {pending ? "Sending…" : "Send message"}
        </Button>
        {state.message ? (
          <p
            className={cn(
              "text-sm",
              state.ok ? "text-accent-teal-soft" : "text-accent-red-soft",
            )}
            role="status"
          >
            {state.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
