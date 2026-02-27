import { mongoConnect } from "@/lib/mongoConnect";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { setToken } from "@/lib/token";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { client, db } = await mongoConnect();
    const { email, password } = await req.json();

    // user finding
    const user = await db.collection("users").findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    //password matching
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }
    // generate jwt
    const token = jwt.sign(
      { id: user._id.toString(), email: user.email, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: "1d" },
    );
    const res = NextResponse.json({
      message: "Login Successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
    return res;
  } catch (error) {
    console.error(error);
  }
}
