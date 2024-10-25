import { useStore } from "@nanostores/solid";
import { atomProductsLength } from "@/store/cartStore.ts";
import "./ProductCounter.scss";

export const ProductCounter = () => {
  const localProducts = JSON.parse(
    localStorage.getItem("product") ?? "[]"
  ) as any[];

  atomProductsLength.set(localProducts.length);
  const $atomProductsLength = useStore(atomProductsLength);

  return (
    <a href="/carrito/" class="counter-carrito" data-carrito>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24">
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2">
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </g>
      </svg>
      <span>{$atomProductsLength()}</span>
    </a>
  );
};
