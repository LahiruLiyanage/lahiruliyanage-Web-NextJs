import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: [
            'www.vectorlogo.zone',
            'raw.githubusercontent.com',
            'docs.amplify.aws',
            'cdn.worldvectorlogo.com',
            'vitejs.dev'
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.githubusercontent.com',
            },
            {
                protocol: 'https',
                hostname: '**.vectorlogo.zone',
            },
            {
                protocol: 'https',
                hostname: '**amplify.aws',
            },
            {
                protocol: 'https',
                hostname: '**worldvectorlogo.com',
            },
            {
                protocol: 'https',
                hostname: 'vitejs.dev',
            },
        ],
    },
};

export default nextConfig;
