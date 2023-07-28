<!DOCTYPE html>
<html lang="en" class="sr">

<head>
  <meta charset="utf-8" />
  <meta http-equiv="refresh" content="900" />
  <meta http-equiv="X-UA-Compatible" content="IE=9" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no,minimal-ui" />

  <?php wp_head() ?>

  <!-- primary information-->
  <?php if (is_home()): ?>
    <title><?= bloginfo('name') ?> | <?= bloginfo('description') ?></title>
  <?php else: ?>
    <title><?php wp_title( '|', true, 'right' ); ?></title>
  <?php endif; ?>
  <meta name="description" content="<?= bloginfo('description') ?>" />
  <meta name="keywords" content="<?= bloginfo('name') ?>, website, wordpress" />

  <!-- ie fix for html5 tags-->
  <!--[if lt IE 9]><script src='http://html5shiv.googlecode.com/svn/trunk/html5.js'></script><![endif]-->

  <!-- author-->
  <meta name="author" content="<?= bloginfo('name') ?>" />
  <meta name="copyright" content="© 2023 Website. All rights reserved." />

  <!-- user agent crawler-->
  <meta name="robots" content="index, follow" />
  <meta name="googlebot" content="index, follow" />
  <meta name="googlebot-news" content="index, follow" />
  <meta name="msnbot" content="index, follow" />
  <meta name="webcrawlers" content="index, follow" />
  <meta name="spiders" content="index, follow" />

  <link rel="preload" as="font" href="<?= get_template_directory_uri() ?>/assets/fonts/Gotham-Medium.woff2" type="font/woff2" crossorigin="anonymous" />
  <link rel="preload" as="font" href="<?= get_template_directory_uri() ?>/assets/fonts/Gotham-Medium.woff" type="font/woff" crossorigin="anonymous" />

  <!-- ============ icon ============-->
  <!-- web favicon-->
  <link rel="shortcut icon" href="<?= get_template_directory_uri() ?>/assets/img/homescreen/favicon.ico" />

  <!-- android add to home screen-->
  <link rel="manifest" href="<?= get_template_directory_uri() ?>/assets/js/data/manifest.json" />
  <meta name="application-name" content="WEBSITE" />
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="theme-color" content="#009fdf" />
  <link rel="icon" type="image/png" sizes="16x16" href="<?= get_template_directory_uri() ?>/assets/img/homescreen/favicon-16x16.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="<?= get_template_directory_uri() ?>/assets/img/homescreen/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="96x96" href="<?= get_template_directory_uri() ?>/assets/img/homescreen/favicon-96x96.png" />
  <link rel="icon" type="image/png" sizes="144x144" href="<?= get_template_directory_uri() ?>/assets/img/homescreen/android-icon-144x144.png" />
  <link rel="icon" type="image/png" sizes="192x192" href="<?= get_template_directory_uri() ?>/assets/img/homescreen/android-icon-192x192.png" />

  <!-- windows microsoft-->
  <meta name="msapplication-TileColor" content="#009fdf" />
  <meta name="msapplication-TileImage" content="<?= get_template_directory_uri() ?>/assets/img/homescreen/ms-icon-144x144.png" />

  <!-- apple add to home screen-->
  <meta name="apple-mobile-web-app-title" content="<?= bloginfo('name') ?>" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="#009fdf" />
  <link rel="apple-touch-icon" href="<?= get_template_directory_uri() ?>/assets/img/homescreen/apple-icon.png" />
  <link rel="apple-touch-icon" sizes="57x57" href="<?= get_template_directory_uri() ?>/assets/img/homescreen/apple-icon-57x57.png" />
  <link rel="apple-touch-icon" sizes="60x60" href="<?= get_template_directory_uri() ?>/assets/img/homescreen/apple-icon-60x60.png" />
  <link rel="apple-touch-icon" sizes="72x72" href="<?= get_template_directory_uri() ?>/assets/img/homescreen/apple-icon-72x72.png" />
  <link rel="apple-touch-icon" sizes="76x76" href="<?= get_template_directory_uri() ?>/assets/img/homescreen/apple-icon-76x76.png" />
  <link rel="apple-touch-icon" sizes="114x114" href="<?= get_template_directory_uri() ?>/assets/img/homescreen/apple-icon-114x114.png" />
  <link rel="apple-touch-icon" sizes="120x120" href="<?= get_template_directory_uri() ?>/assets/img/homescreen/apple-icon-120x120.png" />
  <link rel="apple-touch-icon" sizes="144x144" href="<?= get_template_directory_uri() ?>/assets/img/homescreen/apple-icon-144x144.png" />
  <link rel="apple-touch-icon" sizes="152x152" href="<?= get_template_directory_uri() ?>/assets/img/homescreen/apple-icon-152x152.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="<?= get_template_directory_uri() ?>/assets/img/homescreen/apple-icon-180x180.png" />
  <link rel="apple-touch-startup-image" href="<?= get_template_directory_uri() ?>/assets/img/homescreen/apple-icon.png" />

  <!-- style-->
  <link rel="stylesheet" href="<?= get_template_directory_uri() ?>/assets/css/app.min.css" />
  <link rel="stylesheet" href="<?= get_template_directory_uri() ?>/assets/css/custom-style.css" />

</head>

<body <?php body_class('hold-transition') ?>>

  <?php get_template_part("template-parts/header") ?>