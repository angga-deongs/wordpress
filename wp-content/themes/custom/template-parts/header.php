<!--header-->
<header class="header">
  <div class="container">
    <div class="header__inner">
      <!--header-logo-->
      <a class="header__logo" style="left:0;text-decoration:none;font-weight:500;color: #919191;letter-spacing: .1em;" href="<?= site_url() ?>">
        Header
      </a>
      <!--header-menu-->
      <nav class="header__menu">
        <ul class="header__list">
          <li class="header__item">
            <a class="header__link" href="<?= site_url('works') ?>">Works</a>
          </li>
          <li class="header__item<?= ($post->post_name === 'news') ? ' header__item--active' : '' ?>">
            <a class="header__link" href="<?= site_url('news') ?>">News</a>
          </li>
          <li class="header__item<?= ($post->post_name === 'contact-us') ? ' header__item--active' : '' ?>">
            <a class="header__link" href="<?= site_url('contact-us') ?>">Contact Us</a>
          </li>
        </ul>
      </nav>
      <!--burger-menu-->
      <button class="burger-menu js-burger-menu" type="button">
        <span class="burger-menu__bar"></span>
        <span class="burger-menu__bar"></span>
      </button>
    </div>
  </div>
</header>
<!--/.header-->