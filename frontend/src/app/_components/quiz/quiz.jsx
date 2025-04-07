"use client"
import { useEffect, useState } from "react";
import Button from "@/app/_components/ui/Button";
import { useRouter } from "next/navigation";

const Quiz = () => {
  const backendUrl = process.env.NEXT_PUBLIC_API_URL
  const authApiUrl = `${backendUrl}/auth?redirect_uri=${encodeURIComponent("/quiz")}`

  const router = useRouter();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Track auth flow

  const fetchUser = async (accessToken) => {
    try {
      const res = await fetch(`${backendUrl}/auth/me`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!res.ok) throw new Error("Access token invalid");
      const data = await res.json();
      setUser(data);
      setLoading(false);
    } catch (err) {
      throw err;
    }
  };

  const refreshAccessToken = async (refreshToken) => {
    try {
      const res = await fetch(`${backendUrl}/auth/refresh`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken: refreshToken }),
      });

      if (!res.ok) throw new Error("Refresh token invalid");

      const data = await res.json();
      const { accessToken: newAccessToken, refreshToken: newRefreshToken } = data;

      sessionStorage.setItem("accessToken", newAccessToken);
      localStorage.setItem("refreshToken", newRefreshToken);
      return newAccessToken;
    } catch (err) {
      return null;
    }
  };

// 👉 Effect #1: Handle tokens from URL and store them
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessTokenFromURL = urlParams.get("accessToken");
    const refreshTokenFromURL = urlParams.get("refreshToken");

    if (accessTokenFromURL && refreshTokenFromURL) {
      sessionStorage.setItem("accessToken", accessTokenFromURL);
      localStorage.setItem("refreshToken", refreshTokenFromURL);

      // Clean up URL (replace to avoid query reuse)
      router.replace("/quiz");
    }
    setLoading(false);
  }, [router]);

  // 👉 Effect #2: Try auth using stored tokens
  useEffect(() => {
    console.log("checking tokens...");
    const tryAuth = async () => {
      const accessToken = sessionStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      if (accessToken) {
        console.log("found accessToken")
        try {
          await fetchUser(accessToken);
          return;
        } catch (_) {
          // Try refresh
        }
      } else if (refreshToken) {
        console.log("found refreshToken")
        const newAccessToken = await refreshAccessToken(refreshToken);
        if (newAccessToken) {
          try {
            await fetchUser(newAccessToken);
            return;
          } catch (_) {
            // failed even after refresh
          }
        }
      }

      // All failed, show login
      setLoading(false);
    };

    tryAuth();
  }, [backendUrl]);

  if (loading) return <p>Loading...</p>;

  if (!user) return (
  <>
      <Button href={authApiUrl} children={"Sign in with Google"} />
  </>
  )

  return (
    <>
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
      {/* Add more user info or quiz logic here */}
    </>
  );
}

export default Quiz
