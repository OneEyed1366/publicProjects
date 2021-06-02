<template>
  <section id="about" class="content">
    <div class="content__video"><iframe src="" frameborder="0"></iframe></div>
    <div class="content__title">
      <h3>About IPool</h3>
    </div>
    <div class="content__text">
      <h6>
        We will help you select a pool that's (bold) right for your needs (bold) and your
        budget. Choose from hundreds of proven designs, or, if you wish, we'll design a pool
        that's as unique as ypu are. With special attention to detail, iPool will create a
        sparkling new wnvironment in your onw backyard with special landscaping, cabanas,
        gazebos, fontains, spas and hot tubs, fences, walkways, and numerous other options.
        We'll show you hot to (bold)plan your pool(bold)for maximum enjoyment, making the
        best use of available sunlight, existing foliage and natural windbreaks, and
        tastefully integrate pool design with the architecture of yout home.
      </h6>
    </div>
    <div class="content__btn">
      <button>
        <h6>Learn more</h6>
      </button>
    </div>
  </section>
</template>

<style lang="scss">
#about {
  display: grid;
  grid:
    "video title"
    "video text"
    "video btn" / 1fr 1fr;
  gap: 2vmax;
  padding: 2vmax 0;
  @media (max-width: $md) {
    grid:
      "video"
      "title"
      "text"
      "btn";
    text-align: center;
  }
  @include arrow(
    '../../assets/img/arrow-bottom-white.png',
    $pos: bottom,
    $a-color: $colors--main,
  );
  .content {
    &__title, &__btn {
      text-transform: uppercase;
    }
    &__video {
      grid-area: video;
    }
    &__title {
      grid-area: title;
    }
    &__text {
      grid-area: text;
    }
    &__btn {
      grid-area: btn;
    }
  }
}
</style>
