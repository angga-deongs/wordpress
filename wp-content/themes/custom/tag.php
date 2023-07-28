<?php
$tag = get_queried_object();
get_header();
?>

<!--main-site-->
<main class="main-site main-site--hide js-main-site">
  <!--category-->
  <section class="category">
    <div class="container">
      <h1>Tag - <?= $tag->name ?></h1>
      <h2>term_id: <?= $tag->term_id ?></h2>
      <h2>name: <?= $tag->name ?></h2>
      <h2>slug: <?= $tag->slug ?></h2>
      <h2>term_group: <?= $tag->term_group ?></h2>
      <h2>term_taxonomy_id: <?= $tag->term_taxonomy_id ?></h2>
      <h2>taxonomy: <?= $tag->taxonomy ?></h2>
      <h2>description: <?= $tag->description ?></h2>
      <h2>parent: <?= $tag->parent ?></h2>
      <h2>count: <?= $tag->count ?></h2>
      <h2>filter: <?= $tag->filter ?></h2>
      <h2>cat_ID: <?= $tag->cat_ID ?></h2>
      <h2>category_count: <?= $tag->category_count ?></h2>
      <h2>category_description: <?= $tag->category_description ?></h2>
      <h2>cat_name: <?= $tag->cat_name ?></h2>
      <h2>category_nicename: <?= $tag->category_nicename ?></h2>
      <h2>category_parent: <?= $tag->category_parent ?></h2>
      <a class="category__back" href="<?= site_url('news') ?>">Back to News</a>
    </div>
  </section>
</main>

<?php
get_footer();
?>
