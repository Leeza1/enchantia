import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleProductApi } from '../../apis/Api';

const ProductDetails = () => {

  //get isd from paras
  const { id } = useParams();
  //get single product
  const [product, setProduct] = useState('');

  useEffect(() => {
    getSingleProductApi(id).then((res) => {
      setProduct(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [id])
  return (
    //  <div className='container mt-5'>
    //    <div className="d-flex">
    //        <img className='object-cover rounded-3' height={'500px'} width={'600px'} src={product.image} alt="" />
    //         <div className='ms-3 mt-4'>
    //            <span className='fs-3 fw-bold'>
    //               {product.name}
    //          </span>

    //       <p className='fs-4'>
    //              {product.price}
    //         </p>
    //        <p className='fs-4'>
    //            {product.category}
    //         </p>
    //        <p className='fs-4'>
    //           {product.description}
    //       </p>

    //           <button className='btn btn-primary'>Add to cart</button>

    //       </div>
    //    </div>
    //   </div>
  
    <div className='container-fluid main-body detail-page'>
      <section className='container-padding'>
        <div className='container mt-3'>
          <div className='row'>
            <div className='col-md-6 col-sm-12 product-carousel'>

              <div id="carouselExampleIndicators" class="carousel slide carousel-fade carosel-height" data-mdb-ride="carousel">

                <div class="carousel-inner mb-5">
                  <div class="carousel-item active product-item">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(88).webp" class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item product-item">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(121).webp" class="d-block w-100"
                      alt="..." />
                  </div>
                  <div class="carousel-item product-item">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(31).webp" class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button class="carousel-control-prev left-arrow" type="button" data-mdb-target="#carouselExampleIndicators"
                  data-mdb-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next right-arrow" type="button" data-mdb-target="#carouselExampleIndicators"
                  data-mdb-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className='col-md-6 col-sm-12 product-description'>
              <div>
                <p className='section-subheading'>Earing </p>
                <p className='primary-heading-low'>Florere stud earrings</p>
                <p className='best-seller-heading'>Flower, Pink, Gold-tone plated</p>
              </div>
              <div className='d-flex flex-row'>
                  <div>
                    <span className='stock'>In stock</span>
                  </div>
                    <div class="tp-product-details-rating">
                      <span><i class="fa-solid fa-star"></i></span>
                      <span><i class="fa-solid fa-star"></i></span>
                      <span><i class="fa-solid fa-star"></i></span>
                      <span><i class="fa-solid fa-star"></i></span>
                      <span><i class="fa-solid fa-star"></i></span>
                    </div>
                  <div class="tp-product-details-reviews ms-2">
                    <span>(36 Reviews)</span>
                  </div>
              </div>
             
              <div>
                <p className='para mt-4'>"Inspired by the wondrous beauty of nature, these gorgeous earrings are blooming with fine crystals. Set on gold-tone plating, the pink design features five petals artfully arranged around a central stone with a deeper hue. A captivating design for floral days. "</p>
                <p className='best-seller-heading'>$102.00</p>
              </div>
              <div class="d-flex flex-row mb-3">
                <div className='pe-3'><button type="button" class="btn btn-about mt-3 " data-mdb-ripple-color="dark">Add to Cart</button></div>
                <div><button type="button" class="btn btn-about mt-3 " data-mdb-ripple-color="dark">Wishlist</button></div>
              </div>
              <div class="tp-product-details-social mt-4">
                  <span className='para'>Share: </span>
                  <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i class="fa-brands fa-twitter"></i></a>
                  <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                  <a href="#"><i class="fa-brands fa-vimeo-v"></i></a>
                  <ul className='product para mt-3'>
                    <li>30 days easy returns</li>
                    <li>Order yours before 2.30pm for same day dispatch</li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=' container-padding related-product best-seller-section pb-0'>
      <div className=" container ">
          <div className="row">
          <div className="col-sm-12 col-md-7">
          <h5 className="section-subheading">Related Product</h5>
          <h5 className="section-heading1 ">Explore all the similar products </h5>
          </div>
          <div className="col-sm-12 col-md-5">
          <button type="button" class="btn btn-about mt-4 float-xs-start float-md-end" data-mdb-ripple-color="dark">Explore all</button>
          </div>
          </div>
      </div>
        <div className='container'>
        <div className="row">
            <div className="col-sm-6 col-md-3">
              <div className=" py-4">
                <div className="related-image">
                  <img src="https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_700/5662493_png/gema-pendant--mixed-cuts--flower--pink--rhodium-plated-swarovski-5662493.png" className="img-fluid" alt="" />
                </div>
                <div className="product-description ">
                  <p className="section-subheading mb-1 mt-2">Ring</p>
                  <p className="mb-0 best-seller-heading">Gema pendant</p>
                  <p className="best-seller-sub-heading">Mixed cuts, Flower, Pink, Rhodium plated</p>
                  <hr />
                  <p className="mb-0 best-seller-heading">$102.00</p>
                  <button type="button" class="btn btn-about mt-3" data-mdb-ripple-color="dark">Shop Now</button>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 ">
              <div className=" py-4">
                <div className="related-image">
                  <img src="https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5661344_png/fashion-swan-pendant--swan--white--rhodium-plated-swarovski-5661344.png" className="img-fluid" alt="" />
                </div>
                <div className="product-description">
                  <p className="section-subheading mb-1 mt-2">Ring</p>
                  <p className="mb-0 best-seller-heading">Fashion Swan pendant</p>
                  <p className="best-seller-sub-heading">Swan, White, Rhodium plated</p>
                  <hr />
                  <p className="mb-0 best-seller-heading">$102.00</p>
                  <button type="button" class="btn btn-about mt-3" data-mdb-ripple-color="dark">Shop Now</button>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 ">
              <div className=" py-4">
                <div className="related-image">
                  <img src="https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_700/5652822_png/gema-bracelet--mixed-cuts--green--gold-tone-plated-swarovski-5652822.png" className="img-fluid" alt="" />
                </div>
                <div className="product-description">
                  <p className="section-subheading mb-1 mt-2">Ring</p>
                  <p className="mb-0 best-seller-heading">Gema bracelet</p>
                  <p className="best-seller-sub-heading">Mixed cuts, Green, Gold-tone plated</p>
                  <hr />
                  <p className="mb-0 best-seller-heading">$102.00</p>
                  <button type="button" class="btn btn-about mt-3" data-mdb-ripple-color="dark">Shop Now</button>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 ">
              <div className=" py-4">
                <div className="related-image">
                  <img src="https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_700/5658397_png/gema-drop-earrings--mixed-cuts--flower--pink--rhodium-plated-swarovski-5658397.png" className="img-fluid" alt="" />
                </div>
                <div className="product-description">
                  <p className="section-subheading mb-1 mt-2">Ring</p>
                  <p className="mb-0 best-seller-heading">Gema drop earrings</p>
                  <p className="best-seller-sub-heading">Mixed cuts, Flower, Pink, Rhodium plated</p>
                  <hr />
                  <p className="mb-0 best-seller-heading">$102.00</p>
                  <button type="button" class="btn btn-about mt-3" data-mdb-ripple-color="dark">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="category-section no-bg container-padding">
        <div className=" container ">
          <div className="row">
          <div className="col-sm-12 col-md-6">
          <h5 className="section-subheading">Product Collection</h5>
          <h5 className="section-heading1 ">Discover our  products categories</h5>
          </div>
          <div className="col-sm-12 col-md-6">
          <button type="button" class="btn btn-about mt-4 float-xs-start float-md-end" data-mdb-ripple-color="dark">Discover Now</button>
          </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-6 col-md-3  category-img">
              <img src="https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_1.0,f_auto,w_700/5662493_ms1/gema-pendant--mixed-cuts--flower--pink--rhodium-plated-swarovski-5662493.jpg" alt="" class="img-fluid" />
            </div>
            <div className="col-sm-6 col-md-3  category-img"><img src="https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_1.0,f_auto,w_700/5656635_ms2/florere-stud-earrings--flower--pink--gold-tone-plated-swarovski-5656635.jpg" alt="" class="img-fluid" /></div>
            <div className="col-sm-6 col-md-3  category-img"><img src="https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_1.0,f_auto,w_700/5658396_ms3/gema-bracelet--mixed-cuts--flower--pink--rhodium-plated-swarovski-5658396.jpg" alt="" class="img-fluid" /></div>
            <div className="col-sm-6 col-md-3 category-img"><img src="https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_1.0,f_auto,w_700/5652138_ms2/dulcis-bracelet--candy--multicolored--gold-tone-plated-swarovski-5652138.jpg" alt="" class="img-fluid hover-zoom " /></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetails
