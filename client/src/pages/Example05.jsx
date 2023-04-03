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
                    AMX e-Sports CHAMPIONSHIP
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
                    <img src="../img/P5_03_570x570.jpg" alt="images" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="row">
                    <div class="col-small col-md-6">
                      <div class="img-block border-hover-effect">
                        <img src="../img/P5_04_270x270.jpg" alt="images" />
                      </div>
                    </div>
                    <div class="col-small col-md-6">
                      <div class="img-block border-hover-effect">
                        <img src="../img/P5_05_270x270.jpg" alt="images" />
                      </div>
                    </div>
                    <div class="col-small mb-0 col-md-12">
                      <div class="img-block border-hover-effect">
                        <img src="../img/P5_06_570x270.jpg" alt="images" />
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
                        <font style={{ fontWeight: "900" }}>주최사 : </font>{" "}
                        오토매닉스(프로모터)
                        <br />
                        <font style={{ fontWeight: "900" }}>
                          대회 일자 :{" "}
                        </font>{" "}
                        2021년 6월 3일 ~ 10월 28일
                        <br />
                        <font style={{ fontWeight: "900" }}>
                          대회 장소 :{" "}
                        </font>{" "}
                        온라인 / 아프리카 콜로세움
                        <br />
                        <font style={{ fontWeight: "900" }}>
                          대회 플랫폼 :{" "}
                        </font>{" "}
                        iRacing
                        <br />
                        <font style={{ fontWeight: "900" }}>
                          참가 대상 :{" "}
                        </font>{" "}
                        주니어컵- 만 19세 미만의 레이서/ 챔피언십- 프로 드라이버, 인플루언서, 심 레이서
                        <br />
                        <font style={{ fontWeight: "900" }}>
                          대회 내용 :{" "}
                        </font>
                        ’AMX eSports Championship‘은 국내 최대 규모로 펼쳐진 심 레이싱 대회로 
                        국내 모터스포츠 기반을 견고히 다지고, 모터스포츠 대중화 및 발전에 앞장 서기
                         위해 창설된 대회. 챔피언십 대회 특징으로는  프로 드라이버 + 인플루언서 + 
                         심레이서로 구성된 3인 1팀 구성을 원칙으로 하여 시청자들이 경험해 보지 못한 
                         레이스를 선사 하였으며, 모터스포츠 인재 육성을 위해 주니어컵을 별도로 운영, 
                         시즌 순위에 따라 장학금을 제공 하여 풀뿌리 모터스포츠 활성화에도 크게 기여. 
                         총 상금은 가상화폐인 1비트코인이 지급되었으며, 국내 최대 상금규모로 주목을 받음.
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
