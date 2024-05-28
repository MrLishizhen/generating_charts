import Axios from '@/utils/request';
import { WidgetData } from '@/types/widget';
//获取组件列表
export function getComponentList(): Promise<request<WidgetData[]>> {
  return Axios({
    url: '/get_component_list',
    method: 'GET',
  });
}
