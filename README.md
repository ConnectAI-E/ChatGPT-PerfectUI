<p align='center'>
   🚧 项目正在施工...  🚧
</p>
<p align='center'>
    <img src='https://user-images.githubusercontent.com/50035229/227083599-5b674cab-f780-485f-863c-e29d87437ea7.png' alt='' width='800'/>
</p>
<br>
<p align='center'>
	Vue3 + Vite + Tailwindcss
<br>	<br>
	复刻ChatGPT网页，体验一模一样的web-app！
<br> <br>
    🍑 ChatGPT PerfectUII
</p>




## 项目开发



#### 后端部分
获取 `Openai Api Key` 或 `accessToken` 并填写本地环境变量, [更多其他环境变量的介绍](#环境变量)

```
#进入文件夹 `/service`
mv .env.example .env

# OpenAI API Key - https://platform.openai.com/overview
OPENAI_API_KEY=

# change this to an `accessToken` extracted from the ChatGPT site's `https://chat.openai.com/api/auth/session` response
OPENAI_ACCESS_TOKEN=

pnpm install
pnpm start
```

#### 前端部分
```shell
#根目录下运行以下命令
mv .env.example .env

pnpm bootstrap
pnpm dev
```


## 环境变量

`API` 可用：

- `OPENAI_API_KEY` 和 `OPENAI_ACCESS_TOKEN` 二选一
- `OPENAI_API_MODEL`  设置模型，可选，默认：`gpt-3.5-turbo`
- `OPENAI_API_BASE_URL` 设置接口地址，可选，默认：`https://api.openai.com`

`ACCESS_TOKEN` 可用：

- `OPENAI_ACCESS_TOKEN`  和 `OPENAI_API_KEY` 二选一，同时存在时，`OPENAI_API_KEY` 优先
- `API_REVERSE_PROXY` 设置反向代理，可选，默认：`https://bypass.duti.tech/api/conversation`，[社区](https://github.com/transitive-bullshit/chatgpt-api#reverse-proxy)（注意：只有这两个是推荐，其他第三方来源，请自行甄别）

通用：

- `AUTH_SECRET_KEY` 访问权限密钥，可选
- `MAX_REQUEST_PER_HOUR` 每小时最大请求次数，可选，默认无限
- `TIMEOUT_MS` 超时，单位毫秒，可选
- `SOCKS_PROXY_HOST` 和 `SOCKS_PROXY_PORT` 一起时生效，可选
- `SOCKS_PROXY_PORT` 和 `SOCKS_PROXY_HOST` 一起时生效，可选
- `HTTPS_PROXY` 支持 `http`，`https`, `socks5`，可选
- `ALL_PROXY` 支持 `http`，`https`, `socks5`，可选

## 部署上线

<details>
    <summary>Docker部署</summary>
<br>

```bash
docker build -t chatgpt-web .

# 前台运行
docker run --name chatgpt-web --rm -it -p 3002:3002 --env OPENAI_API_KEY=your_api_key chatgpt-web

# 后台运行
docker run --name chatgpt-web -d -p 3002:3002 --env OPENAI_API_KEY=your_api_key chatgpt-web

# 运行地址
http://localhost:3002/
```
</details>

<details>
    <summary>手动打包</summary>
<br>

#### 后端服务
> 如果你不需要本项目的 `node` 接口，可以省略如下操作

复制 `service` 文件夹到你有 `node` 服务环境的服务器上。

```shell
# 安装
pnpm install

# 打包
pnpm build

# 运行
pnpm prod
```

PS: 不进行打包，直接在服务器上运行 `pnpm start` 也可

#### 前端网页

1、修改根目录下 `.env` 文件中的 `VITE_GLOB_API_URL` 为你的实际后端接口地址

2、根目录下运行以下命令，然后将 `dist` 文件夹内的文件复制到你网站服务的根目录下

[参考信息](https://cn.vitejs.dev/guide/static-deploy.html#building-the-app)

```shell
pnpm build
```

</details>



## 参与贡献
本项目参考[chatgpt-web](https://github.com/Chanzhaoyu/chatgpt-web)

贡献之前请先阅读 [贡献指南](./CONTRIBUTING.md)

感谢飞叶在林的小伙伴，以及所有做过贡献的人!

<a href="https://github.com/leizhenpeng/ChatGPT-PerfectUI/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=leizhenpeng/ChatGPT-PerfectUI" />
</a>






## License
MIT © [river](./license)
