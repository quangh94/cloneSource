/**
 * Custom loader function for Next.js Image component to handle Strapi images
 * @param {string} src - Image path from Strapi
 * @returns {string} Full image URL
 */
export const strapiImageLoader = (src) => {
  if (src.startsWith('http')) {
    return src;
  }
  
  return `${process.env.NEXT_PUBLIC_API_URL}${src}`;
}; 