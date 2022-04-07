<template>
  <div class="wrap">
    <Navigation />
    <main class="result2-area">
      <section>
        <h1 class="title">애터미 PV에 관하여</h1>
        <hr />
        <p>
          PV는 <b>Point Vaule</b> 약자이며 애터미 쇼핑몰에서 제품 구매 시,
          누적되는 포인트입니다.
        </p>
        <p>
          일반 오프라인 매장과 온라인 쇼핑몰에서 구매하시던 상품을 애터미
          쇼핑몰에서 구입하신다면 PV 누적을 통해 더 많은 혜택을 누릴 수
          있습니다.
        </p>
        <p>
          애터미 쇼핑몰을 통해 본인 누적 30만 PV 이상 달성하시면 캐쉬백을 받을
          수 있는 조건이 주어집니다.
        </p>
        <p>&nbsp;</p>
        <p>
          선택한 제품을 꾸준히 구매하실 경우?<br />
          연 소비 금액: 약 <em>{{ formatter.toPrice(amount) }}</em
          >원
          <small>
            (월 평균 <em>{{ formatter.toPrice(Math.round(amount / 12)) }}</em
            >원)
          </small>
          <br />
          연 누적 포인트(PV): 약 <em>{{ formatter.toPrice(pv) }}</em
          > PV
        </p>
        <p>
          캐쉬백 횟수: 약 <em>{{ pbc }}</em
          >회 <small>(최소)</small><br />총 캐쉬백 금액: 약
          <em>{{ formatter.toPrice(pba) }}</em
          >원
        </p>
        <div class="img_wrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="245"
            height="227"
            viewBox="0 0 245 227"
          >
            <defs>
              <clipPath id="clip-path">
                <circle
                  id="타원_75"
                  data-name="타원 75"
                  cx="50"
                  cy="50"
                  r="50"
                  transform="translate(107 662)"
                  fill="#fff"
                  stroke="#707070"
                  stroke-width="1"
                />
              </clipPath>
            </defs>
            <g
              id="마스크_그룹_2"
              data-name="마스크 그룹 2"
              transform="translate(-34 -662)"
              clip-path="url(#clip-path)"
            >
              <g
                id="그룹_2611"
                data-name="그룹 2611"
                transform="translate(108 673.877)"
              >
                <path
                  id="패스_5362"
                  data-name="패스 5362"
                  d="M383.084,205.708c6.175-20.574,4.954-37.99,6.115-43.318L373.367,184.5a194.584,194.584,0,0,1-3.239,21.7c-1.826,7.86-4.319,17.658-7.305,23.753a4.924,4.924,0,0,1-2.573,2.351c-3.027,1.221-4.379,2.765-6.771,4.541-1.877,1.382-3.3,1.564-3.189,2.129a2.664,2.664,0,0,0,3.148,1.725,18.656,18.656,0,0,0,4.177-1.413,24.526,24.526,0,0,1-5.045,6.054c-4.581,3.976-5.237,6.791,2.371,8.173,4.773.878,9.081-1.413,14.52-11.321a86.862,86.862,0,0,0,5.409-11.241C378.473,220.884,381.217,211.924,383.084,205.708Z"
                  transform="translate(-349.162 -107.616)"
                  fill="#ffa8a7"
                />
                <path
                  id="패스_5363"
                  data-name="패스 5363"
                  d="M390.281,157.32c-4.914.868-9.768,2.018-12.785,6.74s-7.376,27.012-7.376,27.012,6.337,4.45,13.6,4.258Z"
                  transform="translate(-348.973 -107.662)"
                  fill="#e0e0e0"
                />
                <path
                  id="패스_5364"
                  data-name="패스 5364"
                  d="M423.715,165.54c3.3,2.341,20.706,41.653,21.372,44.4.888,3.723.484,7.9-1.342,9.243s-5.852-.585-7.961-2.644c-4.036-4.036-18.213-33.43-18.213-33.43Z"
                  transform="translate(-348.544 -107.588)"
                  fill="#f28f8f"
                />
                <path
                  id="패스_5365"
                  data-name="패스 5365"
                  d="M406.949,157.313c8.022,1.937,18.163,5.176,21.755,12.563s9.081,19.374,9.081,19.374A32.553,32.553,0,0,1,424.5,197.1l-4.036-7.063.6,37.284c-6.508,4.743-30.413,7.316-44.115-2.684,0,0,1.685-44.771,1.685-51.734s3.865-15.337,14.56-15.963Z"
                  transform="translate(-348.911 -107.665)"
                  fill="#f0f0f0"
                />
                <path
                  id="패스_5366"
                  data-name="패스 5366"
                  d="M420.044,189.788s-4.036-6.983-4.894-8.658l5.045,17.154Z"
                  transform="translate(-348.566 -107.447)"
                  fill="#e0e0e0"
                />
                <path
                  id="패스_5370"
                  data-name="패스 5370"
                  d="M409.672,122a4.753,4.753,0,0,1,3.945,1.382c1.7,1.736,1.342,4.944,0,12.31l-5.237.605Z"
                  transform="translate(-348.627 -107.982)"
                  fill="#263238"
                />
                <path
                  id="패스_5371"
                  data-name="패스 5371"
                  d="M379.454,119.868a8.225,8.225,0,0,1-3.28-.666c-1.6-.928-2.018.9-1.15,2.482a7.467,7.467,0,0,0,6.054,4.036c0-.222,1.5-4.036,1.5-4.036Z"
                  transform="translate(-348.932 -108.009)"
                  fill="#263238"
                />
                <path
                  id="패스_5372"
                  data-name="패스 5372"
                  d="M407.478,136.321c.777.464,1.887-1.009,2.846-2.018s4.087-2.381,5.641.908-2.018,7.81-4.137,9.283c-2.523,1.756-4.349.383-4.349.383l-.555,12.815s-2.785,6.8-10.312,7.82-5.974-5.176-3.5-8.224v-4.662s-3.885.767-5.721.293a8.446,8.446,0,0,1-5.58-5.731,45.548,45.548,0,0,1-1.261-21.1c1.917-11.634,15.035-11.826,22.381-7.2S407.478,136.321,407.478,136.321Z"
                  transform="translate(-348.885 -108.035)"
                  fill="#ffa8a7"
                />
                <path
                  id="패스_5373"
                  data-name="패스 5373"
                  d="M407.5,137.705c.383,0,1.877-2.462,2.845-3.34,1.342-1.221-.393-12.27-.393-12.27s1.362-4.187-1.292-6.972-7.79-2.311-11.543-2.442a33.683,33.683,0,0,1-13.42-2.694c-5.328-2.321-5.731-2.593-6.4-.252s-.908,7.709,2.28,11.3l2.644,1.009s1.433,1.261,6.407,1.867a72.883,72.883,0,0,0,13.774-.262c1.443-.192,1.756,1.2,2.533,5.045C405.617,131.994,406.183,137.675,407.5,137.705Z"
                  transform="translate(-348.912 -108.107)"
                  fill="#263238"
                />
                <path
                  id="패스_5374"
                  data-name="패스 5374"
                  d="M409.653,122.856l4.7-2.523a2.593,2.593,0,0,0-3.552-1.181A2.805,2.805,0,0,0,409.653,122.856Z"
                  transform="translate(-348.618 -108.01)"
                  fill="#263238"
                />
                <path
                  id="패스_5375"
                  data-name="패스 5375"
                  d="M393,152.344s6.972-1.4,9.4-2.694a7.992,7.992,0,0,0,3.37-3.34,10.94,10.94,0,0,1-1.917,3.935C402.081,152.526,393,154.2,393,154.2Z"
                  transform="translate(-348.766 -107.762)"
                  fill="#f28f8f"
                />
                <g class="eyes">
                  <path
                    id="패스_5376"
                    data-name="패스 5376"
                    d="M394.65,134.193a1.4,1.4,0,1,0,1.4-1.453,1.423,1.423,0,0,0-1.4,1.453Z"
                    transform="translate(-348.751 -107.884)"
                    fill="#263238"
                  />
                </g>
                <path
                  id="패스_5377"
                  data-name="패스 5377"
                  d="M396.37,128.458l3.027,1.655a1.786,1.786,0,0,0-.7-2.381,1.665,1.665,0,0,0-2.331.726Z"
                  transform="translate(-348.736 -107.931)"
                  fill="#263238"
                />
                <path
                  id="패스_5378"
                  data-name="패스 5378"
                  d="M394.789,143.8l-3.189,1.211a1.675,1.675,0,0,0,2.169,1.06,1.776,1.776,0,0,0,1.019-2.27Z"
                  transform="translate(-348.779 -107.784)"
                  fill="#f28f8f"
                />
                <path
                  id="패스_5379"
                  data-name="패스 5379"
                  d="M381.673,130.455l2.725-2.1a1.645,1.645,0,0,0-2.391-.353A1.806,1.806,0,0,0,381.673,130.455Z"
                  transform="translate(-348.872 -107.93)"
                  fill="#263238"
                />
                <g class="eyes">
                  <path
                    id="패스_5380"
                    data-name="패스 5380"
                    d="M383.22,133.8a1.4,1.4,0,1,0,1.393-1.453A1.433,1.433,0,0,0,383.22,133.8Z"
                    transform="translate(-348.855 -107.888)"
                    fill="#263238"
                  />
                </g>
                <path
                  id="패스_5381"
                  data-name="패스 5381"
                  d="M390.833,132.71l-.464,8.4-4.379-1.493Z"
                  transform="translate(-348.829 -107.884)"
                  fill="#f28f8f"
                />
              </g>
            </g>
            <g
              id="타원_76"
              data-name="타원 76"
              transform="translate(0 127)"
              fill="#fff"
              stroke="#707070"
              stroke-width="3"
            >
              <circle cx="50" cy="50" r="50" stroke="none" />
              <circle cx="50" cy="50" r="48.5" fill="none" />
            </g>

            <g
              id="타원_78"
              data-name="타원 78"
              transform="translate(73)"
              fill="none"
              stroke="#707070"
              stroke-width="3"
            >
              <circle cx="50" cy="50" r="50" stroke="none" />
              <circle cx="50" cy="50" r="48.5" fill="none" />
            </g>

            <g
              id="타원_77"
              data-name="타원 77"
              transform="translate(145 127)"
              fill="#fff"
              stroke="#707070"
              stroke-width="3"
            >
              <circle cx="50" cy="50" r="50" stroke="none" />
              <circle cx="50" cy="50" r="48.5" fill="none" />
            </g>
            <line
              id="선_6"
              data-name="선 6"
              y1="39"
              x2="35"
              transform="translate(62.5 91.5)"
              fill="none"
              stroke="#707070"
              stroke-width="2"
            />
            <line
              id="선_7"
              data-name="선 7"
              x1="29"
              y1="39"
              transform="translate(149.5 91.5)"
              fill="none"
              stroke="#707070"
              stroke-width="2"
            />
            <text
              id="_"
              data-name="?"
              transform="translate(38 195)"
              fill="#414141"
              font-size="50"
              font-family="NotoSansCJKkr-Medium, Noto Sans CJK KR"
              font-weight="500"
              letter-spacing="0.1em"
            >
              <tspan x="0" y="0">?</tspan>
            </text>
            <text
              id="_2"
              data-name="?"
              transform="translate(183 195)"
              fill="#414141"
              font-size="50"
              font-family="NotoSansCJKkr-Medium, Noto Sans CJK KR"
              font-weight="500"
              letter-spacing="0.1em"
            >
              <tspan x="0" y="0">?</tspan>
            </text>
            <g
              id="그룹_2612"
              data-name="그룹 2612"
              transform="translate(-25 -144)"
            >
              <g
                id="그룹_2279"
                data-name="그룹 2279"
                transform="translate(-72 -158)"
              >
                <text
                  id="_30만_PV"
                  data-name="30만 PV"
                  transform="translate(187 381)"
                  font-size="16"
                  font-family="NotoSansCJKkr-Bold, Noto Sans CJK KR"
                  font-weight="700"
                  letter-spacing="0.1em"
                >
                  <tspan x="0" y="0">30만 PV</tspan>
                </text>
              </g>
            </g>
          </svg>
          <p><strong>소비만해도 소득이 되는 애터미!</strong></p>
        </div>

        <router-link to="/result3">
          <FixedBtn msg="캐쉬백 알아보기" />
        </router-link>
      </section>
    </main>
  </div>
