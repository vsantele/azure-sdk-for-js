// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PerfOptionDictionary } from "@azure-tools/test-perf";
import { TablesTest } from "./tables.spec.js";
import { TableEntity } from "@azure/data-tables";
import { createComplexEntity } from "./utils/createBaseEntity.js";

export class CreateComplexEntityTest extends TablesTest {
  public options: PerfOptionDictionary = {};

  constructor() {
    super("ComplexEntityPerf");
  }

  public async globalSetup() {
    await super.globalSetup(); // Calling base class' setup
  }

  public async globalCleanup() {
    await super.globalCleanup();
  }

  async run(): Promise<void> {
    const complexEntity: TableEntity = createComplexEntity();
    await this.client.createEntity(complexEntity);
  }
}
