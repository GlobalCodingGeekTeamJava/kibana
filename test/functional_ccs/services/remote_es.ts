/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { Client } from '@elastic/elasticsearch';

import { systemIndicesSuperuser, createRemoteEsClientForFtrConfig } from '@kbn/test';
import { FtrProviderContext } from '../ftr_provider_context';

/**
 * Kibana-specific @elastic/elasticsearch client instance.
 */
export function RemoteEsProvider({ getService }: FtrProviderContext): Client {
  const config = getService('config');

  return createRemoteEsClientForFtrConfig(config, {
    // Use system indices user so tests can write to system indices
    authOverride: systemIndicesSuperuser,
  });
}
