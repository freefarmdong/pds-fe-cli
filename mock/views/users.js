/**
 * @author wenwang
 * @date   2020/8/19-17:52
 */

const user_list_represent = {
  "data": {
    "descriptors": {
      "userSearch": {
        "actions": [{ "code": "RESET", "effect": "PAGE", "label": "重置" }, {
          "code": "QUERY",
          "effect": "PAGE",
          "label": "查询",
          "using": ["userLine", "QUERY"]
        }], "component": "SearchForm", "fieldKey": "userSearch", "key": "searchForm", "lazy": false, "schema": {
          "username": {
            "enableOn": false,
            "fieldKey": "username",
            "type": "string",
            "label": "姓名",
            "component": { "type": "input", "events": {} }
          },
          "deptId": {
            "enableOn": false,
            "fieldKey": "deptId",
            "options": [{
              "lastUpdatedBy": "1",
              "lastUpdateDate": "2020-07-03 15:06:31",
              "departmentId": "1",
              "label": "系统平台",
              "creationDate": "2020-07-03 15:06:31",
              "idPath": "1,",
              "isDeleted": "N",
              "createdBy": "1",
              "children": [{
                "lastUpdatedBy": "1",
                "lastUpdateDate": "2020-07-05 14:50:05",
                "departmentId": "1",
                "pid": "1",
                "label": "教育部",
                "creationDate": "2020-07-03 14:56:52",
                "idPath": "1278945788593991680,",
                "isDeleted": "N",
                "createdBy": "1",
                "isEnabled": "Y",
                "tenantId": "1",
                "value": "1278945788593991680"
              }, {
                "lastUpdatedBy": "1",
                "lastUpdateDate": "2020-07-05 16:02:23",
                "departmentId": "1",
                "pid": "1",
                "label": "财政部",
                "creationDate": "2020-07-03 14:59:30",
                "idPath": "1278946449213648896,",
                "isDeleted": "N",
                "createdBy": "1",
                "isEnabled": "Y",
                "tenantId": "1",
                "value": "1278946449213648896"
              }],
              "isEnabled": "Y",
              "tenantId": "1",
              "value": "1"
            }, {
              "lastUpdatedBy": "1",
              "lastUpdateDate": "2020-07-03 15:05:20",
              "departmentId": "1",
              "label": "公关部",
              "creationDate": "2020-07-03 15:05:20",
              "idPath": "1278947916033060864,",
              "isDeleted": "N",
              "createdBy": "1",
              "isEnabled": "Y",
              "tenantId": "1",
              "value": "1278947916033060864"
            }, {
              "lastUpdatedBy": "1",
              "lastUpdateDate": "2020-07-03 15:06:31",
              "departmentId": "1",
              "label": "安全部",
              "creationDate": "2020-07-03 15:06:31",
              "idPath": "1278948217674821632,",
              "isDeleted": "N",
              "createdBy": "1",
              "isEnabled": "Y",
              "tenantId": "1",
              "value": "1278948217674821632"
            }, {
              "lastUpdatedBy": "1",
              "lastUpdateDate": "2020-07-08 00:23:50",
              "departmentId": "1",
              "label": "修改下",
              "creationDate": "2020-07-03 20:33:28",
              "idPath": "1279030495131590656,",
              "isDeleted": "N",
              "createdBy": "1",
              "isEnabled": "Y",
              "tenantId": "1",
              "value": "1279030495131590656"
            }, {
              "lastUpdatedBy": "1",
              "lastUpdateDate": "2020-07-03 20:41:02",
              "departmentId": "1",
              "label": "ddd",
              "creationDate": "2020-07-03 20:41:02",
              "idPath": "1279032401048494080,",
              "isDeleted": "N",
              "createdBy": "1",
              "isEnabled": "Y",
              "tenantId": "1",
              "value": "1279032401048494080"
            }, {
              "lastUpdatedBy": "1",
              "lastUpdateDate": "2020-07-04 12:42:31",
              "departmentId": "1",
              "label": "jjsdsdsds",
              "creationDate": "2020-07-03 21:47:33",
              "idPath": "1279049139175067648,",
              "isDeleted": "N",
              "createdBy": "1",
              "isEnabled": "Y",
              "tenantId": "1",
              "value": "1279049139175067648"
            }, {
              "lastUpdatedBy": "1",
              "lastUpdateDate": "2020-07-04 12:42:38",
              "departmentId": "1",
              "label": "eewewewe",
              "creationDate": "2020-07-03 21:56:35",
              "idPath": "1279051412777242624,",
              "isDeleted": "N",
              "createdBy": "1",
              "isEnabled": "Y",
              "tenantId": "1",
              "value": "1279051412777242624"
            }, {
              "lastUpdatedBy": "1",
              "lastUpdateDate": "2020-07-03 21:57:19",
              "departmentId": "1",
              "label": "ffffefwefwefw",
              "creationDate": "2020-07-03 21:57:19",
              "idPath": "1279051597553111040,",
              "isDeleted": "N",
              "createdBy": "1",
              "isEnabled": "Y",
              "tenantId": "1",
              "value": "1279051597553111040"
            }, {
              "lastUpdatedBy": "1",
              "lastUpdateDate": "2020-07-04 12:42:14",
              "departmentId": "1",
              "label": "反反复复223232",
              "creationDate": "2020-07-03 22:10:09",
              "idPath": "1279054826609348608,",
              "isDeleted": "N",
              "createdBy": "1",
              "isEnabled": "Y",
              "tenantId": "1",
              "value": "1279054826609348608"
            }, {
              "lastUpdatedBy": "1",
              "lastUpdateDate": "2020-07-03 22:13:52",
              "departmentId": "1",
              "label": "又加了一个",
              "creationDate": "2020-07-03 22:13:52",
              "idPath": "1279055760879181824,",
              "isDeleted": "N",
              "createdBy": "1",
              "isEnabled": "Y",
              "tenantId": "1",
              "value": "1279055760879181824"
            }, {
              "lastUpdatedBy": "1",
              "lastUpdateDate": "2020-07-05 14:35:52",
              "departmentId": "1",
              "label": "的是非得失",
              "creationDate": "2020-07-05 14:10:02",
              "idPath": "1279658777400238080,",
              "isDeleted": "N",
              "createdBy": "1",
              "isEnabled": "Y",
              "tenantId": "1",
              "value": "1279658777400238080"
            }, {
              "lastUpdatedBy": "1",
              "lastUpdateDate": "2020-07-05 14:36:14",
              "departmentId": "1",
              "label": "对方的负担",
              "creationDate": "2020-07-05 14:13:58",
              "idPath": "1279659765213356032,",
              "isDeleted": "N",
              "createdBy": "1",
              "isEnabled": "Y",
              "tenantId": "1",
              "value": "1279659765213356032"
            }, {
              "lastUpdatedBy": "1",
              "lastUpdateDate": "2020-07-07 01:34:36",
              "departmentId": "1",
              "label": "cccccc",
              "creationDate": "2020-07-07 01:34:36",
              "idPath": "1280193442758881280,",
              "isDeleted": "N",
              "createdBy": "1",
              "isEnabled": "Y",
              "tenantId": "1",
              "value": "1280193442758881280"
            }, {
              "lastUpdatedBy": "1",
              "lastUpdateDate": "2020-07-14 15:46:14",
              "departmentId": "1",
              "label": "weqewqew",
              "creationDate": "2020-07-14 15:46:14",
              "idPath": "1282944477289144320,",
              "isDeleted": "N",
              "createdBy": "1",
              "isEnabled": "Y",
              "tenantId": "1",
              "value": "1282944477289144320"
            }, {
              "lastUpdatedBy": "1",
              "lastUpdateDate": "2020-07-14 15:46:31",
              "departmentId": "1",
              "label": "eewrerrewr",
              "creationDate": "2020-07-14 15:46:31",
              "idPath": "1282944547279495168,",
              "isDeleted": "N",
              "createdBy": "1",
              "isEnabled": "Y",
              "tenantId": "1",
              "value": "1282944547279495168"
            }, {
              "lastUpdatedBy": "1",
              "lastUpdateDate": "2020-07-16 15:33:18",
              "departmentId": "1",
              "label": "我是一个组织",
              "creationDate": "2020-07-16 15:33:18",
              "idPath": "1283665998173298688,",
              "isDeleted": "N",
              "createdBy": "1",
              "isEnabled": "Y",
              "tenantId": "1",
              "value": "1283665998173298688"
            }, {
              "lastUpdatedBy": "1",
              "lastUpdateDate": "2020-07-16 15:34:34",
              "departmentId": "1",
              "label": "1231",
              "creationDate": "2020-07-16 15:34:34",
              "idPath": "1283666316902653952,",
              "isDeleted": "N",
              "createdBy": "1",
              "isEnabled": "Y",
              "tenantId": "1",
              "value": "1283666316902653952"
            }, {
              "lastUpdatedBy": "1",
              "lastUpdateDate": "2020-07-28 16:13:27",
              "departmentId": "1",
              "label": "1111",
              "creationDate": "2020-07-28 16:13:27",
              "idPath": "1288024755419521024,",
              "isDeleted": "N",
              "createdBy": "1",
              "isEnabled": "Y",
              "tenantId": "1",
              "value": "1288024755419521024"
            }, {
              "lastUpdatedBy": "1",
              "lastUpdateDate": "2020-07-28 19:32:09",
              "departmentId": "1",
              "label": "111",
              "creationDate": "2020-07-28 19:32:09",
              "idPath": "1288074760061374464,",
              "isDeleted": "N",
              "createdBy": "1",
              "isEnabled": "Y",
              "tenantId": "1",
              "value": "1288074760061374464"
            }, {
              "lastUpdatedBy": "1",
              "lastUpdateDate": "2020-07-28 19:32:14",
              "departmentId": "1",
              "label": "123123123",
              "creationDate": "2020-07-28 19:32:14",
              "idPath": "1288074782677061632,",
              "isDeleted": "N",
              "createdBy": "1",
              "isEnabled": "Y",
              "tenantId": "1",
              "value": "1288074782677061632"
            }, {
              "lastUpdatedBy": "1",
              "lastUpdateDate": "2020-08-10 10:41:10",
              "departmentId": "1",
              "label": "ysj-test",
              "creationDate": "2020-08-10 10:41:10",
              "idPath": "1292652175023124480,",
              "isDeleted": "N",
              "createdBy": "1",
              "isEnabled": "Y",
              "tenantId": "1",
              "value": "1292652175023124480"
            }],
            "type": "number",
            "label": "部门",
            "component": { "type": "treeSelect", "events": {}, "filter": "", "labelKey": "", "valueKey": "" }
          },
          "roleId": {
            "enableOn": false,
            "fieldKey": "roleId",
            "options": [{ "label": "系统管理员", "value": "1" }, { "label": "大帅", "value": "2" }],
            "type": "number",
            "label": "角色",
            "component": {
              "type": "select",
              "props": { "clearable": true },
              "events": {},
              "filter": "",
              "labelKey": "",
              "valueKey": ""
            }
          }
        }, "type": "FORM"
      }, "userLine": {
        "actions": [{
          "code": "QUERY",
          "effect": "HIDDEN",
          "label": "查询",
          "transports": [{
            "fields": ["userSearch"],
            "mutation": { "userLine": "setData" },
            "strategy": "MERGE",
            "url": "/api/prv/security/userQuery/search"
          }]
        }, {
          "code": "CREATE",
          "dialog": "com.qing.atropos.security.modules.user.representation.UserCreateDialog",
          "effect": "PAGE",
          "label": "新增",
          "resourceType": "USER"
        }], "component": "SearchTable", "fieldKey": "userLine", "key": "searchTable", "lazy": false, "schema": {
          "sn": {
            "column": { "showOverflowTooltip": true },
            "enableOn": false,
            "fieldKey": "sn",
            "type": "string",
            "label": "员工编号",
            "component": { "type": "input", "events": {} }
          },
          "username": {
            "column": { "showOverflowTooltip": true },
            "enableOn": false,
            "fieldKey": "username",
            "type": "string",
            "label": "用户名",
            "component": { "type": "input", "events": {} }
          },
          "name": {
            "column": { "showOverflowTooltip": true },
            "enableOn": false,
            "fieldKey": "name",
            "type": "string",
            "label": "姓名",
            "component": { "type": "input", "events": {} }
          },
          "roleId": {
            "column": { "showOverflowTooltip": true },
            "enableOn": false,
            "fieldKey": "roleId",
            "hidden": "on",
            "type": "array",
            "label": "角色Id",
            "items": { "type": "number" },
            "component": { "type": "select", "props": { "clearable": true }, "events": {} }
          },
          "roleName": {
            "column": { "showOverflowTooltip": true },
            "enableOn": false,
            "fieldKey": "roleName",
            "type": "string",
            "label": "角色",
            "component": { "type": "input", "events": {} }
          },
          "regionIds": {
            "column": { "showOverflowTooltip": true },
            "enableOn": false,
            "fieldKey": "regionIds",
            "options": [{ "label": "财务域", "value": "A" }, { "label": "资产域", "value": "B" }, {
              "label": "项目域",
              "value": "C"
            }, { "label": "采购域", "value": "D" }, { "label": "库存域", "value": "E" }, {
              "label": "资金域",
              "value": "F"
            }, { "label": "收入域", "value": "G" }, { "label": "报表分析", "value": "H" }],
            "type": "string",
            "label": "所属域",
            "component": { "type": "select", "props": { "clearable": true }, "events": {} }
          },
          "isExternal": {
            "column": { "showOverflowTooltip": true },
            "enableOn": false,
            "fieldKey": "isExternal",
            "options": [{ "label": "内部", "value": "Y" }, { "label": "外部", "value": "N" }],
            "type": "string",
            "label": "用户类型",
            "component": { "type": "select", "props": { "clearable": true }, "events": {} }
          },
          "isEnabled": {
            "column": { "showOverflowTooltip": true },
            "enableOn": false,
            "fieldKey": "isEnabled",
            "options": [{ "label": "生效", "value": "Y" }, { "label": "失效", "value": "N" }],
            "type": "string",
            "label": "状态",
            "component": { "type": "select", "props": { "clearable": true }, "events": {} }
          },
          "mobile": {
            "column": { "showOverflowTooltip": true },
            "enableOn": false,
            "fieldKey": "mobile",
            "hidden": "on",
            "type": "string",
            "label": "联系方式",
            "component": { "type": "input", "events": {} }
          },
          "email": {
            "column": { "showOverflowTooltip": true },
            "enableOn": false,
            "fieldKey": "email",
            "hidden": "on",
            "type": "string",
            "label": "邮件",
            "component": { "type": "input", "events": {} }
          },
          "effectiveDate": {
            "column": { "showOverflowTooltip": true },
            "enableOn": false,
            "fieldKey": "effectiveDate",
            "hidden": "on",
            "type": "date",
            "label": "生效时间",
            "component": {
              "type": "datepicker",
              "props": { "type": "date", "format": "yyyy-MM-dd", "valueFormat": "yyyy-MM-dd" },
              "events": {}
            }
          },
          "status": {
            "column": { "showOverflowTooltip": true },
            "enableOn": false,
            "fieldKey": "status",
            "hidden": "on",
            "options": [{ "label": "草稿", "value": "DRAFT" }, { "label": "已保存", "value": "SAVED" }],
            "type": "string",
            "label": "状态",
            "component": { "type": "select", "props": { "clearable": true }, "events": {} }
          },
          "id": {
            "column": { "showOverflowTooltip": true },
            "enableOn": false,
            "fieldKey": "id",
            "hidden": "on",
            "isId": true,
            "rules": [{ "required": true, "message": "没有提供ID" }],
            "type": "number",
            "component": { "type": "numinput", "events": {} }
          },
          "createdBy": {
            "column": { "showOverflowTooltip": true },
            "enableOn": false,
            "fieldKey": "createdBy",
            "hidden": "on",
            "type": "number",
            "component": { "type": "numinput", "events": {} }
          },
          "operation": {
            "enableOn": false,
            "fieldKey": "operation",
            "type": "array",
            "label": "操作",
            "items": { "type": "object", "props": {} },
            "component": { "type": "select", "props": { "clearable": true }, "events": {} }
          }
        }, "title": "用户列表", "type": "TABLE", "url": "/api/prv/security/userQuery/search"
      }
    }
  }, "failed": false, "needLogin": false, "permissionDeny": false, "status": "ok", "success": true
}

module.exports = {
  user_list_represent
}