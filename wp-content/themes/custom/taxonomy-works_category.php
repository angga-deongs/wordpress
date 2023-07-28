<?php
$category = get_queried_object();
get_header();
?>

<!--main-site-->
<main class="main-site main-site--hide js-main-site">
  <!--category-->
  <section class="category">
    <div class="container">
      <h1>Category - <?= $category->name ?></h1>
      <h2>term_id: <?= $category->term_id ?></h2>
      <h2>name: <?= $category->name ?></h2>
      <h2>slug: <?= $category->slug ?></h2>
      <h2>term_group: <?= $category->term_group ?></h2>
      <h2>term_taxonomy_id: <?= $category->term_taxonomy_id ?></h2>
      <h2>taxonomy: <?= $category->taxonomy ?></h2>
      <h2>description: <?= $category->description ?></h2>
      <h2>parent: <?= $category->parent ?></h2>
      <h2>count: <?= $category->count ?></h2>
      <h2>filter: <?= $category->filter ?></h2>
      <h2>cat_ID: <?= $category->cat_ID ?></h2>
      <h2>category_count: <?= $category->category_count ?></h2>
      <h2>category_description: <?= $category->category_description ?></h2>
      <h2>cat_name: <?= $category->cat_name ?></h2>
      <h2>category_nicename: <?= $category->category_nicename ?></h2>
      <h2>category_parent: <?= $category->category_parent ?></h2>
      <a class="category__back" href="<?= site_url('works') ?>">Back to Works</a>
    </div>
  </section>
</main>

<?php
get_footer();
?>
