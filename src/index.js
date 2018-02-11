const lottieWeb = require('lottie-web');
let extractComponentStyle;
const lottie = {
  // mixins: [slideMixin],
  props: {
    src: {
      type: [String],
      default: ''
    },
    loop: {
      type: [String],
      default: 'true'
    }
  },
  data  () {
    return {
      lottieCrtl: null
    };
  },
  mounted () {
    this.lottieCrtl = lottieWeb.loadAnimation({
      container: this.$el, // the dom element that will contain the animation
      renderer: 'svg',
      loop: this.transformBoolean(this.loop),
      autoplay: true,
      path: this.src // the path to the animation json
    });
  },
  methods: {
    transformBoolean (value) {
      if (typeof value === 'boolean') {
        return value;
      }
      else if (value === 'false') {
        return false;
      }
      return true;
    },
    play () {
      this.lottieCrtl.play();
    },
    reset () {
      this.lottieCrtl.stop();
    },
    stop () {
      this.lottieCrtl.stop();
    },
    pause () {
      this.lottieCrtl.pause();
    },
    destroy () {
      this.lottieCrtl.destroy();
    },
    setLocationHref (href) {
      this.lottieCrtl.setLocationHref(href);
    },
    setSpeed (speed) {
      this.lottieCrtl.setSpeed(speed);
    },
    goToAndStop (value, isFrame) {
      this.lottieCrtl.goToAndStop(value, isFrame);
    },
    setDirection (direction) {
      this.lottieCrtl.setDirection(direction);
    },
    playSegments (segments, forceFlag) {
      this.lottieCrtl.playSegments(segments, forceFlag);
    },
    setSubframe (useSubFrames) {
      this.lottieCrtl.setSubframe(useSubFrames);
    }
  },
  render (createElement) {
    return createElement('html:figure', {
      attrs: {
        'weex-type': 'lottie'
      },
      staticClass: 'weex-lottie weex-el',
      staticStyle: extractComponentStyle(this)
    });
  }
};
export default {
  init (weex) {
    extractComponentStyle = weex.extractComponentStyle;
    weex.registerComponent('lottie', lottie);
  }
};
