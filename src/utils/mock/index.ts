import Mock from 'mockjs';
import { getWidgetData } from './widget';

Mock.setup({
  timeout: 1000,
});

Mock.mock('/login', function () {
  return Mock.mock({
    code: 200,
    msg: '账号密码错误',
    result: {
      token: '123456789',
      userName: 'admin',
      password: '123456789',
    },
  });
});

Mock.mock('/set_user', function () {
  return Mock.mock({
    code: 200,
    msg: '注册成功',
    result: {},
  });
});

Mock.mock('/get_menu', function () {
  return Mock.mock({
    code: 200,
    msg: '',
    result: [
      {
        id: '1',
        parent_id: '0',
        icon: 'HomeOutlined',
        layout: 'App',
        label: '首页',
        name: 'welcome',
        key: 'welcome',
        meta: {
          title: '首页',
        },
      },
      {
        id: '2',
        parent_id: '0',
        icon: 'FundViewOutlined',
        layout: 'App',
        label: '视图管理',
        name: 'view-management',
        key: 'view-management',
        meta: {
          title: '视图管理',
        },
      },
      {
        id: '2',
        parent_id: '0',
        icon: 'FundViewOutlined',
        layout: 'internal',
        label: '新增视图',
        internalOpen: true,
        name: 'view-management-editing',
        key: 'view-management-editing',
        meta: {
          title: '新增视图',
        },
      },
    ],
  });
});

//请求视图列表
Mock.mock('/get_view_list', function () {
  return Mock.mock({
    code: 200,
    msg: '',
    'result|8': [
      {
        'id|3': /\d{5,10}-/,
        name: 'test视图1',
        bc_image:
          'http://10.10.14.168:9088/cdn-res/fastdfs/20240508/7a6b1165a7d6224c31ff78fb9e6d6a29.png',
        create_time: 1715690114891,
        update_time: 1715690114891,
        userId: 1,
      },
    ],
  });
});

//创建视图

Mock.mock('/create_view', function () {
  return Mock.mock({
    code: 200,
    msg: '',
    result: {
      id: /\d{5,10}-/,
      // viewName: 'test视图1',
      // tramId: '11111',
      // bc_image: '',
      // create_time: 1715690114891,
      // update_time: 1715690114891,
      // description: '这是一个视图的描述',
      // userId: '1',
      // width: 1920,
      // height: 1080,
      // groupId: 'test',
    },
  });
});

// 获取组件列表数据
Mock.mock('/get_component_list', function () {
  return Mock.mock({
    code: 200,
    msg: '',
    result: getWidgetData(),
  });
});
