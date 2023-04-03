import { useNavigate } from 'react-router-dom';

export default function Portfolio() {

  const navigate = useNavigate();

  const goExample1 = () => {
    navigate('/portfolio1');
  }
  const goExample2 = () => {
    navigate('/portfolio2');
  }
  const goExample3 = () => {
    navigate('/portfolio3');
  }
  const goExample4 = () => {
    navigate('/portfolio4');
  }
  const goExample5 = () => {
    navigate('/portfolio5');
  }
  const goExample6 = () => {
    navigate('/portfolio6');
  }

  return (
    <>
      <section class="content-block portfolio-block" id="container">
        <div class="bottom-space text-center text-uppercase">
          <h2>PORTFOLIO</h2>
        </div>
        <div class="row grid">
          <div class="gallery-item col-lg-4 col-md-6 ui photography">
            <figure class="picture-item img-block shine-effect image-zoom port-v2">
              <img src="../img/P1_01_800x533.jpg" alt="images description" />
              <figcaption>
                <div class="link-box">
                  <a href='' onClick={goExample1}>
                    <span class="icon-heart">
                      <span class="sr-only">&amp;</span>
                    </span>
                  </a>
                  <a href='' onClick={goExample1}>
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
              <img src="../img/P2_01_800x533.jpg" alt="images description" />
              <figcaption>
                <div class="link-box">
                  <a href='' onClick={goExample2}>
                    <span class="icon-heart">
                      <span class="sr-only">&amp;</span>
                    </span>
                  </a>
                  <a href='' onClick={goExample2}>
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
              <img src="../img/P3_01_800x533.jpg" alt="images description" />
              <figcaption>
                <div class="link-box">
                  <a href='' onClick={goExample3}>
                    <span class="icon-heart">
                      <span class="sr-only">&amp;</span>
                    </span>
                  </a>
                  <a href='' onClick={goExample3}>
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
              <img src="../img/P4_01_800x533.jpg" alt="images description" />
              <figcaption>
                <div class="link-box">
                  <a href='' onClick={goExample4}>
                    <span class="icon-heart">
                      <span class="sr-only">&amp;</span>
                    </span>
                  </a>
                  <a href='' onClick={goExample4}>
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
              <img src="../img/P5_01_800x533.jpg" alt="images description" />
              <figcaption>
                <div class="link-box">
                  <a href='' onClick={goExample5}>
                    <span class="icon-heart">
                      <span class="sr-only">&amp;</span>
                    </span>
                  </a>
                  <a href='' onClick={goExample5}>
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
                  <a href='' onClick={goExample6}>
                    <span class="icon-heart">
                      <span class="sr-only">&amp;</span>
                    </span>
                  </a>
                  <a href='' onClick={goExample6}>
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
