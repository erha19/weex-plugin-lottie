<template>
  <scroller>
		<div class="btn-group">
			<text class='button' @click='play'>Play</text>
			<text class='button' @click='pause'>Pause</text>
			<text class='button' @click='reset'>Reset</text>
    </div>
    <div class="row">
      <lottie src='http://192.168.1.107:8082/web/examples/animations/LottieWalkthrough.json' loop=true style='flex:1;height:300px'  ref='lottie'></lottie>
	    <lottie src='http://192.168.1.107:8082/web/examples/animations/MotionCorpse-Jrcanest.json' loop=true style='flex:1;height:300px'  ref='lottie1'></lottie>
    </div>
    <div class="row">
      <lottie src='http://192.168.1.107:8082/web/examples/animations/LineAnimation.json' loop=true style='flex:1;height:300px'  ref='lottie2'></lottie>
	    <lottie src='http://192.168.1.107:8082/web/examples/animations/TwitterHeart.json' loop=true style='flex:1;height:300px'  ref='lottie3'></lottie>
    </div>
    <div class="row">
      <lottie src='http://192.168.1.107:8082/web/examples/animations/9squares-AlBoardman.json' loop=true style='flex:1;height:300px'  ref='lottie4'></lottie>
	    <lottie src='http://192.168.1.107:8082/web/examples/animations/LottieLogo1.json' loop=true style='flex:1;height:300px'  ref='lottie5'></lottie>
    </div>
      <div class="row">
      <lottie src='http://192.168.1.107:8082/web/examples/animations/HamburgerArrow.json' loop=true style='flex:1;height:300px'  ref='lottie6'></lottie>
	    <lottie src='http://192.168.1.107:8082/web/examples/animations/Watermelon.json' loop=true style='flex:1;height:300px'  ref='lottie7'></lottie>
    </div>
  </scroller>
</template>
<style scoped>
	.row{
		flex-direction:row
	}
	.btn-group {
    flex-direction: row;
    justify-content: center;
    margin-top: 60px;
  }
  .button {
    width: 200px;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 40px;
    margin-left: 30px;
    margin-right: 30px;
    text-align: center;
    color: #41B883;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
  }
</style>
<script>
  module.exports = {
    data: {
			lottieLists: []
    },
		mounted() {
			this.lottieLists = [
				this.$refs.lottie,
				this.$refs.lottie1,
				this.$refs.lottie2,
				this.$refs.lottie3,
				this.$refs.lottie4,
				this.$refs.lottie5,
				this.$refs.lottie6,
				this.$refs.lottie7
			]
		},
    methods: {
			play () {
				this.lottieLists.forEach(lottie => {
					lottie.play();
				})
			},
			reset () {
				this.lottieLists.forEach(lottie => {
					lottie.reset();
				})
			},
			pause () {
				this.lottieLists.forEach(lottie => {
					lottie.pause();
				})
			}
    }
  }  
</script>