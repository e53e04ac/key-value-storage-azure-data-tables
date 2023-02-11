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
  A(["package.json"]);
  subgraph "dependencies";
    B_0(["@azure/data-tables"]);
    B_1(["@azure/identity"]);
    B_2(["e53e04ac/base"]);
    B_3(["e53e04ac/hold"]);
  end;
  subgraph "devDependencies";
    B_4(["@types/node"]);
    B_5(["e53e04ac/key-value-storage"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  A ----> B_5;
  click B_0 "https://www.npmjs.org/package/@azure/data-tables/v/13.2.1";
  click B_1 "https://www.npmjs.org/package/@azure/identity/v/3.1.3";
  click B_2 "https://github.com/e53e04ac/base/tree/2dc903faf7859d755dd52f7fde706be5170b9a6f";
  click B_3 "https://github.com/e53e04ac/hold/tree/285d028e225a7e75747417c3ed6b1ca0d5f52f6a";
  click B_4 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_5 "https://github.com/e53e04ac/key-value-storage/tree/aac96bb14624c4984234bd1f36dba5e21efc04e8";
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.mjs"])
  subgraph "@azure/data-tables";
    B_0_0(["TableClient"]);
  end;
  subgraph "@azure/identity";
    B_1_0(["DefaultAzureCredential"]);
  end;
  subgraph "base";
    B_2_0(["Base"]);
  end;
  subgraph "hold";
    B_3_0(["hold"]);
    B_3_1(["unwrap"]);
  end;
  B_0_0 ----> A;
  B_1_0 ----> A;
  B_2_0 ----> A;
  B_3_0 ----> A;
  B_3_1 ----> A;
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.d.ts"])
  subgraph "@azure/data-tables";
    B_0_0(["TableClient"]);
  end;
  subgraph "base";
    B_1_0(["Base"]);
  end;
  subgraph "hold";
    B_2_0(["Get"]);
    B_2_1(["ValueOrGet"]);
  end;
  subgraph "key-value-storage";
    B_3_0(["KeyValueStorage"]);
  end;
  B_0_0 ----> A;
  B_1_0 ----> A;
  B_2_0 ----> A;
  B_2_1 ----> A;
  B_3_0 ----> A;
~~~~~
