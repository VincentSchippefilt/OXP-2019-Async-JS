// ----------------------------------------------------
function doSomethingAsync() {
    var myPromise = new Promise(function (resolve, reject) {
        $.ajax('...').then(resolve).catch(reject);
    });
    return myPromise;
}

doSomethingAsync().then(doSomethingAfterAsync);
// --- OR ---
await doSomethingAsync();
doSomethingAfterAsync();





