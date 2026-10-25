// Validation shared by the browser forms and the API routes, so both always
// agree. Each validator returns an object of { field: message } ({} = valid).

export const CONTACT_SUBJECTS = [
  "General inquiry",
  "Ajrak textiles",
  "Import / Export",
  "Logistics quote",
  "Partnership",
];

const EMAIL_RE = /^\S+@\S+\.\S+$/;
const str = (v) => (typeof v === "string" ? v : "");

export function validateLogin(v) {
  const e = {};
  if (!EMAIL_RE.test(str(v.email)) || str(v.email).length > 254) e.email = "Enter a valid email address.";
  if (str(v.password).length < 6) e.password = "Password must be at least 6 characters.";
  else if (str(v.password).length > 128) e.password = "Password is too long.";
  return e;
}

export function validateRegister(v) {
  const e = {};
  if (str(v.name).trim().length < 2) e.name = "Please enter your full name.";
  else if (str(v.name).trim().length > 80) e.name = "Name is too long.";
  if (!EMAIL_RE.test(str(v.email)) || str(v.email).length > 254) e.email = "Enter a valid email address.";
  if (str(v.password).length < 8) e.password = "Use at least 8 characters.";
  else if (str(v.password).length > 128) e.password = "Password is too long.";
  return e;
}

export function validateContact(v) {
  const e = {};
  if (!str(v.name).trim()) e.name = "Please enter your name.";
  else if (str(v.name).trim().length > 100) e.name = "Name is too long.";
  if (!EMAIL_RE.test(str(v.email)) || str(v.email).length > 254) e.email = "Enter a valid email address.";
  if (!CONTACT_SUBJECTS.includes(str(v.subject))) e.subject = "Choose a subject.";
  if (str(v.message).trim().length < 10) e.message = "Message should be at least 10 characters.";
  else if (str(v.message).trim().length > 5000) e.message = "Message is too long (5000 characters max).";
  return e;
}
