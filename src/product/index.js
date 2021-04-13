import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  return <h1>상품상세 id:{id}상품</h1>;
}
export default ProductPage;
