import { useNavigate } from 'react-router-dom';

export default function Nav() {
  const navigate = useNavigate();
  const goMain = () => {
    navigate('/');
  }
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
            <a class="navbar-brand mr-auto m-sm-auto" href='' onClick={goMain}>
              {" "}
              <img src="../img/auto-logo.png" alt="AutoManix" />{" "}
              <img src="../img/auto-logo2.png" alt="" />{" "}
            </a>
            <div
              class="collapse navbar-collapse flex-row-reverse"
              id="mega-menu"
            >
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
