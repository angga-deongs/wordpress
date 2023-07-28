<div class="card-primary">
  <div class="card-primary__box">
    <a href="#" class="card-primary__link">Read more</a>
    <div class="card-primary__img">
      <img src="<?= get_the_post_thumbnail_url() ?>" alt="thumbnail" class="card-primary__img__el" />
    </div>
    <h2 class="card-primary__ttl"><?= the_title() ?></h2>
    <p><?= the_excerpt() ?></p>
  </div>
</div>