<?php
/* Template Name: Works */
?>

<?php
  $paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
  get_header();
?>

<!--main-site-->
<main class="main-site main-site--hide js-main-site">
  <!--section-primary-->
  <section class="section-primary section-primary--news">
    <div class="container">
      <div class="section-primary__content">
        <aside class="section-primary__aside">
          <h1 class="section-primary__title"><?= the_title() ?></h1>
          <ul class="section-primary__category">
          <li><strong>Category</strong></li>
            <?php
            $argsCategory = array(
              'taxonomy' => 'works_category',
              'orderby' => 'name',
              'order'   => 'ASC'
            );
            $cats = get_categories($argsCategory);
            if ($cats) foreach ($cats as $cat): ?>
              <li>
                <a href="<?= get_category_link($cat->term_id) ?>"><?= $cat->name ?></a>
              </li>
            <?php endforeach; ?>
          </ul>
          <ul class="section-primary__tags">
            <li><strong>Tags</strong></li>
            <?php
            $argsTags = array(
              'taxonomy' => 'works_tags',
              'orderby' => 'name',
              'order'   => 'ASC'
            );
            $tags = get_categories($argsTags);
            foreach ($tags as $tag): ?>
              <li>
                <a href="<?= get_category_link($tag->term_id) ?>"><?= $tag->name ?></a>
              </li>
            <?php endforeach; ?>
          </ul>
        </aside>
        <?php
          $args = array(
            'post_type' => 'works',
            'posts_per_page' => 6,
            'post_status' => 'publish',
            'orderby' => 'post_date',
            'order' => 'DESC'
          );
          $query = new WP_Query($args);
        ?>
        <?php if (!empty($query->have_posts())): ?>
          <!--section-primary-list-->
          <div class="section-primary__list" data-length="<?= $query->found_posts ?>">
            <?php while ($query->have_posts()) : $query->the_post(); ?>
            <?php
              // --- taxonomy category
              $tax_category = [];
              if (get_the_terms(get_the_ID(), 'works_category')) foreach (get_the_terms(get_the_ID(), 'works_category') as $category):
                $tax_category[] = $category->name;
              endforeach; 

              // --- taxonomy tags
              $tax_tags = [];
              if (get_the_terms(get_the_ID(), 'works_tags')) foreach (get_the_terms(get_the_ID(), 'works_tags') as $tags):
                $tax_tags[] = $tags->name;
              endforeach; 
            ?>
              <!--card-primary-->
              <div class="card-primary load-hidden">
                <div class="card-primary__box">
                  <a class="card-primary__link" href="<?= the_permalink() ?>"><?= get_the_title() ?></a>
                  <figure class="card-primary__img">
                    <img class="card-primary__img__el" src="<?= get_the_post_thumbnail_url() ?>" alt="<?= get_the_title() ?>" />
                  </figure>
                  <h5 class="card-primary__category"><?= implode(',', $tax_category) ?> - <?= get_the_date() ?></h5>
                  <h2 class="card-primary__title"><?= get_the_title() ?></h2>
                  <h5 class="card-primary__category" style="margin-top: 12px;"><?= implode(', ', $tax_tags) ?></h5>
                  <p><?= get_the_excerpt() ?></p>
                  <div class="card-primary__arrow">
                    <i class="fi fi-arrow-right"></i>
                  </div>
                </div>
              </div>
              <!--/.card-primary-->
            <?php endwhile; ?>
            <?php wp_reset_postdata(); ?>
          </div>
        <?php else: ?>
          <div class="data-not-found">
            <p>No news found</p>
          </div>
        <?php endif; ?>
      </div>
    </div>
  </section>
  <!--/.section-primary-->
</main>
<!--/.main-site-->

<?php
  get_footer();
?>