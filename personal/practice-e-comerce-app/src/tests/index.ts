const wrapWithDev = (name:string) => __DEV__ ? name:''
export default {
    longText: wrapWithDev('lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod'),
    longWord: wrapWithDev('abababababababbabakjshdkjsadhsakdaslkdjsaldksajdlkasdjlksajdlas asdlasdj laskdsjalkdjaslk jasdlkj al'),
    shortText: wrapWithDev('Welcome back')
}