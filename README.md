# key-value-storage-azure-data-tables

~~~~~ sh
npm install e53e04ac/key-value-storage-azure-data-tables
~~~~~

~~~~~ mjs
import { KeyValueStorageAzureDataTables } from 'e53e04ac/key-value-storage-azure-data-tables';
import { KeyValueStorage } from 'e53e04ac/key-value-storage-azure-data-tables';
~~~~~

~~~~~ mermaid
graph LR;
  A(["key-value-storage-azure-data-tables"]);
  B0(["@azure/data-tables"]);
  B1(["@azure/identity"]);
  B2(["e53e04ac/base"]);
  B3(["e53e04ac/hold"]);
  B4(["e53e04ac/key-value-storage"]);
  C0(["@types/node"]);
  click B2 href "https://github.com/e53e04ac/base";
  click B3 href "https://github.com/e53e04ac/hold";
  click B4 href "https://github.com/e53e04ac/key-value-storage";
  subgraph "e53e04ac/key-value-storage-azure-data-tables";
    A;
  end;
  subgraph "dependencies";
    B0 --import--> A;
    B1 --import--> A;
    B2 --import--> A;
    B3 --import--> A;
    B4 --import--> A;
  end;
  subgraph "devDependencies";
    C0 --import--> A;
  end;
~~~~~
