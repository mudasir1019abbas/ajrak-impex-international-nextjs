import { api } from "@/lib/api";

// API contract (implemented in app/api):
//   POST /api/auth/register  { name, email, password }  -> { user }   (sets session cookie)
//   POST /api/auth/login     { email, password }        -> { user }   (sets session cookie)
//   POST /api/auth/logout                               -> { message } (clears cookie)
//   GET  /api/auth/me                                   -> { user | null }
//   POST /api/contact        { name, email, subject, message } -> { message }
export const authService = {
  register: (payload) => api("/auth/register", { method: "POST", body: payload }),
  login: (payload) => api("/auth/login", { method: "POST", body: payload }),
  logout: () => api("/auth/logout", { method: "POST" }),
  me: () => api("/auth/me"),
};

export const contactService = {
  send: (payload) => api("/contact", { method: "POST", body: payload }),
};
