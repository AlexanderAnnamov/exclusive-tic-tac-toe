export const lottieOptions = (autoplay: boolean): {
    loop: boolean, autoplay: boolean, style: React.CSSProperties
} => ({
    loop: false,
    autoplay,
    style: { position: 'absolute', width: '100%', height: '100%' },
})