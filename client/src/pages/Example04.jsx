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
                    2021 Hyundai N e-Festival Junior Cup
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
                    <img src="../img/P4_03_570x570.jpg" alt="images" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="row">
                    <div class="col-small col-md-6">
                      <div class="img-block border-hover-effect">
                        <img src="../img/P4_04_270x270.jpg" alt="images" />
                      </div>
                    </div>
                    <div class="col-small col-md-6">
                      <div class="img-block border-hover-effect">
                        <img src="../img/P4_05_270x270.jpg" alt="images" />
                      </div>
                    </div>
                    <div class="col-small mb-0 col-md-12">
                      <div class="img-block border-hover-effect">
                        <img src="../img/P4_06_570x270.jpg" alt="images" />
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
                        Hyundai Motor Company
                        <br />
                        <font style={{ fontWeight: "900" }}>
                          대회 일자 :{" "}
                        </font>{" "}
                        2021년 11월 16일 ~ 12월 11일
                        <br />
                        <font style={{ fontWeight: "900" }}>
                          대회 장소 :{" "}
                        </font>{" "}
                        인제스피디움 / 아프리카 콜로세움
                        <br />
                        <font style={{ fontWeight: "900" }}>
                          대회 플랫폼 :{" "}
                        </font>{" "}
                        Assetto corsa
                        <br />
                        <font style={{ fontWeight: "900" }}>
                          담당 업무 :{" "}
                        </font>{" "}
                        기획 및 전체 운영 대행
                        <br />
                        <font style={{ fontWeight: "900" }}>
                          이벤트 내용 :{" "}
                        </font>
                        ’Hyundai N e-Festival Junior Cup’은 [오디션] 방식을 도입한 주니어 드라이버 
                        육성프로그램 중 하나로, ‘예능’ + ‘다큐멘터리’ 성격의 방송프로그램으로, 
                        총 9회의 에피소드를 제공함 국내 최고의 4개의 레이싱팀이 참여하여 선발된 선수를 각 팀에서 케어,
                         최고의 성적을 낼 수 있게 서포트 하였으며, 수상자 중 일부 선수는 실제 레이서로 데뷔하여 큰 주목을 받음.
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
