// (function(o,l) {
//     window.oliviaChatData = window.oliviaChatData || [];
//     window.oliviaChatBaseUrl = o;
//     window.oliviaChatData.push(['setKey', l]);
//     window.oliviaChatData.push(['start']);
//     var apply = document.createElement('script');
//     apply.type = 'text/javascript';
//     apply.async = true;
//     apply.src = 'https://d2cxf26suf1qae.cloudfront.net/static/site/js/widget-client.js';
//     var s = document.getElementsByTagName('script')[0];
//     s.parentNode.insertBefore(apply, s);
// })('https://test.paradox.ai', 'rtqiilmraytoplizfwzj');

(function(o,l) {
    window.oliviaChatData = window.oliviaChatData || [];
    window.oliviaChatBaseUrl = o;
    window.oliviaChatData.push(['setKey', l]);
    window.oliviaChatData.push(['setParent', 'my-chat-widget']);
    window.oliviaChatData.push(['start']);
    var apply = document.createElement('script');
    apply.type = 'text/javascript';
    apply.async = true;
    apply.src = 'https://d2cxf26suf1qae.cloudfront.net/static/site/js/widget-client.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(apply, s);
})('https://test.paradox.ai', 'yloojrnubvjolyrpmqlj');