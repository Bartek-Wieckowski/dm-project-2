export default function ProductIdPage({params,searchParams}:{params:{productId:string},searchParams:{name:string}}) {
  return (
    <main>
     {params.productId} {searchParams.name}
    </main>
  );
}
