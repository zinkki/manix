import Nav from "../components/Nav";
import Footer from "../components/Foooter";

export default function Example01() {
  return (
    <>
      <Nav />
      <main class="no-banner">
        <section class="visual visual-sub visual-no-bg">
          <div class="visual-inner no-overlay bg-gray-light">
            <div class="centered">
              <div class="container">
                <div class="visual-text visual-center">
                  <h1 class="visual-title visual-sub-title">
                    AMX Global League
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="content-wrapper">
          <section class="content-block">
            <div class="container">
              <div class="row portfolio-gallery">
                <div class="bottom-space-medium-only col-lg-6">
                  <div class="img-block border-hover-effect">
                    <img src="../img/P1_03_570x570.jpg" alt="images" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="row">
                    <div class="col-small col-md-6">
                      <div class="img-block border-hover-effect">
                        <img src="../img/P1_04_270x270.jpg" alt="images" />
                      </div>
                    </div>
                    <div class="col-small col-md-6">
                      <div class="img-block border-hover-effect">
                        <img src="../img/P1_05_270x270.jpg" alt="images" />
                      </div>
                    </div>
                    <div class="col-small mb-0 col-md-12">
                      <div class="img-block border-hover-effect">
                        <img src="../img/p1_06_570x270.jpg" alt="images" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="portfolio-des top-space">
                <div class="row">
                  <div class="col-lg-12 bottom-space-medium-only">
                    <div class="text-block top-space">
                      <p>
                        <font style={{ fontWeight: "900" }}>클라이언트 : </font>{" "}
                        ...준비중...
                        <br />
                        <font style={{ fontWeight: "900" }}>
                          이벤트 일자 :{" "}
                        </font>{" "}
                        ...준비중...
                        <br />
                        <font style={{ fontWeight: "900" }}>
                          이벤트 장소 :{" "}
                        </font>{" "}
                        ...준비중...
                        <br />
                        <font style={{ fontWeight: "900" }}>
                          이벤트 대상 :{" "}
                        </font>{" "}
                        ...준비중...
                        <br />
                        <font style={{ fontWeight: "900" }}>
                          담당 업무 :{" "}
                        </font>{" "}
                        ...준비중...
                        <br />
                        <font style={{ fontWeight: "900" }}>
                          이벤트 내용 :{" "}
                        </font>
                        ...준비중...
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
