export default function MailTest() {
  return (
    <>
      <form
        class="gform pure-form pure-form-stacked"
        method="POST"
        data-email="Zinkki@auto-manix.com"
        action="https://script.google.com/macros/s/AKfycbzy_vNCmgAirR7QW6m0ShoVSGIoWE_-V3nAFJEow24SVys4wig9zrnIbQEUhnUkLXvw/exec"
      >
        <div class="form-elements">
          <fieldset class="pure-group">
            <label for="name">Name: </label>
            <input id="name" name="name" placeholder="What your Mom calls you" />
          </fieldset>

          <fieldset class="pure-group">
            <label for="message">Message: </label>
            <textarea
              id="message"
              name="message"
              rows="10"
              placeholder="Tell us what's on your mind..."
            ></textarea>
          </fieldset>

          <fieldset class="pure-group">
            <label for="email">
              <em>Your</em> Email Address:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value=""
              placeholder="your.name@email.com"
            />
          </fieldset>

          <fieldset class="pure-group">
            <label for="color">Favourite Color: </label>
            <input id="color" name="color" placeholder="green" />
          </fieldset>

          <fieldset class="pure-group honeypot-field">
            <label for="honeypot">
              To help avoid spam, utilize a Honeypot technique with a hidden text field; must be
              empty to submit the form! Otherwise, we assume the user is a spam bot.
            </label>
            <input id="honeypot" type="text" name="honeypot" value="" />
          </fieldset>

          <button class="button-success pure-button button-xlarge">
            <i class="fa fa-paper-plane"></i>&nbsp;Send
          </button>
        </div>

        <div class="thankyou_message" style={{display:'none'}}>
          <h2>
            <em>Thanks</em> for contacting us! We will get back to you soon!
          </h2>
        </div>
      </form>
    </>
  );
}