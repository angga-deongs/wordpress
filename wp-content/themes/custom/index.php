<?php
get_header();
?>

<!--main-site-->
<main class="main-site main-site--hide js-main-site">
  <!--home-->
  <section class="home">
    <div class="container">
      <h1><?= the_title() ?></h1>
      <?= the_content() ?>
    </div>
  </section>
</main>

<?php
get_footer();
?>
