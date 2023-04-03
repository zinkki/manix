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
                    Hyundai N Time Attack Challenge
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
                        <img src="../img/P1_06_570x270.jpg" alt="images" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="portfolio-des top-space">
                <div class="row">
                  <div class="col-lg-12 bottom-space-medium-only">
                    <div class="text-block top-space">
                      <p><font style={{fontWeight:'900'}}>클라이언트 : </font> Hyundai Motor Company<br/>
												 <font style={{fontWeight:'900'}}>이벤트 일자 : </font> 2023년 1월 31일 ~ 2023년 2월 10일<br/>
												 <font style={{fontWeight:'900'}}>이벤트 장소 : </font> 현대자동차 양재 사옥<br/>
												 <font style={{fontWeight:'900'}}>이벤트 대상 : </font> 현대자동차 임직원<br/>
												 <font style={{fontWeight:'900'}}>담당 업무 : </font> 전체 이벤트 기획 및 총괄 대행<br/>
												 <font style={{fontWeight:'900'}}>이벤트 내용 : </font>현대자동차 모터스포츠팀의 WTCR 우승 기념 이벤트로, 
												총 7일의 운영일은 예선(6일) + 파이널(1일)로 진행되었으며 6일 
												간 예약 가능한 예악 슬롯(336회)의 100% 예약율을 달성, 그 중 
												320명이 참여(95%)하여 현대자동차 양재 사옥의 진정한 사내 페스티벌로 운영하였음<br/>
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
