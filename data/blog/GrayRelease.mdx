---
title: 'Nginx + Lua Gray Release'
date: '2021-09-28'
tags: ['Nginx', 'Lua']
draft: false
summary: 'Nginx + Lua Gray Release'
---

Users please request nginx, nginx judges and judges that when the user needs to clean the version and returns the corresponding version of html

the submission of the judged version is processed by nginx

and the grayscale strategy exists in a certain database or apollo (such as whitelist ip, whitelist list id, percentage value)

Advantage：
    - Simple maintenance without changing the front-end business code

Disadvantages：
    - Need Lua.

```javascript
location  /  {
    rewrite_by_lua_block {
        local function version(uid,my_uuid)
                local res = ngx.location.capture('/xxxx',
                        { args = { unique identifies } }
                )
                if res.body then
                    return string.match(res.body,"%d.%d.%d")
                end
        end
        local function writeUuid()
            if ngx.var.cookie_uuid == nli then
                local uuid = io.open("/proc/sys/kernel/random/uuid", "r"):read()
                ngx.header["Set-Cookie"] = string.format("uuid=%s; Expires=%s;path=%s", uuid, ngx.cookie_time(ngx.time() + 86400 * 1000),"/")
                return uuid
            end
        end
 
        -- main
        if ngx.var.cookie_uuid == nil then
            local sec,ver pcall(version,ngx.var.cookie_uid,writeUuid())
            if sec then
                    ngx.var.docroot = ver
            end
        else
            ver = version(ngx.var.cookie_uid,ngx.var.cookie_uuid)
            ngx.var.docroot = ver
        end
    }
}  
```

Follow-up: Lua's location.capture has compatibility issues with http2

Issue: https://github.com/openresty/lua-nginx-module/issues/1195。

```openstry server needs to be installed https://github.com/ledgetech/lua-resty-http。```

```script
location / {
    rewrite_by_lua_block {
        local function version(uid,my_uuid)
            local httpc = require("resty.http").new()
            local res, err = httpc:request_uri("xxxxx", {
                method = "GET",
                query = { unique identifies },
            })
 
            if res and string.match(res.body,"%d.%d.%d") then
                ngx.var.docroot = string.match(res.body,"%d.%d.%d")
            end
        end
 
        local function writeUuid()
            if ngx.var.cookie_uuid == nli then
                local uuid = io.open("/proc/sys/kernel/random/uuid", "r"):read()
                ngx.header["Set-Cookie"] = string.format("uuid=%s; Expires=%s;path=%s", uuid, ngx.cookie_time(ngx.time() + 86400 * 1000),"/")
                return uuid
            end
        end
 
        -- main
        if ngx.var.cookie_uuid == nil then
            local sec,ver pcall(version,ngx.var.cookie_uid,writeUuid())
            if sec then
                    ngx.var.docroot = ver
            end
        else
            ver = version(ngx.var.cookie_uid,ngx.var.cookie_uuid)
            ngx.var.docroot = ver
        end
    }
     
    ...
}
```