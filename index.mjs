/*!
    @e53e04ac/key-value-storage-azure-data-tables/index.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { TableClient } from '@azure/data-tables';
import { DefaultAzureCredential } from '@azure/identity';

import { Base } from 'base';
import { hold } from 'hold';
import { unwrap } from 'hold';

/** @type {import('.').KeyValueStorageAzureDataTables.Constructor} */
const constructor = ((options) => {

    /** @typedef {Required<options>['__GenericTypes__']} GenericTypes */
    /** @typedef {GenericTypes['T']} T */

    const _options = ({
        tableClient: hold(() => {
            return unwrap(options.tableClient);
        }),
        serialize: options.serialize,
        deserialize: options.deserialize,
    });

    /** @type {import('.').KeyValueStorageAzureDataTables._Self<T>} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
    });

    /** @type {import('.').KeyValueStorageAzureDataTables.Self<T>} */
    const self = ({
        ...Base({}),
        _KeyValueStorage: (() => {
            return _self;
        }),
        _KeyValueStorageAzureDataTables: (() => {
            return _self;
        }),
        get: (async (key) => {
            const entity = await _options.tableClient().getEntity('', key, {}).then((value) => {
                return value;
            }, (error) => {
                return null;
            });
            if (entity == null) {
                return null;
            }
            const value = await _options.deserialize(entity, key);
            return value;
        }),
        set: (async (key, value) => {
            const entity = await _options.serialize(value, key);
            const item = {
                partitionKey: '',
                rowKey: key,
                ...entity,
            };
            await _options.tableClient().createEntity(item);
        }),
        remove: (async (key) => {
            await _options.tableClient().deleteEntity('', key);
        }),
    });

    return self;

});

/** @type {import('.').KeyValueStorageAzureDataTables.Companion} */
const companion = ({
    fromDefaultCredential: (({ storageAccountName, tableName, ...rest }) => {
        const url = `https://${storageAccountName}.table.core.windows.net`;
        const credential = new DefaultAzureCredential();
        const tableClient = new TableClient(url, tableName, credential);
        return constructor({
            tableClient,
            ...rest,
        });
    }),
    fromConnectionString: (({ connectionString, tableName, ...rest }) => {
        const tableClient = TableClient.fromConnectionString(connectionString, tableName);
        return constructor({
            tableClient,
            ...rest,
        });
    }),
    from: ((params) => {
        if ('storageAccountName' in params) {
            return companion.fromDefaultCredential(params);
        }
        if ('connectionString' in params) {
            return companion.fromConnectionString(params);
        }
        throw new Error();
    }),
});

/** @type {import('.').KeyValueStorageAzureDataTables.Companion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as KeyValueStorageAzureDataTables };

export { constructorWithCompanion as KeyValueStorage };
