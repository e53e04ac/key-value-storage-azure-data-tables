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
  A(["e53e04ac/key-value-storage-azure-data-tables"]);
  subgraph "dependencies";
    B_0(["@azure/data-tables"]);
    B_1(["@azure/identity"]);
    B_2(["e53e04ac/base"]);
    B_3(["e53e04ac/hold"]);
    B_4(["e53e04ac/key-value-storage"]);
  end;
  subgraph "devDependencies";
    B_5(["@types/node"]);
  end;
  A --reference--> B_0;
  A --reference--> B_1;
  A --reference--> B_2;
  A --reference--> B_3;
  A --reference--> B_4;
  A --reference--> B_5;
  click B_0 "https://www.npmjs.org/package/@azure/data-tables/v/13.2.1";
  click B_1 "https://www.npmjs.org/package/@azure/identity/v/3.1.3";
  click B_2 "https://github.com/e53e04ac/base/tree/86bc9dc951e32d7e173b8e7bf020b9439d75f8f7";
  click B_3 "https://github.com/e53e04ac/hold/tree/385afd8049a499071f966af24caf970731543db4";
  click B_4 "https://github.com/e53e04ac/key-value-storage/tree/ae6f96e5d498ee7c655a091e18ee657176ce7088";
  click B_5 "https://www.npmjs.org/package/@types/node/v/18.13.0";
~~~~~

~~~~~ mermaid
graph LR;
  subgraph "e53e04ac/key-value-storage-azure-data-tables"
    C0("index.mjs");
    C1("index.d.ts");
  end;
  subgraph "@azure/data-tables"
    D0(["TableClient"]);
  end;
  subgraph "@azure/identity"
    D1(["DefaultAzureCredential"]);
  end;
  subgraph "base"
    D2(["Base"]);
  end;
  subgraph "hold"
    D3(["hold"]);
    D4(["unwrap"]);
    D5(["Get"]);
    D6(["ValueOrGet"]);
  end;
  subgraph "key-value-storage"
    D7(["KeyValueStorage"]);
  end;
  D0 --import--> C0;
  D1 --import--> C0;
  D2 --import--> C0;
  D3 --import--> C0;
  D4 --import--> C0;
  D0 --import--> C1;
  D2 --import--> C1;
  D5 --import--> C1;
  D6 --import--> C1;
  D7 --import--> C1;
~~~~~
