import React from "react";

const First = () => {
  return (
    <div>
      <div className="flex h-screen w-screen bg-amber-50">
        {/* <div className="flex flex-col justify-center items-center w-3/5 text-black font-bold"> */}
        <div className=" w-3/5 text-black  pt-32 pl-60  ">
          <div id="first" className="text-5xl font-bold ">
            WELCOME
          </div>
          <br />
          <div id="second" className="text-2xl font-semibold leading-loose ">
            TO
          </div>
          <br />
          <div id="third" className="text-5xl font-bold ">
            UNITRENDS
          </div>
          <div>
            <br />
            <button className="btn btn-error text-white">GO SHOPPING</button>
          </div>
        </div>
        <div className="w-2/5 bg-amber-50 flex justify-start items-center">
          <img src="./LOGO1.png" alt="" className="w-96 pb-32" />
        </div>
      </div>
      <div className="w-screen h-auto  bg-amber-50 ">
        <div
          id="equi"
          className="text-black font-bold text-xl flex justify-center"
        >
          EQUINOX
        </div>
        <br />
        <a href="#" className="-mt-4 flex justify-center">
          View all
        </a>

        <div className="w-screen h-screen  bg-amber-50 flex justify-center mt-5  pb-10 space-x-5  pl-5 pr-5  ">
          <div className="card card-compact  w-1/5  glass ">
            <figure>
              <img src="./equi_tshirt.png" alt="car!" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">Equinox Tshirt</h2>
              <p>Rs. 500</p>
              <div className="card-actions justify-end pb-12">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card card-compact w-1/5 glass">
            <figure>
              <img src="./equi_cap.png" alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title mt-24 pt-1">Equinox Cap</h2>
              <p>Rs. 100</p>
              <div className="card-actions justify-end pb-12">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card card-compact w-1/5 glass">
            <figure>
              <img src="./Mug.jpeg" alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title mt-10">Equinox Mug</h2>
              <p>Rs. 200</p>
              <div className="card-actions justify-end pb-12">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card card-compact w-1/5 h-auto glass">
            <figure>
              <img src="./equi_sweatshirt.png" alt="car!" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title mt-4">Equinox Sweatshirt</h2>
              <p>Rs. 700</p>
              <div className="card-actions justify-end pb-12">
                <button className="btn btn-primary ">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" w-screen h-screen  bg-amber-50">
        <div className="card w-screen  shadow-xl image-full">
          <figure>
            <img
              src="./Alumni.webp"
              alt="Shoes"
              // className="py-12"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="w-auto h-auto bg-amber-50">
  <div className="card">
    <figure >
      <img
        src="./Alumni.webp"
        alt=""
        className="w-screen h-auto py-12"
      />
    </figure>
  </div>
</div> */}

      <div className="py-16 bg-amber-50">
        <div class="alumni section">
          <div class="alumni_bg">
            <div class="alumni_data">
              <h2 class="alumni_title">OUR GRATITUDE</h2>
              <p class="alumni_description">SPECIAL OFFER FOR OUR ALUMNI</p>

              <a href="#EQUINOX" class="button">
                ORDER NOW
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen h-auto  bg-amber-50 ">
        <div
          id="ens"
          className="text-black font-bold text-xl flex justify-center"
        >
          ENSPIRE
        </div>
        <br />
        <a href="#" className="-mt-4 flex justify-center">
          View all
        </a>

        <div className="w-screen  bg-amber-50 flex justify-center mt-5  pb-10 space-x-5  pl-5 pr-5  ">
          <div className="card card-compact  w-1/5  glass ">
            <figure className="pt-5">
              <img src="./enspire_hoddie_01.png" alt="car!" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title pt-10">Enspire Hoddie</h2>
              <p>Rs. 700</p>
              <div className="card-actions justify-end pb-12">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card card-compact w-1/5 glass">
            <figure>
              <img src="./enspire_tshirt_01.png" alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title pt-6 "> Enspire T-shirt</h2>
              <p>Rs. 500</p>
              <div className="card-actions justify-end pb-12">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card card-compact w-1/5 glass">
            <figure className="pt-2">
              <img src="./enspire_tshirt_02.png" alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title pt-2 ">Enspire T-shirt</h2>
              <p>Rs. 500</p>
              <div className="card-actions justify-end pb-12">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card card-compact  w-1/5  glass ">
            <figure className="pt-5">
              <img src="./enspire_hoodie_02.png" alt="car!" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title pt-12 mt-1">Enspire Hoddie</h2>
              <p>Rs. 700</p>
              <div className="card-actions justify-end pb-12">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen h-auto bg-amber-50 pt-8">
        <div className="text-xl font-bold font-sans flex justify-center">
          <h1 id="sug">SUGGESTION BOX</h1>
        </div>
        <div className="text-sm flex justify-center pt-2">
          Empower change with your ideas. Drop them here!
        </div>
        <div className="pb-20 pt-5 flex justify-center">
          <input type="text" placeholder="Enter your text..." class="w-1/4 px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none" />
          <button className="btn btn-error w-28 ">Send</button>

        </div>
      </div>

      <div className="w-screen h-auto flex justify-center space-x-40 bg-amber-50 pb-20">
        <div className="w-1/10 h-auto">
          <img src="./IIITL_logo.png" alt="" className="w-24"/>
        </div>
        <div className="w-1/10 h-auto">
          <img src="./equinox_logo.png" alt="" className="w-24"/>
        </div>
        <div className="w-1/10 h-auto">
          <img src="./Logo-Cultural-Club.jpeg.webp" alt="" className="w-24"/>
        </div>
        <div className="w-1/10 h-auto">
          <img src="./Enspire2.webp" alt="" className="w-24"/>
        </div>
      </div>
    </div>
  );
};

export default First;
