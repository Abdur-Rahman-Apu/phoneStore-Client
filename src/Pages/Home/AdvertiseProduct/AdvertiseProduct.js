import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import required modules

import toast from "react-hot-toast";
import { EffectCards } from "swiper";
import Loading from "../../Shared/Loading";
import DisplayAdvertiseProduct from "./DisplayAdvertiseProduct";
import "./adv.css";

const AdvertiseProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // fetch data
  useEffect(() => {
    const gettingProducts = () => {
      setLoading(true);
      fetch(`https://phone-store-ten.vercel.app/products`)
        .then((res) => res.json())
        .then((data) => {
          const android = data.android;
          const iphone = data.iphone;
          const button = data.button;

          const product = []
            .concat(android.filter((item) => item?.advertise === 1))
            .concat(iphone.filter((item) => item?.advertise === 1))
            .concat(button.filter((item) => item?.advertise === 1));

          setProducts(product);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          toast.err("Server error");
        });
    };
    gettingProducts();
  }, []);

  return (
    products && (
      <div className="h-[500px] mb-36">
        <h1 className="text-center text-4xl font-bold text-boldGreen my-20">
          Advertisement
        </h1>

        {products?.length > 0 ? (
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {products &&
              products.map((item, idx) => (
                <SwiperSlide>
                  <DisplayAdvertiseProduct
                    key={idx}
                    item={item}
                  ></DisplayAdvertiseProduct>
                </SwiperSlide>
              ))}
          </Swiper>
        ) : (
          <Loading />
        )}
      </div>
    )
  );
};

export default AdvertiseProduct;
