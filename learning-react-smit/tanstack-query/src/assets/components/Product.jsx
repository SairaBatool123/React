import { useQuery } from '@tanstack/react-query';
import React from 'react'

export default function Product() {
  const { data } = useQuery({
    queryKey: ["products"], queryFn: async () => {
      try {
        const response = fetch("https://dummyjson.com/products")
          .then((res) => res.json())
          .then(res => res.products);
        console.log(response);
        return response;
        
      } catch (error) {
        console.log(error);
        
      }
    } });

  return (
    <>
      {data?.map(({ id, title, description, category, price }) => (
        <div key={id}>
          <h1>{title}</h1>
          <p>{description}</p>
          <h3>{price}</h3>
          <h2>{category}</h2>
        </div>
      ))}
    </>
  )
}
