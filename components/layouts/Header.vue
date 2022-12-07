<template>
    <header class="shadow-sm bg-white">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="row">
            <div class="col-2">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <div class="col-2">
              <div class="logo">
                <img src="https://www.savershall.com/img/icon%20logo.54411986.png" style="width: 50px;">
              </div>
            </div>
            <div class="col-6">
              <form class="search-form">
                <div class="form-group">
                  <input type="text" name="search" placeholder="Search for a product or brand.." autocomplete="off">
                  <button type="submit" class="send-button">
                    <i class="icon ion-md-search"></i>
                  </button>
                </div>
              </form>
            </div>
            <div class="col-2">
              <a href="https://www.flaticon.com/free-icons/user" title="user icons">User icons created by Freepik - Flaticon</a>
            </div>
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
</template>

<style lang="scss" scoped>
  .search-form{
      .form-group {
        border: 1px solid #2b2b2b;
        align-items: center;
        border-radius: 12px;
        overflow: hidden;
        display: flex;
        width: 100%;
        margin: 10px 0;
      }
      input {
        letter-spacing: 1px;
        line-height: 25px;
        padding: 0 20px 1px;
        height: 25px;
        border: none;
        width: 100%;
        outline: none;
        background: none;
      }
      .send-button {
        text-align: center;
        background: none;
        line-height: 28px;
        min-width: 40px;
        height: 25px;
        color: #2b2b2b;
        border: none;
        outline: none;
        font-size: 22px;
        box-shadow: none;
      }
  }
</style>