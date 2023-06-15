class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <!-- Nav Title -->
      <a href="#" class="logo-background"
        ><img src="images/sase-logo.png" class="logo"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Nav Items -->
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link text-dark" href="#"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-dark"
              href="#"
              id="defaultDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Community
            </a>
            <div class="dropdown-menu" aria-labelledby="defaultDropdown">
              <a class="dropdown-item" href="#">Executive Board</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Gallery</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">FAQ</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">Conference</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">Upcoming Events</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
    `;
  }
}

customElements.define("header-sase", Header);
