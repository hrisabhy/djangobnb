"use server";

import { cookies } from "next/headers";

export async function handleLogin(
  userId: string,
  accessToken: string,
  refreshToken: string
) {
  cookies().set("session_userid", userId, {
    httpOnly: true,
    secure: false,
    maxAge: 60 * 60 * 24 * 7, // One week
    path: "/",
  });

  cookies().set("session_access_token", accessToken, {
    httpOnly: true,
    secure: false,
    maxAge: 60 * 60, // 60 minutes
    path: "/",
  });

  cookies().set("session_refresh_token", refreshToken, {
    httpOnly: true,
    secure: false,
    maxAge: 60 * 60 * 24 * 7, // One week
    path: "/",
  });
}