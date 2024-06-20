# Manipulador de JSON Temporário

Uma biblioteca para lidar com armazenamento temporário e recuperação de dados JSON.

## Instalação

```bash
npm install temporary-json-handler
````
ou
```bash
npm install https://github.com/VOIDabinerJR/temporary-json-handler.git
```
## Utilização
```bash
import { createTempJSON, copyFromTempAndDeleteJSON, retrieveTemporaryData } from 'temporary-json-handler';

// Exemplo de uso
const exampleData = {
  name: "exemplo"
};

const retrievedData = retrieveTemporaryData('tempFile.json', exampleData);
console.log('Dados recuperados:', retrievedData);
```
ou
component1.js
```bash
import { createTempJSON } from './tempJsonHandler';

// Dados a serem armazenados temporariamente
const dataToStore = {
  name: 'John Doe',
  email: 'john@example.com'
};

// Criar arquivo JSON temporário com os dados
createTempJSON('tempData.json', dataToStore);

console.log('Arquivo JSON temporário criado com dados:', dataToStore);


```
component2.js
```bash
import { copyFromTempAndDeleteJSON } from './tempJsonHandler';

// Nome do arquivo JSON temporário a ser copiado
const tempFileName = 'tempData.json';

// Copiar dados do arquivo JSON temporário
const copiedData = copyFromTempAndDeleteJSON(tempFileName);

console.log('Dados copiados do arquivo JSON temporário:', copiedData);



```
No component1.js, os dados são criados e temporariamente armazenados em um arquivo JSON usando a função createTempJSON.
No component2.js, os dados são copiados do arquivo JSON temporário e, em seguida, o arquivo é excluído usando a função copyFromTempAndDeleteJSON.
As funções createTempJSON e copyFromTempAndDeleteJSON são definidas no arquivo tempJsonHandler.js, que é importado pelos componentes 1 e 2 para realizar as operações de criação 
