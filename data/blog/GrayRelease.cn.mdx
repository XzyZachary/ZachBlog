---
title: 'Nginx+Lua灰度发布'
date: '2021-09-28'
tags: ['Nginx', 'Lua']
draft: false
summary: 'Nginx+Lua实现灰度发布'
---

用户请求 nginx,nginx 根据灰度策略判断当前用户需要渲染的版本后返回对应版本的 html， 判断版本的逻辑由 nginx 处理，灰度策略存放在某个数据库或者 apollo（比如白名单 ip,白名单 id，百分比值）

优势：
    - 不改动前端业务代码，维护简单

劣势：
    - 改造成本稍大，需要后端或者运维支援、需要使用 lua 语言，可能需要修改构建流程。

```javascript
location  /  {
    rewrite_by_lua_block {
        -- 请求接口返回版本号,请求失败不返回
        local function version(uid,my_uuid)
                local res = ngx.location.capture('/xxxx',
                        { args = { 唯一标识 } }
                )
                if res.body then
                    return string.match(res.body,"%d.%d.%d")
                end
        end
        -- 写入cookie
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

后续：lua的location.capture与http2有兼容问题，详情于 https://github.com/openresty/lua-nginx-module/issues/1195。

```openstry服务器需要安装 https://github.com/ledgetech/lua-resty-http。```

```script
location / {
    rewrite_by_lua_block {
        -- 请求接口返回版本号,请求失败不返回
        local function version(uid,my_uuid)
            local httpc = require("resty.http").new()
            local res, err = httpc:request_uri("xxxxx", {
                method = "GET",
                query = { 唯一标识 },
            })
 
            if res and string.match(res.body,"%d.%d.%d") then
                ngx.var.docroot = string.match(res.body,"%d.%d.%d")
            end
        end
 
        -- 写入cookie
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