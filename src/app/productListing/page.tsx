import { sanityFetch } from '@/sanity/lib/fetch';
import { allproducts } from '@/sanity/lib/queries'
import ProductListClient from '../component/productListingClient';

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  features: string;
  quantity: number;
};

export default async function ProductListing() {
  // Fetch products from Sanity
  const products: Product[] = await sanityFetch({ query: allproducts });

  // Pass the products to the client component
  return <ProductListClient products={products} />;
}