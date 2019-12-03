/**
 * @supported 8E5B14F73C92
 */
let body = $response.body
body=JSON.parse(body)
body['response']['user']['is_premium']=true
body=JSON.stringify(body)
$done({body})
