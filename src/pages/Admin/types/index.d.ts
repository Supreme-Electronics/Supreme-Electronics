export type ComponentType = 'text' | 'header'; // 可以根據需求擴展

export interface ComponentItem {
  id: string;
  type: ComponentType;
  props: {
    text: string;
    // 其他屬性
  };
}