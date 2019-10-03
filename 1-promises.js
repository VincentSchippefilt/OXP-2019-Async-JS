// The Long ----------------------------------------------

function doSomethingAsync() {
    var myPromise = new Promise(functionThatWillRunAsync);
    return myPromise;
}

function functionThatWillRunAsync(resolve, reject) {
    $.ajax('...').then(function () { resolve() })
        .catch(function () { reject() });
}

// The shorter -------------------------------------------

function doSomethingAsync() {
    var myPromise = new Promise(function (resolve, reject) {
        $.ajax('...').then(resolve).catch(reject);
    });
    return myPromise;
}

// The shortest ------------------------------------------

async function doSomethingAsync() {
    await $.ajax('...');
}




