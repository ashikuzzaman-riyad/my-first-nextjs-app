import { redirect } from "next/navigation";

export default function Page({ searchParams }) {
 


  return (
     <div className="flex justify-between mb-10">
        <h2>All product: ({posts.length})</h2>
        <input className="bg-red-500 border-amber-500" type="search" name="Product search" id="" />
      </div>
  );
}
