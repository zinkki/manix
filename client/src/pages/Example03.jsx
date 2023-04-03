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
                    Hyundai N e-Festival Global League 2022
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
                    <img src="../img/P3_03_570x570.jpg" alt="images" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="row">
                    <div class="col-small col-md-6">
                      <div class="img-block border-hover-effect">
                        <img src="../img/P3_04_270x270.jpg" alt="images" />
                      </div>
                    </div>
                    <div class="col-small col-md-6">
                      <div class="img-block border-hover-effect">
                        <img src="../img/P3_05_270x270.jpg" alt="images" />
                      </div>
                    </div>
                    <div class="col-small mb-0 col-md-12">
                      <div class="img-block border-hover-effect">
                        <img src="../img/P3_06_570x270.jpg" alt="images" />
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
                        2022년 3월 5일 ~ 2022년 4월 31일
                        <br />
                        <font style={{ fontWeight: "900" }}>
                          대회 플랫폼 :{" "}
                        </font>{" "}
                        iRacing
                        <br />
                        <font style={{ fontWeight: "900" }}>
                          참가 대상 :{" "}
                        </font>{" "}
                        전 세계 주요 13개국 중 총 30명
                        <br />
                        <font style={{ fontWeight: "900" }}>
                          담당 업무 :{" "}
                        </font>{" "}
                        기획 및 글로벌 방송 송출, 선수 커뮤니케이션
                        <br />
                        <font style={{ fontWeight: "900" }}>
                          이벤트 내용 :{" "}
                        </font>
                        Hyundai N e-Festival Global League’는 예선전을 통과한 12개국 
                        최고의 드라이버 24인과 주니어컵 우승자, 초청선수 2명 등 
                        총 27인이 참가하고 iRacing에 런칭한 아반떼 N TCR차량을 
                        공식 차량으로 한 글로벌 대회 최종 우승자에게는 ‘WRC 현대 
                        월드랠리팀 VIP호스피탈리티’ 프로그램에 초청되며, 
                        개인 순위와 별개로 국가별 합산 점수도 순위가 있어 매회를 거듭할
                         수록 많은 관심을 받음.
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
