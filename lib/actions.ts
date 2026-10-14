"use server";

export type ContactState = {
  ok: boolean;
  message: string;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const projectType = String(formData.get("projectType") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return {
      ok: false,
      message: "Please fill in your name, email, and a short project note.",
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "That email doesn’t look right." };
  }

  // Placeholder until domain + inbox are live (swap for Resend / Formspree later)
  console.info("[VEYR contact]", { name, email, projectType, message });

  return {
    ok: true,
    message:
      "Got it — thanks for reaching out. We’ll reply once our inbox is live. For now this is a placeholder submission.",
  };
}
