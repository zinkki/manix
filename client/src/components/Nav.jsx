export default function Nav() {
  return (
    <header
      class="fixed-top main-header header-white transparent with-side-panel-ico"
      id="waituk-main-header"
    >
      <div id="nav-section">
        <div class="bottom-header container-fluid mega-menus" id="mega-menus">
          <nav
            class="navbar navbar-toggleable-md no-border-radius no-margin mega-menu-multiple"
            id="navbar-inner-container"
          >
            <button
              type="button"
              class="navbar-toggler navbar-toggler-left"
              data-toggle="collapse"
              data-target="#mega-menu"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand mr-auto m-sm-auto" href="#">
              {" "}
              <img src="img/logo.svg" alt="roxine" />{" "}
              <img src="img/logo-dark.svg" alt="" />{" "}
            </a>
            <div
              class="collapse navbar-collapse flex-row-reverse"
              id="mega-menu"
            >
              <ul class="nav navbar-nav">
                <li data-animation="fadeIn">
                  <a href="#"> Home </a>
                </li>
                <li data-animation="fadeIn">
                  <a href="#"> About Us </a>
                </li>
                <li data-animation="fadeIn">
                  <a href="#"> Portfolio </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
