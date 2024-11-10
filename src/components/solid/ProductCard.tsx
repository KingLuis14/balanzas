import { createSignal } from "solid-js";
import "./ProductCardStyle.scss";
import type { LocalStorageProductsBalanzas } from "@/interface/products";
import { atomProductsLength } from "@/store/cartStore.ts";
import { CELULAR, SITE } from "@/constants";

const ProductList = () => {
  const localProducts = JSON.parse(
    localStorage.getItem("product") ?? "[]"
  ) as LocalStorageProductsBalanzas[];

  const [products, setProducts] =
    createSignal<LocalStorageProductsBalanzas[]>(localProducts);

  const removeProduct = (productId: string) => {
    const currentScroll = window.scrollY;
    const updatedProducts = products().filter(
      (product) => product.id !== productId
    );

    atomProductsLength.set(updatedProducts.length);

    setProducts(updatedProducts);
    localStorage.setItem("product", JSON.stringify(updatedProducts));
    window.requestAnimationFrame(() => window.scrollTo(0, currentScroll));
  };

  const aumentCantidad = (productId: string) => {
    const currentScroll = window.scrollY;
    const updateProduct = products().map((product) => {
      if (product.id === productId) {
        return { ...product, cantidad: Math.min(product.cantidad + 1, 5) };
      } else {
        return product;
      }
    });

    setProducts(updateProduct);
    localStorage.setItem("product", JSON.stringify(updateProduct));
    window.requestAnimationFrame(() => window.scrollTo(0, currentScroll));
  };

  const decrementCantidad = (productId: string) => {
    const currentScroll = window.scrollY;
    const updateProduct = products().map((product) => {
      if (product.id === productId) {
        return { ...product, cantidad: Math.max(product.cantidad - 1, 1) };
      } else {
        return product;
      }
    });

    setProducts(updateProduct);
    localStorage.setItem("product", JSON.stringify(updateProduct));
    window.requestAnimationFrame(() => window.scrollTo(0, currentScroll));
  };

  const totalPagar = () => {
    return products()
      .reduce((total, product) => {
        const descuento = product.oferta
          ? (product.descuento / 100) * product.precio
          : 0;
        const precioConDescuento = product.precio - descuento;
        const totalProducto = precioConDescuento * product.cantidad;

        // Math.ceil((product.precio - totalDescuento) * 10) / 10
        return Math.ceil((total + totalProducto) * 10) / 10;
      }, 0)
      .toFixed(2);
  };

  const enviarMensajeWSP = () => {
    let mensaje = "🛒 Detalle de tu Carrito de Compra:\n";
    let totalAPagar = 0;

    products().forEach((product) => {
      const descuento = product.oferta
        ? (product.descuento / 100) * product.precio
        : 0;
      const precioConDescuento = product.precio - descuento;
      const totalProducto = precioConDescuento * product.cantidad;

      mensaje += `
Producto: ${product.id}
Link: ${SITE}productos/${product.slug}
Cantidad: ${product.cantidad}
Precio unitario: S/ ${precioConDescuento.toFixed(2)}
Subtotal: ${totalProducto.toFixed(2)}

--------------------------------
`;

      totalAPagar += totalProducto;
    });
    mensaje += `\n`;
    mensaje += `👉 Total a pagar: $${totalAPagar.toFixed(2)}\n`;

    const url = `https://api.whatsapp.com/send/?phone=${CELULAR}&text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  };

  return (
    <div>
      {products().length === 0 ? (
        <h3>No tienes productos en el carrito</h3>
      ) : (
        <div style="container-type: inline-size;">
          <section class="wrapper-products" data-product-card>
            {/* lista */}
            <ul
              class=""
              style="display: flex; flex-direction: column; gap: 1.5rem;">
              {products().map((product) => {
                const totalDescuento = product.oferta
                  ? (product.descuento / 100) * product.precio
                  : 0;

                const totalPrecio =
                  Math.ceil((product.precio - totalDescuento) * 10) / 10;

                const totalPrecioRedondeado = totalPrecio.toFixed(2);

                return (
                  <li class="">
                    <article class="container" data-product-card>
                      <a
                        href={`/productos/${product.slug}`}
                        class="container__imgWrapper"
                        data-product-card>
                        <img
                          class="container__img"
                          src={product.imagen}
                          alt={product.id}
                          data-product-card
                        />
                      </a>
                      <div class="container__content" data-product-card>
                        <a
                          href={`/productos/${product.slug}`}
                          class="container__title">
                          <h4>{product.id}</h4>
                        </a>

                        {product.oferta && (
                          <p class="container__descuentos" data-product-card>
                            <del class="fs-small-1">S/ {product.precio}</del>
                            <span class="fs-small-1">
                              -{product.descuento}%
                            </span>
                          </p>
                        )}
                        <div style="display: flex; justify-content: space-between ; align-items: center;">
                          <div class="container__counters" data-product-card>
                            <button
                              class="button--oneline"
                              onClick={() => decrementCantidad(product.id)}>
                              -
                            </button>
                            <input type="number" value={product.cantidad} />
                            <button
                              data-increment
                              class="button--primary"
                              onClick={() => aumentCantidad(product.id)}>
                              +
                            </button>
                          </div>
                          <p>
                            Unidad:
                            <span style="font-weight: 600;">
                              S/ {totalPrecioRedondeado}
                            </span>
                          </p>
                        </div>

                        <button
                          class="btnDelete"
                          onClick={() => removeProduct(product.id)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"
                            />
                          </svg>
                        </button>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
            {/* calculator */}
            <div class="calculator" data-product-card>
              <p>
                Total a pagar <span>S/ {totalPagar()}</span>
              </p>

              <a
                class="button button--accent"
                style="text-align: center; width: fit-content;"
                onClick={() => enviarMensajeWSP()}>
                Comprar via WhatsApp
              </a>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default ProductList;
