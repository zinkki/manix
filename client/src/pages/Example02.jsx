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
                  <h1 class="visual-title">
                    2022 Michelin Pilot Sprt 5
                  </h1>
                  <h3 class="visual-sub-title">Ride and Drive Event</h3>
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
                    <img src="../img/P2_03_570x570.jpg" alt="images" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="row">
                    <div class="col-small col-md-6">
                      <div class="img-block border-hover-effect">
                        <img src="../img/P2_04_270x270.jpg" alt="images" />
                      </div>
                    </div>
                    <div class="col-small col-md-6">
                      <div class="img-block border-hover-effect">
                        <img src="../img/P2_05_270x270.jpg" alt="images" />
                      </div>
                    </div>
                    <div class="col-small mb-0 col-md-12">
                      <div class="img-block border-hover-effect">
                        <img src="../img/P2_06_570x270.jpg" alt="images" />
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
                        MICHELIN KOREA
                        <br />
                        <font style={{ fontWeight: "900" }}>
                          이벤트 일자 :
                        </font>{" "}
                        2022년 4월 27일 ~ 30일
                        <br />
                        <font style={{ fontWeight: "900" }}>
                          이벤트 장소 :{" "}
                        </font>{" "}
                        AMG 스피드웨이(용인)
                        <br />
                        <font style={{ fontWeight: "900" }}>
                          이벤트 대상 :{" "}
                        </font>{" "}
                        미쉐린 임직원, 미디어, 인플루언서, 딜러
                        <br />
                        <font style={{ fontWeight: "900" }}>
                          담당 업무 :{" "}
                        </font>{" "}
                        전체 이벤트 기획 및 총괄 대행
                        <br />
                        <font style={{ fontWeight: "900" }}>
                          이벤트 내용 :{" "}
                        </font>
                        Michelin Pilot Sport5 런칭 행사로, 임직원, 딜러, 인플루언서로 구성된 그룹을 
                        대상으로 Michelin Pilot Spot5의 공식적인 런칭을 발표하고,
                         우수한 성능을 서킷에서 직접 체험 해보는 행사 이며 런칭 쇼,
                          브레이킹체험 (일반/젖은노면), 원선회(일반/젖은노면) 슬라럼,
                           택시타임 프로그램으로 구성하여 참가자들의 제품 이해도를 높이고,
                            행사에 대한 높은 만족도를 제공함 
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
