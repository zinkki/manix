export default function Portfolio() {
  return (
    <>
      <section class="content-block portfolio-block" id="container">
        <div class="bottom-space text-center text-uppercase">
          <h2>PORTFOLIO</h2>
        </div>
        <ul class="filter-nav text-center button-group filter-button-group">
          <li>
            <button data-filter="*">ALL</button>
          </li>
          <li>
            <button data-filter=".ui">UI/UX DESIGN</button>
          </li>
          <li>
            <button data-filter=".programming">PROGRAMMING</button>
          </li>
          <li>
            <button data-filter=".photography">PHOTOGRAPHY</button>
          </li>
          <li>
            <button data-filter=".ecommerce">ECOMMERCE</button>
          </li>
        </ul>
        <div class="row grid">
          <div class="gallery-item col-lg-4 col-md-6 ui photography">
            <figure class="picture-item img-block shine-effect image-zoom port-v2">
              <img src="img/img-37.jpg" alt="images description" />
              <figcaption>
                <div class="link-box">
                  <a href="#">
                    <span class="icon-heart">
                      <span class="sr-only">&amp;</span>
                    </span>
                  </a>
                  <a href="#">
                    <span class="icon-link">
                      <span class="sr-only">&amp;</span>
                    </span>
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
          <div class="gallery-item col-lg-4 col-md-6 photography programming">
            <figure class="picture-item img-block shine-effect image-zoom port-v2">
              <img src="img/img-32.jpg" alt="images description" />
              <figcaption>
                <div class="link-box">
                  <a href="#">
                    <span class="icon-heart">
                      <span class="sr-only">&amp;</span>
                    </span>
                  </a>
                  <a href="#">
                    <span class="icon-link">
                      <span class="sr-only">&amp;</span>
                    </span>
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
          <div class="gallery-item col-lg-4 col-md-6 ui photography">
            <figure class="picture-item img-block shine-effect image-zoom port-v2">
              <img src="img/img-33.jpg" alt="images description" />
              <figcaption>
                <div class="link-box">
                  <a href="#">
                    <span class="icon-heart">
                      <span class="sr-only">&amp;</span>
                    </span>
                  </a>
                  <a href="#">
                    <span class="icon-link">
                      <span class="sr-only">&amp;</span>
                    </span>
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
          <div class="gallery-item col-lg-4 col-md-6 ecommerce programming">
            <figure class="picture-item img-block shine-effect image-zoom port-v2">
              <img src="img/img-34.jpg" alt="images description" />
              <figcaption>
                <div class="link-box">
                  <a href="#">
                    <span class="icon-heart">
                      <span class="sr-only">&amp;</span>
                    </span>
                  </a>
                  <a href="#">
                    <span class="icon-link">
                      <span class="sr-only">&amp;</span>
                    </span>
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
          <div class="gallery-item col-lg-4 col-md-6 programming ecommerce">
            <figure class="picture-item img-block shine-effect image-zoom port-v2">
              <img src="img/img-35.jpg" alt="images description" />
              <figcaption>
                <div class="link-box">
                  <a href="#">
                    <span class="icon-heart">
                      <span class="sr-only">&amp;</span>
                    </span>
                  </a>
                  <a href="#">
                    <span class="icon-link">
                      <span class="sr-only">&amp;</span>
                    </span>
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
          <div class="gallery-item col-lg-4 col-md-6 ecommerce ui">
            <figure class="picture-item img-block shine-effect image-zoom port-v2">
              <img src="img/img-36.jpg" alt="images description" />
              <figcaption>
                <div class="link-box">
                  <a href="#">
                    <span class="icon-heart">
                      <span class="sr-only">&amp;</span>
                    </span>
                  </a>
                  <a href="#">
                    <span class="icon-link">
                      <span class="sr-only">&amp;</span>
                    </span>
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
