// this uses a recursive setTimeout instead of a setInterval cuz firefox hates those ig
function setToken(token) {
    setTimeout(() => {
        document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`;
        setToken(token);
    }, 25);
}

function login(token) {
    setToken(token);

    setTimeout(() => {
        location.href = '/';
    }, 100);
}

const token = new URLSearchParams(window.location.search).get('token');
if (location.pathname === '/' && token) login(token);