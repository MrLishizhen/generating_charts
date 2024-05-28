import { WidgetData } from '@/types/widget';
import { MenuItem } from '@/components/ui';
import { IconFontUrl } from '@/components/icon';
type GenerateTreeData = WidgetData & { children?: WidgetData[] };
export function generateMenuData(
  data: GenerateTreeData[],
  parentId = 0,
): MenuItem[] {
  const menuData: MenuItem[] = [];

  for (const item of data) {
    if (item.parentId === parentId) {
      const menuItem: MenuItem = {
        key: String(item.id),
        title: item.name,
        label: item.name,
        icon: item.icon ? (
          <IconFontUrl style={{ fontSize: 16 }} type={item.icon} />
        ) : (
          ''
        ),
      };

      const children: MenuItem[] = generateMenuData(data, item.id);
      if (children.length > 0) {
        menuItem.children = children;
      }

      menuData.push(menuItem);
    }
  }

  return menuData;
}
