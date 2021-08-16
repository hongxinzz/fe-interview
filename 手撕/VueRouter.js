/*
 * @Author: xinghe
 * @LastEditors: xinghe
 * @Date: 2020-10-30 21:45:07
 * @FilePath: /fe-interview/VueRouter.js
 * @LastEditTime: 2020-10-30 21:55:51
 * @symbol_custom_string_obkoro: 不想有bug xinghe@gaoding.com
 */


let _Vue = null
class VueRouter {
    /**
     *  传入Vue实例
     * @param {s} Vue
     */
    static install(Vue) {
        //1 判断当前插件是否被安装
        if (VueRouter.install.installed) {
            return;
        }
        VueRouter.install.installed = true
        //2 把Vue的构造函数记录在全局
        _Vue = Vue
        //3 把创建Vue的实例传入的router对象注入到Vue实例
        // _Vue.prototype.$router = this.$options.router
        _Vue.mixin({
            beforeCreate() {
                if (this.$options.router) {
                    _Vue.prototype.$router = this.$options.router
                }
            }
        })
    }
    constructor(options) {
        this.options = options //设置项
        this.routeMap = {} // 路由的map  {path:component}
        this.data = _Vue.observable({ // 通过vue observable 把插件的data.current 设置为响应式
            current: "/"
        })

        this.init() //初始化

    }
    init() {
        this.createRouteMap() // 把传入的routes 遍历成键值对
        this.initComponent(_Vue) //初始化我们的组件
        this.initEvent() //绑定事件
    }
    createRouteMap() {
        //遍历所有的路由规则 吧路由规则解析成键值对的形式存储到routeMap中
        this.options.routes.forEach(route => {
            this.routeMap[route.path] = route.component
        });
    }
    initComponent(Vue) {
        // 存一下this
        const self = this

        // <router-link to="path">path name</router-link>
        Vue.component("router-link", {
            props: {
                to: String //接受路径
            },
            render(h) { // h为vue 提供的虚拟 dom 方法
                    //h('Element',attrs,event, slot)
                    // h 传入节点、自定义属性、事件、节点的slot
                return h("a", {
                    attrs: {
                        href: this.to
                    },
                    on: {
                        click: this.clickhander
                    }
                }, [this.$slots.default])
            },
            methods: {
                clickhander(e) {
                    //  当页面渲染为a标签时  阻止默认事件，并手动更新浏览器地址
                    // 注： 不阻止事件会导致浏览器触发刷新事件
                    history.pushState({}, "", this.to)
                    // 更新一下当前的路由地址
                    this.$router.data.current = this.to
                    e.preventDefault()
                }
            }
        })

        // <router-view></router-view>
        Vue.component("router-view", {
            render(h) {
                // 键值对中拿出相应的component
                const cm = self.routeMap[self.data.current]
                return h(cm)
            }
        })

    }
    initEvent() {
        // 捕捉浏览器后退事件，更新当前的组件的current
        window.addEventListener("popstate", () => {
            this.data.current = window.location.pathname
        })
    }
}