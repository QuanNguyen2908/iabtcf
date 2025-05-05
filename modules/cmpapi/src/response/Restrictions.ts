import { RestrictionType } from "@nguyenquan241208/core";

export interface Restrictions {
  [purposeId: string]:
    | {
        [vendorId: string]: RestrictionType;
      }
    | string;
}
