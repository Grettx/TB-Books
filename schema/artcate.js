// 导入定义验证规则的模块
const joi = require('@hapi/joi')

// 2. 定义 name 和 alias 的验证规则
const name = joi.string().required()
const alias = joi.string().alphanum().required()

// 定义分类 Id 的校验规则
const id = joi.number().integer().min(1).required()

// 校验规则对象 - 新增分类
exports.add_cate_schema = {
    body: {
        name, 
        alias,
    }
}

// 校验规则对象 - 删除分类 - 获取文章分类
exports.update_cate_schema = {
    body: {
        Id: id,
        name, 
        alias,
    },
}