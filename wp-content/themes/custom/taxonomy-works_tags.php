<?php
$tags = get_queried_object();
$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
get_header();
?>

<!--main-site-->
<main class="main-site main-site--hide js-main-site">
  <!--category-->
  <section class="category">
    <div class="container">
      <div class="category__content">
        <h1 class="category__title">Tags: <?= $tags->name ?></h1>
        <ul class="category__data">
          <li>term_id: <?= $tags->term_id ?></li>
          <li>name: <?= $tags->name ?></li>
          <li>slug: <?= $tags->slug ?></li>
          <li>term_group: <?= $tags->term_group ?></li>
          <li>term_taxonomy_id: <?= $tags->term_taxonomy_id ?></li>
          <li>taxonomy: <?= $tags->taxonomy ?></li>
          <li>description: <?= $tags->description ?></li>
          <li>parent: <?= $tags->parent ?></li>
          <li>count: <?= $tags->count ?></li>
          <li>filter: <?= $tags->filter ?></li>
          <li>cat_ID: <?= $tags->cat_ID ?></li>
          <li>category_count: <?= $tags->category_count ?></li>
          <li>category_description: <?= $tags->category_description ?></li>
          <li>cat_name: <?= $tags->cat_name ?></li>
          <li>category_nicename: <?= $tags->category_nicename ?></li>
          <li>category_parent: <?= $tags->category_parent ?></li>
        </ul>
        <?php
          $args = array(
            'post_type' => 'works',
            'posts_per_page' => 12,
            'post_status' => 'publish',
            'orderby' => 'post_date',
            'order' => 'DESC',
            'paged' => $paged,
            'tax_query' => array(
              array(
                'taxonomy' => 'works_tags',
                'field' => 'slug',
                'terms' => $tags->slug,
              ),
            ),
          );
          $query = new WP_Query($args);
        ?>
        <div class="category__list">
          <?php if (!empty($query->have_posts())): ?>
            <?php while ($query->have_posts()) : $query->the_post(); ?>
              <?php
                // --- taxonomy category
                $tax_category = [];
                if (get_the_terms(get_the_ID(), 'works_category')) foreach (get_the_terms(get_the_ID(), 'works_category') as $category):
                  $tax_category[] = $category->name;
                endforeach; 

                // --- taxonomy tags
                $tax_tags = [];
                if (get_the_terms(get_the_ID(), 'works_tags')) foreach (get_the_terms(get_the_ID(), 'works_tags') as $tag):
                  $tax_tags[] = $tag->name;
                endforeach; 
              ?>
              <!--card-primary-->
              <div class="card-primary">
                <div class="card-primary__box">
                  <a class="card-primary__link" href="<?= the_permalink() ?>"><?= get_the_title() ?></a>
                  <figure class="card-primary__img">
                    <img class="card-primary__img__el" src="<?= get_the_post_thumbnail_url() ?>" alt="<?= get_the_title() ?>" />
                  </figure>
                  <h5 class="card-primary__category"><?= implode(',', $tax_category) ?> - <?= get_the_date() ?></h5>
                  <h2 class="card-primary__title"><?= get_the_title() ?></h2>
                  <h5 class="card-primary__tags"><?= implode(', ', $tax_tags) ?></h5>
                  <p class="card-primary__excerpt"><?= get_the_excerpt() ?></p>
                  <div class="card-primary__arrow">
                    <i class="fi fi-arrow-right"></i>
                  </div>
                </div>
              </div>
              <!--/.card-primary-->
            <?php endwhile; ?>
            <?php wp_reset_postdata(); ?>
          <?php endif; ?>
        </div>
        <a class="category__back" href="<?= site_url('works') ?>">Back to Works</a>
      </div>
    </div>
  </section>
</main>

<?php
get_footer();
?>
