function generarMenuPages()
{
    const menuPages = `<nav class="navbar navbar-expand-lg custom-navbar bg-dark border-bottom border-body">
            <div class="container-fluid">
              <a href="../index.html">
                <img src="../img/repasopaginasweb3.png" alt="Logo" width="175" class="d-inline-block align-text-top">
              </a>              
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link navspace" href="../pages/htmlcss.html">HTML & CSS</a>
                        <a class="nav-link" href="../pages/jsgit.html">JavaScript & Git</a>
                    </div>
                </div>
            </div>
        </nav>`;

  return menuPages;
}