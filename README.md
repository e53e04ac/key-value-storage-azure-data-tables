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
  click B_2 "https://github.com/e53e04ac/base/tree/ddd2c718686c0629e497f4fa610d1979aac40c8a";
  click B_3 "https://github.com/e53e04ac/hold/tree/49707680ccdf4c5673f64ff0bab30f408269b328";
  click B_4 "https://www.npmjs.org/package/@types/node/v/18.14.0";
  click B_5 "https://github.com/e53e04ac/key-value-storage/tree/081fa2c9078c346afb2affa2b2970729761a5151";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/key-value-storage-azure-data-tables";
    E_0(["KeyValueStorageAzureDataTables"]);
    E_1(["KeyValueStorage"]);
  end;
  M(["index.mjs"])
  subgraph "@azure/data-tables";
    I_0_0(["TableClient"]);
  end;
  subgraph "@azure/identity";
    I_1_0(["DefaultAzureCredential"]);
  end;
  subgraph "base";
    I_2_0(["Base"]);
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
  M(["index.d.ts"])
  subgraph "@azure/data-tables";
    I_0_0(["TableClient"]);
  end;
  subgraph "base";
    I_1_0(["Base"]);
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
