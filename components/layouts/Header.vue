<template>
    <header class="shadow-sm bg-white">
      <nav class="navbar-expand-lg navbar-light bg-light">
        <ul class="header d-flex">
          <li class="button">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </li>
          <li>
            <div class="logo">
              <img src="https://www.savershall.com/img/01.78349b40.png">
            </div>
          </li>
          <li>
            <form class="search-form">
              <div class="form-group">
                <input type="text" name="search" autocomplete="off">
                <button type="submit" class="send-button">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </form>
          </li>
          <li>
            <div class="icon">
              <i class="fa-regular fa-user"></i>
            </div>
          </li>
        </ul>
        <div class="collapse navbar-collapses" id="navbarSupportedContent">
          <LayoutsNavbar/>
        </div>
      </nav>
    </header>
</template>

<style lang="scss" scoped>

@include mobile-device {
  .header {
      margin: 0;
      padding: 0;
      .search-form {
        width: 208px;
        padding-left: 9px;
        .form-group {
          border: 2px solid $sub-theme-color;
          align-items: center;
          border-radius: 7px;
          overflow: hidden;
          display: flex;
          width: 100%;
          margin: 10px 0;
          height: 22px;
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
          height: 28px;
          color: #2b2b2b;
          border: none;
          outline: none;
          box-shadow: none;
          i {
            font-size: 16px;
            padding-left: 15px;
            color: $theme-color;
          }
        }
    }
    .icon {
      margin-top: 10px;
      padding-left: 15px;
      i {
        font-size: 20px;
      }
    }
    .navbar-toggler {
      border: none;
       &:focus {
        box-shadow: unset;
      }
      .navbar-toggler-icon {
        width: 24px;
      }
    }
    .logo {
      width: 82px;
      margin-top: 6px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
