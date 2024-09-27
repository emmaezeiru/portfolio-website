/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'img.icons8.com',
          port: '', 
          pathname: '/**', 
        },
        {
          protocol: 'https',
          hostname: 'pagepro.co',
          pathname: '/**', // Match all paths for pagepro.co
        },
      ],
    },
  };
  
  export default nextConfig;
  