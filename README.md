# weex-plugin-lottie

This is a weex component extend by [lottie-web](https://github.com/airbnb/lottie-web).

Require `weex` version >= 0.16.0

![weex-plugin-lottie](https://img.alicdn.com/tfs/TB1kHFlantYBeNjy1XdXXXXyVXa-297-498.gif)

## Install

```
# with npm
$ npm i weex-plugin-lottie --save
# with weex-toolkit
$ weex plugin add weex-plugin-lottie
```

## Usage

Examples: [examples](./examples/index.vue)

Animation instances have these main methods:

### #play

### #stop

### #pause

### #setLocationHref(href)
- `href`: usually pass as `location.href`. Its useful when you experience mask issue in safari where your url does not have `#` symbol.

### #setSpeed(speed)
- `speed`: 1 is normal speed.

### #goToAndStop(value, isFrame)
- `value`: numeric value.
- `isFrame`: defines if first argument is a time based value or a frame based (default false).

### #goToAndPlay(value, isFrame)
- `value`: numeric value.
- `isFrame`: defines if first argument is a time based value or a frame based (default false).

### #setDirection(direction)
- `direction`: 1 is forward, -1 is reverse.

### #playSegments(segments, forceFlag)
- `segments`: array. Can contain 2 numeric values that will be used as first and last frame of the animation. Or can contain a sequence of arrays each with 2 numeric values.
- `forceFlag`: boolean. If set to false, it will wait until the current segment is complete. If true, it will update values immediately.

### #setSubframe(useSubFrames)
- `useSubFrames`:  If false, it will respect the original AE fps. If true, it will update on every requestAnimationFrame with intermediate values. Default is true.

### #destroy()
