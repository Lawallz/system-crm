# Elo · Mini CRM
Projeto acadêmico para Engenharia de Software I. React + Vite + localStorage.

## Executar
Requer Node.js 20.19+ ou 22.12+.
```sh
npm install
npm run dev
```
Abra o endereço informado pelo Vite. Para gerar a versão estática: `npm run build`.

## Funcionalidades
- Clientes: cadastro, consulta, edição, busca e exclusão.
- Oportunidades: cadastro, edição, exclusão e mudança de etapa no funil.
- Interações: registro por cliente, canal e próximo acompanhamento.
- Dashboard derivado dos registros, sem métricas artificiais.
- Persistência local, exportação JSON e restauração de exemplos fictícios.
- Roteiro de apresentação acessível em Conheça o projeto.

## Arquitetura e regras
`src/main.jsx`: componentes React, estado e operações CRUD. `src/style.css`: estilos responsivos.
Relacionamentos: Cliente 1:N Oportunidade e Cliente 1:N Interação, vinculados por clientId.
Cada oportunidade deve ter valor positivo e um cliente. Excluir um cliente também exclui seus registros relacionados, após confirmação. A taxa de conversão é ganhos / (ganhos + perdidos); negócios abertos não entram no denominador.
A chave de persistência é `elo-crm-v1`. Os exemplos são carregados no primeiro uso; o primeiro salvamento persiste o conjunto completo. Cada navegador e origem têm seus próprios dados. Não há autenticação da aplicação, backend ou sincronização. Não é um sistema de produção e não deve armazenar dados sensíveis. O JSON exportado é um backup para consulta; a versão 2 permite importar o JSON com validação de estrutura e confirmação de substituição.

## Roteiro de verificação manual
1. Criar cliente e oportunidade de R$ 2.500.
2. Mudar a etapa, registrar interação e filtrar histórico pelo cliente.
3. Marcar como Ganho e verificar receita e conversão no dashboard.
4. Recarregar a página e confirmar persistência.
5. Editar registros; excluir cliente e confirmar remoção dos relacionados.
6. Exportar JSON e restaurar exemplos mediante confirmação.


## Interface 2.0
- Tema claro/escuro com preferência salva.
- Dashboard redesenhado, conversão e agenda de acompanhamentos.
- Perfis de clientes em painel lateral, oportunidades e últimas conversas.
- Busca sem acentos, filtros de situação e ordenação por nome, empresa ou valor.
- Funil com arrastar e soltar no desktop, mantendo seletor acessível e compatível com celular.
- Interações filtradas por canal e cliente.
- Importação validada de backups, exportação e desfazer última exclusão/restauração/importação. Uma nova alteração encerra a opção de desfazer anterior.
- Atalho Ctrl/Cmd+K para buscar clientes e Escape para fechar painéis.
- Animações leves com respeito à preferência de movimento reduzido.

### Compatibilidade
Mantém a chave elo-crm-v1 e o formato do backup anterior. Os dados existentes são preservados quando a origem (endereço e porta) do app é mantida. Em outro endereço, exporte o JSON no app anterior e importe na tela Sobre o projeto.

### Validação da entrega
Build Vite concluído; regras de backup e busca verificadas; renderização React do dashboard validada. Teste visual e ponta a ponta no navegador pendente neste ambiente.
