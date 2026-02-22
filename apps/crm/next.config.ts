import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@westsiderealty/shared", "@westsiderealty/ui"],
};

export default nextConfig;
