import React from 'react'

const Post = () => {
  return (
    <>
    
     {/* post section */}
  <section className="post my-3" id="blog">
    <h1 className="heading"> <i className="fas fa-quote-left" /> our latest post <i className="fas fa-quote-right" /></h1>
    <div className="box-container">
      <div className="box">
        <img src="assets/images/blog.jpg" alt />
        <div className="content">
          <span><i className="bx bxs-calendar-alt" />jan 2, 2023</span>
          <h3>post title goes here</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veritatis nostrum voluptates cumque deserunt incidunt, minus mollitia rem molestiae ad.</p>
          <a href="#" className="btn">read more</a>
        </div>
      </div>
      <div className="box">
        <img src="assets/images/blog0.jpg" alt />
        <div className="content">
          <span><i className="bx bxs-calendar-alt" />jan 2, 2023</span>
          <h3>post title goes here</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veritatis nostrum voluptates cumque deserunt incidunt, minus mollitia rem molestiae ad.</p>
          <a href="#" className="btn">read more</a>
        </div>
      </div>
      <div className="box">
        <img src="assets/images/blog1.jpg" alt />
        <div className="content">
          <span><i className="bx bxs-calendar-alt" />jan 2, 2023</span>
          <h3>post title goes here</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veritatis nostrum voluptates cumque deserunt incidunt, minus mollitia rem molestiae ad.</p>
          <a href="#" className="btn">read more</a>
        </div>
      </div>
    </div>
  </section>
  {/* post section */}
    
    </>
  )
}

export default Post