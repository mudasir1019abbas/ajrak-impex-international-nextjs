import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import { createSession } from "@/lib/session";
import { fail, json, readJson, serverError, tooMany } from "@/lib/http";
import { rateLimit } from "@/lib/rateLimit";
import { validateLogin } from "@/lib/validators";
import User, { toPublicUser } from "@/models/User";

// Compared against when the email is unknown, so response time does not reveal
// whether an account exists.
const DUMMY_HASH = "$2b$12$l4htvyMah/PngaQUoZGlG.MGU7Q.S84yrOMsgmJeGh1Z3/2.m.Hwa";

export async function POST(request) {
  const limit = rateLimit(request, "login", { limit: 10, windowMs: 15 * 60 * 1000 });
  if (!limit.ok) return tooMany(limit.retryAfter);

  const body = await readJson(request);
  console.log(body)
  if (!body) return fail("Invalid request.", 400);

  const errors = validateLogin(body);
  if (Object.keys(errors).length) return fail(Object.values(errors)[0], 422, { errors });

  const email = body.email.trim().toLowerCase();

  try {
    await connectDB();
    const user = await User.findOne({ email }).select("+passwordHash");
    console.log(user);
    const valid = await bcrypt.compare(body.password, user?.passwordHash ?? DUMMY_HASH);
    console.log(valid)
    if (!user || !valid) return fail("Invalid email or password.", 401);

    await createSession(user._id);
    return json({ user: toPublicUser(user) });
  } catch (err) {
    return serverError(err, "login");
  }
}
