export const fetchMessages = () =>
    fetch('/message')
        .then(res => res.json());

export const postMessage = message =>
    fetch('/message', {
        body: JSON.stringify(message),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        method: 'POST'
    }).then(res => res.json());
