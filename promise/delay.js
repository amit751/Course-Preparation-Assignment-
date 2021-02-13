

function delay(ms) {
    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve(), ms);
    });
    return promise;
}

delay(3000).then(() => alert('runs after 3 seconds'));