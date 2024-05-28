import Axios from '@/utils/request';

type ViewListProps = {
  name: string;
};
export type ViewForm = {
  viewName: string;
  teamId: string;
  groupId: string;
  description: string;
  width: number;
  height: number;
};
export type ResultViewList = {
  id: string;
  name: string;
  bc_image: string;
  groupId: string;
  create_time: number;
  update_time: number;
  userId: number;
};

export type CreateViewProps = ViewForm & Omit<ResultViewList, 'name'>;

// 获取视图列表
export function getViewList(
  data: ViewListProps,
): Promise<request<ResultViewList[]>> {
  return Axios({
    url: '/get_view_list',
    method: 'GET',
    data: data,
    loading: true,
  });
}

export function createView(data: ViewForm): Promise<request<{ id: string }>> {
  return Axios({
    url: '/create_view',
    method: 'POST',
    data: data,
    loading: true,
  });
}
