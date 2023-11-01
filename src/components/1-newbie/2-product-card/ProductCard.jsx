import {
  cartIcon,
  productMobile,
  productPC,
} from "../../../assets/images/1-newbie/2-product-card";

const ProductCard = () => {

  return (
    <div className="w-screen h-screen bg-Cream flex place-items-center">
      <div className="max-w-xs md:max-w-lg flex flex-col md:flex-row mx-auto bg-White rounded-2xl shadow-xl drop-shadow-xl overflow-hidden font-Montserrat">
        <div className="flex-1">
          <img
            src={productMobile}
            alt="perfume photo"
            className="bg-cover md:hidden"
          />
          <img
            src={productPC}
            alt="perfume photo"
            className="hidden md:block"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4 p-6">
          <div className="uppercase tracking-widest text-xs text-DarkGrayishBlue">
            Perfume
          </div>
          <div className="text-2xl font-Fraunces font-black">
            Gabrielle Essence Eau De Parfum
          </div>
          <div className="text-sm text-DarkGrayishBlue font-medium">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </div>
          <div className="flex space-x-3 items-center">
            <div className="text-2xl text-DarkCyan font-Fraunces font-black">
              $149.99
            </div>
            <div className="text-sm line-through text-DarkGrayishBlue">
              $169.99
            </div>
          </div>
          <button className="flex space-x-2 justify-center items-center py-3 rounded-lg bg-DarkCyan active:bg-VeryDarkBlue">
            <img src={cartIcon} alt="cart icon" />
            <div className="text-White text-sm font-semibold">Add to Cart</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
