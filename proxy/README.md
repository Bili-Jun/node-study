# http proxy

反向代理

## usage

start main server.

```shell
# port: 80
$ node server.js
```

start test1 server.

```
# port: 9999
# host: chaos.test.com
$ node test1.js
```

start test2 server.

```
# port: 8888
# host: aaaa.test.com
$ node test2.js
```

add test1/test2 host in your system hosts.

```config
127.0.0.1 chaos.test.com aaaa.test.com
```