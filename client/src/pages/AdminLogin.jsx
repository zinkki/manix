export default function AdminLogin() {
  return (
    <>
      <div class="wrapper">
        <div class="page-wrapper">
          <main>
            <div class="content-wrapper">
              <div class="row  no-gutters">
                <div class="col-lg-12 signup-block">
                  <div class="signup-wrap text-center">
                    <div class="inner-wrap">
                      <div class="circular-icon bottom-space">
                        <i class="icon-sign-in"></i>
                      </div>
                      <form
                        action="#"
                        id="contact_form"
                        class="waituk_contact-form signup-form"
                      >
                        <h2 class="bottom-space">Auto-Manix Admin Login</h2>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <input
                                type="text"
                                placeholder="USERNAME OR EMAIL"
                                id="con_uname"
                                name="con_fname"
                                class="form-control"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <input
                                type="password"
                                placeholder="PASSWORD"
                                id="con_password"
                                name="con_lname"
                                class="form-control"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="waituk_select-box">
                              <div class="waituk_select-box-default square-box">
                                <input
                                  type="checkbox"
                                  name="checkbox"
                                  id="checkbox11"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="btn-container mb-3  mb-xl-3 mt-xl-5 mt-lg-2">
                          <button class="btn btn-primary has-radius-small">
                            Go Main
                          </button>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <button class="btn btn-primary has-radius-small">
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
