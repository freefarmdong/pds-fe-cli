# 做为一个前端开发模板
- 源于[vue-element-admin](https://panjiachen.github.io/vue-element-admin) 项目

# 每个项目都做一下拷贝
- 基于拷贝创建做前端项目开发

# 搭建说明
- 创建packages目录，切换到此目录
- 下载通用开发包，支持后台传输协议渲染，切换到feature-formMaking分支,过程如下：
    - git clone http://git.pds-inc.com.cn/wen.wang/fe-atropos-public.git
    - cd fe-atropos-public
    - git checkout feature-formMaking
- 注意
    - 如果没有外网的话，可能需要git正确的分支，手工拷贝到此处
    - 千万不要下载依赖（即再次目录下不要 npm install）
# 运行
- 配置private.js文件
    - 在private.js设置是否mock
        - 如果mock则会启动mock服务器
        - 如果不是则代理连接后端测试或开发服务器
    
    

    
    