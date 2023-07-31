<?php
  get_header();
?>

<!--main-site-->
<main class="main-site main-site--hide js-main-site">
  <!--article-->
  <article class="article">
    <div class="container">
      <div class="article__wrapper">
        <div class="article__content">
          <figure class="article__banner load-hidden">
            <img class="article__banner__el" src="<?= get_the_post_thumbnail_url() ?>" alt="<?= get_the_title() ?>" />
          </figure>
          <h5 class="article__page load-hidden">news</h5>
          <h1 class="article__title load-hidden"><?= get_the_title() ?></h1>
          <h2 class="article__date load-hidden"><?= get_the_date('j F Y') ?></h2>
          <h2 class="article__date load-hidden">Category:</h2>
          <ul class="article__date load-hidden">
            <?php
              $categories = get_categories($post->ID);
              if ($categories) foreach ($categories as $category): ?>
                <li>
                  <a href="<?= get_category_link($category->term_id) ?>"><?= $category->name ?></a>
                </li>
            <?php endforeach; ?>
          </ul>
          <h2 class="article__date load-hidden">Tags:</h2>
          <ul class="article__date load-hidden">
            <?php
              $tags = get_the_tags($post->ID);
              if ($tags) foreach ($tags as $tag): ?>
                <li>
                  <a href="<?= get_category_link($tag->term_id) ?>"><?= $tag->name ?></a>
                </li>
            <?php endforeach; ?>
          </ul>
          <div class="article__desc load-hidden">
            <?= the_content() ?>
          </div>
          <div class="article__pagination load-hidden">
          <nav id="nav-single">
            <?php
              $prev_post = get_previous_post(); 
              $id = $prev_post->ID ;
              $permalink = get_permalink( $id );
            ?>
            <?php 
              $next_post = get_next_post();
              $nid = $next_post->ID ;
              $permalink = get_permalink($nid);
            ?>
            <span class="nav-previous"><?php previous_post_link( '%link', __( '<span class="meta-nav">&larr;</span> Previous ', 'twentyeleven' ) ); ?> </span>
            <span class="nav-next"><?php next_post_link( '%link', __( 'Next <span class="meta-nav">&rarr;</span> ', 'twentyeleven' ) ); ?></span>
          </nav>
        </div>
      </div>
    </div>
  </article>
  <!--/.article-->
</main>
<!--/.main-site-->

<?php
  get_footer();
?>