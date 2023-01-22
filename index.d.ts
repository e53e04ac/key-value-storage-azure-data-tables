/*!
    @e53e04ac/key-value-storage-azure-data-tables/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { TableClient } from '@azure/data-tables';

import { Base } from 'base';
import { Get } from 'hold';
import { ValueOrGet } from 'hold';
import { KeyValueStorage } from 'key-value-storage';

export declare namespace KeyValueStorageAzureDataTables {

    type Options<T extends object> = {
        readonly tableClient: ValueOrGet<TableClient>;
        readonly serialize: {
            (value: T, key: string): Promise<Record<string, unknown>>;
        };
        readonly deserialize: {
            (entity: Record<string, unknown>, key: string): Promise<T>;
        };
    };

    type _Self<T extends object> = {
        readonly options: Get<Options<T>>;
        readonly _options: Get<unknown>;
    };

    type Self<T extends object> = Base & KeyValueStorage<T> & {
        readonly _KeyValueStorage: Get<_Self<T>>;
        readonly _KeyValueStorageAzureDataTables: Get<_Self<T>>;
    };

    type Constructor = {
        <T extends object>(options: Options<T>, __GenericTypes__?: {
            readonly T: T;
        }): Self<T>;
    };

    type Companion = {
        readonly fromDefaultCredential: {
            <T extends object>(params: {
                readonly storageAccountName: string;
                readonly tableName: string;
                readonly serialize: Options<T>['serialize'];
                readonly deserialize: Options<T>['deserialize'];
            }): Self<T>;
        };
        readonly fromConnectionString: {
            <T extends object>(params: {
                readonly connectionString: string;
                readonly tableName: string;
                readonly serialize: Options<T>['serialize'];
                readonly deserialize: Options<T>['deserialize'];
            }): Self<T>;
        };
        readonly from: {
            <T extends object>(params: (Parameters<Companion['fromDefaultCredential']>[0])): Self<T>;
            <T extends object>(params: (Parameters<Companion['fromConnectionString']>[0])): Self<T>;
        };
    };

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type KeyValueStorageAzureDataTables<T extends object> = KeyValueStorageAzureDataTables.Self<T>;

export declare const KeyValueStorageAzureDataTables: KeyValueStorageAzureDataTables.ConstructorWithCompanion;

export declare const KeyValueStorage: KeyValueStorageAzureDataTables.ConstructorWithCompanion;
