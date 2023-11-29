This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

```bash
pnpm i
pnpm dev
pnpm build
```

### 使用 tailwindcss

```bash
# 优点
利用原子类提高了手写 CSS 的效率
大幅减少手写css的代码量（即减少了打包后css文件的体积，但不可避免地增加了html的体积）
  需要手写css的例子：使用组合选择器时、使用css function时
可定制化程度极高，有良好的设计体系
不用再纠结class的命名

# 缺点
需要一定的学习成本，一堆原子类需要熟悉、记忆（可以结合vscode插件适当缓解记忆负担）
html类名很长，且不够语义化，不便调试
后期维护困难？（不一定，如果是改项目样式主题，反而使用tailwindcss会很方便）
```

```bash
# 试试tailwind样式库
https://github.com/htmlstreamofficial/preline
https://github.com/saadeghi/daisyui
```
