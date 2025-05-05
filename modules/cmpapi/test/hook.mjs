import { XMLHttpTestTools } from "@nguyenquan241208/testing";
import { GVL } from "@nguyenquan241208/core";
import { CmpApiModel } from "../src/index.js";

GVL.baseUrl = "http://sweetcmp.mgr.consensu.org";
/**
 * MochaHooks.
 * This object specifies hooks that must run before or after every test in every file.
 * https://mochajs.org/#root-hook-plugins
 */
export const mochaHooks = {
  beforeEach(done) {
    CmpApiModel.reset();
    XMLHttpTestTools.beforeEach();
    GVL.emptyCache();

    done();
  },
};
