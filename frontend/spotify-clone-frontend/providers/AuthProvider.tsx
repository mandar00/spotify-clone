"use client";
import { updateApiToken } from "@/api/api";
import { useAuth } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { getToken } = useAuth();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const initAuth = async () => {
      try {
        setLoading(true);
        const token = await getToken();
        updateApiToken(token);
      } catch (error) {
        updateApiToken(null);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    initAuth();
  }, [getToken]);
  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Loader className="size-8 text-emerald-500 animate-spin" />
      </div>
    );
  }

  return <>{children}</>;
};
export default AuthProvider;
