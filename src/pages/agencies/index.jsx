import React from "react";
import Service from "../../components/agencies1/services";
import SignUp2 from "../../components/agencies1/signup";
import MainLayOut from "../../layouts/mainlayout";
import TopBanner from "../../utils/topbanner";



const Agencies = () => {
  return (
    <div>
      <MainLayOut>

        <div>
          <TopBanner heading="<h1>Jiran<span class='text-danger'>360!</span>for Public Agencies </h1>"
            description="<p>Creating<span class='text-danger'> better</span> communication through public agencies and other services needed among users of jiran360 allocating to on-going community needs and safety.</p>"
            button="Get Started"
          />
        </div>
        <div>
          <Service />
        </div>
        <div>
          <SignUp2 />
        </div>
        <div>

        </div>

      </MainLayOut>
    </div>
  )
}
export default Agencies;