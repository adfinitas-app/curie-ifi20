<section class="timeline hidden md:block absolute top-[28rem] 2xl:top-[33rem]">
        <p class="font-Raleway text-center font-black text-[#FF6600] lg:text-2xl 2xl:text-4xl uppercase">
            CALENDRIER de déclaration FISCALE <span class="font-Lato">2025</span>
        </p>
    <img src="/timeline.png" width="900" />
</section>

<style lang="scss">
  $title-background: #3d9e67;
  $content-background-color: white;
  $time-color: #fff;
  $text-color: #fff;
  $content-width: 20rem;

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .timeline{
    color: $text-color;

    h1,

    ul{
      background: white;
      padding: 50px 0;

      li{
        background-color: #fc6601;
        position: relative;
        margin: 0 auto;
        width: 5px;
        padding-bottom: 40px;
        list-style-type: none;
        border-radius: 0px;
        color: black;
        box-shadow: 0px 6px 40px rgba(0, 0, 0, 0.16);

        &:last-child{
          padding-bottom: 7px;
        }

        &:before{
          content: '';
          background: #FF6600;
          position: absolute;
          left: 50%;
          top: 2rem;
          transform: translateX(-50%) rotate(45deg);
          -webkit-transform: translateX(-50%) rotate(45deg);
          width: 20px;
          height: 20px;
          border: 3px solid white;
        }

        .content{
          background: white;
          position: relative;
          top: 7px;
          width: $content-width;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0px 6px 40px rgba(0, 0, 0, 0.16);

          p{
            text-align: center;
          }

          &:before{
            content: '';
            background: #FF6600;
            position: absolute;
            top: 2rem;
            width: 100px;
            height: 5px;
            border-radius: 20px;
          }
        }

        &:nth-child(odd) .content {
          left: 50px;
          background: $content-background-color;
        }

        &:nth-child(odd) .content:before {
          left: -38px;
        }

        &:nth-child(even) .content {
          left: calc(-#{$content-width} - 45px);
          background: $content-background-color;
        }

        &:nth-child(even) .content:before {
          right: -38px;
        }
      }
    }
  }

  /* -------------------------
     ----- Media Queries -----
     ------------------------- */

  @media screen and (max-width: 1020px) {
    .timeline ul li .content {
      width: 41vw;
    }
    .timeline ul li:nth-child(even) .content {
      left: calc(-41vw - 45px);
    }
  }
</style>
