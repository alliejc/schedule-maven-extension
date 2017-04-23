const ddp = require('ddp.js');

document.addEventListener('DOMContentLoaded', function () {
    chrome.contextMenus.create({
        id: "myContextMenu",
        title: "Save w/ Schedule Maven",
        contexts: ["image"],
    });

    chrome.contextMenus.onClicked.addListener((info, tab) => {
        storeLocal(info, tab);
    });

    chrome.browserAction.onClicked.addListener(function(tab) {
        const myBtn = document.getElementById('pinterestButton');

        //add event listener
        myBtn.addEventListener('click', function (event) {
            console.log('clicked');

        });
    });

});


storeLocal = (info, tab) => {
    const image = info.srcUrl;
    const link = info.linkUrl;
    const originalLink = info.pageUrl;

    if (tab) {
        if (typeof image) {
            chrome.storage.local.set({
                'image': image,
                'link': link,
                'originalLink': originalLink
            }, function (items) {
                console.log('Settings saved');
                // ddp.method("storeExternalPinItem", [items], function(err,data){
                //         console.log('called','storeExternalPinItem',err,data);
                //     });
            });
        }
    }
};
