function doRequest(url: string, method: 'GET' | 'POST') {
    // .....
}

/*
type Methods = 'GET' | 'POST';

let url = 'https://google.com.br';
let method: Methods = 'GET';

doRequest(url, method);
*/

type RequestDetails = {
    url: string,
    method: 'GET' | 'POST'
};

let req: RequestDetails = {
    url: 'https://google.com.br',
    method: 'GET'
};

doRequest(req.url, req.method);