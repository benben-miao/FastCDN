// Adding listener to chrome before web requests and replacing them.
chrome.webRequest.onBeforeRequest.addListener(
    function(request) {
        var url = request.url.replace('http://', 'https://')
        // fonts.googleapis.com -> fonts.lug.ustc.edu.cn
        // ajax.googleapis.com -> ajax.lug.ustc.edu.cn
        url = url.replace('googleapis.com', 'proxy.ustclug.org');
        // themes.googleusercontent.com -> google-themes.lug.ustc.edu.cn
        url = url.replace('themes.googleusercontent.com', 'google-themes.lug.ustc.edu.cn');
        // www.google.com/recaptcha/ -> www.recaptcha.net/recaptcha/
        url = url.replace('www.google.com/recaptcha/','www.recaptcha.net/recaptcha/');
        // fonts.gstatic.com -> fonts-gstatic.lug.ustc.edu.cn
        url = url.replace('fonts.gstatic.com','fonts-gstatic.lug.ustc.edu.cn');
        // use.fontawesome.com -> cdn.bootcdn.net/ajax/libs/font-awesome/5.15.1/css or cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css
        url = url.replace(/use.fontawesome.com\/releases\/\S\d\.\d\.\d\/css/,"cdn.bootcdn.net/ajax/libs/font-awesome/5.15.1/css");
        return {redirectUrl: url};
    },
    {
        urls: [
            "*://ajax.googleapis.com/*",
            "*://themes.googleusercontent.com/*",
            "*://www.google.com/recaptcha/*",
            "*://fonts.gstatic.com/*",
            "*://use.fontawesome.com/*"
        ]
    },
    ["blocking"]
);
