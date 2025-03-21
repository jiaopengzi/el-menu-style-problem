在使用 el-menu 开发顶部菜单栏的时候，菜单栏使用子组件`child.vue`,如果在子组件中有注释(比如第 7 行)，在渲染的时候会将注释重复传染到html中，造成样式不正常超出了max-width，如下图

![超出了max-width](https://github.com/user-attachments/assets/c643b002-1c8a-48be-af36-62fb7f4e6999)

![注释渲染了](https://github.com/user-attachments/assets/0fcc4767-12c8-4c13-af16-af1d377b576e)

目前我的解决办法，要么就去掉注释（这会造成很大的心智负担）,或者是在 vite 的 vite.config.ts 中 compilerOptions 添加去掉注释，也是可以的。 

```typescript
        vue({
            template: {
                compilerOptions: {
                    comments: false, // 删除模板中的注释
                },
            },
        }),

```
![正确的样式](https://github.com/user-attachments/assets/14aee70f-532a-472a-970e-c78b46aa2df3)

**我的疑问是，为什么注释内容会影响样式**

复现仓库：https://github.com/jiaopengzi/el-menu-style-problem