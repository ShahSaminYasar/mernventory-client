// import { useEffect } from "react";
import useProducts from "../../Hooks/useProducts";

const CartTableRow = ({ productId }) => {
  let product = useProducts(null, productId);
  product = product?.[0];

//   useEffect(() => {
//     setTotal(
//       (prev) =>
//         prev + (product?.selling - product?.selling * (product?.discount / 100))
//     );
//   }, [product, product?.selling, product?.discount, productId, setTotal]);

  return (
    <tr key={product?._id}>
      <td>
        <div className="w-[100px] overflow-x-auto">{product?._id}</div>
      </td>
      <td>
        <img
          src={product?.image}
          alt="Product image"
          className="w-full max-w-[120px] rounded-sm"
        />
      </td>
      <td>{product?.name}</td>
      <td>{product?.quantity}</td>
      <td>{product?.discount}</td>
      <td>
        $
        {product?.cost +
          product?.cost * (product?.profit / 100) -
          product?.cost * (product?.discount / 100)}
      </td>
    </tr>
  );
};
export default CartTableRow;