</template>

<script>
import Navigation from "@/components/Layout/Navigation.vue";
import FixedBtn from "@/components/Layout/FixedBtn.vue";
import useFormatter from "@/composables/api/utils/formatter";

export default {
  name: "Result2",
  computed: {},
  methods: {},
  components: {
    Navigation,
    FixedBtn,
  },
  props: {
    amount: [Number, String],
    pv: [Number, String],
    pbc: [Number, String],
    pba: [Number, String],
  },
  setup() {
    const formatter = useFormatter();

    return {
      formatter,
    };
  },
};
</script>

<style lang="scss" scoped>
.img_wrap {
  text-align: center;
  margin-top: 50px;

  p {
    margin-top: 50px;
    font-size: 20px;
  }
}
.result2-area {
  padding: 0 20px 80px;
  line-height: 1.4;

  p {
    margin-bottom: 1rem;
  }
}
.calculation {
  text-align: center;
  margin-bottom: 2rem;

  &__btn {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    line-height: 1;
    margin: 0 20px;
    font-size: 20px;
    position: relative;

    i {
      color: #333;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &__count {
    font-size: 30px;
    display: inline-block;
    vertical-align: middle;
    padding-top: 10px;
    width: 50px;
  }
}

.eyes {
  position: relative;
  display: inline-block;
  max-height: 0;
  animation: blink 3s ease-in infinite;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  60% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
  85% {
    opacity: 1;
  }
}
</style>
