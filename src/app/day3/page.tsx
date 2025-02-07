import { sanityFetch } from "@/sanity/lib/fetch";
import { allproducts } from "@/sanity/lib/queries";
import Image from "next/image";


type Product ={
    category : string,
    dimensions : string,
   features : string,
  quantity: number,
  _id : string;
  name : string;
  description : string;
  price : number;
  imageUrl: string;
};

export default async function Home (){
  const products : Product[] = await sanityFetch({query : allproducts});

  return(
    <div>
      <h1 className="text-center text-[60px]">
        Product List </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 object-cover">
      
        {products.map((product) => (
            <div className=" border p-4 rounded-lg shadow-sm flex flex-col item-center"
             key={product._id}
             >
              <Image 
              className="w-100 h-60 "
              src ={product.imageUrl} 
              alt = {product.name}
              width={500} 
              height={400}  
              objectFit="cover"      
    
              
              />
              <h2 className="text-xl font-bold text-center">{product.name}</h2>
              <p className="text-center text-gray-600">${product.price}</p>
              <p className="text-center">{product.description}</p>
              <p className="text-center">{product.features}</p>
              <p className="text-center">{product.quantity}</p>
            </div>
          ))
        }

      </div>
    </div>
  )
}