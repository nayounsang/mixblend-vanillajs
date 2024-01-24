export interface ConstructorBaseType {
  parentId: string;
  curId: string;
  
}
export type ConstructorType<T> = { props?: Partial<T> } & ConstructorBaseType;
