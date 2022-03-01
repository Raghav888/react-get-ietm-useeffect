import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  let [status, setstatus] = useState(false);
  let [data, setdata] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        setstatus(true);
        const recevieddata = await axios.get("/api/products");
        setdata(recevieddata.data.products);
        setstatus(false);
      } catch (error) {
        console.log(error);
        setstatus(false);
      }
    })();
    // write product loading code here..
    // products are at `/api/products`
    //never use statesetter here
  }, []);

  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://mantraui.netlify.app/component/component.css"
      />
      <h1> Showcase Products </h1>
      {status && <h2>Loading...</h2>}
      {data &&
        data.map((items) => (
          <div className="mantra-card-holder ">
            <div class="mantra-card-holder-image ">
              <img class="mantra-card-image " src={items.image} alt="im" />
            </div>

            <div class="mantra-card-holder-text ">
              <h2>{items.name}</h2>
              <div>
                <h4>Sub Heading</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus, error accusantium eius fuga. Ut sunt earum et
                  dignissimos tempore in omnis veniam a quis officia qui iure
                  architecto. Rem incidunt repudiandae aut fugit rerum non
                  dignissimos molestiae ut provident distinctio rem sequi
                  quaerat.
                </p>
                <span class="mantra-discount ">Rs. {items.price} </span>
                <span class="mantra-original "> Rs.2500</span>
              </div>
              <div class="mantra-card-btn ">
                <button class="mantra-button mantra-primary-btn ">
                  <i class="fa fa-shopping-cart "></i>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
