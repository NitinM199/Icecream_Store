import React from 'react'

function About() {
  return (
   <>
   
     {/* about section */}
<div>
  <section className="about" id="about">
    <div className="row">
      <div className="image">
        <img src="assets/images/img_2.png" alt />
      </div>
      <div className="content">
        <h3>The flavor you need, the consistency you want—ice cream!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus molestias corporis inventore soluta odio vero, dolor itaque illo eos. Velit, sequi libero animi debitis provident odit perferendis maxime repudiandae illo.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere omnis fugit corporis dignissimos saepe! Accusamus accusantium enim laudantium voluptatem ab?</p>
        <a href className="btn">learn more</a>
      </div>
    </div>
    <div className="box-container">
      <div className="box">
        <img src="assets/images/group.png" alt />
        <h1>Cafe &amp; Shop</h1>
        <p>Lobortis sociosqu aliquet volutpat imperdiet eros tempor suspendisse hac suscipit.</p>
        <a href className="btn">visit our shop</a>
      </div>
      <div className="box">
        <img src="assets/images/group0.png" alt />
        <h1>Food Truck</h1>
        <p>Lobortis sociosqu aliquet volutpat imperdiet eros tempor suspendisse hac suscipit.</p>
        <a href className="btn">visit spot</a>
      </div>
      <div className="box">
        <img src="assets/images/group1.png" alt />
        <h1>Catering</h1>
        <p>Lobortis sociosqu aliquet volutpat imperdiet eros tempor suspendisse hac suscipit.</p>
        <a href className="btn">order now</a>
      </div>
      <div className="box">
        <img src="assets/images/group2.png" alt />
        <h1>Special Events</h1>
        <p>Lobortis sociosqu aliquet volutpat imperdiet eros tempor suspendisse hac suscipit.</p>
        <a href className="btn">book now</a>
      </div>
    </div>
  </section>
  <div className="container">
    <img src="assets/images/shap.png" alt />
    <div className="detail">
      <i className="bx bxs-popsicle" />
      <h1>The perfect blend <br /> of summer and fun</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      <a href className="btn">discover more</a>
    </div>
  </div>
</div>
  {/* about section */}
   
   </>
  )
}

export default About