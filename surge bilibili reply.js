/**
 * @supported 8E5B14F73C92
 */
let body = $response.body
body=JSON.parse(body)
delete body['data']['notice']
body=JSON.stringify(body)
$done({body})
