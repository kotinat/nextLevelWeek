# Next Level Week - Rocketseat



## Node.js

**Instalação

Download em https://nodejs.org/en/ 

Ou via package manager
https://nodejs.org/en/ -> Other Downloads -> Installing Node.js via package manager -> Selecione o package manager

**Ubuntu (versão LTS - 12)
```
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Iniciando o projeto
```
npm init -y
```

### Express
```
npm install express
npm install @types/express -D

```

**Typescript
```
npm install ts-node -D
npm install typescript -D
// arquivo de configuração do typescript
npx tsc --init
```

**Criando script para reinicialização do server
```
npm install ts-node-dev -D
npx ts-node-dev ::dir

"scripts": {
    "dev": "ts-node-dev ::dir"
}
npm run dev
```

## React
```
npm create-react-app web --template=typescript
```

