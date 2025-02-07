/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import * as t from 'io-ts';

export const FetchMonitorManagementListQueryArgsCodec = t.partial({
  page: t.number,
  perPage: t.number,
  sortField: t.string,
  sortOrder: t.union([t.literal('desc'), t.literal('asc')]),
  search: t.string,
  searchFields: t.array(t.string),
});

export type FetchMonitorManagementListQueryArgs = t.TypeOf<
  typeof FetchMonitorManagementListQueryArgsCodec
>;

export const MonitorManagementEnablementResultCodec = t.type({
  isEnabled: t.boolean,
  canEnable: t.boolean,
  areApiKeysEnabled: t.boolean,
});

export type MonitorManagementEnablementResult = t.TypeOf<
  typeof MonitorManagementEnablementResultCodec
>;
