import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    experimental: {
      optimizePackageImports: ['@mdx-js/mdx', '@mdx-js/react'],
    }
};

const withMDX = createMDX()

export default withMDX(nextConfig);
