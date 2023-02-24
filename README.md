# key-value-storage-azure-data-tables

~~~~~ sh
npm install e53e04ac/key-value-storage-azure-data-tables
~~~~~

~~~~~ mjs
import { KeyValueStorageAzureDataTables } from 'e53e04ac/key-value-storage-azure-data-tables';
import { KeyValueStorage } from 'e53e04ac/key-value-storage-azure-data-tables';
~~~~~

~~~~~ mermaid
graph RL;
  A["package.json\npackage-lock.json"];
  subgraph "dependencies";
    B_0(["@azure/data-tables"]);
    B_1(["@azure/identity"]);
    B_2(["event-emitter"]);
    B_3(["hold"]);
  end;
  subgraph "devDependencies";
    B_4(["@types/node"]);
    B_5(["key-value-storage"]);
  end;
  subgraph "github";
    C_2(["e53e04ac/event-emitter\n98fd492f5a6e31cd646d4b79e70035061165871f"]);
    C_3(["e53e04ac/hold\n6845a848f97733b8cd8a34bfc03c3bf040818aa8"]);
    C_5(["e53e04ac/key-value-storage\n0c416b2f75d9d2c6a56b22b658d29970b1729090"]);
  end;
  subgraph "npmjs";
    C_0(["@azure/data-tables\n13.2.1"]);
    C_1(["@azure/identity\n3.1.3"]);
    C_4(["@types/node\n18.14.1"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  A ----> B_5;
  B_0 ----> C_0;
  B_1 ----> C_1;
  B_2 ----> C_2;
  B_3 ----> C_3;
  B_4 ----> C_4;
  B_5 ----> C_5;
  click C_0 "https://www.npmjs.com/package/@azure/data-tables/v/13.2.1";
  click C_1 "https://www.npmjs.com/package/@azure/identity/v/3.1.3";
  click C_2 "https://github.com/e53e04ac/event-emitter/tree/98fd492f5a6e31cd646d4b79e70035061165871f";
  click C_3 "https://github.com/e53e04ac/hold/tree/6845a848f97733b8cd8a34bfc03c3bf040818aa8";
  click C_4 "https://www.npmjs.com/package/@types/node/v/18.14.1";
  click C_5 "https://github.com/e53e04ac/key-value-storage/tree/0c416b2f75d9d2c6a56b22b658d29970b1729090";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/key-value-storage-azure-data-tables";
    E_0(["KeyValueStorageAzureDataTables"]);
    E_1(["KeyValueStorage"]);
  end;
  M["index.mjs"]
  subgraph "@azure/data-tables";
    I_0_0(["TableClient"]);
  end;
  subgraph "@azure/identity";
    I_1_0(["DefaultAzureCredential"]);
  end;
  subgraph "event-emitter";
    I_2_0(["EventEmitter"]);
  end;
  subgraph "hold";
    I_3_0(["hold"]);
    I_3_1(["unwrap"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_3_1;
  E_0 ----> M;
  E_1 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/key-value-storage-azure-data-tables";
    E_0(["namespace KeyValueStorageAzureDataTables"]);
    E_1(["const KeyValueStorageAzureDataTables"]);
    E_2(["const KeyValueStorage"]);
  end;
  M["index.d.ts"]
  subgraph "@azure/data-tables";
    I_0_0(["TableClient"]);
  end;
  subgraph "event-emitter";
    I_1_0(["EventEmitter"]);
  end;
  subgraph "hold";
    I_2_0(["Get"]);
    I_2_1(["ValueOrGet"]);
  end;
  subgraph "key-value-storage";
    I_3_0(["KeyValueStorage"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_2_1;
  M ----> I_3_0;
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
~~~~~
