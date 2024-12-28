export interface conditions {
  AND?: Array<{
    [field: string]: {
      gte?: number;
      lte?: number;
    };
  }>;
  OR?: Array<{
    [field: string]: {
      gte?: number;
      lte?: number;
    };
  }>;
  name?: object & {
    contains?: string;
    mode?: "insensitive";
  };
}
