// Configuration for the host we're on
var HostConfig = exports;

HostConfig.endpoint = '/rest';
if (window.location.hostname === 'localhost') {
    HostConfig.endpoint = 'http://localhost:8181/rest';
}
