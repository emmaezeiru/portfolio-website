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
        {
          protocol: 'https',
          hostname: 'images.wallpaperscraft.com',
          pathname: '/**', 
        },
      ],
    },
  };
  
  export default nextConfig;
  