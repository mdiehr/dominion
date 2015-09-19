// API Utilities to reduce boilerplate
import reqwest from 'reqwest';
import HostConfig from '../config/HostConfig.js';

var ApiUtils = exports;
ApiUtils.endpoint = HostConfig.endpoint;

ApiUtils.get = function(resource, onSuccess, onFailure) {
    var url = this.endpoint + resource + (HostConfig.useMockEndpoint ? '.json' : '');
    console.info(url);

    var headers = {
        'Accept': 'application/json; charset=UTF-8',
        'sessionId': localStorage.getItem('sessionId')
    };

    reqwest({
        url: encodeURI(url),
        method: 'get',
        type: 'json',
        contentType : 'application/json',
        crossOrigin: true,
        headers: headers,
        success: (response) => {
            if (onSuccess) {
                onSuccess(response);
            }
        },
        error: response => {
            console.error(response);
            if (onFailure) {
                onFailure(response);
            }
        }
    });
};

ApiUtils.postJson = function (resource, data, onSuccess, onFailure) {
    var url = this.endpoint + resource;

    var headers = {
        'Accept': 'application/json; charset=UTF-8',
        'sessionId': localStorage.getItem('sessionId')
    };

    reqwest({
        url: encodeURI(url),
        method: 'post',
        data: JSON.stringify(data),
        type: 'json',
        contentType : 'application/json',
        crossOrigin: true,
        headers: headers,
        success: response => {
            onSuccess(response);
        },
        error: response => {
            console.error(response);
            onFailure(response);
        }
    });
};
