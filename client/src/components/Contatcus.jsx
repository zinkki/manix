export default function Contactus() {
  return (
    <>
      <section class="content-block bg-gray-light">
        <div class="container">
				<div class="bottom-space text-center text-uppercase">
          <h2>Contact Us</h2>
        </div>
          <div class="contact-container">
            <div class="row">
              <div class="col-lg-12">
                <form
                  action="#"
                  method="post"
                  id="contact_form"
                  class="waituk_contact-form"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          placeholder="FIRST NAME *"
                          id="con_fname"
                          name="con_fname"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          placeholder="LAST NAME *"
                          id="con_lname"
                          name="con_lname"
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="tel"
                          placeholder="PHONE NUMBER"
                          id="con_phone"
                          name="con_phone"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="email"
                          placeholder="EMAIL ADDRESS *"
                          id="con_email"
                          name="con_email"
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      placeholder="MESSAGE *"
                      id="con_message"
                      name="con_message"
                    ></textarea>
                  </div>
                  <div class="btn-container">
                    <button id="btn_sent" class="btn btn-primary btn-arrow">
                      SEND MESSAGE
                    </button>
                    <p id="error_message"> </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
