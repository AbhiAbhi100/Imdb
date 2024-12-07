// Use ES Module syntax
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'image.tmdb.org',
            pathname: '**',
          },
        ],
      },
    
  };
  
  export default nextConfig;
  