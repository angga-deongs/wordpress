<?php
$tags = get_queried_object();
get_header();
?>

<!--main-site-->
<main class="main-site main-site--hide js-main-site">
  <!--category-->
  <section class="category">
    <div class="container">
      <h1>Tags - <?= $tags->name ?></h1>
      <h2>term_id: <?= $tags->term_id ?></h2>
      <h2>name: <?= $tags->name ?></h2>
      <h2>slug: <?= $tags->slug ?></h2>
      <h2>term_group: <?= $tags->term_group ?></h2>
      <h2>term_taxonomy_id: <?= $tags->term_taxonomy_id ?></h2>
      <h2>taxonomy: <?= $tags->taxonomy ?></h2>
      <h2>description: <?= $tags->description ?></h2>
      <h2>parent: <?= $tags->parent ?></h2>
      <h2>count: <?= $tags->count ?></h2>
      <h2>filter: <?= $tags->filter ?></h2>
      <h2>cat_ID: <?= $tags->cat_ID ?></h2>
      <h2>category_count: <?= $tags->category_count ?></h2>
      <h2>category_description: <?= $tags->category_description ?></h2>
      <h2>cat_name: <?= $tags->cat_name ?></h2>
      <h2>category_nicename: <?= $tags->category_nicename ?></h2>
      <h2>category_parent: <?= $tags->category_parent ?></h2>
      <a class="category__back" href="<?= site_url('works') ?>">Back to Works</a>
    </div>
  </section>
</main>

<?php
get_footer();
?>
