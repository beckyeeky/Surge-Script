/**
 * @supported 8E5B14F73C92
 */
let body = $response.body
body=JSON.parse(body)
body['data']['status']='OPEN'
body['data']['message']=null
body=JSON.stringify(body)
$done({body})
